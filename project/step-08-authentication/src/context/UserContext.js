import { createContext } from "react";

const UserContext = createContext({
  email: ``,
  isAuthenticated: false,
});
export default UserContext;
