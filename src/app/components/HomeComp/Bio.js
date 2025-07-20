"use client";
import { FaFacebookF } from "react-icons/fa";
import { PiGithubLogoFill } from "react-icons/pi";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import TypeWriter from "./Typewriter";
import { useEffect, useState } from "react";
import styles from "./Homestyle.module.css";
export default function BioData(){
    const [isVisible,setIsvisible] = useState();
    const [isPara,setIsParavisible] = useState();
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
        }, { threshold: 0 , delay:0 });
        const targetElement = document.getElementById("Bio");
        if (targetElement) {
          observer.observe(targetElement);
        }
        const paraObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setIsParavisible(true)
              } else {
                setIsParavisible(false)
              }
            });
          }, { threshold: 0.3 });
        const paraTarget = document.getElementById("para");
        if(paraTarget){
            paraObserver.observe(paraTarget);
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
          const heading = document.getElementById("name");
        if(heading){
            headObserver.observe(heading)
        }
        return () => observer.disconnect() && paraObserver.disconnect() && headObserver.disconnect();
      }, []);
    return(
        <div id="Bio" className={` ml-[80px] max-[1233px]:mt-[30px] max-[861px]:ml-[30px] max-[348px]:ml-[20px] max-[393px]:mt-[0px] ${isVisible?styles.BioAnimate:styles.BionotAnimate}`}>
            <h2 className=" text-[30px] font-extrabold select-none max-[1139px]:text-[25px] max-[955px]:text-[20px] max-[800px]:text-[30px] max-[567px]:text-[25px] max-[477px]:text-[20px] max-[393px]:text-[18px] max-[334px]:text-[17px]">Hello, It's Me</h2>
            <h1 id="name" className={`text-[60px] font-extrabold select-none max-[1139px]:text-[50px] max-[955px]:text-[40px] max-[800px]:text-[60px] max-[567px]:text-[50px] max-[477px]:text-[40px] max-[393px]:text-[30px] max-[334px]:text-[25px] ${isHeadVisible?styles.headAnim:styles.headnotAnim}`}>Abdul Wasay</h1>
            <div className=" flex">
                <h2 className="mr-[10px] text-[30px] font-extrabold select-none max-[1139px]:text-[25px] max-[955px]:text-[20px] max-[800px]:text-[30px] max-[567px]:text-[25px] max-[477px]:text-[20px] max-[393px]:text-[18px] max-[334px]:text-[15px]">And I'm a</h2>
                <h2 className=" text-[30px] font-extrabold text-[#0ef] select-none max-[1139px]:text-[25px] max-[955px]:text-[20px] max-[800px]:text-[30px] max-[567px]:text-[25px] max-[477px]:text-[20px] max-[393px]:text-[18px] max-[334px]:text-[15px]"><TypeWriter /></h2>
            </div>
            <p id="para" className={`w-[80%] text-[#d4d3d3] mt-[20px] leading-relaxed max-[1139px]:text-[15px] max-[800px]:text-[17px] max-[477px]:text-[15px] max-[393px]:text-[13px] ${isPara?styles.paraAnim:styles.paranotAnim}`}>As a Frontend Developer with 1 year of hands-on experience, I specialize in crafting responsive and user-friendly web applications using HTML, CSS, and JavaScript. I have built dynamic interfaces with React and Next.js, focusing on performance, accessibility, and seamless user interactions</p>
            <div className=" flex mt-[20px] select-none">
                <Link href="https://www.facebook.com/wasay.khan.58511/" className=" border-[#0ef] border-[2px] p-[10px] rounded-full hover:bg-[black] "><FaFacebookF className="text-[#0ef] "/></Link>
                <Link href="https://github.com/abdulwasaay" className=" ml-[15px] border-[#0ef] border-[2px] p-[10px] rounded-full hover:bg-[black]"><PiGithubLogoFill className="text-[#0ef]"/></Link>
                <Link href="https://www.instagram.com/wasay_1234/" className=" ml-[15px] border-[#0ef] border-[2px] p-[10px] rounded-full hover:bg-[black]"><AiFillInstagram className="text-[#0ef]"/></Link>
                <Link href="https://www.linkedin.com/in/abdul-wasay-68b125269/" className=" ml-[15px] border-[#0ef] border-[2px] p-[10px] rounded-full hover:bg-[black]"><FaLinkedinIn className="text-[#0ef]"/></Link>
            </div>
            <a href="Abdul-Wasay-Resume.pdf" download={true} className=" select-none text-[13px] text-black font-bold shadow-[1px_1px_10px_#0ef] hover:shadow-none rounded-3xl cursor-pointer bg-[#0ef] pt-[10px] pb-[10px] pl-[20px] pr-[20px] relative top-[40px]">
                Download CV
            </a>
        </div>
    )
}