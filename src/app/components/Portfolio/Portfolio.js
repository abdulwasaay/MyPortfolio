"use client";
import { useEffect, useState } from "react";
import Project from "./projects";
import styles from "./Portfolio.module.css"

export default function Portfolio() {
  const [isVisible, setIsvisible] = useState();
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsvisible(true)
        } else {
          setIsvisible(false)
        }
      });
    }, { threshold: 0.1, delay: 0 });
    const targetElement = document.getElementById("Portfolio");
    if (targetElement) {
      observer.observe(targetElement);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <section id="Portfolio" className="w-full bg-[#323946] pt-[100px] pb-[40px] max-[606px]:pt-[60px]">
      <div>
        <div id="portHead" className={`flex justify-center ${isVisible ? styles.headingAnimate : styles.headingNotAnimate}`}>
          <h1 className=" text-[40px] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">Latest</h1>
          <h1 className="ml-[5px] text-[40px] text-[#0ef] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">Project</h1>
        </div>
        <div className=" flex justify-center ml-[30px] mr-[30px] mt-[40px]  max-[606px]:flex-col  max-[606px]:items-center">
          <Project data={{ id: "proj1", Url: "song.jpg", name: "Band Web App", text: "portal for Artists and Band Members to manage there releases and songs.", path: "https://airplay-direct-frontend-dev.vercel.app/" }} />
          <Project data={{ id: "proj2", Url: "budget.jpg", name: "Bussiness Web App", text: "Worked on a large-scale real-world product developed by the company.", path: "https://portal.mahaana.com/" }} />
        </div>
        <div className=" flex justify-center ml-[30px] mr-[30px] max-[606px]:flex-col  max-[606px]:items-center">
          <Project data={{ id: "proj3", Url: "netflixclone.jpg", name: "Netflix-Clone", text: "My Netflix-clone website made on React.js, Tailwind css and Firebase", path: "https://neflix-clone12.vercel.app/" }} />
          <Project data={{ id: "proj4", Url: "ecomm.jpg", name: "Ecommerce-Website", text: "My Ecommerce-Website made on Next.js and Firebase with Admin panel", path: "https://my-styluxe.vercel.app/" }} />
        </div>
      </div>
    </section>
  )
}