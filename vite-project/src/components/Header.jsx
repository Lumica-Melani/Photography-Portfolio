export default function Header({ openNavMenu }) {
  return (
    <header>
      <div class="videoWrapper">
        <div class="logo">
          <img src="public\header\placeholder_logo.png" alt="No image" />
        </div>
        <button class="ham-menu" aria-label="Menu" onClick={openNavMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <video
          src="public\header\Nature_placeholder.mp4"
          controls
          autoplay
          muted
          loop
        ></video>
      </div>
    </header>
  );
}
