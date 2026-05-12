"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const HERO_IMG = "https://res.cloudinary.com/da3abynbu/image/upload/v1778561613/beauty-salon-no-words_aexysh.png";

export default function Hero() {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!textRef.current) return;
    gsap.fromTo(
      textRef.current.querySelectorAll(".anim"),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.16, ease: "power3.out", delay: 0.6 }
    );
  }, []);

  return (
    <section
      id="home"
      className="hero-root"
      style={{
        position: "relative",
        height: "clamp(700px, 100vh, 900px)",
        overflow: "hidden",
        background: "#fff7f6",
      }}
    >
      {/* 背景画像：右寄りに配置 */}
      <motion.img
        src={HERO_IMG}
        alt="hero"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="hero-img"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "75%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "30% top",
          zIndex: 0,
        }}
      />

      {/* 左からのグラデーションで文字を読みやすく */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, #fff7f6 35%, rgba(255,247,246,0.7) 55%, transparent 75%)",
        zIndex: 1,
      }} />

      {/* テキストコンテンツ */}
      <div
        ref={textRef}
        className="hero-text"
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "96px",
          marginTop: "70px",
          maxWidth: "560px",
        }}
      >
        {/* メインヘッドライン */}
        <div style={{ marginBottom: "56px" }}>
          <h1
            className="anim hero-headline"
            style={{
              fontFamily: "var(--font-noto-serif), 'Yu Mincho', 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(44px, 4.5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.55,
              letterSpacing: "0.12em",
              color: "#2b2524",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            わたし史上、
          </h1>
          <h1
            className="anim hero-headline"
            style={{
              fontFamily: "var(--font-noto-serif), 'Yu Mincho', 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(44px, 4.5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.55,
              letterSpacing: "0.12em",
              color: "#d85c78",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            いちばん可愛い
          </h1>
          <h1
            className="anim hero-headline"
            style={{
              fontFamily: "var(--font-noto-serif), 'Yu Mincho', 'Hiragino Mincho ProN', serif",
              fontSize: "clamp(44px, 4.5vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.55,
              letterSpacing: "0.12em",
              color: "#2b2524",
              margin: 0,
              whiteSpace: "nowrap",
              // mobile override via .hero-headline class
            }}
          >
            わたしへ。
          </h1>
        </div>

        {/* サブタイトル */}
        <p
          className="anim"
          style={{
            fontFamily: "var(--font-noto-serif), serif",
            fontSize: "20px",
            lineHeight: 2.2,
            letterSpacing: "0.12em",
            color: "#2b2524",
            marginBottom: "48px",
          }}
        >
          トレンドをおさえた透明感カラーと<br />
          似合わせカットで、毎日がもっと輝く。
        </p>

        {/* CTAボタン */}
        <div className="anim">
          <a
            href="#access"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
              width: "340px",
              height: "68px",
              borderRadius: "999px",
              background: "#d85c78",
              color: "#fff",
              fontFamily: "var(--font-noto-serif), serif",
              fontSize: "18px",
              letterSpacing: "0.12em",
              textDecoration: "none",
              boxShadow: "0 16px 40px rgba(216,92,120,0.25)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#cf526f";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 20px 48px rgba(216,92,120,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#d85c78";
              (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 16px 40px rgba(216,92,120,0.25)";
            }}
          >
            今すぐ予約する　→
          </a>
        </div>
      </div>
    </section>
  );
}
