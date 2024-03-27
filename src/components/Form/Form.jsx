import {
  Box,
  Button,
  Card,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Form.css";
import AppleIcon from "@mui/icons-material/Apple";
import { useProduct } from "../../context/ProductContext";
import { useNavigate, useParams } from "react-router-dom";

let init = {
  name: "",
  price: "",
  category: "",
  descr: "",
  image: "",
};

const Form = ({ isEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addProduct, getOneProduct, oneProduct, editProduct } = useProduct();
  const [inputValues, setInputValues] = useState(init);

  useEffect(() => {
    if (isEdit) {
      getOneProduct(id);
    }
  }, []);

  useEffect(() => {
    if (isEdit && oneProduct) {
      setInputValues(oneProduct);
    }
  }, [oneProduct]);

  function handleInp(e) {
    if (e.target.name === "price") {
      let obj = {
        ...inputValues,
        [e.target.name]: Number(e.target.value),
      };
      setInputValues(obj);
    } else {
      let obj = {
        ...inputValues,
        [e.target.name]: e.target.value,
      };
      setInputValues(obj);
    }
  }

  function hanbleSubmit() {
    addProduct(inputValues);
    navigate("/list");
  }

  function handleSaveEdit() {
    editProduct(id, inputValues);
    navigate("/list");
  }
  return (
    <Box className="content">
      <FormControl>
        <Card className="card">
          {isEdit ? (
            <Typography
              variant="h3"
              sx={{ textAlign: " center", color: "#181818", fontWeight: "600" }}
            >
              <AppleIcon sx={{ position: "relative", bottom: " 15px" }} />
              Edit
              <AppleIcon sx={{ position: "relative", left: " 5px" }} />
            </Typography>
          ) : (
            <Typography
              variant="h3"
              sx={{ textAlign: " center", color: "#181818", fontWeight: "600" }}
            >
              <AppleIcon sx={{ position: "relative", bottom: " 15px" }} />
              Admin
              <AppleIcon sx={{ position: "relative", left: " 5px" }} />
            </Typography>
          )}
          <TextField
            onChange={handleInp}
            value={inputValues.name}
            id="filled-basic"
            name="name"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            value={inputValues.price}
            id="filled-basic"
            name="price"
            label="Price"
            variant="outlined"
          />
          <TextField
            onChange={handleInp}
            value={inputValues.category}
            id="filled-basic"
            name="category"
            label="Category"
            variant="outlined"
          />

          <TextField
            onChange={handleInp}
            value={inputValues.descr}
            id="filled-basic"
            name="descr"
            label="description"
            variant="outlined"
          />
          <TextField
            value={inputValues.image}
            onChange={handleInp}
            id="filled-basic"
            name="image"
            label="Image"
            variant="outlined"
          />
          {isEdit ? (
            <Button
              onClick={handleSaveEdit}
              sx={{ marginTop: "10px" }}
              variant="contained"
            >
              Edit
            </Button>
          ) : (
            <Button
              onClick={hanbleSubmit}
              sx={{ marginTop: "10px" }}
              variant="contained"
            >
              Create
            </Button>
          )}
        </Card>
      </FormControl>
    </Box>
  );
};

export default Form;
