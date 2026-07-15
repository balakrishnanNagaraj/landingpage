import React, { useState } from "react";

/**
 * Adhoc Softwares — Landing Page
 * Design concept: "The Build Ticket"
 * Adhoc Softwares builds custom software the way a workshop fills a job order —
 * scoped, stamped, and shipped. The signature motif is a work-order docket:
 * perforated edges, monospace ticket numbers, and an "approved / shipped" stamp,
 * carried through the hero, services, and case studies.
 */

const services = [
  {
    id: "JC-01",
    title: "Mobile App Development",
    copy: "Native and cross-platform apps for iOS and Android, built to hold up under real user load and shipped on a schedule you can plan around.",
  },
  {
    id: "JC-02",
    title: "Product Development",
    copy: "From a rough idea to a market-ready product — architecture, UX, and a build plan that keeps your roadmap honest.",
  },
  {
    id: "JC-03",
    title: "SaaS ERP Development",
    copy: "Cloud ERP systems that pull scattered spreadsheets and paperwork into one place your whole team can actually use.",
  },
  {
    id: "JC-04",
    title: "Web App Development",
    copy: "Fast, easy-to-run websites and web apps that make it simple to publish, sell, and support customers online.",
  },
];

const stats = [
  { value: "14+", label: "Years in business" },
  { value: "500+", label: "Clients served" },
  { value: "1500+", label: "Projects shipped" },
  { value: "100+", label: "Android & iOS apps" },
];

const caseStudies = [
  { tag: "Ride-hailing · UAE", title: "RideApp UAE", desc: "Booking and dispatch for a Dubai ride and food delivery operator." },
  { tag: "Events", title: "EventJam", desc: "Discovery and booking app for events happening nearby and beyond." },
  { tag: "Delivery", title: "Water Delivery App", desc: "One-tap reordering built for a recurring water delivery business." },
  { tag: "Grocery", title: "Grocery Delivery App", desc: "Catalog, cart, and driver routing for same-day grocery delivery." },
  { tag: "Delivery", title: "Freshy — Milk Delivery", desc: "Subscription scheduling for a daily milk delivery service." },
  { tag: "Operations", title: "Garage Management System", desc: "Job cards, inventory, and billing for a multi-branch garage chain." },
];

const testimonials = [
  { quote: "The team delivered excellent results on our web project and handled every extra request without complaint.", name: "Stephen S", role: "Managing Director" },
  { quote: "They understood our complex ERP requirements and stayed adaptable through the whole build. Communication never slipped.", name: "Jeganthan R", role: "Marketing Manager" },
  { quote: "The mobile app they built for us went beyond what we asked for — clean design, solid functionality, easy to use.", name: "Maya Patel", role: "Chief Technology Officer" },
  { quote: "Rolling out our hallmarking ERP was smooth thanks to their attention to detail and clean integration work.", name: "Sarah Reynolds", role: "Business Lead" },
];

const faqs = [
  { q: "What services does Adhoc Softwares provide?", a: "Product development, mobile and web app development, and a set of supporting technology services from UI/UX through cloud deployment." },
  { q: "Where is Adhoc Softwares based?", a: "The team is headquartered in Coimbatore, India, with a second office in Dubai, UAE." },
  { q: "How does a project usually run?", a: "Requirement gathering, then mockups and design, a working prototype demo, full development, and deployment — in that order, with check-ins throughout." },
  { q: "What technologies do you build with?", a: "React, Angular, and Vue on the front end; Python, PHP, and Django on the back end; and React Native, Flutter, Swift, and native Android for mobile." },
  { q: "Is my project idea kept confidential?", a: "Yes. Every engagement is covered by an NDA before any project details are shared." },
];

function TicketDivider() {
  return (
    <div
      aria-hidden="true"
      className="h-3 w-full"
      style={{
        backgroundImage:
          "radial-gradient(circle, var(--bg) 3px, transparent 3.5px)",
        backgroundSize: "16px 16px",
        backgroundPosition: "0 -6px",
      }}
    />
  );
}

function Stamp({ children }) {
  return (
    <span
      className="inline-block rotate-[-6deg] rounded-sm border-2 px-3 py-1 text-xs font-bold tracking-widest"
      style={{ borderColor: "var(--accent-2)", color: "var(--accent-2)", fontFamily: "var(--font-mono)" }}
    >
      {children}
    </span>
  );
}

