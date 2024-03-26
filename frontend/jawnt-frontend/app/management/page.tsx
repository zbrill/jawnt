'use client'

import React from "react"
import { Banner } from "../components/Banner";
import { Navbar } from "../components/Navbar";
import { ManagementList } from "./components/ManagementList";

export default function ManagementPage() {
    return (
        <div>
        <Banner bannerText="Management"/>
        <Navbar/>
        <ManagementList/>
        </div>
    );
}
