import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Form from "./components/Form";
import ConfirmPage from "./components/ConfirmPage";

import Footer from "./components/Footer";
import PortfolioColumn from "./components/PortfolioColumn";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCarousel from "./components/ReviewCarousel";
import "leaflet/dist/leaflet.css";
// Reviews
import client1 from "./assets/reviewbox-images/client1.jpg";
import client2 from "./assets/reviewbox-images/client2.jpg";
import client3 from "./assets/reviewbox-images/client3.jpg";
import client4 from "./assets/reviewbox-images/client4.jpg";
import client5 from "./assets/reviewbox-images/client5.jpg";
import client6 from "./assets/reviewbox-images/client6.jpg";

// Wedding
import beachWedding from "./assets/wedding/beachwedding.jpg";
import ring from "./assets/wedding/ring.jpg";
import ceremony from "./assets/wedding/ceremony.jpg";
import weddingKiss from "./assets/wedding/weddingkiss.jpg";
import hairstyle from "./assets/wedding/hairstyle.jpg";
import groomSuit from "./assets/wedding/groomsuit.jpg";
import brideLong from "./assets/wedding/bridelongshot.jpg";
import bouquet from "./assets/wedding/bouquet.jpg";
import fairytale from "./assets/wedding/fairytale.jpg";
import kissBlur from "./assets/wedding/kissblur.jpg";
import brideShoes from "./assets/wedding/brideshoes.jpg";
import venue from "./assets/wedding/venue.jpg";

// Cinematic
import fleaMarket from "./assets/cinematic_photography/flea_market_vertical.jpg";
import blurry from "./assets/cinematic_photography/blurry.jpg";
import redSmoke from "./assets/cinematic_photography/red_smoke._vertical.jpg";
import bathing from "./assets/cinematic_photography/bathing_vertical.jpg";
import streetCar from "./assets/cinematic_photography/street_car.jpg";
import shadow from "./assets/cinematic_photography/shadow.jpg";
import starwars from "./assets/cinematic_photography/starwars_vertical.jpg";
import goth from "./assets/cinematic_photography/goth.jpg";
import photographer from "./assets/cinematic_photography/photographer_vertical.jpg";
import pexels from "./assets/cinematic_photography/pexels-subhrovision-28991694.jpg";
import queenbee from "./assets/cinematic_photography/queenbee_vertical.jpg";
import passionate from "./assets/cinematic_photography/passionate_vertical.jpg";
import darkalley from "./assets/cinematic_photography/darkalley_vertical.jpg";
import ghostBride from "./assets/cinematic_photography/ghost_bride.jpg";

import placeholder_logo from "./assets/header/placeholder_logo.png";
import Nature_placeholder from "./assets/header/Nature_placeholder.mp4";
import aboutimg from "./assets/about/aboutimg.jpg";
export const reviewData = [
  {
    imageUrl: client1,
    review: "Great experience! Friendly, professional, and beautiful photos.",
    name: "Rishab. A",
  },
  {
    imageUrl: client2,
    review: "They made us feel relaxed, and the pictures turned out wonderful.",
    name: "Ananya. B",
  },
  {
    imageUrl: client3,
    review:
      "Very organized and attentive. They captured every moment perfectly.",
    name: "Madeline. L",
  },
  {
    imageUrl: client4,
    review:
      "The pictures were magical! We couldn’t stop smiling looking through them.",
    name: "Sanya",
  },
  {
    imageUrl: client5,
    review:
      "Every moment was captured beautifully without us even realizing it.",
    name: "Devika",
  },
  {
    imageUrl: client6,
    review: "The edits were cinematic and flawless. Highly recommend them!",
    name: "Sanjana",
  },
];

export const weddingPictures = [
  [{ src: beachWedding }, { src: ring, className: "ring" }],
  [
    { src: ceremony },
    { src: weddingKiss },
    { src: hairstyle },
    { src: groomSuit },
  ],
  [
    { src: brideLong },
    { src: bouquet, className: "gown" },
    { src: fairytale, className: "bnw" },
  ],
  [
    { src: kissBlur },
    { src: brideShoes, className: "shoes" },
    { src: venue, className: "banquet" },
  ],
];

export const cinematicPictures = [
  [{ src: fleaMarket }, { src: blurry }, { src: redSmoke }, { src: bathing }],
  [{ src: streetCar }, { src: shadow }, { src: starwars }],
  [{ src: goth }, { src: photographer }, { src: pexels }],
  [
    { src: queenbee },
    { src: passionate },
    { src: darkalley },
    { src: ghostBride },
  ],
];

function App() {
  const [openConfirmPage, setOpenConfirmPage] = useState(false);

  const [submittedData, setSubmittedData] = useState(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleForm(data) {
    setSubmittedData(data);
    setOpenConfirmPage(true);
  }

  function closePage() {
    setOpenConfirmPage(false);
  }
  return (
    <div>
      <Header
        logoSrc={placeholder_logo}
        videoSrc={Nature_placeholder}
        onMenuClick={() => setIsMenuOpen(true)}
        menuOpen={isMenuOpen}
      />

      {isMenuOpen && <NavMenu closeNavMenu={() => setIsMenuOpen(false)} />}
      <div id="about">
        <About imgSrc={aboutimg}>
          <h1>about ;)</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            aliquid impedit omnis facilis ratione, perferendis voluptatum nam
            facere dicta at accusantium dolore itaque nemo natus, iusto sequi
            eum voluptate! Delectus veritatis accusamus exercitationem molestiae
            laudantium, explicabo, quam minima deleniti, inventore aspernatur
            laboriosam praesentium alias? Hic excepturi corrupti aut veritatis
            sapiente!
          </p>
        </About>
      </div>
      <div id="portfolio">
        <Portfolio title="Wedding Photography">
          {weddingPictures.map((col, i) => (
            <PortfolioColumn
              className="wed-image-col flex-text"
              key={i}
              images={col}
              bottomText={i === 0 ? "Timeless Elegance" : null}
              extraClass={i === 1 || i === 3 ? "column-two" : null}
            />
          ))}
        </Portfolio>
        <Portfolio title="Cinematic Photography And Editing">
          {cinematicPictures.map((col, i) => (
            <PortfolioColumn
              className="cinematic-image"
              key={i}
              images={col}
              extraClass={i === 1 || i === 3 ? "column-two" : null}
            />
          ))}
        </Portfolio>
      </div>
      <div id="contact">
        {openConfirmPage ? (
          <ConfirmPage data={submittedData} closePage={closePage} />
        ) : (
          <Form onSubmit={toggleForm} />
        )}
      </div>
      <div id="reviews">
        <ReviewCarousel reviews={reviewData} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
