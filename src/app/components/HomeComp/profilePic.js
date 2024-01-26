"use client";
import { useEffect, useState } from "react";
import styles from "./pic.module.css";

export default function ProFile() {

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
        }, { threshold: 0.3 });
        const targetElement = document.getElementById("profile");
        if (targetElement) {
          observer.observe(targetElement);
        }
        return () => observer.disconnect();
      }, []);
    return (
        <div id="profile" className={`w-[1040px] select-none mr-[80px] max-[1309px]:w-[1050px] max-[1143px]:w-[1450px] max-[861px]:mr-[30px] max-[800px]:w-[80%] max-[800px]:mt-[130px] max-[800px]:flex max-[800px]:justify-center max-[800px]:ml-[40px] ${styles.animate }`}>
            <img src="profilepic.png" className={`w-[1040px] max-[1309px]:w-[1050px] max-[1143px]:w-[1450px] max-[800px]:w-[80%] ${isVisible?styles.imagAnim:styles.imgNotAnim}`}/>
        </div>
    )
}