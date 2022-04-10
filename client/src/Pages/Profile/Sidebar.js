import "./Sidebar.css";
import {
  LineStyle,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem  ">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            </Link>
            <hr/>
            <Link to="/profile" className="link">
            <li className="sidebarListItem  ">
              <LineStyle className="sidebarIcon" />
              Dashboard
            </li>
            </Link>
            <hr/>
            <Link to="/profile/update-profile" className="link">
            <li className="sidebarListItem  ">
              <LineStyle className="sidebarIcon" />
              Update Profile
            </li>
            </Link>
            <hr/>
            <Link to="/profile/book-appointment" className="link">
            <li className="sidebarListItem  ">
              <LineStyle className="sidebarIcon" />
              Book Appointment
            </li>
            </Link>
            <hr/>
            <Link to="/profile/reset-password" className="link">
            <li className="sidebarListItem  ">
              <LineStyle className="sidebarIcon" />
              Reset Password
            </li>
            <hr/>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
