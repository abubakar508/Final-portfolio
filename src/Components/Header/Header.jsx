import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import {
  SiGithub,
  SiTwitter,
  SiFacebook,
  SiInstagram,
  SiLinkedin,
  SiPinterest,
} from "react-icons/si";

export const Header = () => {
  const headerData = [
    { name: "Github", path: "/", icon: <SiGithub /> },
    { name: "Twitter", path: "/About", icon: <SiTwitter /> },
    { name: "Facebook", path: "/Testimonials", icon: <SiFacebook /> },
    { name: "Pinterest", path: "/", icon: <SiPinterest /> },
    { name: "Linkedin", path: "/", icon: <SiLinkedin /> },
    { name: "Instagram", path: "/", icon: <SiInstagram /> },
  ];
  return (
    <div>
      <header>
        <div className="header-bar">
        {headerData.map((link, index) =>{
            return <Link to={link.path} className="header-link">{link.icon}</Link>;
          })}
        </div>
      </header>
    </div>
  );
};
