import { Catalog } from "./components/catalog";
import { EmptyPage } from "./components/emptyPage";
import { Header } from "./components/header";
import { Basket } from "./pages/basket";
import { Home } from "./pages/home";
import "./style/global.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


export default function App(){
  return(
    <>
      <Router>
        <Header/>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/basket"
            element={<Basket/>}
          />
        </Routes>
      </Router>
    </>
  )
}