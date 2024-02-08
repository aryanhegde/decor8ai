"use client";

import Link from "next/link";
import React, { FormEvent, useContext, useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import appwriteService from "@/appwrite/config";
import { ArrowRight } from "lucide-react";
import useAuth from "@/context/useAuth";
import AuthContext from "@/context/authContext";

type Props = {
  isLoggedIn: boolean;
};

const Navbar = () => {
  const { authStatus } = useContext(AuthContext);

  const createAccount = async (e: any) => {
    e.preventDefault();

    try {
      const userData = await appwriteService.createUserAccount();
      console.log("User Data: ", userData);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <nav className="h-[72px]   lg:max-w-[1240px] sm:px-4 flex items-center justify-between mx-auto  ">
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Decor8AI</h2>
      </div>
      <div className="flex items-center justify-end gap-14 w-full">
        <Link href="/pricing" className="">
          Pricing
        </Link>
        {authStatus ? (
          <Link href="/create" className={`${buttonVariants()}`}>
            /create
          </Link>
        ) : (
          <Button variant={"secondary"} onClick={createAccount}>
            Get Started <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
