"use client";

import { motion } from "framer-motion";

const stylists = [
  {
    role: "店長 / トップスタイリスト",
    name: "佐藤　翔太",
    nameEn: "SHOTA SATO",
    specialty: "トレンドを取り入れた似合わせスタイルが得意です。",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778564913/hair-stylist-1_sd7qbr.png",
  },
  {
    role: "スタイリスト",
    name: "田中　優里",
    nameEn: "YURI TANAKA",
    specialty: "透明感カラー・柔らかい質感のスタイルが得意です。",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778564934/hair-stylist-2_csaonp.png",
  },
  {
    role: "スタイリスト",
    name: "鈴木　海斗",
    nameEn: "KAITO SUZUKI",
    specialty: "メンズスタイル・韓国風ヘアお任せください。",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778566369/d51240d8-2109-4d06-aacf-c97216a72b7e_bbf6fb.png",
  },
  {
    role: "スタイリスト",
    name: "山本　さくら",
    nameEn: "SAKURA YAMAMOTO",
    specialty: "ヘアセット・アレンジが得意です。可愛く仕上げます！",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778566786/07f56d8c-03a0-4603-8c62-2b2e39a1a852_1_czurac.png",
  },
];

export default function Stylist() {
  return (
    <section
      id="stylist"
      style={{
        background: "linear-gradient(180deg, #fffdfd 0%, #fff8f8 100%)",
        padding: "140px 0",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 40px" }}>

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{
            fontSize: "14px",
            letterSpacing: "0.28em",
            fontWeight: 600,
            color: "#d99aa5",
            marginBottom: "20px",
          }}>
            STYLIST
          </div>
          <h2 style={{
            fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif",
            fontSize: "36px",
            lineHeight: 1.8,
            letterSpacing: "0.12em",
            fontWeight: 400,
            color: "#2b2524",
            marginBottom: "20px",
          }}>
            実力派スタイリストがあなたを担当
          </h2>

          {/* 装飾ライン */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <div style={{ width: "100px", height: "1px", background: "#e6b7c0" }} />
            <span style={{ color: "#e6b7c0", fontSize: "14px" }}>✳</span>
            <div style={{ width: "100px", height: "1px", background: "#e6b7c0" }} />
          </div>
        </div>

        {/* カードグリッド */}
        <div className="stylist-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "28px",
          alignItems: "stretch",
        }}>
          {stylists.map((st, i) => (
            <motion.div
              key={st.nameEn}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(215,170,180,0.18)" }}
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid #f3e4e7",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow: "0 10px 40px rgba(215,170,180,0.08)",
                transition: "all 0.4s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* 画像 */}
              <div style={{ height: "420px", overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={st.img}
                  alt={st.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "50% 5%",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* テキスト */}
              <div style={{
                padding: "42px 32px 38px",
                textAlign: "center",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}>
                {/* 役職 */}
                <div style={{
                  fontSize: "13px",
                  letterSpacing: "0.18em",
                  lineHeight: 2,
                  color: "#d89aa8",
                  marginBottom: "18px",
                }}>
                  {st.role}
                </div>

                {/* 日本語名 */}
                <h3 style={{
                  fontFamily: "'Yu Mincho', 'Noto Serif JP', serif",
                  fontSize: "clamp(22px, 2vw, 28px)",
                  lineHeight: 1.4,
                  letterSpacing: "0.14em",
                  fontWeight: 500,
                  color: "#2b2524",
                  marginBottom: "12px",
                  whiteSpace: "nowrap",
                }}>
                  {st.name}
                </h3>

                {/* 英語名 */}
                <div style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: "14px",
                  letterSpacing: "0.16em",
                  color: "#d99aa5",
                  marginBottom: "24px",
                }}>
                  {st.nameEn}
                </div>

                {/* 区切り線 */}
                <div style={{ width: "56px", height: "1px", background: "#ebc7ce", marginBottom: "28px" }} />

                {/* 説明 */}
                <p style={{
                  fontSize: "14px",
                  lineHeight: 2,
                  letterSpacing: "0.08em",
                  color: "#4d4341",
                  overflowWrap: "break-word",
                  flex: 1,
                }}>
                  {st.specialty}
                </p>

                {/* Instagram */}
                <div style={{ marginTop: "32px" }}>
                  <svg
                    width="44" height="44"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#d98fa0"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ cursor: "pointer" }}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="#d98fa0" stroke="none" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "72px" }}>
          <a
            href="#access"
            style={{
              width: "420px",
              height: "76px",
              borderRadius: "999px",
              border: "1px solid #ebc7ce",
              background: "rgba(255,255,255,0.8)",
              backdropFilter: "blur(10px)",
              color: "#2b2524",
              fontSize: "18px",
              letterSpacing: "0.12em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              textDecoration: "none",
              transition: "all 0.35s ease",
              fontFamily: "'Yu Mincho', 'Noto Serif JP', serif",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#d98fa0";
              el.style.color = "#fff";
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 30px rgba(217,143,160,0.24)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(255,255,255,0.8)";
              el.style.color = "#2b2524";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            スタイリスト一覧を見る　→
          </a>
        </div>
      </div>
    </section>
  );
}
