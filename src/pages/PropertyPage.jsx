import React from "react";
import "../styles/PropertyPage.css";
import logo from "../assets/new-logo.png";

export default function PropertyPage() {
    const handleWhatsApp = () => {
    window.open(
      "https://wa.me/447404793369?text=Hi%20I’d%20like%20to%20check%20availability%20for%20Wyboston%20Cottage.%20Please%20can%20you%20confirm?",
      "_blank"
    );
  };

  // const handleMap = () => {
  //   window.open(
  //     "https://www.google.com/maps/search/?api=1&query=Wyboston+Lakes",
  //     "_blank"
  //   );
  // };
  function Facility({ title, items }) {
    return (
      <div className="facility">
        <h4>{title}</h4>
        <ul>
          {items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
 const openWhatsApp = () => {
    window.location.href =
      "https://wa.me/447404793369?text=Hi%20I’d%20like%20to%20check%20availability%20for%20Wyboston%20Cottage.%20Please%20can%20you%20confirm?";
  };
  return (
    <div className="page">

      {/* NAV */}
      <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="/" className="logo-link">
          <img
            src={logo}
            alt="Wego Holiday Homes"
            className="logo-image"
          />
        </a>

        {/* Desktop Links */}
        <div className="nav-links">
          <a href="#details" className="nav-link">Details</a>
          <a href="#gallery" className="nav-link">Gallery</a>
          <a href="#booking" className="nav-link">Book</a>
        </div>

        {/* CTA + Mobile Menu */}
        <div className="nav-actions">
          <a href="#booking" className="cta-button">
            Book Now
          </a>

          <button className="menu-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 5h16" />
              <path d="M4 12h16" />
              <path d="M4 19h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>

      {/* HERO */}
      <header className="hero">
      {/* Background */}
      <div className="hero-bg">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4753a515-77bf-459f-98ca-227ddc8f29b8_1600w.png"
          alt="Hot Tub Background"
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            <span className="badge-text">New Listing</span>
          </div>

          <h1 className="hero-title">
            4-Bedroom Cottage with Hot Tub near Wyboston Lakes
          </h1>

          <p className="hero-description">
            A spacious countryside retreat with premium amenities, professionally
            managed for a seamless stay.
          </p>
        </div>
      </div>
    </header>

      {/* GALLERY */}
      <section className="gray-section">
      <div className="section-inner">
        {/* Gallery */}
        <div className="gallery-grid" id="gallery">
          {[
            "4753a515-77bf-459f-98ca-227ddc8f29b8_1600w.png",
            "142e95e0-812f-4fa2-a728-3d7eff2b7144_800w.jpg",
            "644dcf7e-5aac-44c3-8081-f41061218d1a_800w.png",
            "21ff2c15-f372-474b-a928-9bc646663599_800w.png",
            "3243805b-ed17-4acb-b18a-f23b5c577010_800w.jpg",
            "d4d20c04-b03a-4b67-997f-2fffc6195dcb_800w.jpg",
            "ef3ee2ed-5620-4da6-80c3-0a2f69ec53d6_800w.png",
            "c57e9c01-3869-45a7-a9f9-808b4a764c1d_800w.jpg",
            "a481c34f-69ba-4adf-b394-048cf6d9f358_800w.jpg",
            "a56f704a-d145-4861-956c-b08c7686a4b4_800w.jpg",
            "76c9c4e8-bc31-4c01-8bc0-dd7775862c50_800w.jpg",
            "df62df74-9ea4-4dce-9755-72fee0bcaa24_800w.jpg",
            "4126d502-aa70-485e-a43d-61967cec1a91_800w.jpg"
          ].map((img, i) => (
            <div key={i} className="gallery-item">
              <img
                src={`https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/${img}`}
                alt={`Gallery ${i + 1}`}
              />
            </div>
          ))}

          {/* View All */}
          <div className="gallery-item view-all">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/54287b3d-6c11-4882-be2d-492ae818a0a0_800w.png"
              alt="View All"
            />
            <div className="view-overlay">
              <span>View All</span>
            </div>
          </div>
        </div>

        {/* Booking + Map */}
        <div className="booking-map" id="booking">
          {/* Booking */}
          <div className="booking-box">
            <h2>Book your stay</h2>

            <form>
              <div className="two-col">
                <div>
                  <label>Check In</label>
                  <input type="date" />
                </div>
                <div>
                  <label>Check Out</label>
                  <input type="date" />
                </div>
              </div>

              <div>
                <label>Guests</label>
                <select>
                  {[...Array(10)].map((_, i) => (
                    <option key={i}>{i + 1} Guest{i > 0 && "s"}</option>
                  ))}
                </select>
              </div>

              <button type="button" className="gold-btn" onClick={handleWhatsApp}>
                Check availability via WhatsApp
              </button>
            </form>
          </div>

          {/* Map */}
          {/* <div className="map-box">
            <div className="map-bg" />
            <div className="map-overlay" />

            <div className="map-center">
              <button className="map-btn" onClick={handleMap}>
                View Map
              </button>
            </div>

            <div className="map-pin">
              <svg viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </div>
          </div> */}
        </div>
      </div>

      <div className="divider" />
    </section>

      {/* BOOKING */}
        <section className="details-section" id="details">
      <div className="details-container">

        {/* Description */}
        <details className="details-item">
          <summary className="details-summary">
            <span>Description</span>
            <span className="chevron">⌄</span>
          </summary>
          <div className="details-content">
            <p>
              This four-bedroom holiday cottage near Wyboston Lakes offers a spacious
              and comfortable countryside stay in Bedfordshire, ideal for families,
              groups, and professional retreats.
            </p>
            <p>
              Located close to Wyboston Lakes Resort with easy access to Bedford,
              St Neots, and the A1, the cottage combines a peaceful rural setting
              with excellent transport links.
            </p>
            <p>
              The property features a private hot tub, games room, high-speed Wi-Fi,
              and on-site parking.
            </p>
            <p>
              Professionally managed by Wego Holiday Homes with hotel-grade cleaning,
              fresh linen, and reliable guest support.
            </p>
          </div>
        </details>

        {/* Facilities */}
        <details className="details-item" open>
          <summary className="details-summary">
            <span>What This Home Offers</span>
            <span className="chevron">⌄</span>
          </summary>

          <div className="facilities-grid">
            <Facility title="Bathroom" items={[
              "Bath and shower",
              "Hot water",
              "Shampoo, conditioner, shower gel",
              "Bidet"
            ]} />

            <Facility title="Bedroom & Laundry" items={[
              "Washing machine & free dryer",
              "Wardrobe and drawers",
              "Hangers",
              "Iron"
            ]} />

            <Facility title="Kitchen & Dining" items={[
              "Fully equipped kitchen",
              "Fridge and freezer",
              "Oven, microwave, dishwasher",
              "Kettle and blender"
            ]} />

            <Facility title="Entertainment & Family" items={[
              "TV",
              "Pool table",
              "Board games",
              "Children’s books and toys"
            ]} />

            <Facility title="Internet & Workspace" items={[
              "Free high-speed Wi-Fi",
              "Laptop-friendly workspace"
            ]} />

            <Facility title="Heating" items={[
              "Central heating"
            ]} />

            <Facility title="Outdoor & Leisure" items={[
              "Private fenced garden",
              "Outdoor dining area",
              "Hot tub",
              "Lake access nearby"
            ]} />

            <Facility title="Parking & Access" items={[
              "Free parking on premises",
              "Private entrance"
            ]} />

            <Facility title="Safety & Security" items={[
              "Smoke & carbon monoxide alarm",
              "Fire extinguisher"
            ]} />

            <Facility title="Services & Options" items={[
              "Pets allowed",
              "Assistance animals welcome"
            ]} />

            <div className="facility not-included">
              <h4>Not Included</h4>
              <ul>
                <li className="strike">Air conditioning</li>
                <li className="strike">Exterior security cameras</li>
              </ul>
            </div>
          </div>
        </details>

        {/* Parking */}
        <details className="details-item">
          <summary className="details-summary">
            <span>Parking</span>
            <span className="chevron gold">⌄</span>
          </summary>
          <div className="details-content">
            Secure private driveway parking available for up to 3 vehicles.
            Additional street parking nearby.
          </div>
        </details>

      </div>
    </section>

       {/* Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="brand-name">
                WEGO<span className="brand-accent">HOLIDAY</span>
              </span>
              <p className="brand-tagline">
                Luxury Stays &amp; Professional Management
              </p>
            </div>

            <nav className="footer-links">
              <a href="#">Home</a>
              <a href="#">Properties</a>
              <a href="#">Contact</a>
            </nav>
          </div>

          <div className="footer-bottom">
            © 2024 Wego Holiday Homes. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Fixed WhatsApp Widget */}
      <a
        href="https://wa.me/"
        className="whatsapp-widget"
        aria-label="Chat on WhatsApp"
      >
        <div className="whatsapp-tooltip">Chat with us</div>

        <button
          className="whatsapp-button"
          onClick={openWhatsApp}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="#ffffff"
          >
            <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719z" />
          </svg>
        </button>
      </a>

    </div>
  );
}
