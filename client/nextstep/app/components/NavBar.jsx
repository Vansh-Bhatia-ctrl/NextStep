"use client";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";
import { SignedIn, UserButton } from "@clerk/nextjs";

const NavBar = () => {
  const { userId, isLoaded } = useAuth();
  const pathname = usePathname();

  if (!isLoaded) {
    return <p className="">Loading...</p>;
  }
  
  return (
    <>
      <div>
        <div className="bg-custom-gray-100 p-5 min-w-screen">
          <div className=" flex flex-row items-center justify-between">
            <div className="flex  items-center gap-2">
              {pathname !== "/signin" && pathname !== "/signup" && (
                <Menu color="#fff" className="sm:hidden" />
              )}
              <Link href="/">
                <p className="text-white font-extrabold text-2xl">
                  Next<span className="text-blue-400">Step</span>
                </p>
              </Link>
            </div>

            {pathname !== "/onboarding" && userId && (
              <div className="hidden text-gray-300 font-bold sm:flex sm:flex-row gap-5 text-md">
                <Link href="/" className="hover:text-gray-100">
                  Home
                </Link>
                <Link href="" className="hover:text-gray-100">
                  About
                </Link>
                <Link href="" className="hover:text-gray-100">
                  Contact
                </Link>
              </div>
            )}

            {pathname !== "/signin" && pathname !== "/signup" && !userId ? (
              <div>
                <button className="text-white bg-blue-600 font-semibold p-2 rounded-xl hover:bg-blue-500 transition-all duration-200 ease-in-out">
                  <Link href="/signin">Sign In</Link>
                </button>
              </div>
            ) : (
              <SignedIn>
                <UserButton />
              </SignedIn>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
