import { Outlet } from "react-router-dom";
import SideNavBar from "../sideNavBar/SideNavBar";

const MainLayout = () => {

  return (
    <div className="main-layout">
        <SideNavBar />
        <div className="screen">
            <Outlet />
        </div>
    </div>
  )
}

export default MainLayout;
