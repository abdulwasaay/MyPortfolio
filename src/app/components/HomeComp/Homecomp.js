import BioData from "./Bio";
import ProFile from "./profilePic";

export default function HomeComp(){
    return(
        <section id="Home" className=" w-full overflow-hidden">
            <div className="w-full flex justify-evenly items-center pt-[100px] pb-[100px] max-[800px]:flex-col">
            <BioData />
            <ProFile />
            </div>
        </section>
    )
}