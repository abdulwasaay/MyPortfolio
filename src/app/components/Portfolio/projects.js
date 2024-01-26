import styles from "./Portfolio.module.css"
import Link from "next/link";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useEffect, useState } from "react";

export default function Project({data}){
    const [isVisible,setIsvisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsvisible(true)
              console.log(true)
            } else {
              setIsvisible(false)
            }
          });
        }, { threshold: 0.1 , delay:0 });
        const targetElement = document.getElementById(data.id);
        if (targetElement) {
          observer.observe(targetElement);
        }
        return () => observer.disconnect();
      }, []);
    return(
        <div  className={`relative overflow-hidden flex rounded-[2rem] mr-[15px] ml-[15px] mb-[25px] ${styles.mainContainer } ${isVisible?styles.projANim:styles.projNotAnim}`}>
            <img id={data.id} src={data.Url} alt={data.name} className=" w-[100%] max-[854px]:h-[231px] max-[606px]:h-[300px] max-[424px]:h-[230px] max-[356px]:h-[200px] "/>
            <div className="w-[100%] h-[100%] absolute top-0 bg-gradient-to-r from-black max-[854px]:h-[231px] max-[606px]:h-[300px] max-[424px]:h-[230px] max-[356px]:h-[200px] "></div>
            <div className={` w-[100%] h-[100%] absolute top-0 ${styles.backGround} flex flex-col items-center justify-center pl-[20px] pr-[20px] `}>
                <h3 className=" font-bold text-[30px] max-[1088px]:text-[25px] max-[952px]:text-[20px] max-[356px]:text-[17px] max-[606px]:text-[30px] max-[424px]:text-[20px]">{data.name}</h3>
                <p className="break-words text-center text-[20px] pt-[15px] max-[1088px]:text-[17px] max-[952px]:text-[15px] max-[356px]:text-[11px] max-[606px]:text-[20px] max-[424px]:text-[15px]">{data.text}</p>
                <Link href={data.path} className=" mt-[15px] p-[10px] bg-white rounded-full border-none outline-none"><OpenInNewIcon className=" text-[black]"/></Link>
            </div>
        </div>
    )
}