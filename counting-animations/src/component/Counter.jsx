import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const categories = [
  { title: "Alcohol", description: "Solvent and preservative enhancing pharmaceutical formulations effectively." },
  { title: "Amino Acids", description: "Essential building blocks improving drug stability and bioavailability." },
  { title: "Buffers", description: "Maintain pH balance, ensuring formulation stability and efficacy." },
  { title: "Carbohydrates", description: "Provide energy and stabilization in pharmaceutical preparations." },
  { title: "Enzymes", description: "Catalyze biochemical reactions, improving drug formulation efficiency." },
  { title: "Fatty Acid", description: "Enhance solubility, absorption, and stability in drug delivery." },
  { title: "Mineral Salts", description: "Essential excipients supporting stability and bioavailability." },
  { title: "Lipids", description: "Improve drug solubility, absorption, and controlled release properties." },
  { title: "Oils", description: "Act as carriers, emulsifiers, and solubilizers in formulations." },
  { title: "Parabens", description: "Widely used preservatives ensuring product safety and longevity." }
];

const Counter = () => {
  const sectionRef = useRef(null);
  const customersRef = useRef(null);
  const partnersRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } }
    );

    const animateCounter = (target, endValue) => {
      let obj = { val: 0 };
      gsap.to(obj, {
        val: endValue,
        duration: 3,
        roundProps: "val",
        onUpdate: () => {
          target.innerHTML = obj.val + "+";
        },
        scrollTrigger: { trigger: target, start: "top 90%" }
      });
    };

    animateCounter(customersRef.current, 350);
    animateCounter(partnersRef.current, 50);
    animateCounter(productsRef.current, 600);
  }, []);

  return (
    <section className="w-full py-16 bg-gradient-to-r from-gray-100 to-gray-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Your Trusted Partner for High-Quality Excipients</h2>
        <div className="flex justify-evenly my-8 text-green-700 text-5xl font-bold">
          <div><span ref={customersRef}>0+</span><div className="border-t-2 border-gray-700 w-full mt-2"></div> <p className="text-sm text-gray-700">Customers</p></div>
          <div><span ref={partnersRef}>0+</span><div className="border-t-2 border-gray-700 w-full mt-2"></div> <p className="text-sm text-gray-700">Global Principles and Partners</p></div>
          <div><span ref={productsRef}>0+</span><div className="border-t-2 border-gray-700 w-full mt-2"></div> <p className="text-sm text-gray-700">Products in Portfolio</p></div>
        </div>
        
       
        
      </div>
    </section>
  );
};

export default Counter;
