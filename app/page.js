'use client';
import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';

const C = {
    bg: '#fdf8f2',
    section: '#f2ebe0',
    white: '#ffffff',
    deep: '#3d2529',
    primary: '#5A393D',
    mid: '#7a4e53',
    light: '#9b6b70',
    text: '#4a3035',
    gold: '#c49a3c',
    goldLight: '#e8c96d',
    border: '#e0d5c8'
};

const nav = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#contact', label: 'Contact' }
];

const products = [
    {
        name: 'Havrebollar 12-pack',
        desc: 'Klassisk förpackning med 12 handgjorda havrebollar. Perfekt till fikat hemma eller som present.',
        price: '65 kr',
        note: 'Volympris från 31 kr / kartong',
        img: '/havre.png'
    },
    {
        name: 'Havrebollar 25-pack',
        desc: 'Stor förpackning med 25 havrebollar — idealisk för events, kalas och fundraising.',
        price: '110 kr',
        note: 'Volympris från 52 kr / kartong',
        img: '/havreboll.png'
    },
    {
        name: 'Bulk-beställning',
        desc: 'Beställ i större volymer för skolförsäljning, fotbollslag eller företagsevent. Ni sätter priset själva.',
        price: 'Från 31 kr',
        note: 'Minsta order 50–100 kartonger',
        img: '/product.png'
    }
];

function Ornament({ light = false }) {
    const color = light ? 'rgba(232,201,109,0.5)' : C.gold;
    return (
        <div className="flex items-center gap-3 justify-center my-3">
            <div
                className="flex-1 h-px"
                style={{ backgroundColor: color, maxWidth: '72px' }}
            />
            <svg width="10" height="10" viewBox="0 0 12 12">
                <polygon points="6,0 12,6 6,12 0,6" fill={color} />
            </svg>
            <div
                className="flex-1 h-px"
                style={{ backgroundColor: color, maxWidth: '72px' }}
            />
        </div>
    );
}

function LogoSVG({ size = 'sm' }) {
    const big = size === 'lg';
    const w = big ? 180 : 108;
    const h = big ? 220 : 132;
    const cx = w / 2,
        cy = h / 2;
    const rx = cx - 6,
        ry = cy - 6;
    return (
        <svg
            width={w}
            height={h}
            viewBox={`0 0 ${w} ${h}`}
            aria-label="Inga-Brittas Havrebollar"
            style={{ display: 'block', flexShrink: 0 }}
        >
            <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="#f5f0e8" />
            <ellipse
                cx={cx}
                cy={cy}
                rx={rx}
                ry={ry}
                fill="none"
                stroke="#5A393D"
                strokeWidth={big ? 3.5 : 2.2}
            />
            <ellipse
                cx={cx}
                cy={cy}
                rx={rx - (big ? 7 : 4.5)}
                ry={ry - (big ? 7 : 4.5)}
                fill="none"
                stroke="#5A393D"
                strokeWidth={big ? 1 : 0.7}
            />
            {[-1, 1].map((s) => (
                <circle
                    key={s}
                    cx={cx}
                    cy={cy + s * (ry - (big ? 3.5 : 2.2))}
                    r={big ? 2.5 : 1.6}
                    fill="#5A393D"
                />
            ))}
            <text
                x={cx}
                y={cy - (big ? 14 : 8)}
                textAnchor="middle"
                fontFamily="'Great Vibes', cursive"
                fontSize={big ? 42 : 26}
                fill="#3d2529"
            >
                IngaBrittas
            </text>
            <line
                x1={cx - (big ? 36 : 22)}
                y1={cy - (big ? 3 : 2)}
                x2={cx + (big ? 36 : 22)}
                y2={cy - (big ? 3 : 2)}
                stroke="#5A393D"
                strokeWidth={big ? 0.8 : 0.5}
            />
            <text
                x={cx}
                y={cy + (big ? 16 : 10)}
                textAnchor="middle"
                fontFamily="'Playfair Display', serif"
                fontSize={big ? 14 : 8.5}
                fill="#3d2529"
                letterSpacing={big ? 3 : 1.8}
            >
                havrebollar
            </text>
            <text
                x={cx}
                y={cy + (big ? 36 : 22)}
                textAnchor="middle"
                fontFamily="'Merriweather', serif"
                fontSize={big ? 5.5 : 3.4}
                fill="#5A393D"
                letterSpacing={big ? 0.6 : 0.4}
            >
                Läcker, olja som smäl · tag till kaffe en havreboll
            </text>
        </svg>
    );
}

