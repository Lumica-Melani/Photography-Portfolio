import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Form from "./components/Form";
import ConfirmPage from "./components/ConfirmPage";
import Review from "./components/Review";
import Footer from "./components/Footer";
const reviewData = [
  {
    imageUrl: "public/reviewbox-images/client1.jpg",
    review:
      "We absolutely loved working with Placeholder Photography! They were professional, friendly, and captured all the joy and little moments of our wedding day perfectly.",
    name: "Rishab",
  },
  {
    imageUrl: "public/reviewbox-images/client2.jpg",
    review:
      "Placeholder Photography was simply amazing! They made us feel so relaxed and comfortable throughout the day. The final photo gallery was breathtaking.",
    name: "Ananya",
  },
  {
    imageUrl: "public/reviewbox-images/client3.jpg",
    review:
      "We couldn't have asked for a better experience! The team was incredibly organized and discreet, yet somehow managed to be everywhere at once.",
    name: "Madeline",
  },
];

function App() {
  const [openConfirmPage, setOpenConfirmPage] = useState(false);

  const [submittedData, setSubmittedData] = useState(null);

  const [navMenu, setNavMenu] = useState(false);

  function openNavMenu() {
    setNavMenu(true);
  }

  function toggleForm(data) {
    setSubmittedData(data);
    setOpenConfirmPage(true);
  }

  function closePage() {
    setOpenConfirmPage(false);
  }
  return (
    <div>
      {navMenu ? (
        <NavMenu closeNavMenu={() => setNavMenu(false)} />
      ) : (
        <Header openNavMenu={openNavMenu} />
      )}
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        {openConfirmPage ? (
          <ConfirmPage data={submittedData} closePage={closePage} />
        ) : (
          <Form onSubmit={toggleForm} />
        )}
      </div>
      <div id="reviews">
        <div className="review">
          {reviewData.map((item) => (
            <Review reviewData={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
