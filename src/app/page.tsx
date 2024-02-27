"use client";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    (window.location as any) = "/dashboard";
  }, []);

  return <main className=""></main>;
}
