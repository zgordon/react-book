import { createContext } from "react";

const UserContext = createContext({
  isAuthenticated: false,
});
export default UserContext;
