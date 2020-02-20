import React, { Fragment } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import Menu from "../components/Menu";
import LargeQuote from "../components/LargeQuote";
import Contact from "../components/Contact";
import Reviews from "../components/Reviews";
import Footer from "../components/Footer";


function HomePage() {
  return (
    <Fragment>
        <Header />

        <Hero />
        <OurStory />
        <Menu />
        <LargeQuote />
        <Reviews />
        <Contact />
        <Footer />
    </Fragment>
  );
}

export default HomePage;
