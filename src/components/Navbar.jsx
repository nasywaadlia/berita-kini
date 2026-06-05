function Navbar({ category, setCategory }) {  const categories = [
    "nasional",
    "internasional",
    "ekonomi",
    "olahraga",
    "teknologi",
    "hiburan",
    "gaya-hidup",
  ];

  return (
    <nav>
      <h2>Berita Kini</h2>

      <ul>
        {categories.map((item) => (
         <li
  key={item}
  className={category === item ? "active" : ""}
  onClick={() => setCategory(item)}
>
  {item}
</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;