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

const reviewData = [
  {
    imageUrl: "reviewbox-images/client1.jpg",
    review: "Great experience! Friendly, professional, and beautiful photos.",
    name: "Rishab",
  },
  {
    imageUrl: "reviewbox-images/client2.jpg",
    review: "They made us feel relaxed, and the pictures turned out wonderful.",
    name: "Ananya",
  },
  {
    imageUrl: "reviewbox-images/client3.jpg",
    review:
      "Very organized and attentive. They captured every moment perfectly.",
    name: "Madeline",
  },
  {
    imageUrl: "reviewbox-images/client4.jpg",
    review:
      "The pictures were magical! We couldn’t stop smiling looking through them.",
    name: "Sanya",
  },
  {
    imageUrl: "reviewbox-images/client5.jpg",
    review:
      "Every moment was captured beautifully without us even realizing it.",
    name: "Devika",
  },
  {
    imageUrl: "reviewbox-images/client6.jpg",
    review: "The edits were cinematic and flawless. Highly recommend them!",
    name: "Sanjana",
  },
];

const weddingPictures = [
  [
    { src: "wedding/beachwedding.jpg" },
    { src: "wedding/ring.jpg", className: "ring" },
  ],
  [
    { src: "wedding/ceremony.jpg" },
    { src: "wedding/weddingkiss.jpg" },
    { src: "wedding/hairstyle.jpg" },
    { src: "wedding/groomsuit.jpg" },
  ],
  [
    { src: "wedding/bridelongshot.jpg", className: "image-item" },
    { src: "wedding/bouquet.jpg", className: "gown" },
    { src: "wedding/fairytale.jpg", className: "bnw" },
  ],
  [
    { src: "wedding/kissblur.jpg" },
    { src: "wedding/brideshoes.jpg", className: "shoes" },
    { src: "wedding/venue.jpg", className: "banquet" },
  ],
];

const cinematicPictures = [
  [
    { src: "cinematic_photography/flea_market_vertical.jpg" },
    { src: "cinematic_photography/blurry.jpg" },
    { src: "cinematic_photography/red_smoke._vertical.jpg" },
    { src: "cinematic_photography/bathing_vertical.jpg" },
  ],
  [
    { src: "cinematic_photography/street_car.jpg" },
    { src: "cinematic_photography/shadow.jpg" },
    { src: "cinematic_photography/starwars_vertical.jpg" },
  ],
  [
    { src: "cinematic_photography/goth.jpg" },
    { src: "cinematic_photography/photographer_vertical.jpg" },
    { src: "cinematic_photography/pexels-subhrovision-28991694.jpg" },
  ],
  [
    { src: "cinematic_photography/queenbee_vertical.jpg" },
    { src: "cinematic_photography/passionate_vertical.jpg" },
    { src: "cinematic_photography/darkalley_vertical.jpg" },
    { src: "cinematic_photography/ghost_bride.jpg" },
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
        logoSrc="/header/placeholder_logo.png"
        videoSrc="/header/Nature_placeholder.mp4"
        onMenuClick={() => setIsMenuOpen(true)}
        menuOpen={isMenuOpen}
      />

      {isMenuOpen && <NavMenu closeNavMenu={() => setIsMenuOpen(false)} />}
      <div id="about">
        <About imgSrc={"about/Team (1).jpg"}>
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
