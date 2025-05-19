import React from "react";
import Navbar from "@/app/(client)/navbar/navbar";
import Footer from "@/app/(client)/footer/footer";

export default function ClientLayout ({ children }:{ children: React.ReactNode }) {
    return <>
    <Navbar />
    { children }
    <Footer />
    </>
}