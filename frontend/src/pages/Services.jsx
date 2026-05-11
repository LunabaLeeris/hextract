import { useNavigate } from "react-router-dom";
import { ArrowLeft, Layers, HardDrive, Check } from "lucide-react";

function Services() {
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

      {/* Services Detail Section */}
      <section className="page-section">
        <div className="container">
          <h1>Our Services in Detail</h1>
          <p className="section-intro">
            Discover how HextractDocs transforms your documents into AI-ready formats
          </p>

          {/* Physical Extraction Service */}
          <div className="service-detail-card">
            <div className="service-detail-header">
              <Layers strokeWidth={1.5} size={40} />
              <h2>Physical Document Extraction</h2>
            </div>
            
            <div className="service-detail-content">
              <h3>How It Works</h3>
              <ol className="process-list">
                <li>
                  <strong>Submission:</strong> Send us your physical documents via mail or courier
                </li>
                <li>
                  <strong>Scanning:</strong> We use high-resolution scanners to digitize your documents
                </li>
                <li>
                  <strong>Extraction:</strong> Our hybrid OCR + manual annotation technology extracts all data
                </li>
                <li>
                  <strong>Quality Check:</strong> Every document is reviewed for 100% accuracy
                </li>
                <li>
                  <strong>Formatting:</strong> We convert to your desired format (JSON, CSV, XML, PDF, etc.)
                </li>
                <li>
                  <strong>Delivery:</strong> Receive your processed documents, ready for integration
                </li>
              </ol>

              <h3>Benefits</h3>
              <ul className="benefits-list">
                <li><Check size={20} /> <span>No manual data entry required</span></li>
                <li><Check size={20} /> <span>100% accuracy guarantee</span></li>
                <li><Check size={20} /> <span>Secure handling of sensitive documents</span></li>
                <li><Check size={20} /> <span>Scalable to any volume</span></li>
                <li><Check size={20} /> <span>Fast turnaround times</span></li>
              </ul>

              <h3>Sample Template Output</h3>
              <div className="code-block">
                <pre>{`{
  "document_id": "DOC-2025-001",
  "document_type": "Invoice",
  "date_processed": "2025-05-06",
  "extracted_data": {
    "invoice_number": "INV-12345",
    "invoice_date": "2025-05-01",
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
  "confidence_score": 99.8,
  "status": "verified"
}`}</pre>
              </div>
            </div>
          </div>

          {/* Digital Extraction Service */}
          <div className="service-detail-card">
            <div className="service-detail-header">
              <HardDrive strokeWidth={1.5} size={40} />
              <h2>Digital Document Extraction</h2>
            </div>
            
            <div className="service-detail-content">
              <h3>How It Works</h3>
              <ol className="process-list">
                <li>
                  <strong>Upload:</strong> Submit your digital documents (PDF, images, Word docs, etc.)
                </li>
                <li>
                  <strong>Analysis:</strong> Our system analyzes the document structure and content
                </li>
                <li>
                  <strong>Extraction:</strong> Intelligent extraction pulls all relevant data
                </li>
                <li>
                  <strong>Validation:</strong> Data is validated against business rules
                </li>
                <li>
                  <strong>Conversion:</strong> Format transformation to your specifications
                </li>
                <li>
                  <strong>Integration:</strong> Ready for immediate system integration
                </li>
              </ol>

              <h3>Benefits</h3>
              <ul className="benefits-list">
                <li><Check size={20} /> <span>Faster processing than physical documents</span></li>
                <li><Check size={20} /> <span>API-ready output formats</span></li>
                <li><Check size={20} /> <span>Batch processing capabilities</span></li>
                <li><Check size={20} /> <span>Automatic error detection</span></li>
                <li><Check size={20} /> <span>Seamless system integration</span></li>
              </ul>

              <h3>Sample Template Output</h3>
              <div className="code-block">
                <pre>{`{
  "document_id": "DOC-2025-002",
  "document_type": "Bank Statement",
  "source_format": "PDF",
  "extracted_data": {
    "account_number": "1234567890",
    "account_holder": "John Doe",
    "statement_period": {
      "start_date": "2025-04-01",
      "end_date": "2025-04-30"
    },
    "transactions": [
      {
        "date": "2025-04-05",
        "description": "Salary Deposit",
        "amount": 5000.00,
        "type": "credit",
        "balance": 15000.00
      },
      {
        "date": "2025-04-10",
        "description": "Office Supplies",
        "amount": -150.75,
        "type": "debit",
        "balance": 14849.25
      }
    ],
    "opening_balance": 10000.00,
    "closing_balance": 14849.25,
    "total_credits": 5000.00,
    "total_debits": -150.75
  },
  "extraction_method": "hybrid_ocr_manual",
  "confidence_score": 99.9,
  "processed_timestamp": "2025-05-06T10:30:00Z"
}`}</pre>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="services-cta">
            <h2>Ready to Get Started?</h2>
            <p>Schedule a free consultation to discuss your document extraction needs</p>
            <button className="button">Book Your Consultation</button>
          </div>
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

export default Services;
