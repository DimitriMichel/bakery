import React from "react";
import Navigation from "./Navigation";

// Animation Imports
import { useInView, InView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import {
  yAxisVariants,
  xAxisVariants,
  yAxisVariantsSlow,
  yAxisVariantsSlower,
  yAxisVariantsSlowest
} from "../utils/animConfig";

export const Hero = props => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  });

  return (
    <AnimatePresence>
      <section id="Hero">
        <Navigation />
        <motion.div
          className="container"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="site-title">
            <motion.div  variants={yAxisVariants} className="title-animation">
              <h5>Welcome</h5>
              <h1>
                Heavenly
                <br />
                Desserts
              </h1>
            </motion.div>
            <motion.div variants={yAxisVariantsSlower} className="contact-info">
              <div className="container">
                <div className="booking">Book Table Directly</div>
                <h2 className="">(617)-867-5309</h2>
                <div className="hours">
                  Opening Hours <br />
                  <strong>Mon-Fri: </strong>9am - 9pm
                  <strong>
                    <br /> Weekend
                  </strong>{" "}
                  10am-10pm
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default Hero;
