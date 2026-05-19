import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Accordion, Container } from "@mantine/core";
import { Button, Group, Paper, SimpleGrid, Text, Textarea, TextInput } from '@mantine/core';
import bg from '../assets/bg.svg';
import { ContactIconsList } from '../components/ContactIcons';
import classes from '../components/GetInTouch.module.css';
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
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  // Scroll animation refs for each section
  const heroRef = useScrollAnimation();
  const partnersRef = useScrollAnimation();
  const servicesRef = useScrollAnimation();
  const metricsRef = useScrollAnimation();
  const processRef = useScrollAnimation();
  const competitorRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();
  const ctaRef = useScrollAnimation();
  const footerRef = useScrollAnimation();

  // Process steps data
  const processSteps = [
    {
      id: 0,
      title: "Initial Meeting",
      icon: <Phone strokeWidth={1.5} size={40} />,
      description:
        "We understand your unique document translation needs and business requirements during our consultation.",
    },
    {
      id: 1,
      title: "Cost & Timeline",
      icon: <DollarSign strokeWidth={1.5} size={40} />,
      description:
        "Receive a detailed cost estimate and project timeline based on your document volume and complexity.",
    },
    {
      id: 2,
      title: "Extraction",
      icon: <Cog strokeWidth={1.5} size={40} />,
      description:
        "We extract and process your documents using a hybrid of OCR and manual annotation to ensure 100% accuracy.",
    },
    {
      id: 3,
      title: "Delivery",
      icon: <Send strokeWidth={1.5} size={40} />,
      description:
        "Receive your documents in the format you requested, ready for integration.",
    },
  ];

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
          <nav className="navbar">
            <div className="nav-title">
              <div className="logo">HextractDocs</div>
            </div>
            <div className="nav-pages">
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
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <button
                    className="nav-link-btn"
                    onClick={() => navigate("/about")}
                  >
                    About
                  </button>
                </li>
              </ul>
              {/* <button className="theme-toggle" onClick={toggleTheme}>
                {theme === "light" ? (
                  <Moon strokeWidth={1.5} size={24} />
                ) : (
                  <Sun strokeWidth={1.5} size={24} />
                )}
              </button> */}
            </div>
            <button
              className="button nav-cta"
              onClick={() => navigate("/services")}
            >
              Book a Demo
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-content">
          <div className="demo-video-container">
            <div className="demo-video">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/4SCjXcBeW1E?autoplay=1&mute=0"
                title="HextractDocs Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners" ref={partnersRef}>
        <div className="container-full">
          <h2 className="page-title">Trusted by Industry Leaders</h2>
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
      <section className="services" id="services" ref={servicesRef}>
        <div className="container-full">
          <h2 className="page-title">Services We Offer</h2>
          <div className="services-grid">
            <div onClick={() => navigate("/services")} className="service-card">
              <div className="service-icon">
                <Layers strokeWidth={1.5} size={50} />
              </div>
              <h3>Physical Extraction</h3>
              <p>
                Trust us with your physical documents and we will handle the
                rest. We'll receive, scan, extract, and convert them to the
                exact format your business needs.
              </p>
              <p>
                <span className="info">click to learn more</span>
              </p>
            </div>
            <div onClick={() => navigate("/services")} className="service-card">
              <div className="service-icon">
                <HardDrive strokeWidth={1.5} size={50} />
              </div>
              <h3>Digital Extraction</h3>
              <p>
                Already have digital documents? Great, send us a copy and we'll
                extract and convert them to be ready for you to integrate to
                your business.
              </p>
              <p>
                <span className="info">click to learn more</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="metrics" id="pricing" ref={metricsRef}>
        <div className="container-full">
          <h2 className="page-title">Our Impact by the Numbers</h2>
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
      <section className="process" id="features" ref={processRef}>
        <div className="container-full">
          <h2 className="page-title">Our Agreement Process</h2>
          
          {/* Storyboard Container */}
          <div className="storyboard-container">
            {/* Main Panel Display Area */}
            <div className="storyboard-panels">
              <div className="panels-wrapper">
                {processSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className={`storyboard-panel ${
                      index === activeStep ? "active" : ""
                    } ${index > activeStep ? "next" : ""}`}
                  >
                    <div className="panel-content">
                      <div className="panel-icon">{step.icon}</div>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Step Indicators */}
            <div 
              className="storyboard-steps"
              style={{
                '--progress-width': `calc(${activeStep} * (140px + var(--spacing-lg)))`,
                '--progress-left': '70px',
              }}
            >
              {processSteps.map((step, index) => (
                <button
                  key={step.id}
                  className={`step-indicator ${
                    index === activeStep ? "active" : ""
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <span className="step-number">{index + 1}</span>
                  <span className="step-label">{step.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Competitor Analysis Section */}
      <section className="competitor-analysis" ref={competitorRef}>
        <div className="container-full">
          <h2 className="page-title">Why Choose HextractDocs?</h2>
          <div className="comparison-table">
            <div className="comparison-header">
              <div className="feature-col">
                <span style={{ color: "white" }}>Features</span>
              </div>
              <div className="provider-col">
                <span style={{ color: "white" }}>HextractDocs</span>
              </div>
              <div className="provider-col">Competitor A</div>
              <div className="provider-col">Competitor B</div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">AI-Ready Format</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Hybrid OCR + Manual Annotation</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">100% Accuracy Guarantee</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Physical Document Support</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Digital Document Support</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">24 hour client support</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Free Initial Consultation</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
            </div>
            <div className="comparison-row">
              <div className="feature-col">Philippines-Based Support</div>
              <div className="provider-col">
                <span className="checkmark">✓</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
              <div className="provider-col">
                <span className="cross">✕</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="cta" ref={ctaRef}>
        <div className="container-full">
          <h2>Ready to Transform Your Documents?</h2>
          <p>
            Let us handle your documents so you only worry about your product.
            Get a free consultation and cost estimate today.
          </p>
          <button className="button">Schedule Your Meeting</button>
        </div>
      </section>
      
      {/* Contact Us Section */}
      <section className="page-section" id="contact" ref={contactRef}>
        <div className="container-full">
          <Paper shadow="md" radius="lg">
            <div className={classes.wrapper}>
              <div className={classes.contacts} style={{ backgroundImage: `url(${bg})` }}>
                <Text fz="lg" fw={700} className={classes.title} c="#fff">
                  Contact information
                </Text>
                <ContactIconsList />
              </div>

              <form className={classes.form} onSubmit={(event) => event.preventDefault()}>
                <Text fz="lg" fw={700} className={classes.title}>
                  Send us a Message
                </Text>

                <div className={classes.fields}>
                  <SimpleGrid cols={{ base: 1, sm: 2 }}>
                    <TextInput label="Your name" placeholder="Your name" />
                    <TextInput label="Your email" placeholder="hello@mantine.dev" required />
                  </SimpleGrid>

                  <TextInput mt="md" label="Subject" placeholder="Subject" required />

                  <Textarea
                    mt="md"
                    label="Your message"
                    placeholder="Please include all relevant information"
                    minRows={3}
                  />

                  <Group justify="flex-end" mt="md">
                    <Button type="submit" className={classes.control}>
                      Send message
                    </Button>
                  </Group>
                </div>
              </form>
            </div>
          </Paper>
          </div>
      </section>
      
      {/* FAQ Section */}
      <section
        className="page-section"
        ref={statsRef} /* Assuming statsRef is intended for the FAQ section */
        style={{ backgroundColor: "var(--bg-secondary)" }}
      >
        <div className="container-full">
          <Container size="sm">
            <h2 className="page-title" style={{ textAlign: 'center', marginBottom: 'var(--spacing-xl)' }}>
              Frequently Asked Questions
            </h2>

            <Accordion variant="separated" defaultValue="accuracy">
              <Accordion.Item value="accuracy">
                <Accordion.Control>How do you achieve 100% accuracy?</Accordion.Control>
                <Accordion.Panel>
                  We utilize a unique hybrid model. While we use advanced OCR to handle heavy lifting, 
                  every critical data point is passed through our manual verification layer where trained 
                  experts audit the extraction to ensure zero errors.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="security">
                <Accordion.Control>Is my sensitive data shared with AI models?</Accordion.Control>
                <Accordion.Panel>
                  No. Unlike standard cloud services that feed user data into external LLMs for training, 
                  HextractDocs maintains a secure, closed loop. We provide absolute transparency into our 
                  processing architecture to ensure your privacy.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="integration">
                <Accordion.Control>Can you integrate with my existing CRM/ERP?</Accordion.Control>
                <Accordion.Panel>
                  Yes. We deliver data in standardized formats (JSON, CSV, XML) ready for immediate import 
                  into any CRM or custom database. We can also tailor formatting to match your specific API needs.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Container>
        </div>
      </section>


      {/* Footer */}
      <footer id="footer" ref={footerRef}>
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
