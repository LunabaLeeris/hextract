import React, { useState } from "react";
import { Check, Cpu, UserCheck } from "lucide-react";

const DocumentPlayground = () => {
  const [activeField, setActiveField] = useState("invoiceNumber");

  const fieldsData = {
    invoiceNumber: {
      label: "Invoice ID",
      value: "INV-2026-081",
      confidence: "99.9%",
      verifiedBy: "Human Annotator #34",
      source: "human",
    },
    clientName: {
      label: "Client Name",
      value: "Acme Corporation",
      confidence: "98.5%",
      verifiedBy: "OCR Model V4",
      source: "machine",
    },
    date: {
      label: "Issue Date",
      value: "2026-06-17",
      confidence: "99.5%",
      verifiedBy: "OCR Model V4",
      source: "machine",
    },
    total: {
      label: "Total Amount",
      value: "$14,500.00",
      confidence: "100.0%",
      verifiedBy: "Human Annotator #12",
      source: "human",
    },
  };

  return (
    <div className="playground-card">
      <div className="playground-header">
        <span className="playground-title">Live Pipeline Simulation</span>
        <span className="playground-status">
          <Check size={14} /> Active Verification
        </span>
      </div>

      <div className="playground-body">
        {/* Mock Document Column */}
        <div className="document-canvas">
          <div className="document-logo-placeholder">INVOICE</div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
            <div>
              <strong>HextractDocs Ltd.</strong>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Tech District, NY
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <span
                className={`document-highlight ${activeField === "invoiceNumber" ? "active" : ""}`}
                onMouseEnter={() => setActiveField("invoiceNumber")}
                onClick={() => setActiveField("invoiceNumber")}
              >
                INV-2026-081
              </span>
              <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", marginTop: "4px" }}>
                Date:{" "}
                <span
                  className={`document-highlight ${activeField === "date" ? "active" : ""}`}
                  onMouseEnter={() => setActiveField("date")}
                  onClick={() => setActiveField("date")}
                >
                  2026-06-17
                </span>
              </div>
            </div>
          </div>

          <div style={{ margin: "16px 0", borderBottom: "1px solid var(--border-color)" }} />

          <div style={{ fontSize: "0.85rem" }}>
            <span style={{ color: "var(--text-secondary)", display: "block", fontSize: "0.75rem", textTransform: "uppercase" }}>Bill To:</span>
            <span
              className={`document-highlight ${activeField === "clientName" ? "active" : ""}`}
              onMouseEnter={() => setActiveField("clientName")}
              onClick={() => setActiveField("clientName")}
            >
              Acme Corporation
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
            <div className="document-line" style={{ width: "90%" }} />
            <div className="document-line" style={{ width: "75%" }} />
            <div className="document-line" style={{ width: "85%" }} />
          </div>

          <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div className="document-line" style={{ width: "30%", height: "8px" }} />
            <div style={{ textAlign: "right" }}>
              <span style={{ fontSize: "0.75rem", color: "var(--text-secondary)", display: "block" }}>Total Due:</span>
              <span
                className={`document-highlight ${activeField === "total" ? "active" : ""}`}
                onMouseEnter={() => setActiveField("total")}
                onClick={() => setActiveField("total")}
                style={{ fontSize: "1.1rem" }}
              >
                $14,500.00
              </span>
            </div>
          </div>
        </div>

        {/* Extracted Metadata Column */}
        <div className="playground-metadata">
          {Object.keys(fieldsData).map((key) => {
            const data = fieldsData[key];
            const isActive = activeField === key;
            return (
              <div
                key={key}
                className={`meta-row ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActiveField(key)}
              >
                <div className="meta-label">{data.label}</div>
                <div className="meta-val-row">
                  <span className="meta-value">{data.value}</span>
                  <span className="meta-score">{data.confidence}</span>
                </div>
                {isActive && (
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: "4px", borderTop: "1px solid var(--border-color)", paddingTop: "4px" }}>
                    {data.source === "human" ? (
                      <>
                        <UserCheck size={12} style={{ color: "var(--success-color)" }} />
                        <span>Verified by {data.verifiedBy}</span>
                      </>
                    ) : (
                      <>
                        <Cpu size={12} style={{ color: "var(--accent-color)" }} />
                        <span>Extracted by {data.verifiedBy}</span>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DocumentPlayground;
