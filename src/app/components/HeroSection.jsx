"use client";

import { Button } from "primereact/button";

export default function HeroSection() {
  return (
    <section className="flex flex-column align-items-center justify-content-center text-center p-6 surface-100" style={{ minHeight: "80vh" }}>
      {/* Title */}
      <h1 className="text-5xl font-bold text-primary mb-4">Welcome to LawBooks</h1>

      {/* Subtitle */}
      <p className="text-lg text-700 mb-6">
        Your trusted platform for legal resources, case studies, and law materials.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-3">
        <Button label="Get Started" icon="pi pi-book" className="p-button-raised p-button-primary" />
        <Button label="Learn More" icon="pi pi-info-circle" className="p-button-outlined" />
      </div>
    </section>
  );
}
