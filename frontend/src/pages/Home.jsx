import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Phone,
  FileText,
  DollarSign,
  Cog,
  Send,
  Layers,
  HardDrive,
  Moon,
  Sun,
} from "lucide-react";

function Home() {
  const [theme, setTheme] = useState("light");
  const navigate = useNavigate();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="app">
      {/* Header & Navigation */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">HextractDocs</div>
            <ul className="nav-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#features">Process</a>
              </li>
              <li>
                <a href="#pricing">Metrics</a>
              </li>
              <li>
                <button 
                  className="nav-link-btn"
                  onClick={() => navigate("/about")}
                >
                  About
                </button>
              </li>
              <li>
                <a href="#footer">Contact</a>
              </li>
            </ul>
            <button className="theme-toggle" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon strokeWidth={1.5} size={24} />
              ) : (
                <Sun strokeWidth={1.5} size={24} />
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Document extraction that works 100% of the time</h1>
          <p className="subtitle">
            We will tranform your physical and digital documents to exactly 
            how your business need it to be. Worry about your product, let's handle the rest.
          </p>
          <div className="cta-buttons">
            <button className="button">Book a Demo</button>
            <button className="button button-secondary">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <div className="container">
          <h2>Trusted by Industry Leaders</h2>
          <div className="partners-scroll">
            <div className="partners-track">
              <div className="partner-logo">🏢 TechCorp</div>
              <div className="partner-logo">🏛️ FinanceHub</div>
              <div className="partner-logo">🏥 HealthCare Plus</div>
              <div className="partner-logo">📚 EduVision</div>
              <div className="partner-logo">🛒 RetailGlobal</div>
              <div className="partner-logo">⚖️ LegalFirst</div>
              <div className="partner-logo">🏭 Manufacturing Co</div>
              <div className="partner-logo">🚗 AutoMotion</div>

              <div className="partner-logo">🏢 TechCorp</div>
              <div className="partner-logo">🏛️ FinanceHub</div>
              <div className="partner-logo">🏥 HealthCare Plus</div>
              <div className="partner-logo">📚 EduVision</div>
              <div className="partner-logo">🛒 RetailGlobal</div>
              <div className="partner-logo">⚖️ LegalFirst</div>
              <div className="partner-logo">🏭 Manufacturing Co</div>
              <div className="partner-logo">🚗 AutoMotion</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2>Services We Offer</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <Layers strokeWidth={1.5} size={50} />
              </div>
              <h3>Physical Extraction</h3>
              <p>
                Trust us with your physical documents and we will handle the rest.
                We'll receive, scan, extract, and convert them to the exact format your business needs.
              </p>
              <button 
                className="button button-secondary"
                onClick={() => navigate("/services")}
              >
                Learn More
              </button>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <HardDrive strokeWidth={1.5} size={50} />
              </div>
              <h3>Digital Extraction</h3>
              <p>
                Already have digital documents? Great, send us a copy and 
                we'll extract and convert them to be ready for you to integrate 
                to your business.
              </p>
              <button 
                className="button button-secondary"
                onClick={() => navigate("/services")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics" id="pricing">
        <div className="container">
          <h2>Our Impact by the Numbers</h2>
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-number">500+</div>
              <p className="metric-label">Partnered Companies</p>
              <p className="metric-description">
                Trusted by leading organizations across industries
              </p>
            </div>
            <div className="metric-card">
              <div className="metric-number">2.5M+</div>
              <p className="metric-label">Documents Translated</p>
              <p className="metric-description">
                Successfully converted to AI-ready format
              </p>
            </div>
            <div className="metric-card">
              <div className="metric-number">99.8%</div>
              <p className="metric-label">Accuracy Rate</p>
              <p className="metric-description">
                Industry-leading precision in extraction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Process Section */}
      <section className="process" id="features">
        <div className="container">
          <h2>Our Agreement Process</h2>
          <div className="timeline-container">
            <div className="timeline">
              <div className="timeline-step timeline-left">
                <div className="timeline-content">
                  <div className="step-icon">
                    <Phone strokeWidth={1.5} size={40} />
                  </div>
                  <h3>Initial Meeting</h3>
                  <p>
                    We understand your unique document translation needs and
                    business requirements during our consultation.
                  </p>
                </div>
                <div className="timeline-marker">1</div>
              </div>
              <div className="timeline-step timeline-right">
                <div className="timeline-content">
                  <div className="step-icon">
                    <DollarSign strokeWidth={1.5} size={40} />
                  </div>
                  <h3>Cost & Timeline</h3>
                  <p>
                    Receive a detailed cost estimate and project timeline based
                    on your document volume and complexity.
                  </p>
                </div>
                <div className="timeline-marker">3</div>
              </div>
              <div className="timeline-step timeline-left">
                <div className="timeline-marker">4</div>
                <div className="timeline-content">
                  <div className="step-icon">
                    <Cog strokeWidth={1.5} size={40} />
                  </div>
                  <h3>Extraction</h3>
                  <p>
                    We extract and process your documents using a hybrid of 
                    OCR and manual annotation to ensure 100% accuracy.
                  </p>
                </div>
              </div>
              <div className="timeline-step timeline-right">
                <div className="timeline-content">
                  <div className="step-icon">
                    <Send strokeWidth={1.5} size={40} />
                  </div>
                  <h3>Delivery</h3>
                  <p>
                    Receive your documents in the format you requested,
                    ready for integration.
                  </p>
                </div>
                <div className="timeline-marker">5</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis Section */}
      <section className="competitor-analysis">
        <div className="container">
          <h2>Why Choose HextractDocs?</h2>
          <p className="section-subtitle">
            Compare us with other document extraction services
          </p>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="feature-col"><span style={{color: "white"}}>Features</span></div>
              <div className="provider-col"><span style={{color: "white"}}>HextractDocs</span></div>
              <div className="provider-col">Competitor A</div>
              <div className="provider-col">Competitor B</div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">AI-Ready Format</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Hybrid OCR + Manual Annotation</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">100% Accuracy Guarantee</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Physical Document Support</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Digital Document Support</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">24 hour client support</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Free Initial Consultation</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
            </div>  
            <div className="comparison-row">
              <div className="feature-col">Philippines-Based Support</div>
              <div className="provider-col"><span className="checkmark">✓</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
              <div className="provider-col"><span className="cross">✕</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Documents?</h2>
          <p>
            Let us handle your documents so you only worry about your product. Get a
            free consultation and cost estimate today.
          </p>
          <button className="button">Schedule Your Meeting</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#pricing">Pricing</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
                <li>
                  <a href="#">Roadmap</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>
                  <button 
                    className="footer-link-btn"
                    onClick={() => navigate("/about")}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li>
                  <a href="#">Documentation</a>
                </li>
                <li>
                  <a href="#">API Reference</a>
                </li>
                <li>
                  <a href="#">Community</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Cookie Policy</a>
                </li>
                <li>
                  <a href="#">GDPR</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              &copy; 2026 HextractDocs. All rights reserved. Transforming
              Documents, Enabling AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
