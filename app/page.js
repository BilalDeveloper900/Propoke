'use client'
import Image from "next/image";
import HomeMain from "./home/page";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from "react";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Toaster } from "react-hot-toast";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true,    // whether animation should happen only once
    });
  }, []);
  return (
    <div >
      <HomeMain />
      <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
}
