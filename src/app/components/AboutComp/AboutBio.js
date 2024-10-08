"use client";

import { useEffect, useState } from "react";
import styles from "./About.module.css"
import { usePathname, useRouter } from "next/navigation";

export default function AboutBio(){
    const [hide,setHide] = useState(true)
    const [isVisible,setIsvisible] = useState();
    const [isHeadVisible,setIsHeadvisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsvisible(true)
            } else {
              setIsvisible(false)
            }
          });
        }, { threshold: 0.1 , delay:0 });
        const targetElement = document.getElementById("AboutBio");
        if (targetElement) {
          observer.observe(targetElement);
        }

        const headObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsHeadvisible(true)
              } else {
                setIsHeadvisible(false)
              }
            });
          }, { threshold: 0.3});
          const heading = document.getElementById("Aboutname");
        if(heading){
            headObserver.observe(heading)
        }
        return () => observer.disconnect() && headObserver.disconnect();
      }, []);
    return(
        <div id="AboutBio" className={`ml-[20px] ${isVisible?styles.AboutAnim:styles.aboutNotAnim}`}>
            <div id="Aboutname" className={`flex ${isHeadVisible?styles.namAnim:styles.notNamAnim}`}>
                <h1 className=" text-[40px] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">About</h1>
                <h1 className="ml-[5px] text-[40px] text-[#0ef] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">Me</h1>
            </div>
            <h3 className=" text-[22px] font-extrabold max-[365px]:text-[18px] max-[305px]:text-[15px]">Frontend Developer!</h3>
            <p className={`w-[600px] mt-[20px] font-normal text-[#d4d3d3] max-[1109px]:w-[500px] max-[923px]:w-[400px] max-[923px]:text-[15px] max-[800px]:text-[17px] max-[800px]:w-[90%] max-[477px]:text-[15px] max-[477px]:w-[95%] max-[365px]:text-[13px] ${hide?" line-clamp-3":" line-clamp-none"}`}>I'm a Computer Science undergraduate in my third year at Karachi University, UBIT, with a strong passion for web development. I have over 6 months of hands-on experience as a React.js Developer, gained through internships at mParsec and Web3gle. I'm skilled in building responsive and dynamic web applications using React.js. I'm now looking for a Junior React.js Web Developer position to further develop my skills and grow my career in the tech industry. I'm eager to learn and contribute to innovative projects.</p>
                <button onClick={()=>setHide(!hide)} className=" mt-[20px] select-none text-[13px] text-black font-bold shadow-[1px_1px_10px_#0ef] hover:shadow-none rounded-3xl cursor-pointer bg-[#0ef] pt-[10px] pb-[10px] pl-[20px] pr-[20px]">{hide?"Read More":"Hide Now"}</button>
        </div>
    )
}