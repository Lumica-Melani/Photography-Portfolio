export default function NavMenu({ closeNavMenu }) {
  function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    closeNavMenu();
  }

  return (
    <div className="nav-bg">
      <button className="closeBtn" onClick={closeNavMenu}>
        +
      </button>

      <button className="nav-menu" onClick={() => scrollToSection("about")}>
        About Us
      </button>

      <button className="nav-menu" onClick={() => scrollToSection("portfolio")}>
        Portfolio
      </button>

      <button className="nav-menu" onClick={() => scrollToSection("reviews")}>
        Reviews
      </button>

      <button className="nav-menu" onClick={() => scrollToSection("contact")}>
        Contact
      </button>
    </div>
  );
}
