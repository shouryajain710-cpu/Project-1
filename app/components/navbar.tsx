"use client"

import Dropdown from "./dropdown";
import Link from "next/link";
import JoinBtn from "./Joinbtn";

export default function Navbar(){
    return(
        <nav>
            <div className="NavBar">
                <div className="navL">
                    <img src="/herobg.png" alt="Logo" />
                    <b>Name</b>
                </div>
                <div className="navC">
                    <Dropdown
                        option1="option 1"
                        option2="option 2"
                        option3="option 3"
                    />
                    <Link href="/about">About</Link>
                    <Link href="/contacts">Contacts</Link>
                </div>
                <div className="navR">
                    <JoinBtn />
                </div>
                
            </div>
        </nav>
    )
}