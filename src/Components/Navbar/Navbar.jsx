import React from "react";
import "./Navbar.css";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenter,
  HiEnvelope,
} from "react-icons/hi2";
import {SiFuturelearn} from "react-icons/si" 
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navData = [
    { name: "Home", path: "/", icon: <HiHome /> },
    { name: "About", path: "/About", icon: <HiUser /> },
    { name: "Services", path: "/Services", icon: <HiRectangleGroup /> },
    { name: "Work", path: "/Work", icon: <HiViewColumns /> },
    {
      name: "testimonials",
      path: "/Testimonials",
      icon: <HiChatBubbleBottomCenter />,
    },
    {name: "Future", path: "/Future", icon: <SiFuturelearn/> },
    { name: "Contact", path: "/Contact", icon: <HiEnvelope /> },
    
  ];
  return (
    <div>
      <nav>
        <div className="navbar">
          {navData.map((link, index) => {
            return <Link to={link.path}>{link.icon}</Link>;
          })}
        </div>
      </nav>
    </div>
  );
};
