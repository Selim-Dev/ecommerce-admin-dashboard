import React, { useContext } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import ImageIcon from "@mui/icons-material/Image";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import EarbudsIcon from "@mui/icons-material/Earbuds";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ninja</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          {/* <p className="title">LISTS</p> */}
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>

          <Link to="/dashboard/heroes" style={{ textDecoration: "none" }}>
            <li>
              <ImageIcon className="icon" />
              <span>Hero Slider</span>
            </li>
          </Link>
          <Link to="/dashboard/categories" style={{ textDecoration: "none" }}>
            <li>
              <FormatListBulletedIcon className="icon" />
              <span>Categories</span>
            </li>
          </Link>
          <Link
            to="/dashboard/subCategories"
            style={{ textDecoration: "none" }}
          >
            <li>
              <FormatListBulletedIcon className="icon" />
              <span>Sub Categories</span>
            </li>
          </Link>

          <Link to="/dashboard/products" style={{ textDecoration: 'none' }}>

            <li>
              <LocalShippingIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <Link to="/dashboard/brands" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Brands</span>
            </li>
          </Link>

          <Link to="/dashboard/orders" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Orders</span>
            </li>
          </Link>
          <Link to="/dashboard/variants" style={{ textDecoration: "none" }}>
            <li>
              <EarbudsIcon className="icon" />
              <span>Variants</span>
            </li>
          </Link>
          <Link
            to="/dashboard/variantOptions"
            style={{ textDecoration: "none" }}
          >
            <li>
              <EarbudsIcon className="icon" />
              <span>VariantOptions</span>
            </li>
          </Link>

          <p className="title">Control</p>
          {/* <li>
            <InsertChartIcon className="icon" />
            <span>Stats</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li> */}
          {/* <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li> */}
          <Link to="/dashboard/Settings" style={{ textDecoration: "none" }}>
            <li>
              <EarbudsIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      {/* <div className="bottom">
        <div
          onClick={() => dispatch({ type: "DARK" })}
          className="colorOption"
        ></div>
        <div
          onClick={() => dispatch({ type: "DARK" })}
          className="colorOption"
        ></div>
      </div> */}
    </div>
  );
};

export default Sidebar;
