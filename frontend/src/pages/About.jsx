import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowLeft, Users, Target, Heart, Zap } from "lucide-react";
import { Container, px, SimpleGrid, Stack, useMantineTheme } from '@mantine/core';

function About() {
  const navigate = useNavigate();
  const [activeValue, setActiveValue] = useState(0);

  const differentiationValues = [
    {
      title: "Over-reliance on OCR",
      shortDesc: "Moving beyond pure machine extraction for reliability.",
      content: "Competitors rely exclusively on Optical Character Recognition (OCR) for data extraction; when OCR fails, data integrity is compromised. Hextract Docs mitigates this via a hybrid model. By integrating human oversight, an advanced annotation system, and diverse OCR methodologies, we deploy trained annotators to guarantee maximum data accuracy."
    },
    {
      title: "Operational Inflexibility",
      shortDesc: "Dedicated service tailored to your exact pipeline.",
      content: "Competitors license rigid software products. Hextract Docs provides a dedicated service. Through continuous collaborative support, we tailor the extraction pipeline to meet exactly what our clients need."
    },
    {
      title: "Physical Document Processing",
      shortDesc: "Complete management of your physical archive.",
      content: "For local businesses, we manage the entire lifecycle of physical documents—including scanning, storage, and secure data transfer—allowing clients to focus more on their products."
    },
    {
      title: "Opaque Data Security",
      shortDesc: "Absolute transparency and security warranties.",
      content: "Standard services require off-site document uploads, obscuring storage, processing, and utilization protocols (often exposing sensitive data to external LLMs). Hextract Docs operates with absolute transparency. We provide complete visibility into our data storage, processing architecture, and annotation protocols, backed by comprehensive service warranties."
    }
  ];

  const theme = useMantineTheme();
  const BASE_HEIGHT = 480;
  const spacing = px(theme.spacing.md);
  
  const getSubHeight = (children, spacingValue) =>
    BASE_HEIGHT / children - spacingValue * ((children - 1) / children);

  const renderReasonContent = (title, desc, iconNumber, isSmall = false) => (
    <div className={`reason-card-inner ${isSmall ? 'small-card' : ''}`}>
      {iconNumber && <div className="reason-number">{iconNumber}</div>}
      <h3 className={isSmall ? 'small-card-title' : ''}>{title}</h3>
      <p className={isSmall ? 'small-card-text' : ''}>{desc}</p>
    </div>
  );

  // Scroll animation refs for each section
  const storyRef = useScrollAnimation();
  const missionRef = useScrollAnimation();
  const valueRef = useScrollAnimation();
  const reasonsRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();

  return (
    <div className="app">
      {/* Header */}
      <header>
        <div className="container">
          <nav className="navbar">
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
      <section className="about-hero" ref={storyRef}>
        <div className="container-full">
          <div className="about-hero-left">
            <span className="breadcrumbs">Home / <span className="breadcrumbs-highlight">About</span></span>
            <h2 className="text-header-highlight ">So You Can Worry About Your Products</h2>
            <p>
              HextractDocs was founded with a simple mission: to eliminate the tedious, error-prone process of manual document entry. We realized that thousands of businesses spend countless hours converting physical and digital documents into formats their systems can understand.
            </p>
            <p>
              What started as a small team of document processing experts has grown into an industry leader, trusted by over 500 companies to handle millions of documents. We combine cutting-edge OCR technology with human expertise to deliver unmatched accuracy and reliability.
            </p>
          </div>
          <div className="about-hero-right">
            <div className="page-hero">
              <h3>About HextractDocs</h3>
              <p>
                Transforming how businesses handle documents through intelligent extraction and AI-ready formatting
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Value Section */}
      <section className="page-section" ref={valueRef}>
        <div className="container-full">
          <h2 className="text-header-highlight">What do we solve?</h2>
          <p>
            Hextract Docs exists to transform digital and physical documents into the precise machine-readable formats required by client systems. We resolve the following industry limitations:
          </p>
          
          <div className="value-switcher">
            <div className="value-nav">
              {differentiationValues.map((val, index) => (
                <div 
                  key={index}
                  className={`value-nav-item ${activeValue === index ? 'active' : ''}`}
                  onClick={() => setActiveValue(index)}
                >
                  <h3>{val.title}</h3>
                  <p>{val.shortDesc}</p>
                </div>
              ))}
            </div>
            
            <div className="value-content" key={activeValue}>
              <h2>{differentiationValues[activeValue].title}</h2>
              <p>{differentiationValues[activeValue].content}</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="page-section" ref={missionRef}>
        <div className="container-full">
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
              <Users strokeWidth={1.5} size={40} />
              <h3>Our Commitment</h3>
              <p>
                24/7 support, continuous innovation, and a 100% accuracy guarantee on every document we process.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="page-section" ref={reasonsRef}>
        <div className="container-full">
          <h2 className="text-header-highlight">Why Choose HextractDocs?</h2>
          <p>
            We are not just a service provider—we are your partner in transforming how you handle documents.
          </p>  
          
          <Container my="md" size="100%" p={0}>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="md">
              {/* Column 1: Full Height */}
              <div className="reason-card" style={{ height: BASE_HEIGHT }}>
                {renderReasonContent("100% Accuracy Guarantee", "Every document is verified by human experts to ensure zero errors", 1)}
              </div>

              {/* Column 2: Stack of 2 */}
              <Stack spacing="md">
                <div className="reason-card" style={{ height: getSubHeight(2, spacing) }}>
                  {renderReasonContent("Hybrid Tech", "Advanced OCR + Human annotation", 2)}
                </div>
                <div className="reason-card" style={{ height: getSubHeight(2, spacing) }}>
                  {renderReasonContent("AI-Ready", "Precise data formatting for your AI needs", 3)}
                </div>
              </Stack>

              {/* Column 3: Stack of 3 */}
              <Stack spacing="md">
                <div className="reason-card" style={{ height: getSubHeight(3, spacing) }}>
                  {renderReasonContent("24/7 Support", "Always here to help you", null, true)}
                </div>
                <div className="reason-card" style={{ height: getSubHeight(3, spacing) }}>
                  {renderReasonContent("Physical", "Handling your physical archives", null, true)}
                </div>
                <div className="reason-card" style={{ height: getSubHeight(3, spacing) }}>
                  {renderReasonContent("Pricing", "Flexible volume-based rates", null, true)}
                </div>
              </Stack>

              {/* Column 4: Full Height summary */}
              <div className="reason-card highlight-card" style={{ height: BASE_HEIGHT, background: 'var(--accent-color)', color: 'white' }}>
                <Heart size={40} style={{ marginBottom: '1rem', color: 'white' }} />
                <h3 style={{ color: 'white' }}>Proven and Tested</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>
                  Our commitment to precision has made us the preferred partner for document-heavy enterprises globally.
                </p>
              </div>
            </SimpleGrid>
          </Container>
          
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta" ref={ctaRef}>
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
