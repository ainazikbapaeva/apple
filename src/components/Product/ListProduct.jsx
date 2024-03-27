import React, { useEffect } from "react";
import ProductFilter from "./ProductFilter";
import { useProduct } from "../../context/ProductContext";
import { Box } from "@mui/material";
import CardeProduct from "../Carde/CardeProduct";
import PaginationProduct from "./PaginationProduct";
import CircularProgress from "@mui/material/CircularProgress";

const ListProduct = () => {
  const { readProduct, product, currentPage } = useProduct();

  useEffect(() => {
    readProduct();
  }, []);

  console.log(product);

  return (
    <>
      <ProductFilter />
      <Box
        sx={{
          p: "20px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {product.length > 0 ? (
          currentPage().map((el, idx) => <CardeProduct el={el} key={idx} />)
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress />
          </Box>
        )}
      </Box>
      <PaginationProduct />
    </>
  );
};

export default ListProduct;
