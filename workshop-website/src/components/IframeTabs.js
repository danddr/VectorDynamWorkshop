import React, { useState } from "react";

import * as styles from "../components/index.module.css"

const IframeTabs = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  if (!tabs.length) {
    return <p style={{ padding: "1em" }}>No tabs available.</p>;
  }

  return (
    <div style={{ width: "100%", height: "90vh", display: "flex", flexDirection: "column" }}>
      {/* Tab header */}
      <div
        style={{
          display: "flex",
          borderBottom: "2px solid #bbb",
          background: "#eee",
          overflowX: "auto",
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            style={{
              flexShrink: 0,
              padding: "10px 15px",
              cursor: "pointer",
              border: "none",
              borderBottom: i === activeTab ? "3px solid var(--color-primary)" : "3px solid transparent",
              background: i === activeTab ? "#fff" : "transparent",
              color: i === activeTab ? "var(--color-primary)" : "var(--color-text)",
              fontWeight: "600",
              transition: "all 0.2s ease-in-out",
              whiteSpace: "nowrap",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Iframe area */}
      <div style={{ flex: 1 }}>
        <iframe
          title={tabs[activeTab].label}
          src={tabs[activeTab].src}
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </div>
  );
};

export default IframeTabs;
