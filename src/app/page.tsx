"use client";

import { Fragment } from "react";
import NavBar from "./components/NavBar";
import VideoSection from "./components/VideoSection";
import TextBelowVideo from "./components/TextBelowVideo";
import ImageSection from "./components/ImageSection";
import TextWithEffect from "./components/TextWithEffect";
import TextWithLink from "./components/TextWithLink";
import TwoImagesSection from "./components/TwoImagesSection";
import FinalText from "./components/FinalText";
import MirroredImageSection from "./components/MirroredImageSection";
import TextSectionWithLink from "./components/TextSectionWithLink";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <VideoSection />
      <TextBelowVideo />
      <ImageSection />
      <TextWithEffect />
      <TextWithLink />
      <TwoImagesSection />
      <FinalText />
      <MirroredImageSection />
      <TextSectionWithLink />
      <Footer />
    </Fragment>
  );
}
