export default function Header({ logoSrc, videoSrc, onMenuClick }) {
  return (
    <header className="header">
      <div className="videoWrapper">
        <div className="logo">
          <img src={logoSrc} alt="No image" />
        </div>

        <button className="ham-menu" onClick={onMenuClick} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <video src={videoSrc} autoPlay muted loop />
      </div>
    </header>
  );
}
