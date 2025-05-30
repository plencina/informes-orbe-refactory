import React from "react";
import Navbar from "@/app/(client)/navbar/navbar";
import Footer from "@/app/(client)/footer/footer";
import { Domine } from "next/font/google";

const domine_font = Domine({
  variable: "--domine",
  subsets: ["latin"]
})

export default function ClientLayout ({ children }:{ children: React.ReactNode }) {
    return <>
    <Navbar />
    { children }
    <Footer />
    </>
}