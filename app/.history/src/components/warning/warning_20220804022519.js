import React from "react";
import "./warning.css";

export default function Warning() {
    const name=useSelector(state=>state.user.name)
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{na</b>! You should confirm your
      password to delete your account.
    </div>
  );
}
