import { useAuth } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function PrivateRoute() {
  const { isAuth } = useAuth();
  console.log(isAuth);
  const location = useLocation();
  console.log(location);
  console.log(location.state.recipe);

  // const recipeData = location.state.recipe;

  if (!isAuth) toast.error("Please login First");
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{ to: location.pathname, detailsRecipe: location.state.recipe }}
    />
  );
  // location.pathanme -> /details page
  // return isAuth ? <Outlet /> : <Navigate to="/login"  state={{ from: location.pathname, recipe: recipeData}}/>;
}

// There are 2 options to send the user to the exact place:
// 1 - Search parameter in URL
// 2 - state
