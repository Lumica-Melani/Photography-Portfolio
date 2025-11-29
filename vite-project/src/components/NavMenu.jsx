export default function NavMenu({ closeNavMenu }) {
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <div class="nav-bg">
      <button className="closeBtn" onClick={closeNavMenu}>
        +
      </button>
      <button class="nav-menu" onClick={() => scrollToSection("about")}>
        <span>About us</span>
      </button>
      <button class="nav-menu" onClick={() => scrollToSection("contact")}>
        <span>Contact us</span>
      </button>
      <button class="nav-menu" onClick={() => scrollToSection("portfolio")}>
        <span>Portfolio</span>
      </button>
      <button class="nav-menu" onClick={() => scrollToSection("reviews")}>
        <span>Reviews</span>
      </button>
    </div>
  );
}
