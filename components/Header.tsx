"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = ["HOME", "ABOUT", "SERVICE", "STYLIST", "VOICE", "ACCESS"];
const CORMORANT = "var(--font-cormorant), 'Cormorant Garamond', 'Didot', serif";
const SERIF_JP = "var(--font-noto-serif), 'Noto Serif JP', serif";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="header-root"
      initial={{ y: -140, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: "120px",
        padding: "0 56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled ? "rgba(255,255,255,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(220,200,205,0.25)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      {/* ロゴ */}
      <div>
        <div
          className="header-logo-main"
          style={{
            fontFamily: CORMORANT,
            fontSize: "82px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            lineHeight: 0.9,
            color: "#1f1b1b",
          }}
        >
          &amp;.LUMI
        </div>
        <div
          className="header-logo-sub"
          style={{
            fontFamily: CORMORANT,
            fontSize: "28px",
            letterSpacing: "0.32em",
            fontWeight: 400,
            color: "#2d2626",
            marginTop: "6px",
            paddingLeft: "56px",
          }}
        >
          hair salon
        </div>
      </div>

      {/* ナビ */}
      <nav className="header-nav" style={{ display: "flex", alignItems: "center", gap: "64px" }}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            style={{
              fontFamily: CORMORANT,
              fontSize: "22px",
              letterSpacing: "0.12em",
              color: "#2b2524",
              fontWeight: 500,
              textDecoration: "none",
              transition: "color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#de8fa2")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#2b2524")}
          >
            {link}
          </a>
        ))}

        <a
          href="#access"
          className="header-reserve-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 36px",
            height: "58px",
            borderRadius: "999px",
            background: "#d85c78",
            color: "#fff",
            fontFamily: SERIF_JP,
            fontSize: "14px",
            letterSpacing: "0.12em",
            textDecoration: "none",
            transition: "all 0.3s ease",
            boxShadow: "0 8px 24px rgba(216,92,120,0.25)",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#cf526f";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#d85c78";
            (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
          }}
        >
          ご予約はこちら　→
        </a>
      </nav>
    </motion.header>
  );
}
