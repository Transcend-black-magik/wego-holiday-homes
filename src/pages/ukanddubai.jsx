import React, { useState } from "react";
import "../styles/ukanddubai.css";
import logo from "../assets/new-logo.png";

const UkAndDubaiHomes = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="wego-root antialiased text-neutral-800 bg-white">

      {/* NAVBAR */}
      <nav className="fixed w-full z-50 top-0 left-0 backdrop-blur-md border-b transition-all duration-300 bg-white/90 border-neutral-100">
        <div className="flex h-20 max-w-7xl mx-auto px-6 md:px-12 items-center justify-between">

          {/* Logo */}
          <a href="/" className="logo-wrapper">
            <img
              src={logo}
              alt="Wego Holiday Homes"
              className="logo-image"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="nav-link">Home</a>
          </div>

          {/* Mobile Hamburger */}
          <div
            className={`lg:hidden hamburger ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
          <a href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>
            Home
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative hero-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Luxury Interior"
            className="hero-bg"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content fade-up">
          <span className="hero-badge">
            Professional Short-Term Stays
          </span>

          <h1 className="hero-title">
            Luxury Holiday Homes in <br className="hidden md:block" /> the UK & Dubai
          </h1>

          <p className="hero-subtitle">
            Professionally managed short-term stays in prime UK locations,
            with exclusive Dubai homes launching soon.
          </p>

          <div className="hero-actions">
            <a href="#uk-homes" className="hero-btn light">
              View Available UK Homes
            </a>
            <a href="#dubai-homes" className="hero-btn dark">
              Launching Soon
            </a>
          </div>
        </div>
      </header>

      {/* UK HOMES */}
      <section className="uk-homes" id="uk-homes">
        {/* Header */}
        <div className="uk-header">
          <div>
            <div className="uk-status">
              <span className="pulse-dot" />
              <span className="status-text">Bookable Now</span>
            </div>

            <h2 className="uk-title">Available UK Collection</h2>
            <p className="uk-subtitle">
              Experience the British countryside and city living with our
              premium, ready-to-book properties.
            </p>
          </div>

          {/* Filters (visual only) */}
          <div className="uk-filters">
            <button>All</button>
            <button className="muted">Countryside</button>
            <button className="muted">City</button>
          </div>
        </div>

        {/* Grid */}
        <div className="uk-grid">
          {/* Property Card 1 */}
          <div className="property-card">
            <div className="property-image">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4753a515-77bf-459f-98ca-227ddc8f29b8_1600w.png"
                alt="Wyboston Cottage"
              />
              <span className="property-tag">Wyboston Cottage</span>
            </div>

            <div className="property-body">
              <div className="property-head">
                <h3>The Wyboston Cottage</h3>
                <div className="rating">★ 5.0</div>
              </div>

              <p className="location">Bedfordshire, UK</p>

              <div className="stats">
                <span>8 Guests</span>
                <span>4 Beds</span>
                <span>2 Baths</span>
              </div>

              <ul className="features">
                <li>Private Hot Tub</li>
                <li>Games Room & Pool Table</li>
                <li>Large Private Garden</li>
              </ul>

              <div className="actions">
                <a href="https://api.whatsapp.com/send?phone=+4407404793369&text=Hello!%20I%20want%20to%20inquire%20about%20a%20property." className="btn-outline">
                  Enquire
                </a>
                <a href="https://api.whatsapp.com/send?phone=+4407404793369&text=Hello!%20I%20want%20to%20inquire%20about%20a%20property." className="btn-gold">
                  Book Now
                </a>
              </div>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="property-card muted">
            <div className="property-image">
              <img
                src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7c4422f-7b24-4dc0-8e63-0e3fc6e789f8_800w.png"
                alt="Riverside View"
              />
              <span className="property-tag">London</span>
            </div>

            <div className="property-body">
              <div className="property-head">
                <h3>Riverside View</h3>
                <div className="rating">★ 4.9</div>
              </div>

              <p className="location">London, UK</p>

              <div className="stats">
                <span>5 Guests</span>
                <span>2 Beds</span>
                <span>2 Baths</span>
              </div>

              <ul className="features">
                <li>Skyline Views</li>
                <li>Dedicated Workspace</li>
                <li>Secure Parking</li>
              </ul>

              <div className="actions">
                <a href="https://wa.me/" className="btn-outline">
                  Enquire
                </a>
                <a href="#" className="btn-gold">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="uk-footer">
          Professionally managed. Hotel-grade cleaning. 24/7 guest support.
        </div>
      </section>


      {/* DUBAI HOMES */}
      <section id="dubai-homes" className="dubai-homes">
        <div className="dubai-container">
          {/* Header */}
          <div className="dubai-header">
            <div>
              <div className="dubai-status">
                <span className="gold-dot" />
                <span className="status-text">Launch List Open</span>
              </div>

              <h2 className="dubai-title">
                Dubai Collection
                <span className="coming-soon">(Coming Soon)</span>
              </h2>

              <p className="dubai-subtitle">
                Exclusive residences in Dubai Marina, Downtown, and Palm Jumeirah.
              </p>
            </div>

            <a href="https://wa.me/" className="waitlist-link">
              Join the Waitlist
            </a>
          </div>

          {/* Grid */}
          <div className="dubai-grid">
            {/* Card 1 */}
            <div className="dubai-card">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea904ac2294?q=80&w=2670&auto=format&fit=crop"
                alt="Dubai Marina"
              />

              <div className="overlay" />

              <div className="card-content">
                <div className="content-inner">
                  <span className="badge">Coming Soon</span>
                  <h3>Dubai Marina</h3>
                  <p>
                    Waterfront apartments with stunning skyline views.
                  </p>

                  <a href="https://wa.me/" className="card-btn">
                    Launching Soon →
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="dubai-card">
              <img
                src="https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?q=80&w=2531&auto=format&fit=crop"
                alt="Downtown Dubai"
              />

              <div className="overlay" />

              <div className="card-content">
                <div className="content-inner">
                  <span className="badge">Coming Soon</span>
                  <h3>Downtown Dubai</h3>
                  <p>
                    Luxury stays in the heart of the city.
                  </p>

                  <a href="https://wa.me/" className="card-btn">
                    Launching Soon →
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="dubai-footer">
            Our Dubai holiday homes are launching soon.{" "}
            <a href="https://wa.me/">Register via WhatsApp</a> to be notified first.
          </div>
        </div>
      </section>


      {/* Trust Section */}
      <section className="trust-section">
        <div className="trust-container">
          <div className="trust-header">
            <h2>Why Book with Wego Holiday Homes</h2>
            <div className="trust-divider"></div>
          </div>

          <div className="trust-grid">
            {/* Item 1 */}
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                </svg>
              </div>
              <h3>Curated Homes</h3>
              <p>Hand-picked properties for quality and comfort.</p>
            </div>

            {/* Item 2 */}
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  <rect width="20" height="14" x="2" y="6" rx="2" />
                </svg>
              </div>
              <h3>Pro Management</h3>
              <p>Seamless experiences managed by professionals.</p>
            </div>

            {/* Item 3 */}
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </div>
              <h3>Hotel-Grade Clean</h3>
              <p>Fresh linen, toiletries, and spotless standards.</p>
            </div>

            {/* Item 4 */}
            <div className="trust-item">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="11" x="3" y="11" rx="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </div>
              <h3>Secure Booking</h3>
              <p>Safe payment process and transparent terms.</p>
            </div>

            {/* Item 5 */}
            <div className="trust-item trust-item-wide">
              <div className="trust-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h3>Guest Support</h3>
              <p>Responsive communication for peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="final-cta-container">
          <h2>Plan Your Stay with Confidence</h2>

          <div className="final-cta-actions">
            <a href="https://api.whatsapp.com/send?phone=+4407404793369&text=Hello!%20I%20want%20to%20inquire%20about%20a%20property." className="cta-primary">
              Book a UK Holiday Home
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=+4407404793369&text=Hello!%20I%20want%20to%20inquire%20about%20a%20property."
              className="cta-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Launch List
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">
            <span className="footer-logo">
              WEGO<span className="highlight">HOLIDAY HOMES</span>
            </span>
            <p className="footer-tagline">Luxury Short-Term Rentals</p>
          </div>

          {/* Navigation */}
          <nav className="footer-nav">
            <a href="#uk-homes">UK Homes</a>
            <a href="#dubai-homes">Dubai</a>
            <a
              href="https://api.whatsapp.com/send?phone=+4407404793369&text=Hello!%20I%20want%20to%20inquire%20about%20a%20property."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div className="footer-copy">
            © 2024 Wego Holiday Homes.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default UkAndDubaiHomes;
