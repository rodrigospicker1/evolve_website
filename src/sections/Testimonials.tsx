"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import user from "@/assets/user.png";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "A qualidade das peças é simplesmente incrível, recomendo demais!.",
    imageSrc: user.src,
    name: "Rodrigo Sp*****",
    username: "@jamietechguru00",
  },
  {
    text: "Design moderno e conforto na medida certa, amei!",
    imageSrc: avatar2.src,
    name: "Gabriel M****",
    username: "@jjsmith",
  },
  {
    text: "Cada detalhe das roupas é feito com muito capricho, estou encantado!",
    imageSrc: avatar3.src,
    name: "Igor Gui****",
    username: "@morganleewhiz",
  },

  {
    text: "Estilo e durabilidade em uma única marca, perfeito!",
    imageSrc: avatar4.src,
    name: "Maria Clara ***",
    username: "@caseyj",
  },
  {
    text: "As roupas vestem super bem, não troco por nada!",
    imageSrc: avatar5.src,
    name: "Ana Rosa ***",
    username: "@taylorkimm",
  },
  {
    text: "Combinação perfeita de elegância e casualidade, ótima escolha!",
    imageSrc: avatar6.src,
    name: "Junior So***",
    username: "@rileysmith1",
  }
];

const fisrtColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: { className?: string, testimonials: typeof testimonials, duration?: number }) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration: props.duration || 5,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {props.testimonials.map(({ text, imageSrc, name }, idx) => (
              <div key={`${name}-${idx}`} className="card border-none">
                <div>{text}</div>
                <div className="flex items-center gap-2 mt-5">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex flex-gap">
                    <div className="font-medium tracking-tight leading-5">
                      {name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};


export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
          </div>
          <h2 className="section-title mt-5">O que nossos usuários falam</h2>
          {/* <p className="section-description mt-5">
            De um design intuitivo para funcionaliades poderosas, nosso app se tornou uma ferramenta 
            essencial para nossos usuários ao longo do mundo.
          </p> */}
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={fisrtColumn} duration={5}/>
          <TestimonialsColumn testimonials={secondColumn} 
            className="hidden md:block" duration={10} />
        </div>
      </div>
    </section>
  );
};
