import AboutBio from "./AboutBio";
import AboutImg from "./imageAbout";

export default function About(){
    return(
        <section id="About" className="w-full overflow-hidden relative bg-[#323946] pt-[100px] pb-[100px] pl-[50px] pr-[50px] flex justify-center items-center max-[800px]:flex-col-reverse max-[800px]:items-start max-[800px]:pt-[50px] max-[800px]:pl-[10px] max-[432px]:pb-[50px]">
            <AboutImg />
            <AboutBio />
        </section>
    )
}