import React from "react";
import { useInView, InView } from "react-intersection-observer";

/*Framer Motion*/
import { AnimatePresence, motion } from "framer-motion";
import {
  yAxisVariants,
  xAxisVariants,
  yAxisVariantsSlow,
  yAxisVariantsSlower,
  yAxisVariantsSlowest, xAxisVariantsSlow
} from "../utils/animConfig";

export const OurStory = props => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  });
  return (
    <AnimatePresence>
      <section id="OurStory">
        <motion.div
          className="container"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="row">
            <div className="col-md-6">
              <InView triggerOnce={true}>
                {({ inView, ref }) => (
                  <div ref={ref}>
                    <div>
                      {inView ? (
                        <motion.div
                          variants={xAxisVariants}
                          className="title-animation"
                        >
                          <h5>Our Story</h5>
                          <h2>Baking is Art & Science</h2>
                        </motion.div>
                      ) : (
                        <div> </div>
                      )}
                    </div>
                  </div>
                )}
              </InView>
              <motion.div
                className="story-animation"
                initial="exit"
                animate="enter"
                exit="exit"
              >
                <InView triggerOnce={true}>
                  {({ inView, ref }) => (
                    <div ref={ref}>
                      <div>
                        {inView ? (
                          <motion.div  variants={xAxisVariantsSlow}>
                            <p>
                              Dr. Alan Hirsch, a neurologist who studies
                              olfactory-evoked nostalgia, has found that smells
                              produced by baking have a particularly powerful
                              effect on memory. In any baking recipe every
                              ingredient has a purpose. For example, in a cake,
                              flour gives the structure, eggs bind the
                              ingredients, baking powder and baking soda make it
                              rise, the melted fats like butter and oil make it
                              less chewy, and sugar sweetens and keeps it moist.
                              Any system can function only if all it's parts do
                              their job. The same principle applies to baking.
                            </p>
                            <div className="quote">
                              <i>"The absolute final word in dessert."</i> -{" "}
                              <strong>Michael Harding</strong> (Master Baker)
                            </div>
                            <a href="#" className="res-btn">
                              Reserve
                            </a>
                          </motion.div>
                        ) : (
                          <div> </div>
                        )}
                      </div>
                    </div>
                  )}
                </InView>
              </motion.div>
            </div>

            <div className="col-md-6">
              <div className="video-image"></div>
            </div>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default OurStory;
