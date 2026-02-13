import React, { useState, useEffect } from "react";

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");

  const images = [
    { id: 1, src: "gallery-img1.jpeg", category: "wedding", title: "Wedding Celebration" },
    { id: 2, src: "gallery-img2.jpeg", category: "decor", title: "Elegant Decor" },
    { id: 3, src: "gallery-img3.jpeg", category: "wedding", title: "Wedding Ceremony" },
    { id: 4, src: "gallery-img4.jpeg", category: "celebration", title: "Grand Celebration" },
    { id: 5, src: "gallery-img5.jpeg", category: "dining", title: "Fine Dining Setup" },
    { id: 6, src: "gallery-img6.jpeg", category: "decor", title: "Floral Arrangements" },
    { id: 7, src: "gallery-img7.jpeg", category: "wedding", title: "Wedding Reception" },
    { id: 8, src: "gallery-img8.jpeg", category: "celebration", title: "Birthday Party" },
    { id: 9, src: "gallery-img9.jpeg", category: "dining", title: "Buffet Display" },
    { id: 10, src: "gallery-img10.jpeg", category: "decor", title: "Lighting Design" },
    { id: 11, src: "gallery-img11.jpeg", category: "wedding", title: "Bridal Setup" },
  ];

  const filteredImages =
    activeFilter === "all"
      ? images
      : images.filter((img) => img.category === activeFilter);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600&family=Playfair+Display:wght@500;600&display=swap');

        :root {
          --gold: #C5A059;
          --cream-bg: #FAF8F5;
          --text-dark: #2c2c2c;
          --white: #ffffff;
        }

        .gallery-page {
          background: var(--cream-bg);
          padding-bottom: 70px;
          font-family: 'Lato', sans-serif;
        }

        /* ---------------- HEADER (UNCHANGED) ---------------- */
        .page-header {
          position: relative;
          background-size: cover;
          background-position: center;
          padding: 120px 0;
          color: #fff;
        }

        .page-header h1 {
          font-family: 'Playfair Display', serif;
          font-size: 3.2rem;
        }

        /* ---------------- FILTER BAR ---------------- */
      

        .filter-buttons {
          max-width: 1200px;
          margin:30px auto;
          padding: 14px;
          border-radius: 8px;
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .filter-btn {
          border: 1px solid var(--gold);
          background: transparent;
          color: var(--gold);
          padding: 9px 22px;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          cursor: pointer;
          border-radius: 30px;
          transition: 0.3s ease;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: var(--gold);
          color: #fff;
        }

        /* ---------------- GALLERY GRID ---------------- */
        .gallery-grid {
          max-width: 1600px;
          margin: auto;
          padding: 0 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        /* ---------------- GALLERY CARD ---------------- */
        .gallery-item {
          position: relative;
          height: 280px;
          overflow: hidden;
          border-radius: 10px;
          cursor: pointer;
          background: #000;
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.08);
        }

        /* ---------------- OVERLAY ---------------- */
        .gallery-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          padding: 22px;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.65),
            rgba(0,0,0,0.15)
          );
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }

        .gallery-overlay h3 {
          color: #fff;
          font-family: 'Playfair Display', serif;
          font-size: 1.4rem;
          margin-bottom: 4px;
        }

        .gallery-overlay span {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: var(--gold);
        }

        /* ---------------- RESPONSIVE ---------------- */
        @media (max-width: 768px) {
          .page-header h1 {
            font-size: 2.2rem;
          }

          .gallery-item {
            height: 240px;
          }
        }
      `}</style>

      <div className="gallery-page">

        {/* HEADER (DO NOT TOUCH) */}
        <header className="page-header" data-background="assets/images/page-header01.jpg">
          <div className="container">
            <h1>Events Gallery</h1>
          </div>
          <div className="scroll-down"></div>
        </header>

        {/* FILTERS */}
        <header className="gallery-header">
          <div className="filter-buttons">
            {[
              { value: "all", label: "All View" },
              { value: "wedding", label: "Weddings" },
              { value: "decor", label: "Decor & Ambience" },
              { value: "celebration", label: "Celebrations" },
              { value: "dining", label: "Fine Dining" },
            ].map((filter) => (
              <button
                key={filter.value}
                className={`filter-btn ${activeFilter === filter.value ? "active" : ""}`}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </header>

        {/* GALLERY */}
        <div className="gallery-grid">
          {filteredImages.map((img) => (
            <div className="gallery-item" key={img.id}>
              <img
                src={`/assets/images/gallery/${img.src}`}
                alt={img.title}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div>
                  <h3>{img.title}</h3>
                  <span>{img.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default Gallery;
