import Image from "next/image";
import React from "react";
import Styles from "./about.module.css";


export const metadata = {
  title: ' About',
  description: 'Next.js starter app',
}


const AboutPage = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.textContainer}>
        <h2 className={Styles.subtitle}> About Agency</h2>
        <h1 className={Styles.title}>
          {" "}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
          fuga?{" "}
        </h1>
        <p className={Styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia
          temporibus, dolorum nesciunt possimus, veniam tempore officiis minus
          exercitationem porro nobis quo, eos et magnam.
        </p>
        <div className={Styles.boxes}> 
          <div className={Styles.box} >
            <h1> 31 K+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={Styles.box} >
            <h1> 31 K+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
          <div className={Styles.box} >
            <h1> 31 K+</h1>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>


      </div>

      <div className={Styles.imgContainer}>
        <Image
          src="/about.png"
          alt="About image"
          fill
          className={Styles.img}
        />

      </div>
    </div>
  );
};

export default AboutPage;
