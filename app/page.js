'use client';
import { useState } from 'react';
import { ImageWithFallback } from './components/ImageWithFallback';
import { Package, Info, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function FacebookIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  );
}

const navLinks = [
  { href: '#home',     label: 'Hem' },
  { href: '#om-oss',  label: 'Om Oss' },
  { href: '#produkter', label: 'Produkter' },
  { href: '#tipsar',  label: 'Tipsar' },
  { href: '#contact', label: 'Kontakt' },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top accent bar */}
      <div className="h-1.5 bg-gradient-to-r from-rose-800 via-rose-500 to-rose-800" />

      {/* ── Header ────────────────────────────────────── */}
      <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">

            {/* Logo */}
            <a href="#home" className="flex flex-col leading-none">
              <span className="text-rose-950 font-bold text-lg sm:text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                Inga-Brittas
              </span>
              <span className="text-rose-700 text-xs sm:text-sm tracking-widest uppercase font-semibold">
                Havrebollar
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-sm lg:text-base text-rose-950 font-semibold hover:text-rose-700 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                className="ml-2 bg-rose-800 hover:bg-rose-900 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow"
              >
                Beställ nu
              </a>
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-rose-950 rounded-lg hover:bg-rose-50 transition-colors"
              aria-label="Meny"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-200 bg-white px-4 pb-4 pt-2">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-base font-semibold text-rose-950 hover:text-rose-700 border-b border-stone-100 last:border-0 transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-4 block text-center bg-rose-800 hover:bg-rose-900 text-white font-semibold px-5 py-3 rounded-full transition-colors"
            >
              Beställ nu
            </a>
          </div>
        )}
      </header>

      {/* ── Hero ──────────────────────────────────────── */}
      <section id="home" className="bg-white py-14 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="space-y-3 sm:space-y-4">
                <span className="inline-block px-4 py-1.5 bg-rose-800 text-white text-xs sm:text-sm rounded-full font-semibold tracking-wide">
                  Sedan 1976
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl text-rose-950 leading-tight">
                  Traditionella<br />
                  <span className="italic text-rose-800" style={{ fontFamily: "'Great Vibes', cursive", fontSize: '1.15em' }}>
                    Havrebollar
                  </span>
                </h1>
                <div className="w-20 h-1 bg-rose-800" />
              </div>

              <p className="text-base sm:text-lg text-stone-700 leading-relaxed max-w-lg">
                I mer än 45 år har Inga-Brittas havrebollar varit en älskad klassiker.
                Gjorda med kärlek och det anrika receptet —{' '}
                <em>de smälter som choklad i munnen</em>.
              </p>

              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#produkter"
                  className="bg-rose-800 hover:bg-rose-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  Se produkter
                </a>
                <a
                  href="#contact"
                  className="border-2 border-rose-800 text-rose-900 hover:bg-rose-800 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-semibold transition-all"
                >
                  Kontakta oss
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 border-4 border-rose-200 rounded-full pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-16 sm:w-24 h-16 sm:h-24 border-4 border-rose-200 rounded-full pointer-events-none" />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1602585491686-ef2b2d3ec08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                alt="Inga-Brittas Havrebollar"
                className="w-full rounded-3xl shadow-2xl relative z-10 hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Om Oss ────────────────────────────────────── */}
      <section id="om-oss" className="bg-rose-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-rose-100">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl text-rose-950 mb-3">Om Oss</h2>
            <div className="w-16 h-1 bg-rose-800 mx-auto" />
          </div>

          <div className="space-y-5 text-center text-stone-700 text-base sm:text-lg leading-relaxed">
            <p>
              Inga-Brittas Havrebollar tillverkar havrebollar och inget annat — havrebollarna
              blir tillverkade efter gammalt recept. De är ljuvliga, himmelska.
            </p>
            <p>
              Eller som min far brukar säga, när något är riktigt gott:{' '}
              <em className="text-rose-900 font-medium">
                &ldquo;De smälter som choklad i munnen.&rdquo;
              </em>
            </p>
            <p>
              IngaBrittas Havrebollar har i mer än 45 år tillverkat de klassiska havrebollarna
              enligt samma tidlösa recept.
            </p>

            <div className="w-12 h-px bg-rose-300 mx-auto" />

            <p>
              Bara havrebollar och inget annat. Just därför är vi välkända för det godaste samt
              smarrigaste fika-tillbehöret som du kan få till en kopp kaffe i hela Stockholm.
            </p>

            <div className="w-12 h-px bg-rose-300 mx-auto" />

            {/* Social media quote */}
            <div className="bg-white rounded-2xl px-6 sm:px-8 py-6 border border-rose-200 shadow-sm text-left">
              <p className="text-xs sm:text-sm font-semibold text-rose-800 uppercase tracking-widest mb-3">
                Ur sociala medier
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
                För några år sedan hade vi ovanan att då och då gå förbi butiken och köpa en
                låda havrebollar. Då fanns det bara lådor om 16 bollar och jag kan säga att en
                familj på fem personer blir mätta på gränsen till illamående om de knör i sig
                alla 16 till eftermiddagsfikat.
              </p>
              <p className="text-stone-700 text-sm sm:text-base leading-relaxed mt-3">
                Promenaden hem blev något lite ljusare, varmare och trevligare med de där
                havrebollarna i kistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Fabriks Färska ────────────────────────────── */}
      <section className="bg-rose-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-wide uppercase">
            Fabriks Färska Havrebollar
          </h2>
          <div className="w-16 h-0.5 bg-amber-400 mx-auto" />
          <p className="text-rose-100 text-base sm:text-lg leading-relaxed">
            Från ett lokalt belägen havrebollsfabrik kan du enkelt få ett komplement till dina
            bakelser när du planerar ditt event eller kalas vid tillfällen då någon eller något
            ska firas. Med dessa smaskigt goda havrebollarna blir din fest till ett minne som
            aldrig kommer att glömmas bort varken av morfar eller mormor eller barnen som
            varit med på festen.
          </p>
        </div>
      </section>

      {/* ── Tillverkning / Process ─────────────────────── */}
      <section id="produkter" className="bg-stone-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl text-rose-950 mb-3">Så gör vi dem</h2>
            <div className="w-16 h-1 bg-rose-800 mx-auto mb-4" />
            <p className="text-stone-600 text-base sm:text-lg">Handgjorda med passion, rullade med precision</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-rose-800 text-white rounded-full flex items-center justify-center font-bold text-lg mb-5">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-rose-950 mb-3">Blandarvisp</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-5">
                I den stora skålen blandas degen och vispas sedan upp till att bli en härlig slät
                och fluffig smet utav det anrika receptet som sedan år 1976 innehåller samma
                ingredienser som från början introducerades av Ingabritta och fick namnet
                Ingabrittas Havrebollar.
              </p>
              <div className="bg-rose-50 rounded-lg p-3 border border-rose-100 text-sm text-rose-900 font-medium space-y-1">
                <p>&#10003; Äggfria &nbsp; &#10003; Nötfria</p>
                <p>&#10003; Laktosfria &nbsp; &#10003; Mjölkproteinfria</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-rose-800 text-white rounded-full flex items-center justify-center font-bold text-lg mb-5">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-rose-950 mb-3">Rullas i kokos</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                De färdiga bollarna av smeten rullas för hand på en plåt täckt av kokos
                innan de placeras manuellt i sina kartonger.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-10 h-10 bg-rose-800 text-white rounded-full flex items-center justify-center font-bold text-lg mb-5">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-rose-950 mb-3">Förpackningarna</h3>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                De färdigt rullade havrebollarna placeras sedan i kartongerna i olika
                storlekar — 12 eller 25 pack — för att levereras ut till kund.
              </p>
            </div>
          </div>

          {/* Innehållsdeklaration */}
          <div className="mt-10 sm:mt-14 max-w-xl mx-auto bg-white rounded-2xl px-6 sm:px-10 py-8 border border-stone-200 shadow-sm text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-rose-950 mb-4">Innehållsdeklaration</h3>
            <div className="w-12 h-px bg-rose-300 mx-auto mb-4" />
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Ingredienser: Havregryn, vegetabiliskt olja (palm SG, raps, kokos), socker,
              glykos, kokosraps, vatten, kakao, aromer, salt, emulgeringsmedel
              (E&nbsp;471, E&nbsp;475, E&nbsp;322), surhetsreglerande medel (E330),
              vitaminer A och D.
            </p>
            <p className="mt-4 text-stone-700 font-semibold text-sm sm:text-base">Nettovikt 825 gram</p>
            <p className="text-stone-500 text-sm">Förvaras svalt.</p>
          </div>
        </div>
      </section>

      {/* ── Beställningsinformation ────────────────────── */}
      <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-stone-200">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl text-rose-950 mb-3">Beställningsinformation</h2>
            <div className="w-16 h-1 bg-rose-800 mx-auto mb-4" />
            <p className="text-stone-600 text-base sm:text-lg">Välj den förpackning som passar er bäst</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {/* 12-pack */}
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border-2 border-stone-200 shadow-md">
              <div className="text-center mb-6">
                <span className="inline-block bg-rose-800 text-white px-5 py-2 rounded-full font-bold text-sm sm:text-base mb-3">
                  12-PACK
                </span>
                <p className="text-stone-500 text-sm">Förpackning</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 sm:p-5 border-2 border-rose-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Volympris (200+ kartong)</p>
                  <p className="text-4xl sm:text-5xl text-rose-950 font-bold leading-none">31 kr</p>
                  <p className="text-xs text-stone-500 mt-1">per kartong</p>
                </div>
                <div className="bg-white rounded-xl p-4 sm:p-5 border border-stone-200">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Standardpris (under 200)</p>
                  <p className="text-4xl sm:text-5xl text-rose-950 font-bold leading-none">33 kr</p>
                  <p className="text-xs text-stone-500 mt-1">per kartong</p>
                </div>
                <div className="bg-rose-900 text-white rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1">Enstaka förpackning</p>
                  <p className="text-4xl sm:text-5xl font-bold leading-none">65 kr</p>
                  <p className="text-xs mt-1 text-rose-200">styck</p>
                </div>
                <div className="border-t border-stone-200 pt-4 flex items-center gap-2 text-rose-950">
                  <Package className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-xs text-stone-500 font-semibold uppercase tracking-wide">Minsta beställning</p>
                    <p className="text-lg sm:text-xl font-bold">100 kartonger</p>
                  </div>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
                  <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
                  <p className="text-xs sm:text-sm text-stone-700">
                    <span className="font-semibold">Tips:</span> Ni väljer själv säljpris. Populärt bland fotbollslag!
                  </p>
                </div>
              </div>
            </div>

            {/* 25-pack */}
            <div className="bg-rose-900 rounded-3xl p-6 sm:p-8 text-white border-2 border-rose-700 shadow-xl">
              <div className="text-center mb-6">
                <span className="inline-block bg-amber-400 text-rose-950 px-5 py-2 rounded-full font-black text-sm sm:text-base mb-3 shadow">
                  POPULÄRAST
                </span>
                <p className="text-xl sm:text-2xl font-bold">25-PACK</p>
                <p className="text-rose-300 text-sm">Förpackning</p>
              </div>
              <div className="space-y-4">
                <div className="bg-white text-rose-950 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Volympris (200+ kartong)</p>
                  <p className="text-4xl sm:text-5xl font-bold leading-none">52 kr</p>
                  <p className="text-xs text-stone-500 mt-1">per kartong</p>
                </div>
                <div className="bg-white/90 text-rose-950 rounded-xl p-4 sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-stone-500 mb-1">Standardpris (under 200)</p>
                  <p className="text-4xl sm:text-5xl font-bold leading-none">55 kr</p>
                  <p className="text-xs text-stone-500 mt-1">per kartong</p>
                </div>
                <div className="bg-amber-400 text-rose-950 rounded-xl p-4 sm:p-5 border border-amber-500">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1">Rekommenderat säljpris</p>
                  <p className="text-4xl sm:text-5xl font-black leading-none">110 kr</p>
                  <p className="text-xs mt-1">per kartong</p>
                </div>
                <div className="border-t border-white/20 pt-4 flex items-center gap-2">
                  <Package className="w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-300">Minsta beställning</p>
                    <p className="text-lg sm:text-xl font-bold">50 kartonger</p>
                  </div>
                </div>
                <div className="bg-white/10 border border-white/20 rounded-xl p-4 flex items-start gap-3">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-rose-100">
                    <span className="font-bold">Tips:</span> Bra marginal med vårt rekommenderade pris på 110 kr!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tipsar ────────────────────────────────────── */}
      <section id="tipsar" className="bg-stone-50 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-stone-200">
        <div className="max-w-2xl mx-auto text-center space-y-5 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-rose-950" style={{ fontFamily: "'Playfair Display', serif" }}>
            Inga-Brittas Havrebollar Tipsar!
          </h2>
          <div className="w-16 h-1 bg-rose-800 mx-auto" />
          <h3 className="text-xl sm:text-2xl font-bold uppercase text-stone-900 leading-snug">
            Tjäna pengar till<br />skolkassan eller laget
          </h3>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Sälj havrebollar för klubben, klassen eller laget — ni sätter priset och
            behåller vinsten. Kontakta oss via beställningsformuläret nedan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <a
              href="#contact"
              className="bg-rose-800 hover:bg-rose-900 text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base transition-all hover:scale-105 shadow-md"
            >
              Kontakta oss
            </a>
            <a
              href="#contact"
              className="border-2 border-rose-800 text-rose-900 hover:bg-rose-800 hover:text-white font-semibold px-6 py-3 rounded-full text-sm sm:text-base transition-all"
            >
              Länk till skolförsäljning
            </a>
          </div>
        </div>
      </section>

      {/* ── Historia / Stats ──────────────────────────── */}
      <section className="bg-rose-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="text-white space-y-6">
              <div>
                <p className="text-amber-300 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">Vår Historia</p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
                  Från Hägersten<br />till hela Stockholm
                </h2>
                <div className="w-16 h-1 bg-amber-400" />
              </div>
              <div className="space-y-4 text-rose-100 text-sm sm:text-base leading-relaxed">
                <p>
                  Det började 1976 när Ingabritta skapade sitt havrebollsrecept i ett litet kök
                  i Hägersten. Receptet blev snabbt känt för sin unika smak och handgjorda kvalitet.
                </p>
                <p>
                  Idag, över 45 år senare, använder vi fortfarande samma recept och samma
                  kärleksfulla metod. Varje havreboll görs för hand — precis som alltid.
                </p>
              </div>
              <div className="bg-white/10 rounded-2xl p-5 sm:p-6 border-l-4 border-amber-400">
                <p
                  className="text-xl sm:text-2xl italic text-white leading-relaxed"
                  style={{ fontFamily: "'Great Vibes', cursive" }}
                >
                  &ldquo;En god havreboll kan ljusa upp vilken dag som helst&rdquo;
                </p>
                <p className="text-amber-300 mt-3 text-sm font-semibold">— Ingabritta</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { stat: '45+', label: 'År av tradition' },
                { stat: '100%', label: 'Handgjorda' },
                { stat: '12/25', label: 'Pack-storlekar' },
                { stat: '∞', label: 'Kärlek' },
              ].map(({ stat, label }) => (
                <div
                  key={label}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 sm:p-7 text-center border border-white/20 hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl sm:text-5xl text-white font-black mb-2">{stat}</div>
                  <div className="text-rose-200 text-xs sm:text-sm font-semibold">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────── */}
      <footer id="contact" className="bg-white border-t-4 border-rose-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <span className="text-rose-950 font-bold text-2xl sm:text-3xl block" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Inga-Brittas
                </span>
                <span className="text-rose-700 text-sm tracking-widest uppercase font-semibold">
                  Havrebollar
                </span>
              </div>
              <p className="text-stone-500 text-sm sm:text-base leading-relaxed mb-5">
                Traditionella svenska havrebollar handgjorda med kärlek sedan 1976.
                Från vår fabrik i Hägersten till ditt hem.
              </p>
              <div className="flex gap-3">
                <a href="#" aria-label="Facebook" className="w-10 h-10 sm:w-11 sm:h-11 bg-rose-800 hover:bg-rose-900 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow">
                  <FacebookIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="#" aria-label="Instagram" className="w-10 h-10 sm:w-11 sm:h-11 bg-rose-800 hover:bg-rose-900 text-white rounded-full flex items-center justify-center transition-all hover:scale-110 shadow">
                  <InstagramIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-rose-950 mb-5">Kontakta Oss</h3>
              <div className="space-y-4">
                <a href="mailto:info@ingabrittas.se" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-rose-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-rose-200 transition-colors">
                    <Mail className="w-4 h-4 text-rose-800" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Epost</p>
                    <p className="text-stone-800 text-sm font-semibold group-hover:text-rose-800 transition-colors">
                      info@ingabrittas.se
                    </p>
                  </div>
                </a>
                <a href="tel:0736403184" className="flex items-start gap-3 group">
                  <div className="w-9 h-9 bg-rose-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-rose-200 transition-colors">
                    <Phone className="w-4 h-4 text-rose-800" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Tel</p>
                    <p className="text-stone-800 text-sm font-semibold group-hover:text-rose-800 transition-colors">
                      0736-403184
                    </p>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-rose-100 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-rose-800" />
                  </div>
                  <div>
                    <p className="text-xs text-stone-400 uppercase tracking-wide">Adress</p>
                    <p className="text-stone-800 text-sm font-semibold">Boktryckarvägen 36B</p>
                    <p className="text-stone-500 text-sm">129 33 Hägersten</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-rose-950 mb-5">Öppettider</h3>
              <div className="space-y-2.5">
                {[
                  { day: 'Mån–Fre', hours: '08.00–14.00', closed: false },
                  { day: 'Lördag',  hours: 'Stängt',      closed: true },
                  { day: 'Söndag',  hours: 'Stängt',      closed: true },
                ].map(({ day, hours, closed }) => (
                  <div key={day} className="flex justify-between items-center pb-2.5 border-b border-stone-100">
                    <span className="text-stone-800 text-sm font-semibold">{day}</span>
                    <span className={`text-sm font-medium ${closed ? 'text-rose-700' : 'text-stone-500'}`}>
                      {hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-rose-950 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-3 text-rose-200 text-xs sm:text-sm">
            <p>&copy; 2026 Inga-Brittas Havrebollar. Alla rättigheter förbehållna.</p>
            <div className="flex gap-4 sm:gap-6">
              <a href="#" className="hover:text-white transition-colors">Integritetspolicy</a>
              <span className="text-rose-800">•</span>
              <a href="#" className="hover:text-white transition-colors">Villkor</a>
              <span className="text-rose-800">•</span>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
