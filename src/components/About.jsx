export default function About({ imgSrc, children }) {
  return (
    <div className="about">
      <div class="about-Picture">
        <img src={imgSrc} class="img-1" alt="Team Picture" />
      </div>
      <div class="about-Text">{children}</div>
    </div>
  );
}