function Logo({ size = 'sm' }) {
    const [useImg, setUseImg] = useState(true);
    const big = size === 'lg';
    if (useImg) {
        return (
            <img
                src="/logo.png"
                alt="Inga-Brittas Havrebollar"
                style={{
                    height: big ? '8rem' : '4.5rem',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                }}
                onError={() => setUseImg(false)}
            />
        );
    }
    return <LogoSVG size={size} />;
}

const label = {
    fontSize: '0.8rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    letterSpacing: '0.3em',
    color: C.gold,
    display: 'block'
};

export default function Home() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <div style={{ backgroundColor: C.bg, color: C.text }}>
            {/* Gold top bar */}
            <div
                className="h-1"
                style={{
                    background: `linear-gradient(to right,${C.primary},${C.gold},${C.primary})`
                }}
            />

            {/* ── Navbar ─────────────────────────────── */}
            <header
                className="fixed top-1 left-0 right-0 z-50 border-b"
                style={{
                    backgroundColor: 'rgba(253,248,242,0.97)',
                    borderColor: C.border,
                    backdropFilter: 'blur(8px)'
                }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16 lg:h-20">
                    <a href="#home" className="shrink-0">
                        <Logo size="sm" />
                    </a>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex items-center gap-6 lg:gap-10">
                        {nav.map(({ href, label: l }) => (
                            <a
                                key={href}
                                href={href}
                                className="font-semibold tracking-wide transition-opacity hover:opacity-50 whitespace-nowrap"
                                style={{
                                    color: C.primary,
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '1rem'
                                }}
                            >
                                {l}
                            </a>
                        ))}
                    </nav>

                    <a
                        href="tel:0736403184"
                        className="hidden md:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full font-bold border-2 transition-opacity hover:opacity-75 whitespace-nowrap"
                        style={{
                            borderColor: C.primary,
                            color: C.primary,
                            fontSize: '0.95rem'
                        }}
                    >
                        <Phone className="w-4 h-4 shrink-0" /> 073-6403184
                    </a>

                    <button
                        className="md:hidden p-2"
                        onClick={() => setOpen(!open)}
                        style={{ color: C.primary }}
                    >
                        {open ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile menu */}
                {open && (
                    <div
                        className="md:hidden border-t px-4 pb-5 pt-2"
                        style={{ backgroundColor: C.bg, borderColor: C.border }}
                    >
                        {nav.map(({ href, label: l }) => (
                            <a
                                key={href}
                                href={href}
                                onClick={() => setOpen(false)}
                                className="flex items-center justify-between py-4 font-semibold border-b last:border-0"
                                style={{
                                    color: C.primary,
                                    borderColor: C.border,
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '1.15rem'
                                }}
                            >
                                {l}
                            </a>
                        ))}
                        <a
                            href="tel:0736403184"
                            onClick={() => setOpen(false)}
                            className="mt-4 flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold"
                            style={{
                                backgroundColor: C.primary,
                                color: C.white,
                                fontSize: '1.05rem'
                            }}
                        >
                            <Phone className="w-4 h-4" /> Ring oss
                        </a>
                    </div>
                )}
            </header>

            {/* ── Hero ───────────────────────────────── */}
            <section
                id="home"
                className="relative pt-14 sm:pt-16 lg:pt-20 overflow-x-hidden"
                style={{
                    backgroundColor: C.bg,
                    minHeight: '100svh',
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                {/* Oval watermark — hidden on mobile to prevent horizontal scroll */}
                <div
                    className="hidden lg:block absolute right-[-8%] top-1/2 -translate-y-1/2
          w-140 h-180 rounded-[50%] border-40 pointer-events-none opacity-[0.04]"
                    style={{ borderColor: C.primary }}
                />
                <div
                    className="hidden lg:block absolute right-[-8%] top-1/2 -translate-y-1/2
          w-122.5 h-162.5 rounded-[50%] border-[6px] pointer-events-none opacity-[0.03]"
                    style={{ borderColor: C.primary }}
                />

                <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
                        {/* Text — always first */}
                        <div className="space-y-5 sm:space-y-6">
                            <div className="flex items-center gap-3">
                                <div
                                    className="h-px w-8 shrink-0"
                                    style={{ backgroundColor: C.gold }}
                                />
                                <p style={label}>
                                    Sedan 1976 · Hägersten, Stockholm
                                </p>
                            </div>

                            <div>
                                <h1
                                    style={{
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 'clamp(1rem, 7vw, 2rem)',
                                        fontWeight: 900,
                                        lineHeight: 1.8,
                                        color: C.deep
                                    }}
                                >
                                    Traditionella
                                </h1>
                                <h1
                                    style={{
                                        fontFamily: "'Great Vibes', cursive",
                                        fontSize: 'clamp(3rem, 9vw, 6rem)',
                                        lineHeight: 0.9,
                                        color: C.primary
                                    }}
                                >
                                    Havrebollar
                                </h1>
                            </div>

                            <div className="flex items-center gap-3">
                                <div
                                    className="h-px flex-1"
                                    style={{
                                        backgroundColor: C.gold,
                                        maxWidth: '60px'
                                    }}
                                />
                                <svg width="10" height="10" viewBox="0 0 12 12">
                                    <polygon
                                        points="6,0 12,6 6,12 0,6"
                                        fill={C.gold}
                                    />
                                </svg>
                                <div
                                    className="h-px flex-1"
                                    style={{
                                        backgroundColor: C.gold,
                                        maxWidth: '60px'
                                    }}
                                />
                            </div>

                            <p
                                style={{
                                    color: C.text,
                                    fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
                                    lineHeight: 1.85
                                }}
                            >
                                Handgjorda med kärlek i mer än 45 år. Gjorda
                                efter ett gammalt recept. Det godaste
                                fika-tillbehöret till en kopp kaffe i hela
                                Stockholm.
                            </p>

                            {/* Buttons — stack on xs, side-by-side on sm+ */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-1">
                                <a
                                    href="#menu"
                                    className="text-center px-7 py-3.5 rounded-full font-bold transition-opacity hover:opacity-80"
                                    style={{
                                        backgroundColor: C.primary,
                                        color: C.white,
                                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)'
                                    }}
                                >
                                    Se produkter
                                </a>
                                <a
                                    href="#contact"
                                    className="text-center px-7 py-3.5 rounded-full font-bold border-2 transition-opacity hover:opacity-70"
                                    style={{
                                        borderColor: C.primary,
                                        color: C.primary,
                                        fontSize: 'clamp(0.95rem, 2vw, 1.05rem)'
                                    }}
                                >
                                    Kontakta oss
                                </a>
                            </div>

                            {/* Stats */}
                            <div
                                className="flex gap-6 sm:gap-10 pt-4 border-t"
                                style={{ borderColor: C.border }}
                            >
                                {[
                                    ['45+', 'År tradition'],
                                    ['100%', 'Handgjorda'],
                                    ['5', 'Ingredienser']
                                ].map(([n, l]) => (
                                    <div key={l}>
                                        <p
                                            style={{
                                                fontFamily:
                                                    "'Playfair Display', serif",
                                                fontWeight: 900,
                                                fontSize:
                                                    'clamp(1.8rem, 4vw, 2.8rem)',
                                                color: C.primary,
                                                lineHeight: 1
                                            }}
                                        >
                                            {n}
                                        </p>
                                        <p
                                            style={{
                                                fontSize:
                                                    'clamp(0.78rem, 1.5vw, 0.95rem)',
                                                color: C.light,
                                                marginTop: '4px'
                                            }}
                                        >
                                            {l}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative mt-4 md:mt-0">
                            {/* Offset frame — reduced on mobile */}
                            <div
                                className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-full h-full rounded-2xl border"
                                style={{
                                    backgroundColor: C.section,
                                    borderColor: C.border
                                }}
                            />
                            <img
                                src="/product.png"
                                alt="Inga-Brittas Havrebollar"
                                className="relative w-full rounded-2xl object-cover shadow-xl"
                                style={{ aspectRatio: '4/3' }}
                            />
                            {/* Badge */}
                            <div
                                className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 rounded-xl px-3 sm:px-4 py-2 sm:py-3 shadow-lg border"
                                style={{
                                    backgroundColor: C.white,
                                    borderColor: C.border
                                }}
                            >
                                <p
                                    style={{
                                        fontSize: '0.65rem',
                                        fontWeight: 700,
                                        color: C.light,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.1em'
                                    }}
                                >
                                    Innehåller ej
                                </p>
                                <p
                                    style={{
                                        fontSize:
                                            'clamp(0.78rem, 1.5vw, 0.9rem)',
                                        fontWeight: 700,
                                        color: C.deep,
                                        marginTop: '2px'
                                    }}
                                >
                                    Ägg · Nötter · Laktos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Marquee ────────────────────────────── */}
            <div
                className="py-3 sm:py-4 overflow-hidden"
                style={{ backgroundColor: C.primary }}
            >
                <div
                    className="flex whitespace-nowrap"
                    style={{ animation: 'marquee 32s linear infinite' }}
                >
                    {Array(10)
                        .fill(null)
                        .map((_, i) => (
                            <span
                                key={i}
                                className="font-bold uppercase shrink-0 px-6 sm:px-8"
                                style={{
                                    color: C.goldLight,
                                    letterSpacing: '0.25em',
                                    fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)'
                                }}
                            >
                                Inga-Brittas Havrebollar &nbsp;◆&nbsp;
                                Handgjorda sedan 1976 &nbsp;◆&nbsp; Fabriks
                                Färska
                            </span>
                        ))}
                </div>
            </div>
            <style>{`@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>

            {/* ── About ──────────────────────────────── */}
            <section
                id="about"
                className="py-14 sm:py-20 lg:py-28"
                style={{ backgroundColor: C.section }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-10 lg:gap-20 items-center">
                        {/* Image — below text on mobile, left on desktop */}
                        <div className="relative order-2 md:order-1 mt-8 md:mt-0">
                            <div
                                className="absolute -bottom-4 -left-4 w-full h-full rounded-2xl border-2"
                                style={{ borderColor: C.gold, opacity: 0.28 }}
                            />
                            <img
                                src="/fabrik.png"
                                alt="Om Inga-Brittas"
                                className="relative w-full rounded-2xl object-cover shadow-lg"
                                style={{ aspectRatio: '4/3' }}
                            />
                        </div>

                        {/* Text */}
                        <div className="space-y-5 order-1 md:order-2">
                            <p style={label}>Om oss</p>
                            <h2
                                style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                                    fontWeight: 800,
                                    lineHeight: 1.12,
                                    color: C.deep
                                }}
                            >
                                Bara havrebollar.
                                <br />
                                <span style={{ color: C.primary }}>
                                    Inget annat.
                                </span>
                            </h2>
                            <Ornament />

                            <p
                                style={{
                                    color: C.text,
                                    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                                    lineHeight: 1.85
                                }}
                            >
                                Inga-Brittas Havrebollar tillverkar havrebollar
                                och inget annat, gjorda efter ett gammalt recept
                                som stått sig i generationer. I mer än 45 år har
                                vi producerat de klassiska havrebollarna enligt
                                samma tidlösa recept.
                            </p>
                            <p
                                style={{
                                    color: C.text,
                                    fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                                    lineHeight: 1.85
                                }}
                            >
                                Från vår lilla fabrik i Hägersten rullas varje
                                boll för hand och förpackas fabriks färska.
                                Smaken är enkel, äkta och älskad av alla. Det
                                godaste fika-tillbehöret till en kopp kaffe i
                                hela Stockholm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Menu ───────────────────────────────── */}
            <section
                id="menu"
                className="py-14 sm:py-20 lg:py-28"
                style={{ backgroundColor: C.bg }}
            >
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-10 sm:mb-14">
                        <p style={{ ...label, marginBottom: '0.75rem' }}>
                            Våra produkter
                        </p>
                        <h2
                            style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                                fontWeight: 800,
                                color: C.deep
                            }}
                        >
                            Välj din förpackning
                        </h2>
                        <Ornament />
                    </div>

                    {/* 1 col → 2 col → 3 col */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
                        {products.map(({ name, desc, price, note, img }) => {
                            const isSelected = selected === name;
                            return (
                                <div
                                    key={name}
                                    onClick={() =>
                                        setSelected(isSelected ? null : name)
                                    }
                                    className="rounded-2xl overflow-hidden border flex flex-col cursor-pointer"
                                    style={{
                                        backgroundColor: C.white,
                                        borderColor: isSelected
                                            ? C.gold
                                            : C.border,
                                        borderWidth: isSelected ? '2px' : '1px',
                                        boxShadow: isSelected
                                            ? `0 0 0 3px ${C.goldLight}40, 0 20px 40px rgba(90,57,61,0.15)`
                                            : '0 2px 8px rgba(90,57,61,0.06)',
                                        transition:
                                            'box-shadow 0.25s, border-color 0.25s, transform 0.2s',
                                        transform: isSelected
                                            ? 'translateY(-4px)'
                                            : 'none'
                                    }}
                                >
                                    <div
                                        className="overflow-hidden relative"
                                        style={{ aspectRatio: '3/2' }}
                                    >
                                        <img
                                            src={img}
                                            alt={name}
                                            className="w-full h-full object-cover"
                                            style={{
                                                transition: 'transform 0.5s',
                                                transform: isSelected
                                                    ? 'scale(1.06)'
                                                    : 'scale(1)'
                                            }}
                                        />
                                        {isSelected && (
                                            <div
                                                className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
                                                style={{
                                                    backgroundColor: C.gold,
                                                    color: C.white
                                                }}
                                            >
                                                Valt
                                            </div>
                                        )}
                                    </div>

                                    <div
                                        className="px-5 sm:px-6 py-3 sm:py-4 border-b"
                                        style={{
                                            backgroundColor: isSelected
                                                ? C.primary
                                                : C.section,
                                            borderColor: isSelected
                                                ? C.primary
                                                : C.border,
                                            transition: 'background-color 0.25s'
                                        }}
                                    >
                                        <h3
                                            style={{
                                                fontFamily:
                                                    "'Playfair Display', serif",
                                                fontWeight: 700,
                                                fontSize:
                                                    'clamp(1.1rem, 2.5vw, 1.35rem)',
                                                color: isSelected
                                                    ? C.white
                                                    : C.deep,
                                                transition: 'color 0.25s'
                                            }}
                                        >
                                            {name}
                                        </h3>
                                    </div>

                                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                                        <p
                                            style={{
                                                color: C.light,
                                                fontSize:
                                                    'clamp(0.95rem, 2vw, 1.05rem)',
                                                lineHeight: 1.8,
                                                flex: 1
                                            }}
                                        >
                                            {desc}
                                        </p>
                                        <div
                                            className="mt-5 pt-4 flex items-end justify-between border-t"
                                            style={{ borderColor: C.border }}
                                        >
                                            <div>
                                                <p
                                                    style={{
                                                        fontFamily:
                                                            "'Playfair Display', serif",
                                                        fontWeight: 900,
                                                        fontSize:
                                                            'clamp(1.7rem, 3.5vw, 2.2rem)',
                                                        color: C.primary,
                                                        lineHeight: 1
                                                    }}
                                                >
                                                    {price}
                                                </p>
                                                <p
                                                    style={{
                                                        fontSize: '0.85rem',
                                                        color: C.light,
                                                        marginTop: '5px'
                                                    }}
                                                >
                                                    {note}
                                                </p>
                                            </div>
                                            <a
                                                href="#contact"
                                                onClick={(e) =>
                                                    e.stopPropagation()
                                                }
                                                className="font-bold px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border-2 transition-opacity hover:opacity-75 whitespace-nowrap"
                                                style={{
                                                    borderColor: isSelected
                                                        ? C.gold
                                                        : C.primary,
                                                    color: isSelected
                                                        ? C.gold
                                                        : C.primary,
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                Kontakta
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── Contact ────────────────────────────── */}
            <section
                id="contact"
                className="py-14 sm:py-20 lg:py-28 relative overflow-hidden"
                style={{ backgroundColor: C.primary }}
            >
                {/* Oval watermark — hidden on small screens */}
                <div />

                <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p
                        style={{
                            ...label,
                            color: C.goldLight,
                            marginBottom: '1rem'
                        }}
                    >
                        Kontakt
                    </p>
                    <h2
                        style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
                            fontWeight: 800,
                            color: C.white,
                            marginBottom: '0.5rem'
                        }}
                    >
                        Vill du beställa?
                    </h2>
                    <Ornament light />
                    <p
                        style={{
                            color: 'rgba(255,255,255,0.65)',
                            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
                            lineHeight: 1.85,
                            marginTop: '1rem',
                            marginBottom: '2rem'
                        }}
                    >
                        Kontakta oss direkt via telefon eller e-post. Vi hjälper
                        dig med beställning, priser och leverans.
                    </p>

                    {/* Always stacked on mobile, side-by-side on sm+ */}
                    <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a
                            href="tel:0736403184"
                            className="flex items-center gap-4 rounded-xl px-5 sm:px-6 py-5 border flex-1 transition-all hover:opacity-85"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.09)',
                                borderColor: 'rgba(255,255,255,0.15)'
                            }}
                        >
                            <div
                                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.12)',
                                    borderColor: 'rgba(255,255,255,0.2)'
                                }}
                            >
                                <Phone
                                    className="w-5 h-5"
                                    style={{ color: C.goldLight }}
                                />
                            </div>
                            <div className="text-left">
                                <p
                                    style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        color: 'rgba(255,255,255,0.45)',
                                        marginBottom: '3px'
                                    }}
                                >
                                    Telefon
                                </p>
                                <p
                                    style={{
                                        fontWeight: 700,
                                        color: C.white,
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize:
                                            'clamp(1.05rem, 2.5vw, 1.3rem)'
                                    }}
                                >
                                    073-6403184
                                </p>
                            </div>
                        </a>

                        <a
                            href="mailto:info@ingabrittas.se"
                            className="flex items-center gap-4 rounded-xl px-5 sm:px-6 py-5 border flex-1 transition-all hover:opacity-85"
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.09)',
                                borderColor: 'rgba(255,255,255,0.15)'
                            }}
                        >
                            <div
                                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 border"
                                style={{
                                    backgroundColor: 'rgba(255,255,255,0.12)',
                                    borderColor: 'rgba(255,255,255,0.2)'
                                }}
                            >
                                <Mail
                                    className="w-5 h-5"
                                    style={{ color: C.goldLight }}
                                />
                            </div>
                            <div className="text-left">
                                <p
                                    style={{
                                        fontSize: '0.7rem',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.12em',
                                        color: 'rgba(255,255,255,0.45)',
                                        marginBottom: '3px'
                                    }}
                                >
                                    E-post
                                </p>
                                <p
                                    style={{
                                        fontWeight: 700,
                                        color: C.white,
                                        fontFamily: "'Playfair Display', serif",
                                        fontSize: 'clamp(0.95rem, 2vw, 1.15rem)'
                                    }}
                                >
                                    info@ingabrittas.se
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Address + hours — always stacked, side by side on sm */}
                    <div
                        className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6"
                        style={{
                            color: 'rgba(255,255,255,0.45)',
                            fontSize: 'clamp(0.88rem, 1.8vw, 1rem)'
                        }}
                    >
                        <div className="flex items-center gap-2 justify-center">
                            <MapPin
                                className="w-4 h-4 shrink-0"
                                style={{ color: C.goldLight }}
                            />
                            <span>Boktryckarvägen 36B, 129 33 Hägersten</span>
                        </div>
                        <div className="flex items-center gap-2 justify-center">
                            <Clock
                                className="w-4 h-4 shrink-0"
                                style={{ color: C.goldLight }}
                            />
                            <span>Mån-Fre 08.00-14.00</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Footer ─────────────────────────────── */}
            <footer style={{ backgroundColor: C.deep }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
                        <Logo size="sm" />
                        <div
                            className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-center sm:text-left"
                            style={{
                                color: 'rgba(255,255,255,0.42)',
                                fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
                            }}
                        >
                            <a
                                href="tel:0736403184"
                                className="hover:opacity-75 transition-opacity"
                            >
                                073-6403184
                            </a>
                            <span
                                className="hidden sm:inline"
                                style={{ color: 'rgba(255,255,255,0.2)' }}
                            >
                                ◆
                            </span>
                            <a
                                href="mailto:info@ingabrittas.se"
                                className="hover:opacity-75 transition-opacity"
                            >
                                info@ingabrittas.se
                            </a>
                        </div>
                    </div>
                    <div
                        className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
                        style={{
                            borderColor: 'rgba(255,255,255,0.07)',
                            fontSize: 'clamp(0.78rem, 1.5vw, 0.88rem)',
                            color: 'rgba(255,255,255,0.25)'
                        }}
                    >
                        <span>
                            &copy; 2026 Inga-Brittas Havrebollar. Alla
                            rättigheter förbehållna.
                        </span>
                        <a
                            href="https://www.prakaikool-teepraken.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-1.5 transition-all"
                            style={{ color: 'rgba(255,255,255,0.35)' }}
                        >
                            <svg
                                width="13"
                                height="13"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                style={{ color: C.goldLight, flexShrink: 0 }}
                            >
                                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                <path d="M2 17l10 5 10-5" />
                                <path d="M2 12l10 5 10-5" />
                            </svg>
                            <span
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${C.goldLight}, ${C.gold})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text',
                                    fontWeight: 600,
                                    letterSpacing: '0.02em'
                                }}
                            >
                                Webbdesign &amp; utveckling av Prakaikool
                                Teepraken
                            </span>
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
