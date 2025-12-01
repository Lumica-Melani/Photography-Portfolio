export default function PortfolioImage({ src, className }) {
  return (
    <div className="image-item">
      <img src={src} className={className || ""} />
    </div>
  );
}
