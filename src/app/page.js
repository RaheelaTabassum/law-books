export default function Dashboard() {
  return (
    <div className="grid">
      <div className="col-12 md:col-6 lg:col-4">
        <div className="card shadow-2">
          <h2>Welcome to LawBooks Dashboard</h2>
          <p>Manage your collection of legal books efficiently.</p>
        </div>
      </div>
    </div>
  );
}
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
    </main>
  );
}
