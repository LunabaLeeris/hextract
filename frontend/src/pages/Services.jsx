import { useNavigate } from "react-router-dom";
import { ArrowLeft, Layers, HardDrive, Check, CheckCircle2 } from "lucide-react";

function Services() {
  const navigate = useNavigate();

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

      {/* Services Detail Section */}
      <section className="page-section">
        <div className="container">
          <div className="section-header-center">
            <h1>Our Services in Detail</h1>
            <p className="section-intro">
              Discover how HextractDocs transforms your physical and digital documents into structured, AI-ready formats.
            </p>
          </div>

          {/* Physical Extraction Service */}
          <div className="service-detail-card" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "var(--spacing-2xl)", marginBottom: "var(--spacing-xl)", borderRadius: "var(--radius-lg)" }}>
            <div className="service-detail-header" style={{ display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "16px", marginBottom: "24px" }}>
              <Layers size={32} style={{ color: "var(--accent-color)" }} />
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: 0 }}>Physical Document Extraction</h2>
            </div>
            
            <div className="service-detail-content">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>How It Works</h3>
              <ol className="process-list" style={{ marginLeft: "20px", marginBottom: "24px" }}>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Submission:</strong> Securely ship physical papers or records via our tracking logistics partner.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Scanning:</strong> High-resolution industrial scan capturing every character clearly.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Extraction:</strong> Multi-OCR engines isolate key text lines and fields.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Quality Audit:</strong> Every field is routed to two independent human annotators.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Formatting:</strong> Extracted metrics mapped into customer-specific schema.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Delivery:</strong> Payloads are sent via API hook or secure download folder.
                </li>
              </ol>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>Benefits</h3>
              <ul className="benefits-list" style={{ listStyle: "none", marginBottom: "24px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>No manual data entry required</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>100% accuracy guarantee backed by human review</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>Secure handling of highly sensitive documents</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>Scalable ingestion matching peak logistics volume</span>
                </li>
              </ul>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>Sample Template Output</h3>
              <div className="code-block" style={{ background: "#1e1e24", borderRadius: "var(--radius-md)", padding: "16px", overflowX: "auto" }}>
                <pre style={{ margin: 0, color: "#a9b2c3", fontFamily: "monospace", fontSize: "0.85rem", lineHeight: 1.5 }}><code style={{ color: "inherit" }}>{`{
  "document_id": "DOC-PHYS-8021",
  "document_type": "Paper Invoice",
  "source": "High-Resolution Scan (OCR)",
  "extracted_data": {
    "invoice_number": "INV-12345",
    "invoice_date": "2026-06-12",
    "client_name": "Acme Corporation",
    "client_address": "123 Business St, NY 10001",
    "line_items": [
      {
        "description": "Professional Services",
        "quantity": 1,
        "unit_price": 5000.00,
        "total": 5000.00
      }
    ],
    "subtotal": 5000.00,
    "tax": 500.00,
    "total_amount": 5500.00,
    "payment_terms": "Net 30"
  },
  "verification": {
    "status": "Verified",
    "method": "Hybrid OCR + Human Audit",
    "annotator_id": "USR-1082",
    "confidence_guarantee": "100.0%"
  }
}`}</code></pre>
              </div>
            </div>
          </div>

          {/* Digital Extraction Service */}
          <div className="service-detail-card" style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-color)", padding: "var(--spacing-2xl)", marginBottom: "var(--spacing-xl)", borderRadius: "var(--radius-lg)" }}>
            <div className="service-detail-header" style={{ display: "flex", alignItems: "center", gap: "12px", borderBottom: "1px solid var(--border-color)", paddingBottom: "16px", marginBottom: "24px" }}>
              <HardDrive size={32} style={{ color: "var(--accent-color)" }} />
              <h2 style={{ fontSize: "1.75rem", fontWeight: 700, margin: 0 }}>Digital Document Extraction</h2>
            </div>
            
            <div className="service-detail-content">
              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>How It Works</h3>
              <ol className="process-list" style={{ marginLeft: "20px", marginBottom: "24px" }}>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Upload:</strong> Send digital documents (PDF, TIFF, JPEG) via API hook or secure FTP folders.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Analysis:</strong> Machine models classify documents and locate primary layout regions.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Extraction:</strong> High-speed parsing pulls structural data values.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Validation:</strong> Automations perform sanity checks and confidence scoring.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Human Audit:</strong> Any data points falling below threshold are flagged for human validation.
                </li>
                <li style={{ marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <strong style={{ color: "var(--text-primary)" }}>Integration:</strong> Verified payload is pushed directly to your active ERP/CRM.
                </li>
              </ol>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>Benefits</h3>
              <ul className="benefits-list" style={{ listStyle: "none", marginBottom: "24px" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>Fast processing cycles</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>Direct REST API endpoints</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>Batch processing matching cloud scale</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px", color: "var(--text-secondary)" }}>
                  <Check size={16} style={{ color: "var(--success-color)" }} /> 
                  <span>Real-time webhook callback events</span>
                </li>
              </ul>

              <h3 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>Sample Template Output</h3>
              <div className="code-block" style={{ background: "#1e1e24", borderRadius: "var(--radius-md)", padding: "16px", overflowX: "auto" }}>
                <pre style={{ margin: 0, color: "#a9b2c3", fontFamily: "monospace", fontSize: "0.85rem", lineHeight: 1.5 }}><code style={{ color: "inherit" }}>{`{
  "document_id": "DOC-VIRT-3921",
  "document_type": "Bank Statement",
  "source_format": "PDF",
  "extracted_data": {
    "account_number": "1234567890",
    "account_holder": "John Doe",
    "statement_period": {
      "start_date": "2026-04-01",
      "end_date": "2026-04-30"
    },
    "transactions": [
      {
        "date": "2026-04-05",
        "description": "Salary Deposit",
        "amount": 5000.00,
        "type": "credit",
        "balance": 15000.00
      }
    ],
    "opening_balance": 10000.00,
    "closing_balance": 14849.25
  },
  "verification": {
    "status": "Verified",
    "method": "Hybrid OCR + Human Audit",
    "annotator_id": "USR-1104",
    "confidence_guarantee": "100.0%"
  }
}`}</code></pre>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="services-cta" style={{ background: "var(--accent-color)", color: "white", padding: "var(--spacing-2xl)", borderRadius: "var(--radius-lg)", textAlign: "center", marginTop: "var(--spacing-2xl)" }}>
            <h2 style={{ color: "white", marginBottom: "8px" }}>Ready to Get Started?</h2>
            <p style={{ color: "rgba(255, 255, 255, 0.85)", marginBottom: "24px" }}>Schedule a free consultation to discuss your custom document extraction needs.</p>
            <button className="button" style={{ background: "white", color: "var(--accent-color)" }} onClick={() => navigate("/")}>
              Book Your Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
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
                <li><a href="#">API Reference</a></li>
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

export default Services;
