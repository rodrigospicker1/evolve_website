"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png";
import eco_leave from "@/assets/eco_leave.png"
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import downArrow from "@/assets/down-arrow.png";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);

  useMotionValueEvent(scrollYProgress,  "change", (latestValue) => 
    console.log(latestValue)
  )

  return (
    <section className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#A0D94A,#EFF299_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            {/* <div className="tag">Versão 2.0 chegou</div> */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#467326] text-transparent bg-clip-text">
              EVOLVE
            </h1>
            <p className="text-lg text-[#010D3E] tracking-tight mt-6">
            Estilo consciente, conforto natural.<br></br>
            Vista-se bem, cuide do planeta.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              {/* <button className="btn bg-transparent text-black">Saiba mais </button><img src={downArrow.src} alt="" width={15} /> */}
              {/* <button className="btn btn-text">
                <span>Saiba mais</span>
                <ArrowIcon className="h-5 w-5"/>
              </button> */}
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md-flex-1 relative">
            <motion.img src={eco_leave.src} alt="Cog"  className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{translateY: [-30, 30]}} transition={{repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut",}}/> 

            {/* <motion.img src={cylinderImage.src} width={220} height={220} alt="cylinder" className="hidden md:block -top-25 -left-32 absolute"
              style={{translateY: translateY}} />  */}

            {/* <motion.img src={noodleImage.src} width={220} height={220} alt="noodle" className="hidden lg:block relative top-[450px] left-[458px] rotate-[30deg]"
              style={{rotate: 30, translateY: translateY}} />  */}
          </div>
        </div>
      </div>
    </section>
  )
};
