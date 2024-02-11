import appwriteService from "@/appwrite/config";
import React from "react";

const NavCreate = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Decor8AI</h2>
      </div>
      <div className="flex  gap-x-4 mx-8">
        <p className="font-medium text-slate-700">Credits</p>
        <h1 className="font-bold text-primary underline underline-offset-1">
          {" "}
          Name Here
        </h1>
      </div>
    </nav>
  );
};

export default NavCreate;
