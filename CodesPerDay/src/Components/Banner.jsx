import React, { useEffect, useState } from 'react';
import bannerImage from '../assets/bannerImage.jpg';
import bannerImage1 from '../assets/bannerImage1.jpg';
// import bannerImage2 from '../assets/bannerImage2.jpg';
import bannerImage3 from '../assets/bannerImage3.jpg';
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
// import { SiBuymeacoffee } from "react-icons/si";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"

const Banner = () => {

    const images = [bannerImage,bannerImage1,bannerImage3]

    const [currentImage , setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage+1) % images.length);
        },4000);

        return () => clearInterval(interval);
    },[]);


    return (
        <div className="mt-10 rounded-3xl relative h-[490px] text-white overflow-hidden">
            <div className="absolute inset-0">
                <img 
                    // src={currentImage[images]}
                    src={bannerImage3}
                    alt="Background" 
                    className="object-cover object-center w-full h-full" 
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className='absolute mt-40 left-30 top-10 text-6xl'>
                <h1>&lt; Kick start your journey with us  /&gt;</h1>
            </div>


            <div className='relative m-20'>
                <div className='flex justify-between items-center'>
                    <motion.div
                        animate={{ y:[0,30,0] }}
                        transition={{ duration: 5, delay: 3, repeat: Infinity, repeatType: "reverse" }}>
                        <FaReact size={55}></FaReact>
                    </motion.div>
                    <motion.div
                        animate={{ x:[0,30,0] }}
                        transition={{ duration: 5, delay: 3, repeat: Infinity, repeatType: "reverse" }}>
                        <SiJavascript className=""size={55}></SiJavascript>
                    </motion.div>
                </div>
                <div className='mt-50 flex justify-between items-center'>
                     <motion.div
                        animate={{ x:[0,30,0] }}
                        transition={{ duration: 5, delay: 3, repeat: Infinity, repeatType: "reverse" }}>
                        <FaNodeJs className=""size={55}></FaNodeJs>
                    </motion.div>
                     <motion.div
                        animate={{ y:[0,30,0] }}
                        transition={{ duration: 5, delay: 3, repeat: Infinity, repeatType: "reverse" }}>
                        <FaJava className=""size={55}></FaJava>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Banner;