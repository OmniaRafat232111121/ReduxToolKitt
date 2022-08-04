import axios from "axios";
import {update, update } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(update());
  try {
    const res = await axios.post("http://localhost:3000/api/users/1/update", user);
    dispatch(update(res.data));
  } catch (err) {
    dispatch(remove());
  }
};