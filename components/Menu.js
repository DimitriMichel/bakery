import React from "react";

// Animation Imports
import { useInView, InView } from "react-intersection-observer";
import { AnimatePresence, motion } from "framer-motion";
import {
  yAxisVariants,
  xAxisVariants,
  yAxisVariantsSlow,
  yAxisVariantsSlower,
  yAxisVariantsSlowest,
  xAxisVariantsSlow
} from "../utils/animConfig";

export const Menu = props => {
  return (
    <AnimatePresence>
      <section id="Menu">
        <div className="container">
          <motion.div
            className="title-animation"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <InView triggerOnce={true}>
              {({ inView, ref }) => (
                <div ref={ref}>
                  <div>
                    {inView ? (
                      <motion.div variants={yAxisVariantsSlower}>
                        <h5 className="comp-title">Specials Menu</h5>
                        <h2>Luxurious Chocolate Draped Elegance</h2>
                      </motion.div>
                    ) : (
                      <div> </div>
                    )}
                  </div>
                </div>
              )}
            </InView>
          </motion.div>
          <motion.div
            className="menu-animation"
            initial="exit"
            animate="enter"
            exit="exit"
          >
            <div className="row boxes">
              <div>
                <InView triggerOnce={true}>
                  {({ inView, ref }) => (
                    <div ref={ref}>
                      <div>
                        {inView ? (
                          <div className="menu-products-animation">
                            <div className="mute-item-container">
                              <div className="col-md-4">
                                <motion.div
                                  className="box"
                                  variants={yAxisVariantsSlower}
                                >
                                  <div className="box-img product-one">
                                    <div className="price-circle">$9</div>
                                  </div>
                                  <span className="menu-item-title">
                                    Vegan Strawberry Cream Cupcake
                                  </span>
                                  <p className="menu-item-details">
                                    A Double Strawberry Cream frosting dresses a
                                    delicious golden brown cupcake.
                                  </p>
                                </motion.div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <motion.div
                                className="box"
                                variants={yAxisVariantsSlower}
                              >
                                <div className="box-img product-two">
                                  <div className="price-circle">$15</div>
                                </div>
                                <span className="menu-item-title">
                                  Caramel Frosted Cinnamon Buns Lightly Dusted
                                  w/ Toasted Macadamia{" "}
                                </span>
                                <p className="menu-item-details">
                                  Warm oven baked Cinnamon Buns glazed with a
                                  caramel brought to a deep golden simmer and
                                  finished with crunchy dusting of toasted
                                  macadamia.
                                </p>
                              </motion.div>
                            </div>
                            <div className="col-md-4">
                              <motion.div
                                className="box"
                                variants={yAxisVariantsSlower}
                              >
                                <div className="box-img product-three">
                                  <div className="price-circle">$60</div>
                                </div>
                                <span className="menu-item-title">
                                  Buttercream & Chocolate Ganache Cake{" "}
                                </span>
                                <p className="menu-item-details">
                                  Swiss Meringue Buttercream mixed with an
                                  incredible Chocolate Ganache draped over a
                                  moist flavorful cake.
                                </p>
                              </motion.div>
                            </div>
                          </div>
                        ) : (
                          <div> </div>
                        )}
                      </div>
                    </div>
                  )}
                </InView>
              </div>
            </div>
          </motion.div>
          <a href="#" className="link">
            View Full Menu
          </a>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default Menu;
