import { Box, Button, Typography } from "@mui/material";
import "./SognIn.css";
import ClearIcon from "@mui/icons-material/Clear";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";

const SognIn = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box id="sognIn">
      <Box className="sognIn">
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "black",
              fontSize: "28px",
              mt: "40px",
              ml: "20px",
            }}
          >
            Войти
          </Typography>
          <ClearIcon
            sx={{
              fontSize: "30px",
              color: "grey",
              position: "relative",
              left: "222px",
              top: "18px",
            }}
          />
        </Box>

        <Box>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          >
            <Box>
              <FormControl sx={{ m: 3, width: "65ch" }} variant="outlined">
                <InputLabel
                  sx={{
                    color: "grey",
                    fontSize: "17px",
                  }}
                  htmlFor="outlined-adornment-password"
                >
                  Логин
                </InputLabel>
                <OutlinedInput
                  sx={{
                    borderRadius: "10px",
                    height: "50px",
                  }}
                  id="outlined-adornment-password"
                  label="Логин"
                />
              </FormControl>
            </Box>

            <Box>
              <FormControl sx={{ width: "65ch" }} variant="outlined">
                <InputLabel
                  sx={{
                    color: "grey",
                    fontSize: "17px",
                  }}
                  htmlFor="outlined-adornment-password"
                >
                  Пароль
                </InputLabel>
                <OutlinedInput
                  sx={{
                    borderRadius: "10px",
                    height: "50px",
                  }}
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Пароль"
                />
              </FormControl>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mt: "20px",
          }}
        >
          <button
            style={{
              width: "500px",
              height: "56px",
              backgroundColor: "green",
              color: "white",
              fontSize: "20px",
              border: "none",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            Войти
          </button>
          <Button
            sx={{
              mt: "23px",
            }}
          >
            Забыли пароль?
          </Button>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              mt: "26px",
            }}
          >
            <hr
              style={{
                width: "214px",
                height: "1px",
                color: "grey",
              }}
            />
            или
            <hr
              style={{
                width: "214px",
                height: "1px",
                color: "grey",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              fontSize: "19px",
              width: "500px",
              height: "45px",
              backgroundColor: "#F5F5F5",
              borderRadius: "5px",
              mt: "28px",
              cursor: "pointer",
            }}
          >
            <GoogleIcon />
            Продолжить с Google
          </Box>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            mt: "30px",
            fontSize: "16px",
          }}
        >
          Нет аккаунта?{" "}
          <span
            style={{
              color: "blue",
            }}
          >
            Зарегистрироваться
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SognIn;
