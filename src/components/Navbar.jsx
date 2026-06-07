import { useEffect, useState } from "react";

function Navbar({ category, setCategory }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categories = [
    "nasional",
    "internasional",
    "ekonomi",
    "olahraga",
    "teknologi",
    "hiburan",
    "gaya-hidup",
  ];

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <h2>Berita Kini</h2>

      <ul>
        {categories.map((item) => (
          <li
            key={item}
            className={category === item ? "active" : ""}
            onClick={() => setCategory?.(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;