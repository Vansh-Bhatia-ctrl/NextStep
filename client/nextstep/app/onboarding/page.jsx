"use client";
import React, { useEffect } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

const Page = () => {
  const { user, isLoaded } = useUser();
  const { getToken } = useAuth();
  console.log(user);

  const saveUserToDb = async () => {
    try {
      const token = await getToken();

      if (!isLoaded || !user) return;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_DEV_URL}/api/saveUser/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            clerkUserId: user.id,
            name: user.fullName,
            email: user.primaryEmailAddress.emailAddress,
          }),
        }
      );

      if (response.ok) {
        console.log("Data saved successfully.");
      }
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Something went wrong please try again.", error);
    }
  };

  saveUserToDb();

  return (
    <>
      <p>Setting up your profile...</p>
    </>
  );
};

export default Page;
