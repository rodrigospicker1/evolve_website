"use client";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { use, useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useScroll();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-20 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Melhore sua produtividade</div>
          </div>
          <h2 className="section-title mt-5" >
            Um jeito mais efetivo de marcar seu progresso
            </h2>
          <p className="section-description mt-5">
            Transforme facilmente suas ideias para potencias 
            projetos in apenas alguns minutos com esses templates
          </p>
        </div>
        <div className="relative">
          <motion.img src={productImage.src} alt="product" className="mt-10"/>
          <motion.img src={pyramidImage.src} alt="product" width={262} height={262} className="hidden md:block absolute -right-36 -top-32"
            style={{translateY,}}/>
          <motion.img src={tubeImage.src} alt="product" width={212} height={212} className="hidden md:block absolute bottom-24 -left-36"
            style={{translateY,}}/>
        </div>
      </div>
    </section>
  )
};