export default function AdhocSoftwaresLanding() {
  const [openFaq, setOpenFaq] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Mobile App",
    message: ""
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const ticketId = `#ADH-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedData({
      ...formData,
      ticketId,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric"
      })
    });
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--ink)", fontFamily: "var(--font-body)" }} className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500;600&display=swap');
        :root {
          --bg: #EEF1F4;
          --panel: #FFFFFF;
          --ink: #10151C;
          --ink-soft: #4B5563;
          --line: #CBD2D9;
          --accent: #FF7A1A;
          --accent-ink: #7A2E00;
          --accent-2: #0F6E5C;
          --navy: #161B33;
          --navy-soft: #A9B3D6;
          --font-display: 'Space Grotesk', sans-serif;
          --font-body: 'Inter', sans-serif;
          --font-mono: 'IBM Plex Mono', monospace;
        }
        .font-display { font-family: var(--font-display); }
        .font-mono { font-family: var(--font-mono); }
        .ticket-card {
          background: var(--panel);
          border: 1px solid var(--line);
          position: relative;
        }
        .ticket-card::before, .ticket-card::after {
          content: "";
          position: absolute;
          width: 18px; height: 18px;
          background: var(--bg);
          border: 1px solid var(--line);
          border-radius: 999px;
          top: 50%;
          transform: translateY(-50%);
        }
        .ticket-card::before { left: -9px; }
        .ticket-card::after { right: -9px; }
        .job-card { transition: transform .2s ease, box-shadow .2s ease; }
        .job-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -20px rgba(16,21,28,0.35); }
        .hairline { border-color: var(--line); }
      `}</style>

      {/* NAV */}
      <header className="sticky top-0 z-40 border-b hairline backdrop-blur" style={{ background: "rgba(238,241,244,0.9)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-md" style={{ background: "var(--navy)" }}>
              <span className="font-display text-sm font-bold" style={{ color: "var(--accent)" }}>AS</span>
            </div>
            <span className="font-display text-lg font-bold tracking-tight">Adhoc Softwares</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-14 md:pb-24 md:pt-20">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 md:items-center">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border hairline px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "var(--accent)" }} />
              <span className="font-mono text-xs tracking-widest" style={{ color: "var(--ink-soft)" }}>
                COIMBATORE, DUBAI.
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl">
              Software built to your
              <span style={{ color: "var(--accent)" }}> exact order.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-soft)" }}>
              Adhoc Softwares has been scoping, building, and shipping mobile apps, web apps,
              and ERP products for 14+ years — the kind of custom work you'd normally have
              to stitch together from three different vendors.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-sm px-6 py-3 text-sm font-semibold" style={{ background: "var(--navy)", color: "#fff" }}>
                Build your idea now
              </a>
              <a href="#work" className="rounded-sm border px-6 py-3 text-sm font-semibold hairline">
                View portfolio
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-xs tracking-widest" style={{ color: "var(--ink-soft)" }}>
              <span>ISO 27001:2013</span>
              <span>ISO 9001:2015</span>
              <span>NDA ON EVERY PROJECT</span>
            </div>
          </div>

          {/* Signature: the Build Ticket */}
          <div className="relative mx-auto w-full max-w-md rotate-1">
            <div className="ticket-card rounded-lg p-7 shadow-xl">
              <div className="flex items-start justify-between border-b hairline pb-4">
                <div>
                  <p className="font-mono text-[11px] tracking-widest" style={{ color: "var(--ink-soft)" }}>WORK ORDER</p>
                  <p className="font-display text-xl font-bold">#ADH-2026</p>
                </div>
                <Stamp>APPROVED</Stamp>
              </div>

              <div className="space-y-3 py-5 font-mono text-xs">
                <div className="flex justify-between">
                  <span style={{ color: "var(--ink-soft)" }}>CLIENT GOAL</span>
                  <span>Ship a working product</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--ink-soft)" }}>SCOPE</span>
                  <span>Mobile · Web · ERP</span>
                </div>
                <div className="flex justify-between">
                  <span style={{ color: "var(--ink-soft)" }}>STATUS</span>
                  <span style={{ color: "var(--accent-2)" }}>In production</span>
                </div>
              </div>

              <TicketDivider />

              <div className="grid grid-cols-2 gap-4 pt-5">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-2xl font-bold">{s.value}</p>
                    <p className="text-xs" style={{ color: "var(--ink-soft)" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y hairline" style={{ background: "var(--navy)" }}>
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-6">
          <p className="font-mono text-xs tracking-widest" style={{ color: "var(--navy-soft)" }}>
            TRUSTED ACROSS DELIVERY, RETAIL, HOSPITALITY & LOGISTICS
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 font-display text-sm font-semibold text-white/80">
            <span>Food &amp; Grocery Delivery</span>
            <span>Taxi &amp; Transport</span>
            <span>ERP &amp; Operations</span>
            <span>Events &amp; Booking</span>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-ink)" }}>ABOUT THE SHOP</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight">
              Fourteen years of taking ideas from spec to shipped.
            </h2>
          </div>
          <div className="md:col-span-8">
            <p className="text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-soft)" }}>
              Adhoc Softwares is a Coimbatore-based development team that designs and builds
              custom applications for iOS, Android, and the web. We work close to the client
              through every stage — requirements, mockups, prototype, build, and deployment —
              so nothing gets lost in translation between what was asked for and what gets shipped.
            </p>
            <p className="mt-4 text-base leading-relaxed md:text-lg" style={{ color: "var(--ink-soft)" }}>
              We're ISO 27001:2013 and ISO 9001:2015 certified, which means information security
              and quality process aren't an afterthought — they're built into how every project runs,
              from the first NDA to the final release.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 border-t hairline pt-8 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-bold">{s.value}</p>
                  <p className="mt-1 text-sm" style={{ color: "var(--ink-soft)" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-t hairline py-20" style={{ background: "var(--panel)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-ink)" }}>SERVICES · JOB CARDS</p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">
              Four ways we can pick up your project.
            </h2>
            <p className="mt-4 text-base" style={{ color: "var(--ink-soft)" }}>
              Every engagement gets its own docket — scoped, staffed, and tracked from kickoff to release.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.id} className="job-card rounded-lg border hairline p-6" style={{ background: "var(--bg)" }}>
                <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-2)" }}>{s.id}</p>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{s.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-ink)" }}>OUR PRODUCTS</p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">Two products we build and run ourselves.</h2>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-lg border hairline p-8" style={{ background: "var(--panel)" }}>
            <Stamp>CLOUD ERP</Stamp>
            <h3 className="mt-4 font-display text-2xl font-bold">Businessi ERP</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              A cloud ERP built for small businesses that need their processes under one roof —
              inventory, reporting, and day-to-day operations, accessible from anywhere.
            </p>
            <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--ink-soft)" }}>
              <li>— Turns scattered data into decision-ready reports</li>
              <li>— Cloud access from any branch or device</li>
              <li>— Built to reach ROI inside the first year</li>
            </ul>
            <a href="https://businessi.in/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold underline" style={{ color: "var(--accent-2)" }}>
              Visit businessi.in →
            </a>
          </div>

          <div className="rounded-lg border hairline p-8" style={{ background: "var(--panel)" }}>
            <Stamp>AI CHATBOT</Stamp>
            <h3 className="mt-4 font-display text-2xl font-bold">Queuebot</h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>
              An AI chatbot that keeps customer support running around the clock, so questions
              get answered whether it's 2pm or 2am.
            </p>
            <ul className="mt-5 space-y-2 text-sm" style={{ color: "var(--ink-soft)" }}>
              <li>— Meets customers on the digital assistants they already use</li>
              <li>— Cuts support costs by up to 30%</li>
              <li>— Always-on coverage, no shift schedule needed</li>
            </ul>
            <a href="https://queuebot.in/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block text-sm font-semibold underline" style={{ color: "var(--accent-2)" }}>
              Visit queuebot.in →
            </a>
          </div>
        </div>
      </section>

      {/* WORK / CASE STUDIES */}
      <section id="work" className="border-t hairline py-20" style={{ background: "var(--panel)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-ink)" }}>PROVEN RESULTS</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-bold leading-tight md:text-4xl">
            A handful of orders we've filled.
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c) => (
              <div key={c.title} className="job-card rounded-lg border hairline p-6" style={{ background: "var(--bg)" }}>
                <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-2)" }}>{c.tag}</p>
                <h3 className="mt-3 font-display text-lg font-bold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-ink)" }}>WHAT CLIENTS SAY</p>
        <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">Signed off by the people we built for.</h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg border hairline p-7" style={{ background: "var(--panel)" }}>
              <p className="text-base leading-relaxed" style={{ color: "var(--ink)" }}>&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-5 border-t hairline pt-4">
                <p className="font-display text-sm font-bold">{t.name}</p>
                <p className="font-mono text-xs" style={{ color: "var(--ink-soft)" }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t hairline py-20" style={{ background: "var(--panel)" }}>
        <div className="mx-auto max-w-3xl px-6">
          <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent-ink)" }}>HAVE A QUESTION?</p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">Before you reach out.</h2>

          <div className="mt-10 divide-y hairline border-t border-b hairline">
            {faqs.map((f, i) => (
              <div key={f.q}>
                <button
                  className="flex w-full items-center justify-between py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-display text-base font-semibold pr-6">{f.q}</span>
                  <span className="font-mono text-lg" style={{ color: "var(--accent)" }}>{openFaq === i ? "–" : "+"}</span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm leading-relaxed" style={{ color: "var(--ink-soft)" }}>{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT / CTA */}
      <section id="contact" className="py-20" style={{ background: "var(--navy)" }}>
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <p className="font-mono text-xs tracking-widest" style={{ color: "var(--accent)" }}>LET'S TALK</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-white md:text-4xl">
                Tell us what you're building. We'll draw up the order.
              </h2>
              <p className="mt-4 text-base" style={{ color: "var(--navy-soft)" }}>
                Every project starts under NDA, so your idea stays yours while we scope the build.
              </p>
              <a
                href="mailto:sales@adhocsoftwares.com"
                className="mt-6 inline-block rounded-sm px-6 py-3 text-sm font-semibold"
                style={{ background: "var(--accent)", color: "#1A0900" }}
              >
                sales@adhocsoftwares.com
              </a>

              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-lg border p-6" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                  <p className="font-mono text-xs tracking-widest text-white/50">INDIA — HQ</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">
                    SF No 163/2, Periyagounder Nagar, Saravanampatti, Coimbatore – 641035, Tamil Nadu.
                  </p>
                  <p className="mt-3 font-mono text-xs text-white/60">+91 94860 35353</p>
                  <p className="font-mono text-xs text-white/60">Mon–Fri, 9:00 AM – 6:00 PM</p>
                </div>
                <div className="rounded-lg border p-6" style={{ borderColor: "rgba(255,255,255,0.15)" }}>
                  <p className="font-mono text-xs tracking-widest text-white/50">UAE OFFICE</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/85">Al Qusais, Dubai, UAE.</p>
                  <p className="mt-3 font-mono text-xs text-white/60">+971 54 572 0169</p>
                  <p className="font-mono text-xs text-white/60">Mon–Fri, 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-8" style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(22,27,51,0.5)" }}>
              {!submittedData ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-display text-xl font-bold text-white">Log an Enquiry</h3>

                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-white/70 mb-2">FULL NAME *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-sm border px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.15)" }}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="block font-mono text-xs text-white/70 mb-2">EMAIL ADDRESS *</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-sm border px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                        style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.15)" }}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block font-mono text-xs text-white/70 mb-2">PHONE NUMBER</label>
                      <input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full rounded-sm border px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                        style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.15)" }}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectType" className="block font-mono text-xs text-white/70 mb-2">PROJECT TYPE</label>
                    <select
                      id="projectType"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-sm border px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                      style={{ background: "#161B33", borderColor: "rgba(255,255,255,0.15)" }}
                    >
                      <option value="Mobile App">Mobile App Development</option>
                      <option value="Web App">Web App Development</option>
                      <option value="ERP">SaaS ERP Development</option>
                      <option value="Product">Product Development</option>
                      <option value="Other">Other / Custom Scope</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-white/70 mb-2">PROJECT DETAILS *</label>
                    <textarea
                      id="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're looking to build..."
                      className="w-full rounded-sm border px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)] placeholder-white/30"
                      style={{ background: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.15)" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-sm py-3 text-sm font-semibold tracking-wider transition-colors hover:bg-[rgba(255,122,26,0.9)]"
                    style={{ background: "var(--accent)", color: "#1A0900" }}
                  >
                    SUBMIT ENQUIRY
                  </button>
                </form>
              ) : (
                <div className="space-y-6 text-center py-6 font-mono">
                  <div className="inline-block rounded-sm border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400 font-bold">
                    ✓ ENQUIRY LOGGED
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white tracking-tight">Ticket Generated</h3>
                  <div className="rounded-lg border border-dashed p-6 text-left space-y-4" style={{ borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.02)" }}>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50 text-xs">TICKET ID</span>
                      <span className="text-[var(--accent)] font-bold">{submittedData.ticketId}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50 text-xs">CLIENT</span>
                      <span className="text-white">{submittedData.name}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50 text-xs">TYPE</span>
                      <span className="text-white">{submittedData.projectType}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/50 text-xs">STATUS</span>
                      <span className="text-emerald-400 font-bold">PENDING NDA REVIEW</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/50 text-xs">DATE LOGGED</span>
                      <span className="text-white">{submittedData.date}</span>
                    </div>
                  </div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    We have generated a job ticket for your project. A representative will contact you at <strong>{submittedData.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmittedData(null);
                      setFormData({ name: "", email: "", phone: "", projectType: "Mobile App", message: "" });
                    }}
                    className="text-xs underline text-white/50 hover:text-white"
                  >
                    Log another enquiry
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t hairline py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md" style={{ background: "var(--navy)" }}>
              <span className="font-display text-xs font-bold" style={{ color: "var(--accent)" }}>AS</span>
            </div>
            <span className="font-display text-sm font-bold">Adhoc Softwares</span>
          </div>
          <p className="font-mono text-xs" style={{ color: "var(--ink-soft)" }}>
            © 2018–2026 Adhoc Softwares Pvt Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
