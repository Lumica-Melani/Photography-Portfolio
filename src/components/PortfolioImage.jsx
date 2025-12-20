export default function PortfolioImage({ src, className, onClick }) {
  return (
    <div className="image-item">
      <img
        src={src}
        className={className || ""}
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}
