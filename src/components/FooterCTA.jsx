import { Github, Mail } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="w-full bg-gray-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-8 text-center">
          <h3 className="text-2xl font-semibold">Open‑source, free, and production‑ready</h3>
          <p className="mx-auto mt-2 max-w-2xl text-white/70">
            Built with Tailwind + Flowbite styles, Leaflet, Chart.js, PHPMailer, Ratchet, and more. Deploy to any PHP/MySQL host.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/15"
            >
              <Github className="h-4 w-4" /> View Repo
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-emerald-400"
            >
              <Mail className="h-4 w-4" /> Contact
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-white/50">© {new Date().getFullYear()} Office Management Web App • Free & Open Source</p>
      </div>
    </footer>
  );
}
