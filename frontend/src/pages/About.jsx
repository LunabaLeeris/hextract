import { useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Target, Heart, Zap } from "lucide-react";

function About() {
  const navigate = useNavigate();

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">HextractDocs</div>
            <ul className="nav-links">
              <li>
                <button 
                  className="nav-back-btn" 
                  onClick={() => navigate("/")}
                >
                  <ArrowLeft size={20} /> Back
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="page-hero">
        <div className="container">
          <h1>About HextractDocs</h1>
          <p className="subtitle">
            Transforming how businesses handle documents through intelligent extraction and AI-ready formatting
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="page-section">
        <div className="container">
          <h2>Our Story</h2>
          <p className="section-text">
            HextractDocs was founded with a simple mission: to eliminate the tedious, error-prone process of manual document entry. We realized that thousands of businesses spend countless hours converting physical and digital documents into formats their systems can understand.
          </p>
          <p className="section-text">
            What started as a small team of document processing experts has grown into an industry leader, trusted by over 500 companies to handle millions of documents. We combine cutting-edge OCR technology with human expertise to deliver unmatched accuracy and reliability.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="page-section">
        <div className="container">
          <div className="mission-grid">
            <div className="mission-card">
              <Target strokeWidth={1.5} size={40} />
              <h3>Our Mission</h3>
              <p>
                To empower businesses by automating document extraction and freeing teams to focus on what truly matters—growing their business.
              </p>
            </div>
            <div className="mission-card">
              <Zap strokeWidth={1.5} size={40} />
              <h3>Our Vision</h3>
              <p>
                A world where no business wastes time on manual data entry, and every document is instantly ready for AI integration.
              </p>
            </div>
            <div className="mission-card">
              <Heart strokeWidth={1.5} size={40} />
              <h3>Our Values</h3>
              <p>
                Accuracy, reliability, transparency, and customer success. We treat every document with the care it deserves.
              </p>
            </div>
            <div className="mission-card">
              <Users strokeWidth={1.5} size={40} />
              <h3>Our Commitment</h3>
              <p>
                24/7 support, continuous innovation, and a 100% accuracy guarantee on every document we process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="page-section">
        <div className="container">
          <h2>Our Team</h2>
          <p className="section-intro">
            Led by industry veterans with decades of combined experience in document processing, OCR technology, and business automation.
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">👨‍💼</div>
              <h3>John Smith</h3>
              <p className="role">CEO & Co-founder</p>
              <p className="bio">
                15+ years in document processing and automation. Previously led enterprise solutions at DocuTech Inc.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💼</div>
              <h3>Sarah Johnson</h3>
              <p className="role">CTO & Co-founder</p>
              <p className="bio">
                Expert in OCR and machine learning. Developed proprietary hybrid extraction technology.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👨‍💻</div>
              <h3>Michael Chen</h3>
              <p className="role">VP of Operations</p>
              <p className="bio">
                Manages quality assurance and team of 100+ document specialists across our global office.
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">👩‍💻</div>
              <h3>Emily Rodriguez</h3>
              <p className="role">VP of Client Success</p>
              <p className="bio">
                Ensures every client has a seamless experience with 24/7 support and dedicated account management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="page-section">
        <div className="container">
          <h2>Why Choose HextractDocs?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-number">1</div>
              <h3>100% Accuracy Guarantee</h3>
              <p>Every document is verified by human experts to ensure zero errors</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">2</div>
              <h3>Hybrid Technology</h3>
              <p>Combination of advanced OCR and manual annotation for perfect results</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">3</div>
              <h3>AI-Ready Format</h3>
              <p>Your documents come back in the exact format your systems need</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">4</div>
              <h3>24/7 Support</h3>
              <p>Our Philippines-based team is always available to help</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">5</div>
              <h3>Scalable Solution</h3>
              <p>Handle anything from small batches to millions of documents</p>
            </div>
            <div className="reason-card">
              <div className="reason-number">6</div>
              <h3>Competitive Pricing</h3>
              <p>Free consultation and transparent, volume-based pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="page-section">
        <div className="container">
          <h2>By The Numbers</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <p>Companies Trust Us</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">2.5M+</div>
              <p>Documents Processed</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">99.8%</div>
              <p>Average Accuracy</p>
            </div>
            <div className="stat-item">
              <div className="stat-number">8+</div>
              <p>Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>Let's Transform Your Documents Together</h2>
          <p>Join hundreds of companies that trust HextractDocs with their document processing</p>
          <button className="button">Get Started Today</button>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Product</h4>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Resources</h4>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Reference</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
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
