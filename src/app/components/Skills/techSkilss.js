import styles from "./Skill.module.css"

export default function TechnicalSkills({data}){
    
    return(
        <div className=" w-[500px] mt-[35px] select-none max-[1205px]:w-[100%]">
            <div className=" flex justify-between mb-4">
                <p className=" text-[15px] ml-[10px]">{data.lang}</p>
                <p className=" text-[15px] mr-[10px]">{data.quant}</p>
            </div>
            <div className="relative">
                <div className=" w-[500px] h-[1.3vh] border-[#323946] bg-[#323946] rounded-3xl max-[1205px]:w-[100%]"></div>
                <div className={`${data.width} h-[1.3vh] border-[2px] border-[#0ef] bg-[#0ef] shadow-[1px_1px_7px_#0ef] rounded-3xl absolute top-[0] ${data.reswid} ${data.anim}`}></div>
            </div>
        </div>
    )
}