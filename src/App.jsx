
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Menu,
  MessageCircle,
  Sparkles,
  X,
} from "lucide-react";

const WHATSAPP_NUMBER = "919006531362";

const services = [
  {
    number: "01",
    title: "Weddings & Engagements",
    description:
      "Beautiful celebrations, thoughtful planning and unforgettable decor.",
  },
  {
    number: "02",
    title: "Birthdays & Private Parties",
    description:
      "Personalized themes, stunning setups and moments worth celebrating.",
  },
  {
    number: "03",
    title: "Corporate Events",
    description:
      "Professional conferences, launches, brand events and company gatherings.",
  },
  {
    number: "04",
    title: "Stage & Event Production",
    description:
      "Stage design, lighting, sound and production for events of every scale.",
  },
];

const gallery = [
  {
    title: "The Wedding Edit",
    type: "Weddings",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "Celebration in Color",
    type: "Private Parties",
    image:
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    title: "The Grand Stage",
    type: "Event Production",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=85",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    event: "Wedding",
    date: "",
    location: "",
    budget: "",
  });

  function updateField(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function submitEnquiry(event) {
    event.preventDefault();

    const message = [
      "Hello A2 Productions! I'd like to enquire about an event.",
      "",
      `Name: ${form.name}`,
      `Event type: ${form.event}`,
      `Event date: ${form.date || "Not decided"}`,
      `Location: ${form.location || "Not decided"}`,
      `Approximate budget: ${form.budget || "Need guidance"}`,
    ].join("\n");

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#faf8f3]">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#faf8f3]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
          <a href="#home" onClick={closeMenu} className="leading-tight">
            <span className="block text-2xl font-bold tracking-[0.14em]">
              A2 <span className="text-[#a78345]">PRODUCTIONS</span>
            </span>
            <span className="text-[10px] tracking-[0.28em] text-stone-500">
              EVENTS • EXPERIENCES • MEMORIES
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm hover:text-[#a78345]">Home</a>
            <a href="#services" className="text-sm hover:text-[#a78345]">Services</a>
            <a href="#gallery" className="text-sm hover:text-[#a78345]">Our Work</a>
            <a
              href="#contact"
              className="bg-[#27251f] px-5 py-3 text-sm text-white hover:bg-[#a78345]"
            >
              Get a Free Quote <ArrowRight className="ml-2 inline" size={15} />
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 md:hidden"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {menuOpen && (
          <div className="grid gap-4 border-t border-black/10 px-6 py-5 md:hidden">
            {[
              ["Home", "#home"],
              ["Services", "#services"],
              ["Our Work", "#gallery"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={href} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 md:grid-cols-2 md:px-10 md:py-20">
          <div>
            <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#9b793e]">
              <Sparkles size={16} /> Your vision, our creation
            </p>

            <h1 className="max-w-xl text-5xl leading-[1.12] md:text-7xl">
              We Create Moments.
              <span className="mt-2 block text-[#a78345]">
                You Make Memories.
              </span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-stone-600">
              From intimate celebrations to grand occasions, A2 Productions
              brings your ideas to life with creativity, detail and care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="bg-[#27251f] px-6 py-4 text-sm font-medium text-white hover:bg-[#a78345]"
              >
                Plan Your Event <ArrowRight className="ml-2 inline" size={16} />
              </a>
              <a
                href="#gallery"
                className="border border-stone-300 px-6 py-4 text-sm hover:border-[#a78345]"
              >
                Explore Our Work
              </a>
            </div>

            <p className="mt-8 text-xs tracking-wide text-stone-500">
              WEDDINGS · PARTIES · CORPORATE · LIVE EVENTS
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=90"
              alt="Elegant event venue set up for a celebration"
              fetchPriority="high"
              className="h-[390px] w-full object-cover md:h-[570px]"
            />
            <div className="absolute bottom-4 left-4 bg-[#faf8f3] p-4 md:bottom-7 md:left-7">
              <p className="font-serif text-xl">Every detail matters.</p>
              <p className="mt-1 text-xs text-stone-500">
                Making your special day extraordinary
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="border-y border-stone-200 bg-white px-5 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#a78345]">
              Welcome to A2 Productions
            </p>
            <h2 className="mt-4 text-3xl leading-snug md:text-5xl">
              Every event deserves its own kind of magic.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-600">
              We help turn your ideas into memorable experiences, with
              personalized planning, creative concepts and attention to
              the details that make every celebration yours.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78345]">
            What we do
          </p>
          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-xl text-4xl md:text-5xl">
              We bring every celebration to life.
            </h2>
            <p className="max-w-md leading-7 text-stone-600">
              One team for the ideas, the planning and the details that
              bring your event together.
            </p>
          </div>

          <div className="mt-12 grid gap-0 border-t border-stone-300 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="border-b border-stone-300 py-7 sm:px-5 sm:odd:border-r sm:odd:pl-0 sm:even:pr-0 md:py-10"
              >
                <p className="text-sm text-[#a78345]">{service.number}</p>
                <h3 className="mt-3 text-2xl">{service.title}</h3>
                <p className="mt-3 max-w-sm leading-7 text-stone-600">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-[#a78345]"
                >
                  Enquire now <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="bg-[#efebe2] px-5 py-20 md:px-10 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78345]">
                  A glimpse of the possibilities
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl">Our Work & Ideas</h2>
              </div>
              <p className="max-w-md leading-7 text-stone-600">
                Every concept begins with your vision. Let's create something
                that feels uniquely yours.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {gallery.map((item) => (
                <article key={item.title} className="group">
                  <div className="overflow-hidden">
                    <img
                      src={item.image}
                      alt={`${item.type} event inspiration`}
                      loading="lazy"
                      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <p className="mt-4 text-xs uppercase tracking-[0.16em] text-[#a78345]">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-2xl">{item.title}</h3>
                </article>
              ))}
            </div>
            <p className="mt-5 text-xs text-stone-500">
              These are illustrative inspiration images, not confirmed
              A2 Productions projects.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-2 md:px-10 md:py-28">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#a78345]">
              Let's plan something special
            </p>
            <h2 className="mt-4 text-4xl leading-tight md:text-6xl">
              Tell us about your event.
            </h2>
            <p className="mt-5 max-w-md leading-7 text-stone-600">
              Share a few details, and start a conversation with our team
              about your ideas, requirements and budget.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-1 text-[#a78345]" />
                <div>
                  <p className="font-semibold">Direct WhatsApp enquiry</p>
                  <p className="mt-1 text-sm text-stone-600">
                    Discuss your event requirements with us.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 text-[#a78345]" />
                <div>
                  <p className="font-semibold">Your event, your vision</p>
                  <p className="mt-1 text-sm text-stone-600">
                    Tell us your date, location and preferred budget.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={submitEnquiry}
            className="space-y-5 border border-stone-200 bg-white p-6 md:p-9"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm">Your name *</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={updateField}
                required
                autoComplete="name"
                placeholder="Enter your name"
                className="w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#a78345]"
              />
            </div>

            <div>
              <label htmlFor="event" className="mb-2 block text-sm">Event type *</label>
              <select
                id="event"
                name="event"
                value={form.event}
                onChange={updateField}
                className="w-full border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#a78345]"
              >
                {[
                  "Wedding",
                  "Engagement",
                  "Birthday",
                  "Anniversary",
                  "Corporate event",
                  "Concert / Live event",
                  "Private party",
                  "Other",
                ].map((item) => <option key={item}>{item}</option>)}
              </select>
            </div>

            <div>
              <label htmlFor="date" className="mb-2 block text-sm">Event date</label>
              <input
                id="date"
                name="date"
                type="date"
                value={form.date}
                onChange={updateField}
                min={new Date().toISOString().slice(0, 10)}
                className="w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#a78345]"
              />
            </div>

            <div>
              <label htmlFor="location" className="mb-2 block text-sm">Event location / city</label>
              <input
                id="location"
                name="location"
                value={form.location}
                onChange={updateField}
                placeholder="Where will the event take place?"
                className="w-full border border-stone-300 px-4 py-3 outline-none focus:border-[#a78345]"
              />
            </div>

            <div>
              <label htmlFor="budget" className="mb-2 block text-sm">Approximate budget</label>
              <select
                id="budget"
                name="budget"
                value={form.budget}
                onChange={updateField}
                className="w-full border border-stone-300 bg-white px-4 py-3 outline-none focus:border-[#a78345]"
              >
                <option value="">Select your budget</option>
                <option>Under ₹25,000</option>
                <option>₹25,000 – ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹3,00,000</option>
                <option>Above ₹3,00,000</option>
                <option>Need help deciding</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#27251f] px-5 py-4 text-sm font-semibold text-white hover:bg-[#a78345]"
            >
              Send Enquiry on WhatsApp <ArrowRight className="ml-2 inline" size={16} />
            </button>
            <p className="text-xs leading-5 text-stone-500">
              Your details will be included in a WhatsApp message. Review
              and send the message in WhatsApp to contact us.
            </p>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#27251f] px-5 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xl font-semibold tracking-[0.12em]">
              A2 PRODUCTIONS
            </p>
            <p className="mt-2 text-sm text-stone-400">
              We Create Moments. You Make Memories.
            </p>
          </div>
          <a href="#home" className="text-sm text-stone-300 hover:text-white">
            Back to top <ArrowDown className="ml-1 inline rotate-180" size={15} />
          </a>
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} A2 Productions
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello A2 Productions! I'd like to enquire about an event.")}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contact A2 Productions on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#237b4b] px-5 py-4 text-sm font-semibold text-white shadow-lg hover:bg-[#1b653c]"
      >
        <MessageCircle size={20} />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
