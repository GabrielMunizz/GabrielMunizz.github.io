import DownloadCV from './DownloadCV';
import ExternalLink from "./ExternalLink";
import Github from "./Github";
import LinkedinButton from "./LinkedinButton";
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";

export default function FindMe() {
  return (
    <div
      className="
        flex flex-col justify-start items-center 
        w-full h-full z-10
        lg:w-[45%]    
      "
    >
      <div 
        className="
          mb-[1rem] 
          md:mb-[4rem] 
          xl:w-[80%]
          lg:pl-[3rem] xl:mb-[2.5rem]
          xl:pl-[2rem]    
          2xl:w-[90%] 2xl:pl-[3.5rem]
          3xl:w-[60%] 3xl:pl-0
         "
        >
        <h2
          className="
            bebas text-[4.5rem] mb-[-3.3rem] 
            md:text-[8rem] font-bold md:mb-[-5.8rem]
            lg:text-[6rem] lg:mb-[-4.3rem]
          "
        >
          Want to
        </h2>
        <h2
          className="
            bebas text-[4.5rem] md:text-[8rem] 
            font-bold md:mb-[-5.8rem]
            lg:text-[6rem] lg:mb-[-4.3rem]
          "
        >
          contact{" "}
          <span
            className="
              bebas text-[4.5rem] font-bold text-purple-600
              md:text-[8rem] 
              md:mb-[-5.8rem] 
              lg:text-[6rem] lg:mb-[-3.8rem]              
            "
          >
            me
          </span>
          ?
        </h2>
      </div>
      <div
        className="
          mt-[-3rem]
          h800:mt-0
          md:pl-5
          xl:w-[70%] xl:pl-0 xl:mt-0        
        "
      >
        <LinkedinButton />
        <Github />
        <ExternalLink
          text="gabrielmfd@gmail.com"
          link="mailto:gabrielmfd@gmail.com"
        >
          <CiMail 
            className="
              text-[2.5rem] 
              text-white mr-4
              md:text-[2rem]
              lg:text-[2.5rem]            
              3xl:text-[3.5rem]
              " 
          />
        </ExternalLink>
        <ExternalLink
          text="+55(32) 984863437"
          link="https://api.whatsapp.com/send?phone=5532984863437"
        >
          <FaWhatsapp 
            className="
              text-[2.5rem] 
              text-[#2cd16e] 
              mr-4
              md:text-[2rem]
              lg:text-[2.5rem]            
              3xl:text-[3.5rem]
              " 
          />
        </ExternalLink>
        <DownloadCV />
      </div>
    </div>
  );
}