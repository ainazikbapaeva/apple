import React, { createContext, useContext, useReducer, useState } from "react";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const productContext = createContext();
export const useProduct = () => useContext(productContext);

const INIT_STATE = {
  product: [],
  oneProduct: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CET_PRODUCT":
      return { ...state, product: action.payload };
    case "CET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
};

const ProductContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  const productCollectionRef = collection(db, "product");

  //?ADD
  async function addProduct(newProduct) {
    await addDoc(productCollectionRef, newProduct);
  }
  //?ADD

  //?READ
  async function readProduct() {
    let data = await getDocs(productCollectionRef);
    data = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch({
      type: "CET_PRODUCT",
      payload: data,
    });
  }
  //?READ

  //?DELETE
  async function deleteProduct(id) {
    const docRef = doc(db, "product", id);
    await deleteDoc(docRef);
    readProduct();
  }
  //?DELETE

  //?GET ONE PRODUCT
  async function getOneProduct(id) {
    const docRef = doc(db, "product", id);
    let data = await getDoc(docRef);
    data = data.data();
    dispatch({
      type: "CET_ONE_PRODUCT",
      payload: data,
    });
  }
  //?GET ONE RPODUCT

  //?EDIT PRODUCT
  async function editProduct(id, newProduct) {
    const docRef = doc(db, "product", id);
    await updateDoc(docRef, newProduct);
    readProduct();
  }
  //?EDIT PRODUCT

  //! PAGINATION
  let [page, setPage] = useState(1);
  const itemParPage = 3;
  const count = Math.ceil(state.product.length / itemParPage);
  function currentPage() {
    const start = (page - 1) * itemParPage;
    const end = start + itemParPage;
    return state.product.slice(start, end);
  }
  //! PAGINATION

  //!SEARCH
  function searchProduct(seachValue) {
    let result = state.product.filter(
      (item) =>
        item.name.toLowerCase().includes(seachValue.toLowerCase()) ||
        item.price.toString().includes(seachValue)
    );
    dispatch({
      type: "CET_PRODUCT",
      payload: result,
    });
    if (!seachValue) {
      readProduct();
    }
  }
  //!SEARCH

  const values = {
    addProduct,
    readProduct,
    product: state?.product,
    deleteProduct,
    setPage,
    count,
    currentPage,
    searchProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    editProduct,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
