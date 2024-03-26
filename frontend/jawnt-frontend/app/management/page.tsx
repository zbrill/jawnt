'use client'

import React from "react"
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";

export default function ManagementPage() {
    return (
        <div>
        <Banner bannerText="Management"/>
        <Navbar/>
        </div>
    );
}
