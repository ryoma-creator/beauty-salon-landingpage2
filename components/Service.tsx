"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "カット",
    desc: "骨格や髪質に合わせた似合わせカット",
    price: "¥5,500〜",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778562352/beauty-1-female_coh6kh.png",
  },
  {
    num: "02",
    title: "カラー",
    desc: "透明感＆ツヤ感のあるトレンドカラー",
    price: "¥7,700〜",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778562489/beauty-female-2_wldtnu.png",
  },
  {
    num: "03",
    title: "トリートメント",
    desc: "髪の内部から補修しうるツヤ美髪へ",
    price: "¥4,400〜",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778562699/beauty-female-3_gxnbvv.png",
  },
  {
    num: "04",
    title: "ヘアセット",
    desc: "特別な日をもっと可愛く崩れにくいセット",
    price: "¥4,950〜",
    img: "https://res.cloudinary.com/da3abynbu/image/upload/v1778562836/beauty-female-4_cy9ho7.png",
  },
];

export default function Service() {
  return (
    <section id="service" style={{ padding: "120px 0", background: "#fffaf9" }}>
      <div className="section-inner" style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 40px" }}>

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            fontSize: "14px",
            letterSpacing: "0.28em",
            color: "#b87888",
            fontWeight: 500,
            marginBottom: "20px",
          }}>
            SERVICE
          </div>
          <h2 style={{
            fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif",
            fontSize: "36px",
            fontWeight: 400,
            lineHeight: 1.8,
            letterSpacing: "0.12em",
            color: "#2b2b2b",
            marginBottom: "20px",
          }}>
            なりたいを叶える、多彩なメニュー
          </h2>
          <div style={{ width: "40px", height: "2px", background: "#b87888", margin: "0 auto" }} />
        </div>

        {/* カードグリッド */}
        <div className="service-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
        }}>
          {services.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                background: "#ffffff",
                border: "1px solid #f1dfe3",
                borderRadius: "14px",
                boxShadow: "0 12px 40px rgba(180,120,130,0.08)",
                overflow: "hidden",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                display: "flex",
                flexDirection: "column",
              }}
              whileHover={{
                y: -6,
                boxShadow: "0 20px 60px rgba(180,120,130,0.16)",
              }}
            >
              {/* 画像 */}
              <div style={{ height: "360px", overflow: "hidden", flexShrink: 0 }}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "top center",
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>

              {/* テキストエリア — flex列で高さ均一 */}
              <div style={{
                padding: "28px 20px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flex: 1,
              }}>
                {/* 番号 */}
                <div style={{
                  fontSize: "14px",
                  color: "#b87888",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                }}>
                  {s.num}
                </div>
                <div style={{ width: "20px", height: "1px", background: "#b87888", marginBottom: "16px" }} />

                {/* タイトル — 固定高さ */}
                <h3 style={{
                  fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  color: "#2b2b2b",
                  marginBottom: "14px",
                  overflowWrap: "break-word",
                  width: "100%",
                  textAlign: "center",
                  minHeight: "32px",
                }}>
                  {s.title}
                </h3>

                {/* 説明 — flex:1 で高さを吸収 */}
                <p style={{
                  fontSize: "13px",
                  lineHeight: 1.9,
                  color: "#777",
                  letterSpacing: "0.06em",
                  overflowWrap: "break-word",
                  width: "100%",
                  textAlign: "center",
                  flex: 1,
                }}>
                  {s.desc}
                </p>

                {/* 価格 — 常に最下部 */}
                <div style={{
                  fontFamily: "'Yu Mincho', 'Hiragino Mincho ProN', serif",
                  fontSize: "18px",
                  color: "#b87888",
                  paddingTop: "16px",
                  borderTop: "1px solid #f1dfe3",
                  width: "100%",
                  textAlign: "center",
                  letterSpacing: "0.05em",
                  marginTop: "auto",
                }}>
                  {s.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ボタン */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a
            href="#access"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "24px",
              width: "360px",
              height: "64px",
              border: "1px solid #e5a9b5",
              borderRadius: "4px",
              fontSize: "14px",
              color: "#333",
              background: "#fff",
              textDecoration: "none",
              letterSpacing: "0.12em",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#fdf0f4";
              (e.currentTarget as HTMLAnchorElement).style.color = "#b87888";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#fff";
              (e.currentTarget as HTMLAnchorElement).style.color = "#333";
            }}
          >
            すべてのメニューを見る　→
          </a>
        </div>
      </div>
    </section>
  );
}
