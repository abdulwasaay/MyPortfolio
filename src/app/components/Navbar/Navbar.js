"use client";

import Link from "next/link";
import ResNavBar from "./ResponsiveNav";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import styles from "./nav.module.css"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NavBar(){
    const router = useRouter();
    const [data,setData] = useState("/#Home");
    const [isclicked, setIsclicked] = useState(false);
    useEffect(()=>{
        document.getElementById("Body").addEventListener('click',()=>{
            setIsclicked(false)
        })

        document.getElementById("upButton").addEventListener('click',()=>{
            setData("/#Home")
        })
    },[]);
    useEffect(()=>{
        const handlePopState = () => {
            const currentHash = "/"+window.location.hash; 
            setData(currentHash);
          };
      
          window.addEventListener('popstate', handlePopState);

          return () => {
            window.removeEventListener('popstate', handlePopState);
          };
    },[data])

    return(
        <section className=" fixed w-full bg-[#1f242d] z-[1]">
            <div className=" flex justify-between pt-[20px] pb-[20px]">
                <h3 className=" ml-[80px] cursor-pointer text-[25px] max-[861px]:ml-[30px] max-[348px]:ml-[20px]">Portfolio.</h3>
                <nav className=" mr-[60px] max-[861px]:mr-[30px] max-[348px]:mr-[20px]">
                    <ul className=" flex mt-[8px] max-[764px]:mt-[5px]">
                    <Link href="/#Home"  onClick={()=> setData("/#Home")} ><li className={` mr-[20px] ml-[20px] hover:text-[#0ef] max-[764px]:hidden ${data === "/#Home" || data==="/"?" text-[#0ef]" :"text-white"}`}>Home</li></Link>
                    <Link href="/#About" onClick={()=> setData("/#About")}><li className={`mr-[20px] ml-[20px] hover:text-[#0ef] max-[764px]:hidden ${data === "/#About"?" text-[#0ef]" :"text-white"}`}>About</li></Link>
                    <Link href="/#Skills" onClick={()=> setData("/#Skills")}><li className={` mr-[20px] ml-[20px] hover:text-[#0ef] max-[764px]:hidden ${data === "/#Skills"?" text-[#0ef]" :"text-white"}`}>Skills</li></Link>
                    <Link href="/#Portfolio" onClick={()=> setData("/#Portfolio")}><li className={`mr-[20px] ml-[20px] hover:text-[#0ef] max-[764px]:hidden ${data === "/#Portfolio"?" text-[#0ef]" :"text-white"}`}>Portfolio</li></Link>
                    <Link href="/#Contact" onClick={()=> setData("/#Contact")}><li className={`mr-[20px] ml-[20px] hover:text-[#0ef] max-[764px]:hidden ${data === "/#Contact"?" text-[#0ef]" :"text-white"}`}>Contact Us</li></Link>
                        {
                            isclicked?(
                                <button className={styles.menu} onClick={()=> setIsclicked(false)}><CloseIcon /></button>
                            ):(
                                <button className={styles.menu} onClick={()=> setIsclicked(true)}><MenuIcon /></button>
                            )
                        }
                    </ul>
                </nav>
            </div>
            <ResNavBar clciked={isclicked}/>
        </section>
    )
}