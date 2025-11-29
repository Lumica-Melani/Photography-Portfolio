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

      <hr className="section-separator" />

      <section>
        <p className="footer-text">Placeholder Photography</p>
      </section>
    </footer>
  );
}
