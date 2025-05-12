"use client";

import NavBar from "./components/NavBar";
import VideoSection from "./components/VideoSection";
import TextBelowVideo from "./components/TextBelowVideo";
import ImageSection from "./components/ImageSection";
import TextWithEffect from "./components/TextWithEffect";
import TextWithLink from "./components/TextWithLink";
import TwoImagesSection from "./components/TwoImagesSection";
import FinalText from "./components/FinalText";
import MirroredImageSection from "./components/MirroredImageSection";

export default function Home() {
  return (
    <div>
      <NavBar />
      <VideoSection />
      <TextBelowVideo />
      <ImageSection />
      <TextWithEffect />
      <TextWithLink />
      <TwoImagesSection />
      <FinalText />
      <MirroredImageSection />
    </div>
  );
}