"use client";
import styles from "./About.module.css"

import { useEffect, useState } from "react";

export default function AboutImg(){
    const [isVisible,setIsvisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsvisible(true)
            } else {
              setIsvisible(false)
            }
          });
        }, { threshold: window.innerWidth<=800?0:0.3 , delay:0 });
        const targetElement = document.getElementById("Aboutpic");
        if (targetElement) {
          observer.observe(targetElement);
        }

        return () => observer.disconnect();
      }, []);
    return(
        <div id="Aboutpic" className={` mr-[20px] mt-[70px] w-[350px] max-[800px]:flex max-[800px]:justify-center max-[800px]:w-full max-[800px]:pl-[40px] ${isVisible?styles.aboutPicsanim:styles.picNotAnim}`}>
            <img src="about.png" className={`w-[350px] max-[800px]:w-[60%] max-[438px]:w-[70%] `}/>
        </div>
    )
}