"use client";
import styles from "./Skill.module.css"
import { useEffect, useState } from "react";
import ProfessionalSkills from "./ProSkills";
import TechnicalSkills from "./techSkilss";

export default function MySKills() {
    const [isVisible,setIsvisible] = useState();
    const[headVisi,setHeadVisi] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsvisible(true)
            } else {
              setIsvisible(false)
            }
          });
        }, { threshold:0.2 , delay:0 });
        const targetElement = document.getElementById("Skills");
        if (targetElement) {
          observer.observe(targetElement);
        }
        const headObserver = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setHeadVisi(true)
            } else {
              setHeadVisi(false)
            }
          });
        }, { threshold: 0.3});
        const heading = document.getElementById("bar");
      if(heading){
          headObserver.observe(heading)
      }
        return () => observer.disconnect()&&headObserver.disconnect();
      }, []);
    return (
        <section id="Skills" className=" pt-[120px] pb-[70px] max-[900px]:pt-[60px]">
            <div id="bar" className={`w-full select-none ${isVisible?styles.wholeAnim:styles.wholenotAnim}`}>
                <div className={`flex justify-center `}>
                    <h1 className=" text-[40px] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">My</h1>
                    <h1 className=" text-[40px] ml-[5px] text-[#0ef] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">Skills</h1>
                </div>
                <div className=" flex justify-center mt-[30px] ml-[40px] mr-[40px] max-[900px]:flex-col max-[900px]:items-center">
                    <div id="skill" className={`max-[1205px]:w-[45%] mr-[40px] max-[1003px]:mr-[0px] max-[900px]:w-[90%] `}>
                        <div className=" text-center">
                            <h1 className=" text-[30px] font-extrabold max-[365px]:text-[20px] max-[305px]:text-[15px]">Technical Skills</h1>
                        </div>
                        <TechnicalSkills  data={{ lang: "HTML", quant: "80%", width: "w-[435px]", reswid:"max-[1205px]:w-[80%]" ,anim:isVisible?styles.bar1ANim:styles.bar1NotAnim}} />
                        <TechnicalSkills  data={{ lang: "CSS", quant: "80%", width: "w-[435px]", reswid:"max-[1205px]:w-[80%]" ,anim:isVisible?styles.bar2ANim:styles.bar2NotAnim}} />
                        <TechnicalSkills  data={{ lang: "JavaScript / TypeScript", quant: "70%", width: "w-[380px]", reswid:"max-[1205px]:w-[70%]" ,anim:isVisible?styles.bar3ANim:styles.bar3NotAnim}} />
                        <TechnicalSkills  data={{ lang: "React.Js / Next.Js", quant: "60%", width: "w-[350px]", reswid:"max-[1205px]:w-[60%]" ,anim:isVisible?styles.bar4ANim:styles.bar4NotAnim}} />
                        <TechnicalSkills  data={{ lang: "Redux Toolkit", quant: "50%", width: "w-[300px]", reswid:"max-[1205px]:w-[50%]",anim:isVisible?styles.bar5ANim:styles.bar5NotAnim}} />
                    </div>
                    <div className=" max-[640px]:w-[100%]">
                        <div className={`ml-[40px] max-[1071px]:ml-[20px] max-[1003px]:ml-[0px] max-[900px]:mt-[30px] max-[900px]:ml-[60px] max-[900px]:mr-[60px] max-[412px]:w-[100%] max-[412px]:ml-[0] `}>
                            <div className=" text-center">
                                <h1 className=" text-[30px]  font-extrabold max-[365px]:text-[20px] max-[305px]:text-[15px]">Professional Skills</h1>
                            </div>
                            <div>
                            <ProfessionalSkills />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}