"use client";

const navLinks = ["HOME", "ABOUT", "SERVICE", "STYLIST", "VOICE", "ACCESS"];
const CORMORANT = "var(--font-cormorant), 'Cormorant Garamond', serif";
const SERIF_JP = "var(--font-noto-serif), 'Noto Serif JP', serif";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05A6.34 6.34 0 003.15 15.3a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.72a8.18 8.18 0 004.78 1.52V6.8a4.85 4.85 0 01-1.01-.11z" />
    </svg>
  );
}

function ThreadsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.58-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.473 12.01v-.02c.027-3.579.877-6.43 2.524-8.482C5.844 1.205 8.597.024 12.18 0h.013c2.745.018 5.123.806 6.886 2.281 1.696 1.423 2.652 3.47 2.841 6.095l.012.194h-2.86l-.013-.174c-.148-1.969-.816-3.444-1.986-4.379-1.136-.91-2.751-1.375-4.8-1.388-2.814.019-4.958.902-6.374 2.623-1.348 1.641-2.041 4.022-2.063 7.075.022 3.052.715 5.433 2.063 7.075 1.416 1.721 3.56 2.604 6.374 2.623 2.22-.015 3.83-.474 5.031-1.403 1.374-1.065 1.853-2.638 1.853-3.838 0-2.3-1.573-3.848-4.116-4.2v2.82c1.265.314 1.507 1.076 1.507 1.524 0 .59-.193 1.085-.574 1.47-.468.472-1.17.712-2.08.712-.877 0-1.607-.278-2.107-.803-.481-.507-.727-1.197-.727-2.052 0-.9.303-1.69.9-2.344.614-.674 1.54-1.063 2.627-1.097.38-.013.767.006 1.167.058V9.5c0-.81-.427-1.331-1.194-1.392-.756-.058-1.49.22-1.982.76l-.023.025-2.127-1.87.022-.027c.906-1.113 2.357-1.733 4.083-1.733 2.638 0 4.211 1.508 4.211 4.03v5.52c.007.147.01.296.01.447 0 2.2-.712 3.99-2.118 5.099-1.397 1.103-3.348 1.664-5.808 1.679z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #fcf8f8 100%)",
        paddingTop: "100px",
        paddingBottom: "48px",
        borderTop: "1px solid rgba(220,210,210,0.35)",
      }}
    >
      <div
        className="section-inner"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(40px, 6vw, 100px)" }}
      >
        {/* ロゴ + ナビ + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
            marginBottom: "72px",
            flexWrap: "wrap",
          }}
        >
          {/* ロゴ */}
          <div style={{ flexShrink: 0 }}>
            <div style={{
              fontFamily: CORMORANT,
              fontSize: "68px",
              fontWeight: 500,
              letterSpacing: "0.04em",
              lineHeight: 0.9,
              color: "#1f1b1b",
            }}>
              &amp;.LUMI
            </div>
            <div style={{
              fontFamily: CORMORANT,
              fontSize: "20px",
              letterSpacing: "0.35em",
              fontWeight: 400,
              color: "#666",
              marginTop: "8px",
              paddingLeft: "44px",
            }}>
              hair salon
            </div>
          </div>

          {/* ナビ */}
          <nav style={{ display: "flex", gap: "48px", flexWrap: "wrap", justifyContent: "center" }}>
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  fontFamily: CORMORANT,
                  fontSize: "14px",
                  letterSpacing: "0.22em",
                  fontWeight: 500,
                  color: "#444",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d58b9d")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#444")}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#access"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              height: "58px",
              padding: "0 40px",
              borderRadius: "999px",
              background: "#d58b9d",
              color: "#fff",
              fontFamily: SERIF_JP,
              fontSize: "14px",
              letterSpacing: "0.1em",
              textDecoration: "none",
              flexShrink: 0,
              transition: "all 0.3s ease",
              boxShadow: "0 8px 28px rgba(213,139,157,0.28)",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#c87a8f";
              el.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#d58b9d";
              el.style.transform = "translateY(0)";
            }}
          >
            ご予約はこちら　→
          </a>
        </div>

        {/* 区切り線 */}
        <div style={{ height: "1px", background: "rgba(220,200,208,0.4)", marginBottom: "28px" }} />

        {/* ボトム */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}>
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <a
              href="#"
              style={{ fontSize: "12px", color: "#888", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d58b9d")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              プライバシーポリシー
            </a>
            <span style={{ color: "#ddd", fontSize: "12px" }}>|</span>
            <a
              href="#"
              style={{ fontSize: "12px", color: "#888", textDecoration: "none", letterSpacing: "0.04em", transition: "color 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#d58b9d")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#888")}
            >
              特定商取引に基づく表記
            </a>
          </div>

          <div style={{ fontSize: "12px", color: "#aaa", letterSpacing: "0.04em" }}>
            © &amp;.LUMI hair salon All rights reserved.
          </div>

          {/* SNS */}
          <div style={{ display: "flex", gap: "10px" }}>
            {[
              { icon: <InstagramIcon />, label: "Instagram" },
              { icon: <TikTokIcon />, label: "TikTok" },
              { icon: <ThreadsIcon />, label: "Threads" },
            ].map((item) => (
              <div
                key={item.label}
                title={item.label}
                style={{
                  width: "46px",
                  height: "46px",
                  borderRadius: "999px",
                  border: "1px solid rgba(0,0,0,0.08)",
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#555",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "#d58b9d";
                  el.style.color = "white";
                  el.style.transform = "translateY(-2px)";
                  el.style.borderColor = "#d58b9d";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.background = "rgba(255,255,255,0.8)";
                  el.style.color = "#555";
                  el.style.transform = "translateY(0)";
                  el.style.borderColor = "rgba(0,0,0,0.08)";
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
