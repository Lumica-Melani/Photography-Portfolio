export default function Portfolio({ title, children }) {
  return (
    <div className="wedding-portfolio-container">
      <div className="Gallery-title">
        <h1>{title}</h1>
      </div>

      <div className="portfolio">
        <div className="portfolio-row">{children}</div>
      </div>
    </div>
  );
}
