
"use client";

import { Fragment, useEffect, useState } from "react";
import VideoSection from "./components/VideoSection";
import TextBelowVideo from "./components/TextBelowVideo";
import ImageSection from "./components/ImageSection";
import TextWithEffect from "./components/TextWithEffect";
import TextWithLink from "./components/TextWithLink";
import TwoImagesSection from "./components/TwoImagesSection";
import TextBelowTwoImage from "./components/TextBelowTwoImage";
import MirroredImageSection from "./components/MirroredImageSection";
import OurServices from "./components/OurServices";
import FullImageZoomSection from "./components/FullImageZoomSection";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Fragment>
      
      <VideoSection />
      <TextBelowVideo />
      <ImageSection />
      <TextWithEffect />
      <TextWithLink />
      <TwoImagesSection />
      <TextBelowTwoImage />
      <MirroredImageSection />
      <OurServices />
      <FullImageZoomSection />
    </Fragment>
  );
}