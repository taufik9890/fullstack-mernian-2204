import React from "react";
import HomePage from "./pages/home/page";
export const dynamic = 'force-dynamic';
export default function Home() {
  return (
   <>
   {/* all routing comment here */}
      {/* href="/" 
       href="/pages/about" 
      href="/pages/product" 
      href="/pages/blogdetails" */}
      <HomePage/>
   </>
  );
}
