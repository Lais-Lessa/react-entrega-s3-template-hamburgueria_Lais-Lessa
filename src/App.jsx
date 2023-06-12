import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { api } from "./services/Api";
import { Modal } from "./components/Modal/Modal";
import { BackDrop } from "./components/Modal/BackDrop";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { searchForWorkspaceRoot } from "vite";
import SectionCards from "./components/SectionCards/SectionCards";


function App({}) {
  const [products, setProducts] = useState([]);

  const [isOpenModal, setOpenModal] = useState(false);

  const [itemsInCart, setItemsInCart] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const openCart = () => {
    setOpenModal(true);
  };
  const closeCart = () => {
    setOpenModal(false);
  };

  const onAddItem = (item) => {
    const isProduct = itemsInCart.find((product) => item.id === product.id);
    if (isProduct) {
      const updatedCount = itemsInCart.map((product) =>
        product.id === item.id
          ? { ...product, count: product.count + 1 }
          : product
      );

      setItemsInCart(updatedCount);
      toast.success(`Item ${item.name} adicionado ao carrinho`, {
        autoClose: 800,
      });
    } else {
      setItemsInCart([...itemsInCart, { ...item, count: 1 }]);
      toast.success(`Item ${item.name} adicionado ao carrinho`, {
        autoClose: 800,
      });
    }
  };

  const onDelete = (item) => {
    const isProduct = itemsInCart.find((product) => item === product.id);
    if (isProduct) {
      if (isProduct.count === 1) {
        setItemsInCart(itemsInCart.filter((product) => product.id !== item));
      } else {
        const updatedCount = itemsInCart.map((product) =>
          product.id === item
            ? { ...product, count: product.count - 1 }
            : product
        );
        setItemsInCart(updatedCount);
      }
    }
  };

  useEffect(() => {
    const apiRequest = async () => {
      toast.info("Carregando cardápio", {
        autoClose: 800,
      });
      const apiResponse = await api.get("/products");
      setProducts(apiResponse.data);
    };
    apiRequest();
  }, []);

  const searchList = (valueInput) => {
    const filteredValues = products.filter((product) =>
      product.name.toLowerCase().includes(valueInput.toLowerCase())
    );
    setFilteredProducts(filteredValues);
  };

  return (
    <>
      <Header
        openCart={openCart}
        count={itemsInCart.length}
        searchList={searchList}
      />
      <ToastContainer />
      {isOpenModal && (
        <>
          <BackDrop closeCart={closeCart} />{" "}
          <Modal
            closeCart={closeCart}
            itemsInCart={itemsInCart}
            onDelete={onDelete}
            setItemsInCart={setItemsInCart}
          />{" "}
        </>
      )}

      {}
      <SectionCards
        products={products}
        onAddItem={onAddItem}
        filteredProducts={filteredProducts}
      />
    </>
  );
}

export default App;
