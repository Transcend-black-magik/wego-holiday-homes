import React, { useEffect, useState, } from "react";
import "./wego.css";
import logoImage from "./assets/new-logo.png";
import { useNavigate } from "react-router-dom";

const WegoHolidayHomes = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [waText, setWaText] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileOpen(!mobileOpen);
  };
  const handleSearch = () => {
    navigate("/ukanddubai");
  };

  useEffect(() => {
    // Optional: initialize icon library if used globally
    window.lucide?.createIcons();
  }, []);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      userPhone: e.target.userPhone.value,
      location: e.target.location.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        "https://sendinquiry-ai4vdesxhq-uc.a.run.app",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        e.target.reset();
      } else {
        setSuccess(false);
      }
    } catch (err) {
      console.error(err);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="app-root">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo as Image */}
          <a href="#home" className="logo">
            <img
              src={logoImage} // replace with your actual logo path
              alt="Wego Holiday Homes Logo"
              className="logo-img"
            />
          </a>

          {/* Desktop Menu */}
          <div className="menu-desktop">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#landlords">Landlords</a>
            <a href="#pricing">Pricing</a>
            <a href="/ukanddubai">Book a Stay</a>
            <a href="#contact" className="btn-consultation">
              Consultation
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="menu-mobile-icon" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="menu-icon"
              viewBox="0 0 24 24"
            >
              <path d="M4 5h16"></path>
              <path d="M4 12h16"></path>
              <path d="M4 19h16"></path>
            </svg>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="menu-mobile">
              <a href="#about" onClick={toggleMobileMenu}>About</a>
              <a href="#services" onClick={toggleMobileMenu}>Services</a>
              <a href="#landlords" onClick={toggleMobileMenu}>Landlords</a>
              <a href="#pricing" onClick={toggleMobileMenu}>Pricing</a>
              <a href="#guest-booking" onClick={toggleMobileMenu}>Book a Stay</a>
              <a href="#contact" className="btn-consultation" onClick={toggleMobileMenu}>
                Consultation
              </a>
            </div>
          )}
        </div>
      </nav>


      {/* Hero */}
      <header id="home" className="hero">
        {/* Background */}
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1673563932832-a0c9e0ed26f8?w=2560&q=80"
            alt="Dubai Holiday Home Management Services for Landlords"
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>

        {/* Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            High-Yield Dubai Holiday Home <br /> Management for <span class="text-gradient-gold italic pr-1">Landlords &amp; Investors</span>
          </h1>
          <p className="hero-subtitle">
            Hands-off short-term rental management delivering higher returns, full DTCM compliance, and professional hospitality across Dubai.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              GET YOUR ROI ASSESSMENT
            </a>
            <a href="#contact" className="btn-secondary">
              SCHEDULE A PRIVATE CONSULTATION
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="trust-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="trust-icon"
                viewBox="0 0 24 24"
              >
                <path d="M10 12h4"></path>
                <path d="M10 8h4"></path>
                <path d="M14 21v-3a2 2 0 0 0-4 0v3"></path>
                <path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path>
                <path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path>
              </svg>
              <span>DTCM Licensed</span>
            </div>

            <div className="trust-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="trust-icon"
                viewBox="0 0 24 24"
              >
                <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
              <span>High Yield ROI</span>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="about-section">
        <div className="about-container">
          {/* Story */}
          <div className="about-story">
            <div className="about-text">
              <h2 className="about-eyebrow">Our Story</h2>

              <h3 className="about-title">
                A trusted holiday home management company in Dubai.
              </h3>

              <p className="about-paragraph">
                Wego Holiday Homes was founded on a simple premise: luxury
                properties deserve luxury management. We are experienced Dubai
                co-hosting experts who bridge the gap between premium hospitality
                and high-yield property investment.
              </p>

              <p className="about-paragraph">
                We specialise in holiday home compliance and licensing support
                Dubai landlords and investors need to navigate the market safely.
                Our mission is to provide landlord-focused short-term rental
                services that are transparent, legal, and exceptionally
                profitable.
              </p>
            </div>

            <div className="about-image-wrapper">
              <img
                src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2000&auto=format&fit=crop"
                alt="Luxury Dubai Interior"
              />
            </div>
          </div>

          {/* Founder */}
          <div className="founder-card">
            <div className="founder-grid">
              <div className="founder-image">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5be8a28e-48fd-4e85-8769-5c6c15a8141a_800w.jpg"
                  alt="Nwaego Muoma - Founder of Wego Holiday Homes"
                />
              </div>

              <div className="founder-content">
                <h4 className="founder-eyebrow">The Founder</h4>
                <h2 className="founder-name">Nwaego Muoma</h2>

                <p className="founder-description">
                  With a distinguished background in property investment and
                  creative entrepreneurship, Nwaego Muoma established Wego
                  Holiday Homes to redefine the standards of short-term rentals in
                  the UAE. Her approach combines rigorous data analytics with an
                  artist&apos;s eye for interior styling, ensuring every property
                  not only performs financially but captivates guests emotionally.
                </p>

                <blockquote className="founder-quote">
                  “Real estate in Dubai is world-class; the management behind it
                  should be too. We don&apos;t just host; we curate experiences
                  that drive revenue.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services-section">
        <div className="services-container">
          {/* Header */}
          <div className="services-header">
            <h2 className="services-eyebrow">Our Expertise</h2>

            <h3 className="services-title">
              End-to-End Holiday Home Management Dubai
            </h3>

            <p className="services-subtitle">
              Comprehensive solutions for the modern landlord.
            </p>
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" />
                  <path d="m21 2-9.6 9.6" />
                  <circle cx="7.5" cy="15.5" r="5.5" />
                </svg>
              </div>
              <h4>Dubai Airbnb Co-Hosting Services</h4>
              <p>
                A complete hands-off approach. We manage the listing, the guests,
                and the operations while you enjoy the passive income through our
                revenue share model.
              </p>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
                  <path d="M14 2v5a1 1 0 0 0 1 1h5" />
                  <path d="m9 15 2 2 4-4" />
                </svg>
              </div>
              <h4>Licensing &amp; Onboarding</h4>
              <p>
                Seamless property onboarding and licensing for holiday homes in
                Dubai. We handle all DTCM permit applications to ensure full
                compliance.
              </p>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <h4>24/7 Guest Communication</h4>
              <p>
                Professional guest communication service. From inquiry to
                check-out, our multilingual team handles every question instantly.
              </p>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
                  <path d="M20 2v4" />
                  <path d="M22 4h-4" />
                  <circle cx="4" cy="20" r="2" />
                </svg>
              </div>
              <h4>Cleaning &amp; Linen</h4>
              <p>
                Premium holiday home cleaning and housekeeping service. Hotel-grade
                linens and toiletries provided for every stay.
              </p>
            </div>

            {/* Service 5 */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 7h6v6" />
                  <path d="m22 7-8.5 8.5-5-5L2 17" />
                </svg>
              </div>
              <h4>Dynamic Pricing</h4>
              <p>
                Advanced dynamic pricing and revenue management algorithms that
                adjust rates daily based on demand, events, and seasonality.
              </p>
            </div>

            {/* Service 6 */}
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
                  <path d="M5 18v2" />
                  <path d="M19 18v2" />
                </svg>
              </div>
              <h4>Short-Let Property Setup</h4>
              <p>
                Expert short-let property setup service. We advise on interior
                styling to make your property irresistible to high-value guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Landlords */}
      <section id="landlords" className="landlords-section">
        {/* Background Image */}
        <div className="landlords-bg" />

        <div className="landlords-container">
          <div className="landlords-grid">
            {/* Left Content */}
            <div className="landlords-content">
              <h2 className="landlords-eyebrow">For Property Owners</h2>

              <h3 className="landlords-title">
                Maximise Rental Income with <br />
                Dubai Short-Term Rentals
              </h3>

              <p className="landlords-description">
                Why lock your asset into a fixed annual contract? Holiday home
                management for Dubai landlords and investors typically yields
                20–40% higher returns than long-term leasing. We provide a
                hands-off hosting solution for Dubai landlords who value
                performance.
              </p>

              <div className="landlords-benefits">
                <div className="benefit">
                  <span className="benefit-bar" />
                  <div>
                    <h4>Higher Yields</h4>
                    <p>
                      Capitalize on Dubai&apos;s peak tourism seasons with
                      flexible pricing.
                    </p>
                  </div>
                </div>

                <div className="benefit">
                  <span className="benefit-bar" />
                  <div>
                    <h4>Property Care</h4>
                    <p>
                      Frequent professional cleaning means your asset stays in
                      showroom condition.
                    </p>
                  </div>
                </div>

                <div className="benefit">
                  <span className="benefit-bar" />
                  <div>
                    <h4>Owner Flexibility</h4>
                    <p>
                      Block dates for your own personal use whenever you need.
                    </p>
                  </div>
                </div>
              </div>

              <div className="landlords-cta">
                <a href="#contact">Book a Consultation</a>
              </div>
            </div>

            {/* Commercial Case */}
            <div className="commercial-card">
              <h4>The Commercial Case</h4>

              <div className="case-block">
                <div className="case-row">
                  <span>Average Long-Term Rent</span>
                  <strong>100%</strong>
                </div>
                <div className="progress-track">
                  <div className="progress-fill full" />
                </div>
              </div>

              <div className="case-highlight">
                <div className="case-row">
                  <span className="gold">
                    Wego Holiday Homes Short-Term Projected
                  </span>
                  <strong className="gold">135%</strong>
                </div>
                <div className="progress-track">
                  <div className="progress-fill gold-fill" />
                </div>
                <p className="case-note">
                  *Based on average performance of 1BR apartments in Dubai Marina
                  vs standard yearly contracts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works*/}
      <section className="how-section">
        <div className="how-container">
          {/* HOW IT WORKS */}
          <div className="how-steps">
            <div className="how-header">
              <h2 className="how-eyebrow">The Process</h2>
              <h3 className="how-title">How We Work</h3>
            </div>

            <div className="steps-grid">
              <div className="step">
                <span className="step-number">01</span>
                <h4>Consultation</h4>
                <p>
                  We inspect your property and provide a detailed revenue
                  projection.
                </p>
              </div>

              <div className="step">
                <span className="step-number">02</span>
                <h4>Setup &amp; License</h4>
                <p>
                  We handle DTCM licensing, photography, and interior staging.
                </p>
              </div>

              <div className="step">
                <span className="step-number">03</span>
                <h4>Go Live</h4>
                <p>
                  Your listing goes live on Airbnb, Booking.com, and our direct
                  channels.
                </p>
              </div>

              <div className="step">
                <span className="step-number">04</span>
                <h4>Monthly Income</h4>
                <p>
                  Guests stay, you get paid. Receive detailed monthly performance
                  reports.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="faq">
            <h3 className="faq-title">Frequently Asked Questions</h3>

            <div className="faq-list">
              <details open>
                <summary>
                  How do I license a holiday home in Dubai?
                  <span className="faq-icon">+</span>
                </summary>
                <p>
                  We handle the entire process. We register your unit with the
                  DTCM (Department of Tourism and Commerce Marketing), arrange the
                  permits, and ensure the property meets all safety and
                  classification standards.
                </p>
              </details>

              <details open>
                <summary>
                  What are your management fees?
                  <span className="faq-icon">+</span>
                </summary>
                <p>
                  We operate on a transparent percentage-based model, typically
                  ranging between 15% and 20% of the booking revenue depending on
                  the service level.
                </p>
              </details>

              <details open>
                <summary>
                  How do you screen guests?
                  <span className="faq-icon">+</span>
                </summary>
                <p>
                  We use strict vetting protocols, checking guest reviews,
                  requiring verified ID upon booking, and collecting security
                  deposits.
                </p>
              </details>

              <details open>
                <summary>
                  Can I use the property myself?
                  <span className="faq-icon">+</span>
                </summary>
                <p>
                  Absolutely. As the owner, you have access to the calendar and
                  can block out dates for personal use whenever you wish.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>


      {/* Pricing */}
      <section id="pricing" className="pricing-section">
        <div className="pricing-container">
          {/* Header */}
          <div className="pricing-header">
            <h2 className="pricing-eyebrow">Investment</h2>
            <h3 className="pricing-title">
              Transparent Holiday Home Management Fees
            </h3>
            <p className="pricing-subtitle">
              Affordable Airbnb management Dubai with a clear model.
            </p>
          </div>

          {/* Plans */}
          <div className="pricing-grid">
            {/* Plan 1 */}
            <div className="pricing-card">
              <h4>Essential Co-Hosting</h4>
              <div className="price">
                15% <span>/booking</span>
              </div>

              <ul>
                <li>Listing Optimization</li>
                <li>Guest Communication</li>
                <li>Calendar Sync</li>
              </ul>

              <a href="#contact" className="btn-outline">
                Inquire
              </a>
            </div>

            {/* Plan 2 – Featured */}
            <div className="pricing-card featured">
              <span className="badge">Recommended</span>
              <h4>Full Management</h4>
              <div className="price">
                20% <span>/booking</span>
              </div>

              <ul>
                <li>All Essential Features</li>
                <li>Housekeeping &amp; Linen</li>
                <li>Maintenance Coordination</li>
              </ul>

              <a href="#contact" className="btn-primary">
                Get Started
              </a>
            </div>

            {/* Plan 3 */}
            <div className="pricing-card">
              <h4>Portfolio</h4>
              <div className="price">Custom</div>

              <ul>
                <li>Dedicated Account Manager</li>
                <li>Portfolio Strategy</li>
                <li>Consolidated Reporting</li>
              </ul>

              <a href="#contact" className="btn-outline">
                Contact Us
              </a>
            </div>
          </div>

          {/* Footer Link */}
          <div className="pricing-footer">
            <a href="#contact">Request a Free ROI Projection</a>
          </div>
        </div>
      </section>

      {/* Guest Booking Section */}
      <section id="guest-booking" className="guest-booking">
        <div className="guest-booking-container">
          <div className="guest-booking-grid">
            {/* Booking Widget */}
            <aside className="booking-widget">
              <div className="booking-card">
                <h3>Book Your Stay</h3>

                <form className="booking-form">
                  <div>
                    <label>Check In</label>
                    <input type="date" />
                  </div>

                  <div>
                    <label>Check Out</label>
                    <input type="date" />
                  </div>

                  <div>
                    <label>Guests</label>
                    <select>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4+ Guests</option>
                    </select>
                  </div>

                  <button type="button" onClick={handleSearch}>Search Availability</button>
                </form>

                <div className="guest-services">
                  <h4>Guest Services</h4>
                  <ul>
                    <li>High-Speed Wifi</li>
                    <li>Nespresso Machines</li>
                    <li>Hotel-grade Linen</li>
                  </ul>
                </div>
              </div>
            </aside>

            {/* Featured Stays */}
            <div className="featured-stays">
              <h3>Featured Collections</h3>

              <div className="featured-grid">
                <div className="featured-card">
                  <div className="image-wrapper">
                    <img
                      src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/369d88d8-45b3-45d0-8c59-a313093cf3bb_800w.jpg"
                      alt="Dubai Marina View"
                    />
                    <span className="tag">MARINA</span>
                  </div>
                  <h4>Waterfront Luxury</h4>
                  <p>
                    Dubai holiday home booking in the heart of the Marina.
                  </p>
                </div>

                <div className="featured-card">
                  <div className="image-wrapper">
                    <img
                      src="https://images.unsplash.com/photo-1597659840241-37e2b9c2f55f?q=80&w=1000&auto=format&fit=crop"
                      alt="Downtown Dubai"
                    />
                    <span className="tag">DOWNTOWN</span>
                  </div>
                  <h4>Burj Khalifa Views</h4>
                  <p>
                    Book short stay Dubai near the fountains and mall.
                  </p>
                </div>
              </div>

              <div className="house-rules">
                <h4>House Rules &amp; Check-in</h4>
                <p>
                  Standard check-in is from 3:00 PM and check-out is by 11:00 AM.
                  All guests must provide valid ID prior to arrival in compliance
                  with DTCM regulations.
                </p>
                <a href="#">Read Full Guest Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section.jsx */}
      <section id="insights" className="blog-insights">
        <div className="blog-container">
          <div className="blog-header">
            <h2 className="blog-title">Insights</h2>

            <a href="/insights" className="insights-read-more">
              Read More
            </a>
          </div>
          <div className="blog-grid">
            {/* Article 1 */}
            <article className="blog-card">
              <div className="blog-image">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f9fede5e-d294-4aa4-9166-a5b549a92c31_800w.jpg"
                  alt="Dubai Documents"
                />
              </div>

              <span className="blog-category">Licensing</span>
              <h3>How to license a holiday home in Dubai</h3>
              <p>
                Dubai holiday home rules and penalties explained for new investors
                entering the market.
              </p>
            </article>

            {/* Article 2 */}
            <article className="blog-card">
              <div className="blog-image">
                <img
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/47e7fab7-32b2-49ba-aa27-70207079bdf3_800w.jpg"
                  alt="Dubai Map"
                />
              </div>

              <span className="blog-category">Locations</span>
              <h3>Best areas in Dubai for short-term rentals</h3>
              <p>
                Dubai Airbnb profitability guide 2025: Analyzing yield across key
                districts.
              </p>
            </article>

            {/* Article 3 */}
            <article className="blog-card">
              <div className="blog-image">
                <img
                  src="https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=1000&auto=format&fit=crop"
                  alt="Revenue Chart"
                />
              </div>

              <span className="blog-category">Revenue</span>
              <h3>Transition from long let to short let</h3>
              <p>
                How landlords can transition from long let to short let in Dubai to
                maximize yield.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-grid">
            {/* Left Column */}
            <div className="contact-info">
              <h2 className="subheading">Get in Touch</h2>
              <h3 className="heading">
                Speak to a Dubai Holiday <br /> Home Expert
              </h3>
              <p className="description">
                Ready to increase your yields? Contact holiday home management Dubai
                specialists today. We offer a complimentary Dubai short-term rental
                consultation to assess your property's potential.
              </p>

              <div className="info-items">
                <div className="info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>
                    <h4>Office</h4>
                    <p>Dubai, UAE</p>
                  </div>
                </div>

                <div className="info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <div>
                    <h4>Phone</h4>
                    <p>+971 52 639 0199</p>
                  </div>
                </div>

                <div className="info-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                  </svg>
                  <div>
                    <h4>Email</h4>
                    <p>info@wegoholidayhomes.com</p>
                  </div>
                </div>
              </div>

              <div className="map-placeholder">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="map-icon"
                  >
                    <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path>
                    <path d="M15 5.764v15"></path>
                    <path d="M9 3.236v15"></path>
                  </svg>{" "}
                  View on Map
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="contact-form">
              <h4 className="form-title">Request Free ROI Estimate</h4>
              <form onSubmit={handleSubmit} className="form-grid">
                <div className="grid-2">
                  <div>
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name" required />
                  </div>
                  <div>
                    <label>Phone</label>
                    <input type="tel" name="userPhone" placeholder="+971 ..." />
                  </div>
                </div>

                <div>
                  <label>Email</label>
                  <input type="email" name="email" placeholder="email@address.com" required />
                </div>

                <div>
                  <label>Property Location</label>
                  <input type="text" name="location" placeholder="Dubai Marina, Downtown, etc." />
                </div>

                <div>
                  <label>Message</label>
                  <textarea name="message" rows="3" placeholder="Tell us about your property..."></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Sending..." : "Submit Inquiry"}
                </button>
                {success === true && <p className="success-msg">Inquiry sent successfully!</p>}
                {success === false && <p className="error-msg">Failed to send inquiry.</p>}

                <div className="note">
                  <p>
                    Note: This form will open WhatsApp to send the details directly to our team.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Logo & Copyright */}
          <div className="footer-logo">
            <span className="logo-text">
              Wego Holiday <span className="highlight">Homes</span>
            </span>
            <p>© 2025. All rights reserved.</p>
          </div>

          {/* Links */}
          <div className="footer-links">
            <a href="/insights">Blog</a>
            <a href="#">Terms</a>
            <a href="#">Sitemap</a>
          </div>

          {/* Social Icons */}
          <div className="footer-social">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/wegoholidayhomes?igsh=cTNpeGo0azZycncz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/wegoholidayhomes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>


      {/* WhatsApp Floating Chat Button */}
      <a
        href="https://api.whatsapp.com/send?phone=+4407404793369&text=Hello!%20I%20want%20to%20inquire%20about%20a%20property."
        className="whatsapp-btn"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="whatsapp-icon"
          viewBox="0 0 24 24"
        >
          <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
        </svg>
      </a>
    </div>
  );
};

export default WegoHolidayHomes;
