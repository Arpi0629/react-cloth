import useSWR from "swr"
import { fetcher } from "../helpers/fetcher"
import { ApiRoutes } from "../services/constants";
import { axiosInstance } from "../services/instance";
import { useBascet } from "./basket";

export const useOrders = () => {
  const { data: orders, error: ordersError, isLoading: ordersIsLoading, mutate } = 
  useSWR(ApiRoutes.ORDERS, fetcher, {
    revalidateOnFocus: false
});
  const {clearBascet} = useBascet();

  const data = orders?.length > 0 ? orders : [];


  if(ordersError || !orders){
    return {
        data: [],
        addOrders: () => {},
        ordersError,
        ordersIsLoading,
    }
}

  const addOrders = async (order) => {
    try {
      await axiosInstance.post(ApiRoutes.ORDERS, order);
      await clearBascet();
      mutate([...data, order]); 
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    addOrders,
    ordersError,
    ordersIsLoading
  };
};
