import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/Auth";
import { loginRoute } from "../../Routes";

export default function PrivateRoute() {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser === null) {
      <Navigate replace to={loginRoute}></Navigate>;
    }
  }, [currentUser]);

  return <Outlet />;
}
