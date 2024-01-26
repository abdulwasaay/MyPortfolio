import { useEffect, useState } from "react";
import styles from "./Skill.module.css"

export default function ProgBar({osfet , anim}) {
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
        }, { threshold: 0 , delay:0 });
        const targetElement = document.getElementById("probar");
        if (targetElement) {
          observer.observe(targetElement);
        }
        return () => observer.disconnect();
      }, []);
    return (
        <svg id="probar" xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px" className=" absolute top-0 shadow-[1px_1px_7px_#0ef] rounded-full ">
            <defs>
                <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                </linearGradient>
            </defs>
            <circle cx="80" cy="80" r="70" strokeLinecap="round" className={`fill-none stroke-[#0ef] stroke-[20px] ${isVisible?anim : styles.notProbaranim}`} strokeDasharray="472" strokeDashoffset={osfet} />
        </svg>
        // 480
    )
}