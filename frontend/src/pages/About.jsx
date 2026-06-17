import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowLeft, Users, Target, Heart, Zap, CheckCircle2 } from "lucide-react";

function About() {
  const navigate = useNavigate();
  const [activeValue, setActiveValue] = useState(0);

  const differentiationValues = [
    {
      title: "Over-reliance on OCR",
      shortDesc: "Moving beyond pure machine extraction for reliability.",
      content: "Competitors rely exclusively on Optical Character Recognition (OCR) for data extraction; when OCR fails, data integrity is compromised. HextractDocs mitigates this via a hybrid model. By integrating human oversight, an advanced annotation system, and diverse OCR methodologies, we deploy trained annotators to guarantee maximum data accuracy."
    },
    {
      title: "Operational Inflexibility",
      shortDesc: "Dedicated service tailored to your exact pipeline.",
      content: "Competitors license rigid software products. HextractDocs provides a dedicated service. Through continuous collaborative support, we tailor the extraction pipeline to meet exactly what our clients need."
    },
    {
      title: "Physical Document Ingestion",
      shortDesc: "Complete management of your physical archive.",
      content: "For local businesses, we manage the entire lifecycle of physical documents—including scanning, storage, and secure data transfer—allowing clients to focus more on their products."
    },
    {
      title: "Opaque Data Security",
      shortDesc: "Absolute transparency and security warranties.",
      content: "Standard services require off-site document uploads, obscuring storage, processing, and utilization protocols (often exposing sensitive data to external LLMs). HextractDocs operates with absolute transparency. We provide complete visibility into our data storage, processing architecture, and annotation protocols, backed by comprehensive service warranties."
    }
  ];

  // Scroll animation refs
  const storyRef = useScrollAnimation();
  const valueRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const reasonsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const footerRef = useScrollAnimation();

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="Main Navigation">
            <div className="logo" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              <CheckCircle2 size={24} style={{ color: "var(--accent-color)" }} />
              <span>HextractDocs</span>
            </div>
            <ul className="nav-links">
              <li>
                <button 
                  className="nav-back-btn" 
                  onClick={() => navigate("/")}
                  aria-label="Back to home page"
                >
                  <ArrowLeft size={16} /> Back
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="about-header-section scroll-animate" ref={storyRef}>
        <div className="container">
          <div className="about-header-grid">
            <div className="about-header-left">
              <span className="breadcrumbs" style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                Home / <span className="breadcrumbs-highlight" style={{ color: "var(--accent-color)", fontWeight: 500 }}>About</span>
              </span>
              <h1 style={{ marginTop: "8px" }}>Focus on Your Products, We'll Handle the Data.</h1>
              <p>
                HextractDocs was founded with a simple mission: to eliminate the tedious, error-prone process of manual document entry. We realized that thousands of businesses spend countless hours converting physical and digital documents into formats their systems can understand.
              </p>
              <p>
                What started as a small team of document processing experts has grown into an industry leader, trusted by over 500 companies to handle millions of documents. We combine cutting-edge OCR technology with human expertise to deliver unmatched accuracy and reliability.
              </p>
            </div>
            <div className="about-header-right">
              <div className="about-feature-box">
                <h3>About HextractDocs</h3>
                <p>
                  Transforming how businesses handle documents through intelligent extraction and AI-ready formatting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Section */}
      <section className="page-section scroll-animate" ref={valueRef}>
        <div className="container">
          <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-md)" }}>What Do We Solve?</h2>
          <p style={{ textAlign: "center", maxWidth: "650px", margin: "0 auto var(--spacing-xl) auto" }}>
            HextractDocs exists to transform digital and physical documents into the precise machine-readable formats required by client systems. We resolve the following industry limitations:
          </p>
          
          <div className="solving-switcher">
            <div className="solving-nav">
              {differentiationValues.map((val, index) => (
                <button 
                  key={index}
                  className={`solving-nav-item ${activeValue === index ? 'active' : ''}`}
                  onClick={() => setActiveValue(index)}
                  role="tab"
                  aria-selected={activeValue === index}
                >
                  <h4>{val.title}</h4>
                  <p>{val.shortDesc}</p>
                </button>
              ))}
            </div>
            
            <div className="solving-panel-content" key={activeValue}>
              <h3>{differentiationValues[activeValue].title}</h3>
              <p>{differentiationValues[activeValue].content}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="page-section scroll-animate" ref={missionRef} style={{ background: "var(--bg-secondary)" }}>
        <div className="container">
          <div className="core-values-grid">
            <div className="value-card-flat">
              <Target strokeWidth={1.5} size={32} aria-hidden="true" />
              <h3>Our Mission</h3>
              <p>
                To empower businesses by automating document extraction and freeing teams to focus on what truly matters—growing their business.
              </p>
            </div>
            <div className="value-card-flat">
              <Zap strokeWidth={1.5} size={32} aria-hidden="true" />
              <h3>Our Vision</h3>
              <p>
                A world where no business wastes time on manual data entry, and every document is instantly ready for AI integration.
              </p>
            </div>
            <div className="value-card-flat">
              <Users strokeWidth={1.5} size={32} aria-hidden="true" />
              <h3>Our Commitment</h3>
              <p>
                24/7 support, continuous innovation, and a 100% accuracy guarantee on every document we process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="page-section scroll-animate" ref={reasonsRef}>
        <div className="container">
          <div className="section-header-center">
            <h2>Why Choose HextractDocs?</h2>
            <p>We are not just a service provider—we are your partner in transforming how you handle documents.</p>
          </div>
          
          <div className="reasons-layout">
            {/* Column 1: Full Height */}
            <div className="reason-box-full">
              <div>
                <span className="reason-number" style={{ display: "block" }}>01</span>
                <h3 style={{ fontSize: "1.25rem", margin: "12px 0 8px" }}>100% Accuracy Guarantee</h3>
              </div>
              <p>Every single document field is verified by human experts to ensure zero errors in production delivery.</p>
            </div>

            {/* Column 2: Stack of 2 */}
            <div className="reason-box-stack">
              <div className="reason-box-mini">
                <h4>02. Hybrid Tech</h4>
                <p>Advanced OCR algorithms merged seamlessly with human-in-the-loop annotations.</p>
              </div>
              <div className="reason-box-mini">
                <h4>03. AI-Ready Outputs</h4>
                <p>Precise data formatting ready to feed directly into your custom LLMs or databases.</p>
              </div>
            </div>

            {/* Column 3: Stack of 3 */}
            <div className="reason-box-stack">
              <div className="reason-box-mini">
                <h4>24/7 Service</h4>
                <p>Continuous client support across all operational timezones.</p>
              </div>
              <div className="reason-box-mini">
                <h4>Physical Scanning</h4>
                <p>Complete handling of legacy paper archives.</p>
              </div>
              <div className="reason-box-mini">
                <h4>Scale-Ready</h4>
                <p>Flexible volume-based rates matching your load.</p>
              </div>
            </div>

            {/* Column 4: Full Height Highlight */}
            <div className="reason-box-full highlighted-box">
              <div>
                <Heart size={32} style={{ marginBottom: "12px" }} aria-hidden="true" />
                <h3 style={{ fontSize: "1.25rem", margin: "0 0 8px" }}>Proven & Tested</h3>
              </div>
              <p>Our commitment to precision has made us the preferred partner for document-heavy enterprises globally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner scroll-animate" ref={ctaRef}>
        <div className="container">
          <div className="cta-banner-content">
            <h2>Let's Transform Your Documents Together</h2>
            <p>Join hundreds of companies that trust HextractDocs with their document processing needs.</p>
            <button className="button" onClick={() => navigate("/")}>Get Started Today</button>
          </div>
        </div>  
      </section>

      {/* Footer */}
      <footer ref={footerRef}>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h4>HextractDocs</h4>
              <p>Grounded document annotation services combining deep OCR automation with expert human review.</p>
            </div>
            
            <div className="footer-col">
              <h5>Product</h5>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Resources</h5>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Specs</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Legal</h5>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">GDPR</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 HextractDocs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
