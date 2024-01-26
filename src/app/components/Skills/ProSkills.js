import ProgBar from "./ProgressBar";
import styles from "./Skill.module.css"

export default function ProfessionalSkills() {
    
    return (
        <div className=" w-[500px] mt-[120px] max-[640px]:w-[100%] max-[900px]:mt-[30px]">
            <div className=" flex justify-center max-[412px]:flex-col max-[412px]:items-center">
                <div className=" relative max-[412px]:mb-[40px]" >
                    <div className=" w-[160px] h-[160px] border-[20px] rounded-full flex justify-center items-center border-[#323946] ">
                        80%
                    </div>
                    <ProgBar osfet="130" anim={styles.proBar1}/>
                    <p className=" text-center mt-[20px]">Communication Skills</p>
                </div>
                <div className=" relative ml-[80px] max-[484px]:ml-[40px] max-[412px]:ml-[0]">
                    <div className=" w-[160px] h-[160px] border-[20px] rounded-full flex justify-center items-center border-[#323946] ">
                        50%
                    </div>
                    <ProgBar osfet="255" anim={styles.proBar2}/>
                    <p className=" text-center mt-[20px]">Team Work</p>
                </div>
            </div>

        </div>
    )
}