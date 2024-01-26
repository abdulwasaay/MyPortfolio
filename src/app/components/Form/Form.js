// ${isVisible?styles.headingAnimate:styles.headingNotAnimate}
"use client";
import { useEffect, useState } from "react";
import styles from "./form.module.css"

export default function Form() {
    const [err, setError] = useState()
    const [data, setData] = useState({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: ""
    })
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    const sendHandler = async (e) => {
        e.preventDefault();

        if (data.number.length <= 6 || data.number.length >= 15) {
            alert("Please Enter Correct Number")
        }
        else {
            try {
                const response = await fetch("/api/contactApi", {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                const datas = await response.json();
                if (response.ok) {
                    if (datas.mess === "Message not send Successfully!") {
                        setError(datas.mess)
                        console.log(datas.err)
                    } else {
                        alert(datas.mess)
                        console.log(datas.info)
                        setData({
                            name: "",
                            email: "",
                            number: "",
                            subject: "",
                            message: ""
                        })
                    }
                }
                else {
                    alert("Something went wrong please try again later")
                }

            } catch (err) {
                console.log(err)

            }
        }
    }
    const [isVisible,setIsvisible] = useState();
    const [headVisible , setHeadVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setIsvisible(true)
            } else {
              setIsvisible(false)
            }
          });
        }, { threshold: 0.2 , delay:0 });
        const targetElement = document.getElementById("form");
        if (targetElement) {
          observer.observe(targetElement);
        }

        const headObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                setHeadVisible(true)
              } else {
                setHeadVisible(false)
              }
            });
          }, { threshold: 0.1});
          const heading = document.getElementById("cont");
        if(heading){
            headObserver.observe(heading)
        }
        return () => observer.disconnect();
      }, []);
    return (
        <section id="Contact" className=" w-full">
            <div className=" pt-[100px] pb-[40px]">
                <div id="cont" className={`flex justify-center ${headVisible?styles.contAnim:styles.contNotAnim}`}>
                    <h1 className=" text-[40px] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">Contact</h1>
                    <h1 className="ml-[5px] text-[40px] text-[#0ef] font-extrabold max-[365px]:text-[30px] max-[305px]:text-[25px]">Me!</h1>
                </div>
                <div>
                    <h1 className=" text-center text-[red]">{err}</h1>
                </div>
                <div id="form">
                <form onSubmit={sendHandler} className={`pt-[40px] ml-[30px] mr-[30px] ${isVisible?styles.formAnim:styles.formNotAnim}`}>
                    <div className={`w-full flex justify-center max-[539px]:flex-col max-[539px]:items-center `}>
                        <input onChange={changeHandler} type="text" name="name" value={data.name} placeholder="Full Name" className=" bg-[#323946] mr-[10px] w-[400px] h-[7vh] rounded-md border-none outline-none pl-[20px] text-[15px] max-[883px]:w-[55%] max-[539px]:mr-0 max-[539px]:w-[100%]" /><br />
                        <input onChange={changeHandler} type="email" name="email" value={data.email} placeholder="Email Address" className=" bg-[#323946] ml-[10px] w-[400px] h-[7vh] rounded-md border-none outline-none pl-[20px] text-[15px] max-[883px]:w-[55%] max-[539px]:ml-0  max-[539px]:w-[100%]" />
                    </div><br />
                    <div className=" w-full flex justify-center max-[539px]:flex-col max-[539px]:items-center">
                        <input onChange={changeHandler} type="number" name="number" value={data.number} placeholder="Mobile Number" className={`bg-[#323946] mr-[10px] w-[400px] h-[7vh] rounded-md border-none outline-none pl-[20px] text-[15px] max-[883px]:w-[55%] max-[539px]:mr-0 max-[539px]:w-[100%] ${styles.numberType}`} /><br />
                        <input onChange={changeHandler} type="text" name="subject" value={data.subject} placeholder="Email Subject" className=" bg-[#323946] ml-[10px] w-[400px] h-[7vh] rounded-md border-none outline-none pl-[20px] text-[15px] max-[883px]:w-[55%] max-[539px]:ml-0 max-[539px]:w-[100%]" />
                    </div><br />
                    <div className=" w-full flex justify-center">
                        <textarea onChange={changeHandler} placeholder="Your Message" name="message" value={data.message} cols="30" rows="10" className=" bg-[#323946] resize-none pt-[20px] pl-[20px] w-[820px] h-[300px] rounded-md text-[15px] border-none outline-none" />
                    </div><br />
                    <div className=" w-full flex justify-center">
                        <button className=" select-none text-[13px] text-black font-bold shadow-[1px_1px_10px_#0ef] hover:shadow-none rounded-3xl cursor-pointer bg-[#0ef] pt-[10px] pb-[10px] pl-[20px] pr-[20px]">Send Message</button>
                    </div>
                </form>
                </div>
            </div>
        </section>
    )
}