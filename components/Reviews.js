import React from "react";
import chefImage from "../public/static/images/woman.jpg";
import { useInView, InView } from "react-intersection-observer";

/*Framer Motion*/
import { AnimatePresence, motion } from "framer-motion";
import {
  yAxisVariants,
  xAxisVariants,
  yAxisVariantsSlow,
  yAxisVariantsSlower,
  yAxisVariantsSlowest,
  xAxisVariantsSlow,
  xAxisVariantsSlower,
  xAxisVariantsSlowFromRight
} from "../utils/animConfig";

export const Reviews = props => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0
  });
  return (
    <AnimatePresence>
      <section id="Reviews">
        <motion.div
          className="container"
          initial="exit"
          animate="enter"
          exit="exit"
        >
          <div className="row">
            <div className="col-md-6">
              <img src={chefImage} alt="baker" className="review-image" />
            </div>
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <div>
                    {inView ? (
                      <motion.div
                        className="reviews-animation"
                        variants={xAxisVariantsSlowFromRight}
                      >
                        <div className="col-md-6">
                          <h5 className="comp-title">Reviews</h5>
                          <h2>The Baker Network</h2>
                          <h4>"A Mind Blowing Experience!"</h4>
                          <p>
                            Ea wolf try-hard you probably haven't heard of them
                            bicycle rights in nulla street art 8-bit glossier
                            meditation health goth YOLO cillum. Pickled cardigan
                            cray YOLO banjo prism squid aute mixtape migas
                            coloring book laboris sunt celiac banh mi. Coloring
                            book mollit hexagon marfa vape aesthetic. Typewriter
                            qui pinterest, kale chips eiusmod single-origin
                            coffee esse church-key intelligentsia vape.{" "}
                          </p>
                          <div className="review-quote">
                            <i>"An art in it's peak form."</i> -{" "}
                            <strong>Keisha Bastassian,</strong> 9x Olympic Gold
                            Medalist (Baking)
                          </div>
                          <div className="arrows">
                            <i className="fas fa-arrow-left"> </i>
                            <i className="fas fa-arrow-right ready"> </i>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                </div>
              )}
            </InView>
          </div>
        </motion.div>
      </section>
    </AnimatePresence>
  );
};

export default Reviews;
