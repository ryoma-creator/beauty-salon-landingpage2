"use client";

import { motion } from "framer-motion";

const voices = [
  {
    title: "理想の髪色になれました！",
    text: "いつもざっくりしたイメージしか伝えていないのに、毎回理想以上に仕上げてくれて感動です♡ 色落ちまで綺麗で大満足！",
    name: "22歳 / 学生",
    avatar: "https://res.cloudinary.com/da3abynbu/image/upload/v1778568046/7da2412c-9286-42d9-83ee-d91413bf89da_hzkjk4.png",
  },
  {
    title: "毎月通いたくなるサロン",
    text: "店内もおしゃれで、スタッフさんも優しくて居心地が最高です！髪の悩みも相談しやすくて信頼しています。",
    name: "24歳 / 会社員",
    avatar: "https://res.cloudinary.com/da3abynbu/image/upload/v1778568368/b3af22af-1dc0-41b5-bf39-cea1f89e043e_uyalia.png",
  },
  {
    title: "セットが崩れにくい！",
    text: "ヘアセットをお願いしましたが、1日中崩れなくて可愛いままでした♡ 特別な日の時はまたお願いしたいです！",
    name: "21歳 / 学生",
    avatar: "https://res.cloudinary.com/da3abynbu/image/upload/v1778568430/e8517364-0f8a-4af2-a782-9b570c0b0bf8_whwmwz.png",
  },
];

const SERIF = "'Yu Mincho', 'Hiragino Mincho ProN', 'Noto Serif JP', serif";

export default function Voice() {
  return (
    <section
      id="voice"
      style={{
        background: "linear-gradient(180deg, #fffdfd 0%, #fff8f8 100%)",
        padding: "140px 0",
      }}
    >
      <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "0 56px" }}>

        {/* ヘッダー */}
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <div style={{
            fontSize: "14px",
            letterSpacing: "0.28em",
            color: "#d99aa5",
            fontWeight: 600,
            marginBottom: "20px",
          }}>
            VOICE
          </div>
          <h2 style={{
            fontFamily: SERIF,
            fontSize: "36px",
            lineHeight: 1.8,
            letterSpacing: "0.12em",
            fontWeight: 400,
            color: "#2b2524",
            marginBottom: "20px",
          }}>
            お客様の声
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <div style={{ width: "90px", height: "1px", background: "#e5a0ad" }} />
            <span style={{ color: "#e5a0ad", fontSize: "14px" }}>✳</span>
            <div style={{ width: "90px", height: "1px", background: "#e5a0ad" }} />
          </div>
        </div>

        {/* カードグリッド */}
        <div className="voice-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "36px",
        }}>
          {voices.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8, boxShadow: "0 24px 70px rgba(216,150,160,0.16)" }}
              style={{
                background: "rgba(255,255,255,0.92)",
                border: "1px solid #f3e0e4",
                borderRadius: "24px",
                padding: "56px 44px 48px",
                minHeight: "500px",
                boxShadow: "0 16px 50px rgba(216,150,160,0.08)",
                transition: "all 0.35s ease",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* カードトップ：アバター + タイトル + 星 */}
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: "28px",
                marginBottom: "32px",
              }}>
                <img
                  src={v.avatar}
                  alt={v.name}
                  style={{
                    width: "112px",
                    height: "112px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                    border: "2px solid #f3e0e4",
                  }}
                />
                <div>
                  <div style={{
                    fontFamily: SERIF,
                    fontSize: "22px",
                    lineHeight: 1.6,
                    letterSpacing: "0.08em",
                    color: "#2b2524",
                    marginBottom: "10px",
                    wordBreak: "keep-all",
                  }}>
                    {v.title}
                  </div>
                  <div style={{
                    color: "#dc8194",
                    fontSize: "22px",
                    letterSpacing: "0.18em",
                  }}>
                    ★★★★★
                  </div>
                </div>
              </div>

              {/* レビュー本文 */}
              <p style={{
                fontFamily: SERIF,
                fontSize: "17px",
                lineHeight: 2.4,
                letterSpacing: "0.08em",
                color: "#2b2524",
                flex: 1,
                overflowWrap: "break-word",
              }}>
                {v.text}
              </p>

              {/* 顧客情報 */}
              <div style={{ marginTop: "48px", paddingTop: "0" }}>
                <div style={{
                  width: "40px",
                  height: "1px",
                  background: "#dc8194",
                  marginBottom: "20px",
                }} />
                <div style={{
                  fontFamily: SERIF,
                  fontSize: "16px",
                  letterSpacing: "0.08em",
                  color: "#2b2524",
                }}>
                  {v.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTAボタン */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "72px" }}>
          <a
            href="#access"
            style={{
              width: "420px",
              height: "76px",
              borderRadius: "999px",
              border: "1px solid #e4a2ad",
              background: "rgba(255,255,255,0.75)",
              color: "#dc8194",
              fontFamily: SERIF,
              fontSize: "20px",
              letterSpacing: "0.18em",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "48px",
              textDecoration: "none",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#dc8194";
              el.style.color = "#fff";
              el.style.boxShadow = "0 16px 40px rgba(220,129,148,0.22)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "rgba(255,255,255,0.75)";
              el.style.color = "#dc8194";
              el.style.boxShadow = "none";
            }}
          >
            もっと見る　→
          </a>
        </div>
      </div>
    </section>
  );
}
