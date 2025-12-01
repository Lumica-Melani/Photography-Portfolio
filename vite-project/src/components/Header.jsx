export default function Header({ logoSrc, videoSrc, onMenuClick }) {
  return (
    <header>
      <div class="videoWrapper">
        <div class="logo">
          <img src={logoSrc} alt="No image" />
        </div>
        <button class="ham-menu" aria-label="Menu" onClick={onMenuClick}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <video src={videoSrc} controls autoplay muted loop></video>
      </div>
    </header>
  );
}
