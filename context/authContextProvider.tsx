"use client";

import React, { useEffect, useState } from "react";
import AuthContext from "./authContext";
import appwriteService from "@/appwrite/config";

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const data = await appwriteService.isLoggedIn();
        setAuthStatus(data);
      } catch (error) {
        console.log("Error from AuthContext", error);
      }
    };
    checkUserLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ authStatus, setAuthStatus }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
