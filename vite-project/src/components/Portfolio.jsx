import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Portfolio({ title, children }) {
  const [open, setOpen] = useState(false);
  const [clickedSrc, setClickedSrc] = useState(null);
  const [slides, setSlides] = useState([]);

  const flattenImages = (children) => {
    const cleanchildren = React.Children.toArray(children);
    let all = [];
    cleanchildren.forEach((col) => {
      col.props.images.forEach((img) => all.push({ src: img.src }));
    });
    return all;
  };
  const allImages = flattenImages(children);

  const handleImageClick = (src) => {
    const index = allImages.findIndex((img) => img.src === src);
    setClickedSrc(index);
    setSlides(allImages);
    setOpen(true);
  };

  return (
    <div className="wedding-portfolio-container">
      <div className="Gallery-title">
        <h1>{title}</h1>
      </div>

      <div className="portfolio">
        <div className="portfolio-row">
          {React.Children.toArray(children).map((child, i) =>
            React.cloneElement(child, {
              onImageClick: handleImageClick,
              key: i,
            })
          )}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={clickedSrc}
        slides={slides}
      />
    </div>
  );
}
