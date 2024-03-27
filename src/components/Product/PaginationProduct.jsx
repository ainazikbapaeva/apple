import * as React from "react";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";
import { useProduct } from "../../context/ProductContext";

const PaginationProduct = () => {
  const { count, setPage } = useProduct();
  function handlePage(p, n) {
    setPage(n);
  }
  return (
    <div>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Pagination onChange={handlePage} count={count} color="primary" />
      </Box>
    </div>
  );
};

export default PaginationProduct;
