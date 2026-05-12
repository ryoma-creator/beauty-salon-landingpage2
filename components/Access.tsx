"use client";

import { motion } from "framer-motion";

const CORMORANT = "var(--font-cormorant), 'Cormorant Garamond', serif";
const SERIF_JP = "var(--font-noto-serif), 'Noto Serif JP', serif";

export default function Access() {
  return (
    <section
      id="access"
      style={{
        padding: "120px 0 140px",
        background: "linear-gradient(180deg, #fffdfd 0%, #fdf8f8 100%)",
      }}
    >
      <div
        className="section-inner"
        style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 clamp(40px, 6vw, 100px)" }}
      >
        <div
          className="access-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(60px, 6vw, 120px)",
            alignItems: "start",
          }}
        >
          {/* LEFT: ACCESS */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ marginBottom: "14px" }}>ACCESS</div>
            <h2 style={{
              fontFamily: SERIF_JP,
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#2c2c2c",
              marginBottom: "40px",
              lineHeight: 1.4,
            }}>アクセス</h2>

            <div className="access-left-inner">
              {/* 画像 */}
              <div className="access-photo">
                <img
                  src="https://res.cloudinary.com/da3abynbu/image/upload/v1778569459/46dac6d1-6cbb-49e9-ad77-59c3bca31853_xpmaut.png"
                  alt="サロン内観"
                  style={{
                    width: "100%",
                    aspectRatio: "1 / 1",
                    objectFit: "cover",
                    borderRadius: "24px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
                    display: "block",
                    transition: "transform 0.5s ease, box-shadow 0.5s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 30px 80px rgba(0,0,0,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 20px 60px rgba(0,0,0,0.06)";
                  }}
                />
              </div>

              {/* 店舗情報 */}
              <div className="access-info">
                <div style={{
                  fontFamily: CORMORANT,
                  fontSize: "clamp(18px, 2vw, 26px)",
                  fontWeight: 500,
                  letterSpacing: "0.03em",
                  color: "#2b2b2b",
                  marginBottom: "18px",
                  lineHeight: 1.3,
                }}>
                  &amp;.LUMI hair salon
                </div>

                <div style={{
                  fontSize: "14px",
                  lineHeight: 2.3,
                  letterSpacing: "0.04em",
                  color: "#555",
                  marginBottom: "28px",
                }}>
                  〒150-0001<br />
                  東京都渋谷区神宮前4-XX-XX<br />
                  <br />
                  表参道駅 A2出口 徒歩5分<br />
                  明治神宮前駅 徒歩8分
                </div>

                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 22px",
                    borderRadius: "999px",
                    border: "1px solid #dda0b5",
                    color: "#c07085",
                    fontSize: "13px",
                    letterSpacing: "0.04em",
                    fontWeight: 500,
                    textDecoration: "none",
                    transition: "all 0.35s ease",
                    background: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "#d58b9d";
                    el.style.color = "white";
                    el.style.borderColor = "#d58b9d";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = "transparent";
                    el.style.color = "#c07085";
                    el.style.borderColor = "#dda0b5";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  Google Mapで見る
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT: RESERVE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="section-label" style={{ marginBottom: "14px" }}>RESERVE</div>
            <h2 style={{
              fontFamily: SERIF_JP,
              fontSize: "clamp(26px, 3vw, 40px)",
              fontWeight: 400,
              letterSpacing: "0.06em",
              color: "#2c2c2c",
              marginBottom: "40px",
              lineHeight: 1.4,
            }}>ご予約はこちら</h2>

            {/* WEB + LINE */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "14px" }}>
              {[
                {
                  label: "WEB予約",
                  sub: "（24時間受付）",
                  bg: "#fdf0f4",
                  icon: (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d58b9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                  ),
                },
                {
                  label: "LINE予約",
                  sub: "（友だち追加）",
                  bg: "#f0faf2",
                  icon: (
                    <svg width="26" height="26" viewBox="0 0 44 44" fill="none">
                      <rect width="44" height="44" rx="10" fill="#06C755" />
                      <path d="M22 9C13.16 9 6 14.92 6 22.18c0 4.44 2.73 8.36 6.9 10.9l-.86 3.46 4.01-1.61A17.5 17.5 0 0022 35.36c8.84 0 16-5.92 16-13.18C38 14.92 30.84 9 22 9z" fill="white" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(240,220,228,0.6)",
                    borderRadius: "20px",
                    padding: "28px 20px",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
                    cursor: "pointer",
                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                    textAlign: "center",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 16px 44px rgba(0,0,0,0.07)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px rgba(0,0,0,0.04)";
                  }}
                >
                  <div style={{ width: "52px", height: "52px", borderRadius: "13px", background: item.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "15px", fontWeight: 600, color: "#2d2d2d", letterSpacing: "0.04em", marginBottom: "3px" }}>{item.label}</div>
                    <div style={{ fontSize: "12px", color: "#aaa" }}>{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 電話 */}
            <div style={{
              background: "rgba(255,255,255,0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(240,220,228,0.6)",
              borderRadius: "20px",
              padding: "28px 32px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.04)",
              textAlign: "center",
              marginBottom: "20px",
            }}>
              <div style={{ fontSize: "12px", color: "#bbb", letterSpacing: "0.06em", marginBottom: "12px" }}>
                お電話でのご予約
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d58b9d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <span style={{ fontFamily: CORMORANT, fontSize: "30px", fontWeight: 500, color: "#d58b9d", letterSpacing: "0.04em" }}>
                  03-1234-5678
                </span>
              </div>
              <div style={{ fontSize: "12px", color: "#bbb", letterSpacing: "0.04em" }}>
                受付時間 / 10:00 – 20:00（火曜定休）
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", height: "62px", borderRadius: "999px", fontSize: "15px", letterSpacing: "0.1em" }}
            >
              今すぐ予約する →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
