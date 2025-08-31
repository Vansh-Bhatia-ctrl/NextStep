"use client";
import { useAuth } from "@clerk/nextjs";

export default function Home() {
  const { userId } = useAuth();
  console.log("user id is: ", userId);

  return <div className=""></div>;
}
