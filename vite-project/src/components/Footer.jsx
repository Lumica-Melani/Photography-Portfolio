import Quote from "./Quote";
import StudioMap from "./StudioMap";
import facebook from "../assets/footer-icons/facebook.png";
import instagram from "../assets/footer-icons/instagram.png";
import youtube from "../assets/footer-icons/youtube.png";

export default function Footer() {
  return (
    <footer className="footer-style">
      <div className="footer-section">
        <div className="social-media">
          <p className="media-title">Follow us on</p>
          <section className="footer-columns">
            <span className="footer-rows">
              <img
                className="footer-img"
                src={youtube}
                alt="Youtube icon and link"
              />
              <a href="https://www.youtube.com/">Youtube</a>
            </span>

            <span className="footer-rows">
              <img
                className="footer-img"
                src={instagram}
                alt="Instagram icon and link"
              />
              <a href="https://www.instagram.com/">Instagram</a>
            </span>

            <span className="footer-rows">
              <img
                className="footer-img"
                src={facebook}
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
            <span>
              <p className="address-text">Visit us at</p>
              <StudioMap />
            </span>
          </section>
        </section>
      </div>

      <hr className="section-separator" />

      <section>
        <p className="footer-text">Placeholder Photography</p>
        <Quote />
      </section>
    </footer>
  );
}
