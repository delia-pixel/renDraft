import { Outlet } from "react-router-dom";

function NavBar() {
  return (
    <div>
      {/* <div className="w-full flex flex-row">
        <SideNav />
        <Header />
      </div> */}
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default NavBar;
