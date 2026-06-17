import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Accordion, Container, Button, Group, Text, Textarea, TextInput } from "@mantine/core";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  X,
  ArrowRight,
  Layers,
  HardDrive,
  CheckCircle2,
  Lock,
  Zap,
  ShieldCheck,
  HelpCircle,
} from "lucide-react";
import DocumentPlayground from "../components/DocumentPlayground";
import dictLogo from "../assets/dict.png";
import ciccLogo from "../assets/cicc.png";
import iciLogo from "../assets/ici.png";

function Home() {
  const [theme, setTheme] = useState("light");
  const [activeTab, setActiveTab] = useState("physical");
  const navigate = useNavigate();

  // Scroll animation refs
  const heroRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const metricsRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const competitorRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const faqRef = useScrollAnimation();
  const footerRef = useScrollAnimation();

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

  const sampleJsonOutputs = {
    physical: `{
  "document_id": "DOC-PHYS-8021",
  "document_type": "Paper Invoice",
  "source": "High-Resolution Scan (OCR)",
  "extracted_data": {
    "vendor": "Global Logistics Corp",
    "invoice_date": "2026-06-12",
    "subtotal": 2300.00,
    "tax": 240.00,
    "total_amount": 2540.00
  },
  "verification": {
    "status": "Verified",
    "method": "Hybrid OCR + Human Audit",
    "annotator_id": "USR-1082",
    "confidence_guarantee": "100.0%"
  }
}`,
    virtual: `{
  "document_id": "DOC-VIRT-3921",
  "document_type": "Digital Purchase Order",
  "source": "Native PDF Cloud API Upload",
  "extracted_data": {
    "buyer": "Enterprise Software Inc",
    "po_date": "2026-06-15",
    "items_count": 3,
    "total_amount": 8900.00
  },
  "verification": {
    "status": "Verified",
    "method": "Hybrid OCR + Human Audit",
    "annotator_id": "USR-1104",
    "confidence_guarantee": "100.0%"
  }
}`,
  };

  return (
    <div className="app">
      {/* Header & Navigation */}
      <header>
        <div className="container">
          <nav className="navbar" role="navigation" aria-label="Main Navigation">
            <div className="logo">
              <CheckCircle2 size={24} style={{ color: "var(--accent-color)" }} />
              <span>HextractDocs</span>
            </div>
            
            <div className="nav-pages">
              <ul className="nav-links">
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#process">Process</a>
                </li>
                <li>
                  <a href="#metrics">Impact</a>
                </li>
                <li>
                  <a href="#comparison">Why Us</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <button
                    className="nav-link-btn"
                    onClick={() => navigate("/about")}
                    aria-label="Navigate to About Us page"
                  >
                    About
                  </button>
                </li>
              </ul>
              
              <button
                className="button nav-cta"
                onClick={() => navigate("/services")}
                aria-label="Book a free product demo"
              >
                Book a Demo
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero scroll-animate" ref={heroRef} id="main-content">
        <div className="container">
          <div className="hero-layout">
            <div className="hero-left">
              <h1>Document Annotation Grounded in Accuracy.</h1>
              <p>
                A secure, enterprise-grade hybrid platform combining state-of-the-art OCR models with 
                dedicated human annotators. Extract, structure, and convert physical or digital 
                records into AI-ready formats with 100% accuracy.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="button">
                  Get Started <ArrowRight size={16} style={{ marginLeft: "8px" }} />
                </a>
                <button
                  className="button button-secondary"
                  onClick={() => navigate("/about")}
                >
                  Learn How It Works
                </button>
              </div>
            </div>
            
            <div className="hero-right">
              <DocumentPlayground />
            </div>
          </div>
        </div>
      </section>

      {/* Government Trust Section */}
      <section className="gov-trust-section">
        <div className="container">
          <div className="gov-trust-container">
            <div className="gov-trust-title">Trusted by Government</div>
            <div className="gov-logos-grid">
              <div className="gov-logo-item">
                <img className="gov-logo-img" src={dictLogo} alt="DICT Logo" />
                <div className="gov-logo-text-group">
                  <span className="gov-logo-name">DICT</span>
                  <span className="gov-logo-sub">Department of Information & Communications Tech</span>
                </div>
              </div>
              <div className="gov-logo-item">
                <img className="gov-logo-img" src={ciccLogo} alt="CICC Logo" />
                <div className="gov-logo-text-group">
                  <span className="gov-logo-name">CICC</span>
                  <span className="gov-logo-sub">Cybercrime Investigation & Coordinating Center</span>
                </div>
              </div>
              <div className="gov-logo-item">
                <img className="gov-logo-img" src={iciLogo} alt="ICI Logo" />
                <div className="gov-logo-text-group">
                  <span className="gov-logo-name">ICI</span>
                  <span className="gov-logo-sub">Information Coordinating Institution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services scroll-animate" id="services" ref={servicesRef}>
        <div className="container">
          <div className="section-header-center">
            <h2>Our Document Extraction Services</h2>
            <p>
              Whether processing legacy paper archives or ingesting high-volume digital documents in the cloud, 
              we structure your pipeline to deliver perfectly validated data.
            </p>
          </div>

          {/* Pill Switcher */}
          <div className="services-tabs-nav">
            <button
              className={`tab-nav-btn ${activeTab === "physical" ? "active" : ""}`}
              onClick={() => setActiveTab("physical")}
              role="tab"
              aria-selected={activeTab === "physical"}
            >
              Physical Extraction
            </button>
            <button
              className={`tab-nav-btn ${activeTab === "virtual" ? "active" : ""}`}
              onClick={() => setActiveTab("virtual")}
              role="tab"
              aria-selected={activeTab === "virtual"}
            >
              Virtual Extraction
            </button>
          </div>

          {/* Switcher Content */}
          <div className="services-tab-content">
            {activeTab === "physical" ? (
              <>
                <div className="services-content-left">
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--accent-color)" }}>
                    <Layers size={32} />
                    <h3>Physical Document Ingestion</h3>
                  </div>
                  <p>
                    Ideal for companies with legacy paper archives, medical records, or shipping logs. We manage the secure receipt, high-speed scanning, extraction, and verification of your physical documents.
                  </p>
                  <ul className="services-list-bulleted">
                    <li><Check size={16} /> Secure document logistics and tracking</li>
                    <li><Check size={16} /> High-fidelity multi-spectral scanning</li>
                    <li><Check size={16} /> Human-in-the-loop double-entry verification</li>
                    <li><Check size={16} /> API-compatible JSON, CSV, or XML delivery</li>
                  </ul>
                  <div style={{ marginTop: "12px" }}>
                    <button className="button button-secondary button-small" onClick={() => navigate("/services")}>
                      View physical workflow details
                    </button>
                  </div>
                </div>
                <div className="services-content-right">
                  <div className="code-viewer-panel">
                    <pre><code>{sampleJsonOutputs.physical}</code></pre>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="services-content-left">
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--accent-color)" }}>
                    <HardDrive size={32} />
                    <h3>Native Digital Extraction</h3>
                  </div>
                  <p>
                    Built for digital-first enterprises. Connect your cloud storage, email servers, or API endpoints. We automatically ingest, identify layouts, and extract key-value data with human audits on low-confidence flags.
                  </p>
                  <ul className="services-list-bulleted">
                    <li><Check size={16} /> Batch uploads via S3, GCS, or REST APIs</li>
                    <li><Check size={16} /> High-speed automated OCR parsing</li>
                    <li><Check size={16} /> Real-time status callbacks and webhooks</li>
                    <li><Check size={16} /> Custom schema mapping for database ingestion</li>
                  </ul>
                  <div style={{ marginTop: "12px" }}>
                    <button className="button button-secondary button-small" onClick={() => navigate("/services")}>
                      View digital API details
                    </button>
                  </div>
                </div>
                <div className="services-content-right">
                  <div className="code-viewer-panel">
                    <pre><code>{sampleJsonOutputs.virtual}</code></pre>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics scroll-animate" id="metrics" ref={metricsRef}>
        <div className="container">
          <div className="metrics-container-card">
            <div className="metric-item-clean">
              <div className="metric-big-num">15,000+</div>
              <div className="metric-lbl">Annotations</div>
              <div className="metric-desc">High-precision key-value fields annotated and validated.</div>
            </div>
            <div className="metric-item-clean">
              <div className="metric-big-num">3,000</div>
              <div className="metric-lbl">Annotation Hours</div>
              <div className="metric-desc">Dedicated human-in-the-loop validation hours.</div>
            </div>
            <div className="metric-item-clean">
              <div className="metric-big-num">99.8%</div>
              <div className="metric-lbl">Accuracy</div>
              <div className="metric-desc">Guaranteed precision backing every single extracted field.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Agreement Process Section (Timeline) */}
      <section className="process-timeline scroll-animate" id="process" ref={processRef}>
        <div className="container">
          <div className="section-header-center">
            <h2>The Onboarding Process</h2>
            <p>We work collaboratively to build a custom extraction pipeline tailored directly to your technical requirements.</p>
          </div>

          <div className="timeline-row">
            {/* Curved SVG line behind steps */}
            <div className="timeline-curve-svg" aria-hidden="true">
              <svg width="100%" height="60" viewBox="0 0 1000 60" fill="none" preserveAspectRatio="none">
                <path
                  d="M 125 25 C 200 -5, 300 55, 375 25 C 450 -5, 550 55, 625 25 C 700 -5, 800 55, 875 25"
                  stroke="var(--border-color)"
                  strokeWidth="3"
                  strokeDasharray="6 6"
                  fill="none"
                />
              </svg>
            </div>
            <div className="timeline-step">
              <div className="timeline-badge">1</div>
              <h3>Consultation</h3>
              <p>We analyze your target documents and identify structural complexity.</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-badge">2</div>
              <h3>Pilot Study</h3>
              <p>We configure extraction models and build annotation manuals for verification.</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-badge">3</div>
              <h3>Production</h3>
              <p>Your documents go live in our hybrid pipeline with continuous human oversight.</p>
            </div>
            <div className="timeline-step">
              <div className="timeline-badge">4</div>
              <h3>API Delivery</h3>
              <p>Clean, structured datasets are delivered straight to your database or system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis Section */}
      <section className="comparison scroll-animate" id="comparison" ref={competitorRef}>
        <div className="container">
          <div className="section-header-center">
            <h2>Why Enterprises Trust HextractDocs</h2>
            <p>Unlike software licenses that hand you raw OCR scripts, we provide a complete, bulletproof data extraction service.</p>
          </div>

          <div className="comparison-wrapper">
            <table className="clean-table" aria-label="Feature comparison table between HextractDocs and standard OCR competitors">
              <thead>
                <tr>
                  <th scope="col">Feature Highlights</th>
                  <th scope="col">HextractDocs</th>
                  <th scope="col">Standard OCR API</th>
                  <th scope="col">Outsourced BPO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-title">100% Accuracy Guarantee</td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                  <td className="table-cross"><X size={18} aria-label="No" /></td>
                  <td className="table-cross"><X size={18} aria-label="No" /></td>
                </tr>
                <tr>
                  <td className="feature-title">Hybrid Machine + Human Layer</td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                  <td className="table-cross"><X size={18} aria-label="No" /></td>
                </tr>
                <tr>
                  <td className="feature-title">Physical Archive Ingestion</td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                  <td className="table-cross"><X size={18} aria-label="No" /></td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                </tr>
                <tr>
                  <td className="feature-title">Enterprise Security SLA</td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                  <td className="table-cross"><X size={18} aria-label="No" /></td>
                </tr>
                <tr>
                  <td className="feature-title">Custom Schema Mappings</td>
                  <td className="table-check"><Check size={18} aria-label="Yes" /></td>
                  <td className="table-cross"><X size={18} aria-label="No" /></td>
                  <td className="table-cross"><X size={18} aria-label="No" /></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-banner">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Ready to structure your document flow?</h2>
            <p>Connect with a solutions engineer today to set up a pilot study with your own document templates.</p>
            <a href="#contact" className="button">Book a Pilot Consultation</a>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="contact-section scroll-animate" id="contact" ref={contactRef}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <div>
                <h3>Connect With Us</h3>
                <p>We are ready to build a reliable pipeline for your data ingestion needs.</p>
              </div>

              <div className="contact-details-list">
                <div className="contact-detail-row">
                  <Phone size={18} />
                  <span>+63 956-390-155</span>
                </div>
                <div className="contact-detail-row">
                  <Mail size={18} />
                  <span>info@hextractdocs.com</span>
                </div>
                <div className="contact-detail-row">
                  <MapPin size={18} />
                  <span>Metro Manila, Philippines</span>
                </div>
                <div className="contact-detail-row">
                  <Clock size={18} />
                  <span>Support: 8 AM – 11 PM PHT</span>
                </div>
              </div>

              <div style={{ display: "flex", gap: "8px", fontSize: "0.8rem", color: "var(--text-secondary)", alignItems: "center" }}>
                <Lock size={12} />
                <span>Enterprise grade encryption assured</span>
              </div>
            </div>

            <form className="contact-form-panel" onSubmit={(e) => e.preventDefault()}>
              <h3>Send a Message</h3>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <TextInput 
                  label="Your Name" 
                  placeholder="Your Name" 
                  name="user_name"
                  id="user_name_input"
                  autocomplete="name"
                />
                <TextInput 
                  label="Email Address" 
                  placeholder="name@company.com" 
                  required 
                  name="user_email"
                  id="user_email_input"
                  autocomplete="email"
                  spellCheck={false}
                />
              </div>

              <TextInput 
                label="Subject" 
                placeholder="Annotation project scope" 
                required 
                name="msg_subject"
                id="msg_subject_input"
              />

              <Textarea
                label="Your Project Details"
                placeholder="Include estimated document volume, paper/digital layout variety, and extraction fields..."
                minRows={4}
                name="msg_body"
                id="msg_body_input"
              />

              <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}>
                <Button type="submit" className="button" style={{ background: "var(--accent-color)", border: "none" }}>
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="scroll-animate" ref={faqRef} style={{ padding: "var(--spacing-3xl) 0", background: "var(--bg-secondary)" }}>
        <div className="container">
          <Container size="sm">
            <h2 style={{ textAlign: "center", marginBottom: "var(--spacing-xl)" }}>Frequently Asked Questions</h2>

            <Accordion variant="separated" defaultValue="accuracy">
              <Accordion.Item value="accuracy">
                <Accordion.Control>How do you guarantee 100% accuracy?</Accordion.Control>
                <Accordion.Panel>
                  We utilize a unique hybrid mechanism. Standard OCR models handle fast data reads, 
                  but every critical data point passes through a secure multi-annotator review layer. 
                  This human-in-the-loop audit overrides OCR failures and guarantees zero mistakes.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="security">
                <Accordion.Control>How is sensitive data secured?</Accordion.Control>
                <Accordion.Panel>
                  All document transport and digital storage comply with bank-grade security protocols. 
                  Our annotators operate under strict NDA covenants, and we do not feed customer documents 
                  into public generative AI models for training.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="integration">
                <Accordion.Control>Can you feed structured data directly to my CRM/ERP?</Accordion.Control>
                <Accordion.Panel>
                  Yes. We deliver payloads in fully structured formats (JSON, XML, or CSV) mapped to match your 
                  exact API parameters, making database ingestion direct and automated.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
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
              <h5>Services</h5>
              <ul>
                <li><a href="#services">Physical Ingest</a></li>
                <li><a href="#services">Digital API</a></li>
                <li><a href="#services">Security SLA</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li>
                  <button className="footer-link-btn" onClick={() => navigate("/about")}>
                    About Us
                  </button>
                </li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Support</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h5>Resources</h5>
              <ul>
                <li><a href="#">Documentation</a></li>
                <li><a href="#">API Spec</a></li>
                <li><a href="#">JSON Templates</a></li>
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
            <p>&copy; 2026 HextractDocs. All rights reserved. Transforming Documents, Enabling AI.</p>
            <div>
              <a href="#" style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>Privacy Control</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
