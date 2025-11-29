export default function Portfolio() {
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
