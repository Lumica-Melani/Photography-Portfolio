import Slider from "react-slick";
import Review from "./Review";

export default function ReviewCarousel({ reviews }) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,

    responsive: [
      {
        breakpoint: 1200, // for laptops/tablets
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900, // when screen gets a bit smaller
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="review-carousel">
      <Slider {...settings}>
        {reviews.map((item, index) => (
          <div key={index}>
            <Review reviewData={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
