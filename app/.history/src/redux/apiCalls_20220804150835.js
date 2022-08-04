import axios from "axios";
import { up, update, updateFailure } from "./userSlice";

export const updateUser = async (user, dispatch) => {
  dispatch(updateStart());
  try {
    const res = await axios.post("http://localhost:3000/api/users/1/update", user);
    dispatch(update(res.data));
  } catch (err) {
    dispatch(remove());
  }
};