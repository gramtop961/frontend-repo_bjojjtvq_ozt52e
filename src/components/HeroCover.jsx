import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';

export default function HeroCover() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gray-950 text-white">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/S4k-6fqjuV5AuVZe/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay to improve contrast; doesn't block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-gray-950/80" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-16 md:pt-28 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
          Open‑source • Office Management Suite
        </div>

        <h1 className="mt-6 text-center text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Run your office with confidence
          <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-emerald-300 bg-clip-text text-transparent">— modern, secure, and fast</span>
        </h1>

        <p className="mt-6 max-w-3xl text-center text-base text-white/70 md:text-lg">
          A complete, mobile‑friendly Office Management Web App with attendance, meetings, invoices, chat, and analytics — powered by free tools like Leaflet, Chart.js, and PHPMailer.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-300"
          >
            <Rocket className="h-4 w-4" /> Explore Features
          </a>
          <a
            href="#roles"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            <Play className="h-4 w-4" /> See Roles
          </a>
        </div>
      </div>
    </section>
  );
}
