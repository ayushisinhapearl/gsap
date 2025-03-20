import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";
import img4 from "../assets/image4.jpg";
import img5 from "../assets/image5.jpg";
import img6 from "../assets/image6.png";
import img7 from "../assets/image1.jpg";
import img8 from "../assets/image2.jpg";
import img9 from "../assets/image3.jpg";
import img10 from "../assets/image4.jpg";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: img1, title: "Creative Designs", description: "Explore stunning visuals" },
  { src: img2, title: "Nature Beauty", description: "A deep dive into landscapes" },
  { src: img3, title: "Modern Architecture", description: "Urban structures and skylines" },
  { src: img4, title: "Abstract Art", description: "Colors and shapes in motion" },
  { src: img5, title: "City Vibes", description: "The energy of metropolitan life" },
  { src: img6, title: "Urban Nights", description: "Lights of the big city" },
  { src: img7, title: "Wilderness", description: "Untouched natural beauty" },
  { src: img8, title: "Serene Waters", description: "Calm and peaceful lakes" },
  { src: img9, title: "Horizon Views", description: "Sunsets that take your breath away" },
  { src: img10, title: "Mountain Escape", description: "Breathtaking peaks and valleys" },
];

const Banner = () => {
  const containerRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;

    gsap.to(imagesRef.current, {
      xPercent: -100 * (images.length - 1), 
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=" + window.innerWidth * images.length, 
        scrub: 1.5,
        pin: true,
      },
    });

    
    imagesRef.current.forEach((el) => {
      gsap.fromTo(
        el.querySelector(".content"),
        { opacity: 0, y: 40 }, 
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "center bottom-=100", 
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-black">
      <div className="flex w-max h-full gap-4 m-20">
        {images.map((item, index) => (
          <div
            key={index}
            ref={(el) => (imagesRef.current[index] = el)}
            className="relative w-[15vw] h-[80vh] flex-grow-0 flex-shrink-0 "
          >
            <img src={item.src} alt={item.title} className="w-full h-full object-cover opacity-80" />
            {/* Overlay Content */}
            <div className="content absolute bottom-5 left-5 text-white bg-black bg-opacity-60 p-3 rounded-md transition-all duration-500">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
