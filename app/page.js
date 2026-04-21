'use client';
import { useState } from 'react';
import { ImageWithFallback } from './components/ImageWithFallback';
import { Package, Info, Mail, Phone, MapPin, Menu, X, ArrowRight } from 'lucide-react';

function FacebookIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

const navLinks = [
  { href: '#home',      label: 'Hem' },
  { href: '#om-oss',   label: 'Om Oss' },
  { href: '#produkter',label: 'Produkter' },
  { href: '#tipsar',   label: 'Tipsar' },
  { href: '#contact',  label: 'Kontakt' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 overflow-x-hidden">

      {/* ── Navbar ────────────────────────────────────── */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <a href="#home" className="flex flex-col leading-none">
              <span className="text-rose-950 font-bold text-lg sm:text-2xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Inga-Brittas
              </span>
              <span className="text-rose-600 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold">
                Havrebollar
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-7 lg:gap-9">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href}
                  className="text-sm font-semibold text-stone-600 hover:text-rose-800 transition-colors tracking-wide">
                  {label}
                </a>
              ))}
            </nav>
            <a href="#contact"
              className="hidden md:flex items-center gap-2 bg-rose-800 hover:bg-rose-900 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-all hover:scale-105 shadow-md">
              Beställ <ArrowRight className="w-4 h-4" />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-rose-950 rounded-lg hover:bg-rose-50 transition-colors">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-stone-100 bg-white px-5 pb-5 pt-3">
            {navLinks.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between py-3.5 text-base font-semibold text-stone-700 hover:text-rose-800 border-b border-stone-100 last:border-0 transition-colors">
                {label} <ArrowRight className="w-4 h-4 text-stone-300" />
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 bg-rose-800 text-white font-bold px-5 py-3.5 rounded-full">
              Beställ nu <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ──────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen bg-white flex items-center pt-16 sm:pt-20 overflow-hidden">

        {/* Large decorative circle */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-rose-50 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -left-20 w-64 h-64 bg-amber-50 rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* Text */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 text-xs sm:text-sm font-bold px-4 py-2 rounded-full tracking-widest uppercase">
                <span className="w-2 h-2 bg-rose-600 rounded-full" />
                Sedan 1976 · Hägersten
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-rose-950 leading-[1.05] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Traditionella
                </h1>
                <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl text-rose-700 leading-[0.95]"
                  style={{ fontFamily: "'Great Vibes', cursive" }}>
                  Havrebollar
                </h1>
              </div>

              <p className="text-base sm:text-lg lg:text-xl text-stone-500 leading-relaxed max-w-md">
                Handgjorda med kärlek i 45 år. De smälter som choklad i
                munnen — det godaste fika-tillbehöret i hela Stockholm.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
                <a href="#produkter"
                  className="group flex items-center gap-2 bg-rose-800 hover:bg-rose-900 text-white font-bold px-7 sm:px-9 py-4 rounded-full text-sm sm:text-base transition-all hover:scale-105 shadow-xl shadow-rose-200">
                  Se produkter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact"
                  className="flex items-center gap-2 border-2 border-stone-300 hover:border-rose-800 text-stone-700 hover:text-rose-900 font-bold px-7 sm:px-9 py-4 rounded-full text-sm sm:text-base transition-all">
                  Kontakta oss
                </a>
              </div>

              {/* Quick stats */}
              <div className="flex gap-6 sm:gap-10 pt-4 border-t border-stone-100">
                {[['45+', 'År'], ['100%', 'Handgjorda'], ['5', 'Ingredienser']].map(([n, l]) => (
                  <div key={l}>
                    <p className="text-2xl sm:text-3xl font-black text-rose-800" style={{ fontFamily: "'Playfair Display', serif" }}>{n}</p>
                    <p className="text-xs sm:text-sm text-stone-500 font-medium">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-full">
                {/* Offset accent block */}
                <div className="absolute inset-0 translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6 bg-rose-800 rounded-3xl" />
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1602585491686-ef2b2d3ec08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Inga-Brittas Havrebollar"
                  className="relative w-full rounded-3xl shadow-2xl object-cover aspect-[4/3] sm:aspect-[4/3]"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-5 -left-5 sm:-bottom-6 sm:-left-6 bg-amber-400 text-rose-950 rounded-2xl px-4 py-3 shadow-xl font-black text-xs sm:text-sm uppercase tracking-wide">
                  ✓ Äggfria &nbsp;✓ Laktosfria
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Marquee strip ─────────────────────────────── */}
      <div className="bg-rose-800 py-4 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap animate-[marquee_20s_linear_infinite]"
          style={{ animation: 'marquee 20s linear infinite' }}>
          {Array(6).fill(null).map((_, i) => (
            <span key={i} className="text-white text-sm sm:text-base font-bold uppercase tracking-widest shrink-0">
              Inga-Brittas Havrebollar &nbsp;·&nbsp; Handgjorda sedan 1976 &nbsp;·&nbsp; Fabriks Färska &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      {/* ── Om Oss ────────────────────────────────────── */}
      <section id="om-oss" className="bg-rose-950 py-20 sm:py-28 px-5 sm:px-8 relative overflow-hidden">
        {/* Decorative text watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] sm:text-[18rem] font-black text-white/[0.03] select-none pointer-events-none leading-none"
          style={{ fontFamily: "'Playfair Display', serif" }}>
          1976
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-amber-400 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4">Om oss</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Bara havrebollar.<br />
                  <span className="text-amber-400">Inget annat.</span>
                </h2>
              </div>
              <p className="text-rose-200 text-base sm:text-lg leading-relaxed">
                Inga-Brittas Havrebollar tillverkar havrebollar och inget annat — gjorda
                efter ett gammalt recept som stått sig i generationer.
              </p>
              <p className="text-rose-200 text-base sm:text-lg leading-relaxed">
                IngaBrittas Havrebollar har i mer än 45 år tillverkat de klassiska
                havrebollarna enligt samma tidlösa recept. Just därför är vi välkända för
                det godaste fika-tillbehöret till en kopp kaffe i hela Stockholm.
              </p>

              {/* Pull quote */}
              <div className="border-l-4 border-amber-400 pl-5 sm:pl-6 py-2">
                <p className="text-3xl sm:text-4xl lg:text-5xl text-white leading-snug"
                  style={{ fontFamily: "'Great Vibes', cursive" }}>
                  &ldquo;De smälter som choklad i munnen&rdquo;
                </p>
                <p className="text-amber-400 text-sm font-semibold mt-3">— Ur sociala medier</p>
              </div>
            </div>

            {/* Social media story card */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-7 sm:p-10 space-y-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-rose-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IB</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">@ingabrittas</p>
                  <p className="text-rose-400 text-xs">Sociala medier</p>
                </div>
              </div>
              <p className="text-rose-100 text-base sm:text-lg leading-relaxed">
                För några år sedan hade vi ovanan att då och då gå förbi butiken och köpa
                en låda havrebollar. Då fanns det bara lådor om 16 bollar och jag kan säga
                att en familj på fem personer blir mätta på gränsen till illamående om de
                knör i sig alla 16 till eftermiddagsfikat.
              </p>
              <p className="text-rose-100 text-base sm:text-lg leading-relaxed">
                Promenaden hem blev något lite ljusare, varmare och trevligare med de där
                havrebollarna i kistan.
              </p>
              <div className="flex gap-1 pt-2">
                {['❤️', '❤️', '❤️', '❤️', '❤️'].map((e, i) => <span key={i} className="text-lg">{e}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fabriks Färska ────────────────────────────── */}
      <section className="bg-amber-400 py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
          <div className="text-6xl sm:text-7xl shrink-0">🏭</div>
          <div className="text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-rose-950 uppercase tracking-wide leading-tight mb-3">
              Fabriks Färska Havrebollar
            </h2>
            <p className="text-rose-900 text-base sm:text-lg leading-relaxed max-w-2xl">
              Från ett lokalt belägen havrebollsfabrik kan du enkelt få ett komplement till
              dina bakelser vid events och kalas. Med dessa smaskigt goda havrebollar blir
              din fest till ett minne som aldrig glöms bort.
            </p>
          </div>
        </div>
      </section>

      {/* ── Tillverkning ──────────────────────────────── */}
      <section id="produkter" className="bg-stone-100 py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-rose-700 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-3">Hur vi gör dem</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-950 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Handgjorda med kärlek
            </h2>
            <div className="w-16 h-1 bg-rose-800 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                n: '01', title: 'Blandarvisp',
                text: 'I den stora skålen blandas degen och vispas upp till en härlig slät och fluffig smet utav det anrika receptet som sedan 1976 innehåller samma ingredienser som Ingabritta ursprungligen skapade.',
                badge: '✓ Äggfria · ✓ Nötfria · ✓ Laktosfria · ✓ Mjölkproteinfria',
              },
              {
                n: '02', title: 'Rullas i kokos',
                text: 'De färdiga bollarna rullas för hand på en plåt täckt av kokos innan de manuellt placeras i sina kartonger. Varje boll — gjord med samma omsorg som alltid.',
                badge: null,
              },
              {
                n: '03', title: 'Förpackning',
                text: 'De färdigt rullade havrebollarna placeras i kartongerna i storlekarna 12 eller 25 pack och levereras färska ut till kund.',
                badge: null,
              },
            ].map(({ n, title, text, badge }) => (
              <div key={n}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1 border border-stone-200">
                <div className="bg-rose-950 px-7 py-5 flex items-center justify-between">
                  <span className="text-5xl sm:text-6xl font-black text-white/20 leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}>{n}</span>
                  <div className="w-8 h-8 rounded-full border-2 border-white/30 group-hover:border-amber-400 transition-colors" />
                </div>
                <div className="p-7">
                  <h3 className="text-xl sm:text-2xl font-bold text-rose-950 mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
                  <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-4">{text}</p>
                  {badge && (
                    <p className="text-xs font-bold text-rose-700 bg-rose-50 rounded-xl px-4 py-3 border border-rose-100">{badge}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Innehållsdeklaration */}
          <div className="mt-14 sm:mt-20 max-w-2xl mx-auto bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm">
            <div className="bg-rose-950 px-8 py-5">
              <h3 className="text-xl sm:text-2xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                Innehållsdeklaration
              </h3>
            </div>
            <div className="px-8 py-7 text-center space-y-3">
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Ingredienser: Havregryn, vegetabiliskt olja (palm SG, raps, kokos), socker,
                glykos, kokosraps, vatten, kakao, aromer, salt, emulgeringsmedel
                (E&nbsp;471, E&nbsp;475, E&nbsp;322), surhetsreglerande medel (E330),
                vitaminer A och D.
              </p>
              <div className="flex justify-center gap-6 pt-2">
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-rose-950">825 g</p>
                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wide">Nettovikt</p>
                </div>
                <div className="w-px bg-stone-200" />
                <div className="text-center">
                  <p className="text-2xl sm:text-3xl font-black text-rose-950">Svalt</p>
                  <p className="text-xs text-stone-400 font-semibold uppercase tracking-wide">Förvaras</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Priser ────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-rose-700 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-3">Beställning</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-950 mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}>
              Välj ditt pack
            </h2>
            <div className="w-16 h-1 bg-rose-800 mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 items-start">

            {/* 12-pack */}
            <div className="border-2 border-stone-200 rounded-3xl overflow-hidden">
              <div className="px-8 pt-8 pb-6 border-b border-stone-100">
                <span className="text-xs font-black uppercase tracking-widest text-stone-400">Förpackning</span>
                <div className="flex items-end gap-3 mt-1">
                  <h3 className="text-4xl sm:text-5xl font-black text-rose-950"
                    style={{ fontFamily: "'Playfair Display', serif" }}>12-pack</h3>
                </div>
              </div>
              <div className="px-8 py-6 space-y-3">
                {[
                  { label: 'Volympris (200+ kartong)', price: '31 kr', sub: 'per kartong', highlight: false },
                  { label: 'Standardpris (under 200)', price: '33 kr', sub: 'per kartong', highlight: false },
                  { label: 'Enstaka förpackning', price: '65 kr', sub: 'styck', highlight: true },
                ].map(({ label, price, sub, highlight }) => (
                  <div key={label}
                    className={`rounded-2xl px-5 py-4 flex items-center justify-between ${highlight ? 'bg-rose-950 text-white' : 'bg-stone-50 border border-stone-200'}`}>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wide ${highlight ? 'text-rose-300' : 'text-stone-400'}`}>{label}</p>
                      <p className={`text-xs mt-0.5 ${highlight ? 'text-rose-300' : 'text-stone-400'}`}>{sub}</p>
                    </div>
                    <p className={`text-3xl sm:text-4xl font-black ${highlight ? 'text-white' : 'text-rose-950'}`}
                      style={{ fontFamily: "'Playfair Display', serif" }}>{price}</p>
                  </div>
                ))}
                <div className="rounded-2xl px-5 py-4 bg-stone-50 border border-stone-200 flex items-center gap-3">
                  <Package className="w-5 h-5 text-rose-800 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-stone-400">Minsta beställning</p>
                    <p className="text-lg font-black text-rose-950">100 kartonger</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 px-5 py-4 bg-amber-50 border border-amber-200 rounded-2xl">
                  <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-stone-600"><strong>Tips:</strong> Ni väljer själv säljpris. Populärt bland fotbollslag!</p>
                </div>
              </div>
            </div>

            {/* 25-pack — elevated */}
            <div className="bg-rose-950 rounded-3xl overflow-hidden shadow-2xl sm:scale-[1.03] sm:-mt-4">
              <div className="px-8 pt-8 pb-6 border-b border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-black uppercase tracking-widest text-rose-400">Förpackning</span>
                  <span className="bg-amber-400 text-rose-950 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wide">
                    Populärast
                  </span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-black text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}>25-pack</h3>
              </div>
              <div className="px-8 py-6 space-y-3">
                {[
                  { label: 'Volympris (200+ kartong)', price: '52 kr', sub: 'per kartong', highlight: false },
                  { label: 'Standardpris (under 200)', price: '55 kr', sub: 'per kartong', highlight: false },
                  { label: 'Rekommenderat säljpris', price: '110 kr', sub: 'per kartong', highlight: true },
                ].map(({ label, price, sub, highlight }) => (
                  <div key={label}
                    className={`rounded-2xl px-5 py-4 flex items-center justify-between ${highlight ? 'bg-amber-400' : 'bg-white/10 border border-white/10'}`}>
                    <div>
                      <p className={`text-xs font-semibold uppercase tracking-wide ${highlight ? 'text-rose-900' : 'text-rose-300'}`}>{label}</p>
                      <p className={`text-xs mt-0.5 ${highlight ? 'text-rose-800' : 'text-rose-400'}`}>{sub}</p>
                    </div>
                    <p className={`text-3xl sm:text-4xl font-black ${highlight ? 'text-rose-950' : 'text-white'}`}
                      style={{ fontFamily: "'Playfair Display', serif" }}>{price}</p>
                  </div>
                ))}
                <div className="rounded-2xl px-5 py-4 bg-white/10 border border-white/10 flex items-center gap-3">
                  <Package className="w-5 h-5 text-rose-300 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-400">Minsta beställning</p>
                    <p className="text-lg font-black text-white">50 kartonger</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 px-5 py-4 bg-white/10 border border-white/10 rounded-2xl">
                  <Info className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                  <p className="text-sm text-rose-200"><strong className="text-white">Tips:</strong> Bra marginal med rekommenderat pris på 110 kr!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tipsar ────────────────────────────────────── */}
      <section id="tipsar" className="relative bg-stone-100 py-20 sm:py-28 px-5 sm:px-8 overflow-hidden border-y border-stone-200">
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-rose-50 pointer-events-none hidden lg:block" />
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8">
              <div>
                <p className="text-rose-700 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-4">Fundraising</p>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rose-950 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}>
                  Tjäna pengar<br />
                  <span className="text-rose-700">till laget</span>
                </h2>
              </div>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-md">
                Sälj Inga-Brittas havrebollar för skolkassan eller laget. Ni sätter
                priset själva och behåller vinsten. Enkelt, gott och lönsamt!
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#contact"
                  className="group flex items-center justify-center gap-2 bg-rose-800 hover:bg-rose-900 text-white font-bold px-8 py-4 rounded-full text-base transition-all hover:scale-105 shadow-xl shadow-rose-200">
                  Kom igång <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact"
                  className="flex items-center justify-center border-2 border-rose-800 text-rose-900 hover:bg-rose-800 hover:text-white font-bold px-8 py-4 rounded-full text-base transition-all">
                  Skolförsäljning
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: '🏆', title: 'Ni sätter priset', text: 'Full kontroll — välj er egen marginal.' },
                { icon: '📦', title: 'Enkla paket', text: '12 eller 25 pack, perfekt för försäljning.' },
                { icon: '⚽', title: 'Populärt', text: 'Favorit bland fotbollslag och klasser.' },
                { icon: '🚀', title: 'Snabb leverans', text: 'Fabriks färska direkt till er.' },
              ].map(({ icon, title, text }) => (
                <div key={title} className="bg-white border border-stone-200 rounded-2xl p-5 sm:p-6 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-3">{icon}</div>
                  <p className="font-bold text-rose-950 text-sm sm:text-base mb-1">{title}</p>
                  <p className="text-stone-500 text-xs sm:text-sm leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer id="contact" className="bg-rose-950">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 sm:pt-20 pb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 pb-12 border-b border-white/10">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1 space-y-5">
              <div>
                <p className="text-white font-bold text-3xl sm:text-4xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Inga-Brittas
                </p>
                <p className="text-rose-400 text-xs tracking-[0.3em] uppercase font-bold">Havrebollar</p>
              </div>
              <p className="text-rose-300 text-sm sm:text-base leading-relaxed">
                Handgjorda havrebollar sedan 1976. Från vår fabrik i Hägersten till ditt bord.
              </p>
              <div className="flex gap-3">
                {[<FacebookIcon className="w-5 h-5" />, <InstagramIcon className="w-5 h-5" />].map((icon, i) => (
                  <a key={i} href="#"
                    className="w-11 h-11 bg-white/10 hover:bg-rose-700 text-white rounded-full flex items-center justify-center transition-all hover:scale-110">
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <h3 className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Kontakt
              </h3>
              <div className="space-y-4">
                {[
                  { Icon: Mail,   label: 'Epost',  value: 'info@ingabrittas.se', href: 'mailto:info@ingabrittas.se' },
                  { Icon: Phone,  label: 'Tel',    value: '0736-403184',         href: 'tel:0736403184' },
                ].map(({ Icon, label, value, href }) => (
                  <a key={label} href={href}
                    className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-white/10 group-hover:bg-rose-700 rounded-xl flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4 text-rose-300 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-rose-400 text-xs uppercase tracking-wide">{label}</p>
                      <p className="text-white text-sm font-semibold group-hover:text-amber-400 transition-colors">{value}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-rose-300" />
                  </div>
                  <div>
                    <p className="text-rose-400 text-xs uppercase tracking-wide">Adress</p>
                    <p className="text-white text-sm font-semibold">Boktryckarvägen 36B</p>
                    <p className="text-rose-300 text-sm">129 33 Hägersten</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-5">
              <h3 className="text-white font-bold text-lg sm:text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Öppettider
              </h3>
              <div className="space-y-3">
                {[
                  { day: 'Mån–Fre', hours: '08.00–14.00', open: true },
                  { day: 'Lördag',  hours: 'Stängt',      open: false },
                  { day: 'Söndag',  hours: 'Stängt',      open: false },
                ].map(({ day, hours, open }) => (
                  <div key={day} className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-rose-200 text-sm font-semibold">{day}</span>
                    <span className={`text-sm font-bold ${open ? 'text-amber-400' : 'text-rose-600'}`}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-rose-500 text-xs sm:text-sm">
            <p>&copy; 2026 Inga-Brittas Havrebollar. Alla rättigheter förbehållna.</p>
            <div className="flex gap-5">
              {['Integritetspolicy', 'Villkor', 'Cookies'].map((t, i) => (
                <a key={t} href="#" className="hover:text-white transition-colors">{t}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
