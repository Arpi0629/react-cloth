import useSWR from "swr"
import { fetcher } from "../helpers/fetcher";
import { ApiRoutes } from "../services/constants";
import { axiosInstance } from "../services/instance";


export const useBascet = () => {
    const { data: products, error, isLoading, mutate } = 
    useSWR(ApiRoutes.BASKET, fetcher, {
        revalidateOnFocus: false
    });

    const data = products?.length > 0 ? products : [];

    if(error || !data){
        return {
            data: [],
            isSomeProduct: () => {},
            addProduct: () => {},
            removeProduct: () => {},
            clearBascet: () => {},
            updateAmount: () => {},
            totalPrice: 0,
            totalAmount: 0,
            error,
            isLoading,
        }
    }

    const isSomeProduct = (productId) => {
        return data.some((item) => item.productId === productId)
    }

    const addProduct = async (product) => {
        if (isSomeProduct(product.productId)) return;
        try {
            await axiosInstance.post(ApiRoutes.BASKET, { ...product, amount: 1 });
            mutate([...data, { ...product, amount: 1 }]);
        } catch (error) {
            console.log(error);
        }
    };
    

    const removeProduct = async (id) => {
        try {
            await axiosInstance.delete(`${ApiRoutes.BASKET}/${id}`)
            mutate(data.filter((item) => item.id != id))
        } catch (error) {
            console.log(error);
            
        }
    }

    const clearBascet = async () => {
        if(data.length === 0) return;
        data.forEach(async (item) => {
            await removeProduct(item.id)
        });
    };

    const updateAmount = (id, newAmount) => {
        const updated = data.map(item =>
            item.id === id ? { ...item, amount: newAmount } : item
        );
        mutate(updated, false); // optimistic update
    };  
      

    const totalPrice = data.reduce((acc, item) => acc + item.price, 0)

    const totalAmount = data.length;

    return {
        data,
        isSomeProduct,
        addProduct,
        removeProduct,
        clearBascet,
        updateAmount,
        totalPrice,
        totalAmount,
        error, 
        isLoading
    }
}