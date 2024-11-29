"use client";
import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion, useScroll, useTransform } from "framer-motion";
import CamisaBranca from "@/assets/estoque/camisa_branca.jpg";
import CamisaAzul from "@/assets/estoque/camisa_azul.jpg";
import CamisaPreta from "@/assets/estoque/camisa_preta_logo_atras.jpg";

const pricingTiers = [
  // {
  //   title: "Free",
  //   monthlyPrice: 0,
  //   buttonText: "Get started for free",
  //   popular: false,
  //   inverse: false,
  //   features: [
  //     "Up to 5 project members",
  //     "Unlimited tasks and projects",
  //     "2GB storage",
  //     "Integrations",
  //     "Basic support",
  //   ],
  // },
  {
    title: "Branca",
    monthlyPrice: 99.98,
    buttonText: "Compre agora",
    image: CamisaBranca,
    popular: true,
    inverse: true,
    features: [
      // "Up to 50 project members",
      // "Unlimited tasks and projects",
      // "50GB storage",
      // "Integrations",
      // "Priority support",
      // "Advanced support",
      // "Export support",
    ],
  },
  {
    title: "Azul",
    buttonText: "Compre agora",
    image: CamisaAzul,
    popular: true,
    inverse: true,
    features: [
      // "Up to 50 project members",
      // "Unlimited tasks and projects",
      // "50GB storage",
      // "Integrations",
      // "Priority support",
      // "Advanced support",
      // "Export support",
    ],
  },
  {
    title: "Preta",
    buttonText: "Compre agora",
    image: CamisaPreta,
    popular: true,
    inverse: true,
    features: [
      // "Up to 50 project members",
      // "Unlimited tasks and projects",
      // "50GB storage",
      // "Integrations",
      // "Priority support",
      // "Advanced support",
      // "Export support",
    ],
  },
  // {
  //   title: "Business",
  //   monthlyPrice: 19,
  //   buttonText: "Sign up now",
  //   popular: false,
  //   inverse: false,
  //   features: [
  //     "Up to 5 project members",
  //     "Unlimited tasks and projects",
  //     "200GB storage",
  //     "Integrations",
  //     "Dedicated account manager",
  //     "Custom fields",
  //     "Advanced analytics",
  //     "Export capabilities",
  //     "API access",
  //     "Advanced security features",
  //   ],
  // },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title">Drops</h2>
          {/* <p className="section-description mt-5">
            Grátis para sempre. Aumente seu nível para ter tarefas ilimitadas, mais segurança e recursos exclusivos.
          </p> */}
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map((pricingTier, index) => (
            <div key={index} className={twMerge ("p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full", pricingTier.inverse == true && 'borer-black bg-black text-white')}>
              <div className="flex justify-between">
                <h3 className={twMerge("text-lg font-bold text-black/50", pricingTier.inverse == true && 'text-white/60')}>{pricingTier.title}</h3>
                {pricingTier.popular === true && (
                <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                  <motion.span animate={{backgroundPositionX: "100%",}} transition={{duration: 1, repeat: Infinity, ease: "linear", repeatType: "loop",}} className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                    Popular
                  </motion.span>
                </div>
                )}
                 
              </div>
              <img key={index} src={pricingTier.image.src} alt={pricingTier.title} className="mt-2 h-70 rounded-xl mb-4" /> 
              <div className="flex items-baseline gap-1 mt-[30px]">
              </div>
              <button className={twMerge("btn btn-primary w-full mt-[30px]", pricingTier.inverse == true && 'bg-white text-black')}>
                <a href="https://w.app/W9ZnlF">{pricingTier.buttonText}</a>
              </button>
              <ul className="flex flex-col gap-5 mt-8">
                {pricingTier.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckIcon className="h-6 w-6" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
