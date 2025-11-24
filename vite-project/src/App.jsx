import React from "react";
import "./styles.css";

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
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Form />
      <div className="review">
        {reviewData.map((item) => (
          <Review reviewData={item} />
        ))}
      </div>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <div class="videoWrapper">
        <div class="logo">
          <img src="public\header\placeholder_logo.png" alt="No image" />
        </div>
        <button class="ham-menu" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <video
          src="public\header\Nature_placeholder.mp4"
          controls
          autoplay
          muted
          loop
        ></video>
      </div>
    </header>
  );
}

function About() {
  return (
    <div class="about">
      <div class="about-Picture">
        <img src="public\about\Team (1).jpg" class="img-1" alt="Team Picture" />
      </div>
      <div class="about-Text">
        <h1>about ;)</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquid
          impedit omnis facilis ratione, perferendis voluptatum nam facere dicta
          at accusantium dolore itaque nemo natus, iusto sequi eum voluptate!
          Delectus veritatis accusamus exercitationem molestiae laudantium,
          explicabo, quam minima deleniti, inventore aspernatur laboriosam
          praesentium alias? Hic excepturi corrupti aut veritatis sapiente!
        </p>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    // 1. Wrap ALL content inside one single parent element (e.g., a main <div> or a React Fragment <>)
    <div className="wedding-portfolio-container">
      {/* First element moved inside the wrapper */}
      <div className="portfolio-row-one-title">
        <h1>Wedding Photography</h1>
      </div>

      {/* Second element (the main portfolio) moved inside the wrapper */}
      <div className="portfolio">
        <div className="portfolio-row row-one">
          <div className="portfolio-column wed-image-col">
            <div className="image-item">
              <img src="public\wedding\beachwedding.jpg" alt="beach-wedding" />
            </div>
            <div className="image-item">
              <img
                className="ring"
                src="public\wedding\ring.jpg"
                alt="wedding-ring"
              />
            </div>
            <div className="flex-text">
              <p>Timeless Elegance</p>
            </div>
          </div>

          <div className="portfolio-column wed-image-col column-two">
            <div className="flex-row-3">
              <div className="image-item">
                <img src="public\wedding\ceremony.jpg" alt="flex1" />
              </div>
              <div className="image-item">
                <img src="public\wedding\weddingkiss.jpg" alt="flex2" />
              </div>
              <div className="image-item">
                <img
                  className="flex3"
                  src="public\wedding\hairstyle.jpg"
                  alt="flex3"
                />
              </div>
              <div className="image-item">
                <img
                  className="flex4"
                  src="public\wedding\groomsuit.jpg"
                  alt="groom-suit"
                />
              </div>
            </div>
          </div>

          <div className="portfolio-column wed-image-col">
            <div className="image-item">
              <img src="public\wedding\bridelongshot.jpg" alt="" />
            </div>
            <div className="image-item">
              <img className="gown" src="public\wedding\bouquet.jpg" alt="" />
            </div>
            <div className="image-item">
              <img className="bnw" src="public\wedding\fairytale.jpg" alt="" />
            </div>
          </div>

          <div className="portfolio-column wed-image-col column-two">
            <div className="image-item">
              <img src="public\wedding\kissblur.jpg" alt="" />
            </div>
            <div className="image-item">
              <img
                className="shoes"
                src="public\wedding\brideshoes.jpg"
                alt=""
              />
            </div>
            <div className="image-item">
              <img className="banquet" src="public\wedding\venue.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="portfolio-row Gallery-Title">
          <h1>Cinematic Photography And Editing</h1>
        </div>

        <div className="portfolio-row row-two">
          <div className="portfolio-column cinematic-image">
            <div className="image-item">
              <img
                src="public\cinematic_photography\flea_market_vertical.jpg"
                alt=""
              />
            </div>
            <div className="image-item">
              <img src="public/cinematic_photography/blurry.jpg" alt="" />
            </div>
            <div className="image-item">
              <img
                src="public/cinematic_photography/red_smoke._vertical.jpg"
                alt=""
              />
            </div>
            <div className="image-item">
              <img
                src="public/cinematic_photography/bathing_vertical.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="portfolio-column cinematic-image column-two">
            <div className="image-item">
              <img src="public/cinematic_photography/street_car.jpg" alt="" />
            </div>
            <div className="image-item">
              <img src="public/cinematic_photography/shadow.jpg" alt="" />
            </div>
            <div className="image-item">
              <img
                src="public/cinematic_photography/starwars_vertical.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="portfolio-column cinematic-image">
            <div className="image-item">
              <img src="public/cinematic_photography/goth.jpg" alt="" />
            </div>
            <div className="image-item">
              <img
                src="public/cinematic_photography/photographer_vertical.jpg"
                alt=""
              />
            </div>
            <div className="image-item">
              <img
                src="public/cinematic_photography/pexels-subhrovision-28991694.jpg"
                alt=""
              />
            </div>
          </div>

          <div className="portfolio-column cinematic-image column-two">
            <div className="image-item">
              <img
                src="public/cinematic_photography/queenbee_vertical.jpg"
                alt=""
              />
            </div>
            <div className="image-item">
              <img
                src="public/cinematic_photography/passionate_vertical.jpg"
                alt=""
              />
            </div>
            <div className="image-item">
              <img
                src="public/cinematic_photography/darkalley_vertical.jpg"
                alt=""
              />
            </div>
            <div className="image-item">
              <img src="public/cinematic_photography/ghost_bride.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div> // End of the single parent wrapper
  );
}

