import React from "react";
import AdminPage from "../pages/AdminPage/AdminPage";
import { Route, Routes } from "react-router-dom";
import EditPage from "../pages/EditPage/EditPage";
import ListProduct from "../components/Product/ListProduct";
import Iphone from "../pages/Iphone/Iphone";
import SognIn from "../pages/SognIn/SognIn";
import SognUp from "../pages/SognUp/SognUp";
import Mac from "../pages/Mac/Mac";

const MainRautes = () => {
  const PUBLIC = [
    {
      Link: "/admin",
      element: <AdminPage />,
      id: 1,
    },
    {
      Link: "/edit/:id",
      element: <EditPage />,
      id: 2,
    },
    {
      Link: "/list",
      element: <ListProduct />,
      id: 3,
    },
    {
      Link: "/iphone",
      element: <Iphone />,
      id: 4,
    },
    {
      Link: "/sognin",
      element: <SognIn />,
      id: 5,
    },
    {
      Link: "/sognup",
      element: <SognUp />,
      id: 6,
    },
    {
      Link: "/mac",
      element: <Mac />,
      id: 7,
    },
  ];
  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.Link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRautes;
