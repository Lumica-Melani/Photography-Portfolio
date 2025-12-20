import PortfolioImage from "./PortfolioImage";

export default function PortfolioColumn({
  images,
  className = "",
  bottomText,
  extraClass = "",
  onImageClick,
}) {
  const combinedClasses = `portfolio-column ${className} ${extraClass}`.trim();
  return (
    <div className={combinedClasses}>
      {images.map((img, index) => (
        <PortfolioImage
          key={index}
          src={img.src}
          className={img.className || ""}
          onClick={() => onImageClick(img.src)}
        />
      ))}

      {bottomText && (
        <div className="flex-text">
          <p>{bottomText}</p>
        </div>
      )}
    </div>
  );
}
