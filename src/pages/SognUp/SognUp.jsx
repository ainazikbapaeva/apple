import { Box, Button, Typography } from "@mui/material";
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

const SognUp = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box id="sognUp">
      <Box className="sognUp">
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
            Регистрация
          </Typography>
          <ClearIcon
            sx={{
              fontSize: "30px",
              color: "grey",
              position: "relative",
              left: "180px",
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
                  Имя
                </InputLabel>
                <OutlinedInput
                  sx={{
                    borderRadius: "10px",
                    height: "50px",
                  }}
                  id="outlined-adornment-password"
                  label="Имя"
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
                  Фамилия
                </InputLabel>
                <OutlinedInput
                  sx={{
                    borderRadius: "10px",
                    height: "50px",
                  }}
                  id="outlined-adornment-password"
                  label="Фамилия"
                />
              </FormControl>
            </Box>

            <Box>
              <FormControl sx={{ m: 3, width: "65ch" }} variant="outlined">
                <InputLabel
                  sx={{
                    color: "grey",
                    fontSize: "17px",
                  }}
                  htmlFor="outlined-adornment-password"
                >
                  +996 (_ _ _) _ _ _ _ _ _
                </InputLabel>
                <OutlinedInput
                  sx={{
                    borderRadius: "10px",
                    height: "50px",
                  }}
                  type="number"
                  label="+996 (_ _ _) _ _  _ _  _ _ "
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
                  Введите пароль
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
                  label="Введите пароль"
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl sx={{ m: 3, width: "65ch" }} variant="outlined">
                <InputLabel
                  sx={{
                    color: "grey",
                    fontSize: "17px",
                  }}
                  htmlFor="outlined-adornment-password"
                >
                  Повторите пароль
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
                  label="Повторите пароль"
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
            создать аккаунт
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
            Зарегистрироваться с Google
          </Box>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            mt: "30px",
            fontSize: "16px",
          }}
        >
          У вас уже есть аккаунт?
          <span
            style={{
              color: "blue",
            }}
          >
            Войти
          </span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SognUp;
