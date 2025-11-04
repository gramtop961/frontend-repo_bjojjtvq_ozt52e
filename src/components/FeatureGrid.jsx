import { Shield, Clock, MapPin, MessageSquare, FileText, BarChart3, Wallet, Bell } from 'lucide-react';

const features = [
  {
    title: 'Authentication & OTP',
    desc: 'Secure email login with OTP verification, bcrypt hashing, and session protection.',
    icon: Shield,
  },
  {
    title: 'GPS Attendance',
    desc: 'HTML5 Geolocation + Leaflet with 100m geofence and auto full/half/absent rules.',
    icon: MapPin,
  },
  {
    title: 'Meetings',
    desc: 'Schedule with clients, location proof, statuses, and email notifications.',
    icon: Clock,
  },
  {
    title: 'Real‑time Chat',
    desc: 'WebSocket chat for Admin ↔ Staff with text, images, and PDFs.',
    icon: MessageSquare,
  },
  {
    title: 'Invoices & Payments',
    desc: 'Auto-generate PDFs, taxes and totals, link to clients, export to Excel.',
    icon: FileText,
  },
  {
    title: 'Analytics',
    desc: 'Admin dashboard with charts for attendance, revenue, and meetings.',
    icon: BarChart3,
  },
  {
    title: 'Salary',
    desc: 'Monthly salary config and auto-calculation from attendance with exports.',
    icon: Wallet,
  },
  {
    title: 'Notifications',
    desc: 'In‑app + email alerts for meetings, attendance, and payments.',
    icon: Bell,
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="relative w-full bg-gray-950 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Everything you need to manage your office</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">Built with open‑source tools only — no paid APIs required.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map(({ title, desc, icon: Icon }) => (
            <div
              key={title}
              className="group rounded-xl border border-white/10 bg-white/5 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-orange-400/80 to-amber-500/80 text-gray-900">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
