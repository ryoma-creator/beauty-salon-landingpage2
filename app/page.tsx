"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Stylist from "@/components/Stylist";
import Voice from "@/components/Voice";
import Access from "@/components/Access";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Service />
      <Stylist />
      <Voice />
      <Access />
      <Footer />
    </main>
  );
}