function Form() {
  return (
    <div class="form-box">
      <section class="booking-section">
        <h2 class="form-title">Share Your Vision</h2>
        <form class="booking-form" action="#" method="post">
          <div class="form-group">
            <input
              class="input-style"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="form-group">
            <input
              class="input-style"
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <input
              class="input-style"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
            />
          </div>

          <div class="form-group">
            <select class="input-style" id="type" name="type" required>
              <option value="">Select...</option>
              <option value="wedding">Wedding</option>
              <option value="portrait">Portrait</option>
              <option value="event">Event</option>
              <option value="fashion">Fashion</option>
              <option value="product">Product</option>
            </select>
          </div>

          <div class="form-group">
            <input class="input-style" type="date" id="date" name="date" />
          </div>

          <div class="form-group">
            <textarea
              class="long-text"
              id="message"
              name="message"
              placeholder="Tell us more about your vision..."
            ></textarea>
          </div>

          <button className="form-btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

function Review({ reviewData }) {
  return (
    <div className="review-box">
      <img
        src={reviewData.imageUrl}
        alt="Client Rishab"
        className="review-image"
      />
      <p className="review-text">{reviewData.review}</p>
      <p>-{reviewData.name}</p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-style">
      <div className="footer-section">
        <div className="social-media">
          <p className="media-title">Follow us on</p>
          <section className="footer-columns">
            <span className="footer-rows">
              <img
                className="footer-img"
                src="public/footer-icons/youtube.png" // Fixed path
                alt="Youtube icon and link"
              />
              <a href="https://www.youtube.com/">Youtube</a>
            </span>

            <span className="footer-rows">
              <img
                className="footer-img"
                src="public/footer-icons/instagram.png" // Fixed path
                alt="Instagram icon and link"
              />
              <a href="https://www.instagram.com/">Instagram</a>
            </span>

            <span className="footer-rows">
              <img
                className="footer-img"
                src="public/footer-icons/facebook.png" // Fixed path
                alt="Facebook icon and link"
              />
              <a href="https://www.instagram.com/">Facebook</a>
            </span>
          </section>
        </div>

        <section className="links">
          <section className="footer-columns">
            <span className="footer-rows">
              <a href="">Terms And Conditions</a>
            </span>

            <span className="footer-rows">
              <a href="">Privacy Policy</a>
            </span>

            <span className="footer-rows">
              <a href="">Join us</a>
            </span>

            <span className="footer-rows">
              <a href="">Contact us</a>
            </span>
          </section>
        </section>
        <section className="footer-address">
          <section className="footer-columns">
            <span className="footer-rows">
              <p className="address-text">Visit us at</p>
            </span>
          </section>
        </section>
      </div>

      {/* Ensure hr is correctly closed with / */}
      <hr className="section-separator" />

      <section>
        <p className="footer-text">Placeholder Photography</p>
      </section>
    </footer>
  );
}

export default App;
