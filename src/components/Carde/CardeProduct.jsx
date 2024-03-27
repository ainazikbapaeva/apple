import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { useProduct } from "../../context/ProductContext";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CardeProduct = ({ el }) => {
  const navigate = useNavigate();
  const { deleteProduct } = useProduct();

  return (
    <Box className="content-box">
      <CardContent>
        <Typography
          sx={{
            marginLeft: "20px",
            fontSize: "35px",
            fontWeight: "540",
          }}
          gutterBottom
          variant="h5"
          component="div"
        >
          {el.name}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "472px",
            height: "400px",
            objectFit: "cover",
          }}
          src={el.image}
          alt=""
        />
      </Box>
      <CardContent
        sx={{
          marginLeft: "20px",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {el.descr}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          {el.price}$
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "520px",
        }}
      >
        <Box>
          <Button
            onClick={() => {
              deleteProduct(el.id);
            }}
            size="small"
          >
            <DeleteIcon />
          </Button>
          <Button
            onClick={() => {
              navigate(`/edit/${el.id}`);
            }}
            size="small"
          >
            <EditNoteIcon />
          </Button>
        </Box>
        <Button sx={{ borderRadius: "20px" }} variant="contained" size="small">
          Buy
        </Button>
      </CardActions>
    </Box>
  );
};

export default CardeProduct;
