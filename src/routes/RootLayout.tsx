import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

function RootLayour() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayour;
