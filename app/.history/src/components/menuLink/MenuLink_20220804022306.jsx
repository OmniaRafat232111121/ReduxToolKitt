import React from "react";
import "./MenuLink.css";
iport 
export default function MenuLink({ icon, text }) {
  const name=useSelector(state=>state.user.name)
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">
        {text === "Logout" && "( `$(name)` )"}
      </span>
    </div>
  );
}