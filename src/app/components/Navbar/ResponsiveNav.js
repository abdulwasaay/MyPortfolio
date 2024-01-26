import Link from "next/link";
import { useEffect, useState } from "react";

export default function ResNavBar({ clciked }) {
    const [data, setData] = useState("/#Home");
    useEffect(() => {
        const handlePopState = () => {
            const currentHash = "/" + window.location.hash;
            setData(currentHash);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [data])
    if (clciked) {
        return (
            <div className=" w-full z-[1] fixed bg-[#1f242d] pb-[20px] pt-[20px] border-t-[3px] border-[#121418b2]">
                <nav>
                    <ul className="">
                        <Link href="/#Home" onClick={() => setData("/#Home")}><li className={`pt-[12.5px] ml-[10px] mr-[10px] rounded-sm hover:bg-[#0ef] pb-[12.5px] pl-[20px] ${data === "/#Home" || data === "/" ? " bg-[#0ef]" : "bg-[#1f242d]"}`}>Home</li></Link>
                        <Link href="/#About" onClick={() => setData("/#About")}><li className={`pt-[12.5px] ml-[10px] mr-[10px] rounded-sm hover:bg-[#0ef] pb-[12.5px] pl-[20px] ${data === "/#About" ? " bg-[#0ef]" : "bg-[#1f242d]"}`}>About</li></Link>
                        <Link href="/#Skills" onClick={() => setData("/#Skills")}><li className={`pt-[12.5px] ml-[10px] mr-[10px] rounded-sm hover:bg-[#0ef] pb-[12.5px] pl-[20px] ${data === "/#Skills" ? " bg-[#0ef]" : "bg-[#1f242d]"}`}>Skills</li></Link>
                        <Link href="/#Portfolio" onClick={() => setData("/#Portfolio")}><li className={`pt-[12.5px] ml-[10px] mr-[10px] rounded-sm hover:bg-[#0ef] pb-[12.5px] pl-[20px] ${data === "/#Portfolio" ? " bg-[#0ef]" : "bg-[#1f242d]"}`}>Portfolio</li></Link>
                        <Link href="/#Contact" onClick={() => setData("/#Contact")}><li className={`pt-[12.5px] ml-[10px] mr-[10px] rounded-sm hover:bg-[#0ef] pb-[12.5px] pl-[20px] ${data === "/#Contact" ? " bg-[#0ef]" : "bg-[#1f242d]"}`}>Contact Us</li></Link>
                    </ul>
                </nav>
            </div>
        )
    } else {
        return;
    }
}