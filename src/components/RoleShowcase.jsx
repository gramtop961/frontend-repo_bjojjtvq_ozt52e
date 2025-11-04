import { Users, CalendarDays, FileText, MessageSquare } from 'lucide-react';

const roles = [
  {
    name: 'Admin',
    color: 'from-amber-400 to-orange-500',
    points: [
      'Manage staff and clients',
      'View attendance & revenue analytics',
      'Create invoices and salaries',
      'Real‑time chat with staff',
    ],
    icon: Users,
  },
  {
    name: 'Staff',
    color: 'from-emerald-400 to-green-500',
    points: [
      'GPS attendance with geofence',
      'Meetings with location proof',
      'Upload visit reports & documents',
      'Chat with Admin in real‑time',
    ],
    icon: CalendarDays,
  },
  {
    name: 'Client',
    color: 'from-cyan-400 to-blue-500',
    points: [
      'Secure access to profile & invoices',
      'Track payment status',
      'Share requirements & documents',
      'Receive notifications and updates',
    ],
    icon: FileText,
  },
];

export default function RoleShowcase() {
  return (
    <section id="roles" className="relative w-full bg-gray-950 py-16 text-white md:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Designed for every role</h2>
            <p className="mt-3 max-w-xl text-white/70">
              Role‑based dashboards keep everyone focused — Admin, Staff, and Clients get exactly what they need.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4 text-emerald-300" />
              Real‑time updates and notifications
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {roles.map(({ name, points, icon: Icon, color }) => (
            <div key={name} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-3">
                <span className={`grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br ${color} text-gray-900`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold">{name}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/60" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
