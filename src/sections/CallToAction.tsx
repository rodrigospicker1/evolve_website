"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0,1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24">
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Cadastre-se para receber nossas news</h2>
          {/* <p className="section-description mt-5">
            Celebre o alegria das suas conquistas com um app designado para 
            reastrear seu progesso e motivar seus esforços.
          </p> */}
          {/* <motion.img src={starImage.src} style={{ translateY: translateY}} alt="Star Image" width={300} className="absolute -top-[137px] -left-[350px]" />
          <motion.img src={springImage.src} style={{translateY: translateY}} alt="Star Image" width={300} className="absolute -top-[19] -right-[331px]" /> */}
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          {/* <button className="btn btn-primary">Tenha de graça</button> */}
          <button className="btn btn-text gap-1">
            <span>Saiba mais</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
