export default function Review({ reviewData }) {
  return (
    <div className="review-card">
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
