import { Route, Routes } from "react-router-dom";
import { About, Details, Home, Login } from "../pages";
import PrivateRoute from "./PrivateRoutes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/details" element={<PrivateRoute />}>
        {/* After details nothing comes, and it renders Details page. It can be written with path="", because it is not going to another page */}
        <Route path="" element={<Details />} />
        {/* Or it can be written with index
        <Route index element={<Details />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;

// The difference is just for styling:
// <></> without styling
// <div></div> for special styling
// <Routes></Routes>
