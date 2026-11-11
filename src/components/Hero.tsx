import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';

export const Hero = () => (
  <section id="top" className="hero-glow relative overflow-hidden">
    <div className="mx-auto max-w-7xl px-5 sm:px-10 pt-32 sm:pt-40 pb-14 grid lg:grid-cols-[1.35fr_1fr] gap-12 items-center">
      <div>
        <p className="rise font-mono-d text-xs uppercase tracking-[.3em] text-neutral-300" style={{ animationDelay: '.05s' }}>
          <span className="accent font-bold">N</span> Series <span className="text-neutral-500 normal-case tracking-normal">— an original portfolio</span>
        </p>
        <h1 className="rise mt-5 font-bold uppercase leading-[.95] tracking-tight text-[17vw] sm:text-[96px] lg:text-[118px]" style={{ animationDelay: '.15s' }}>
          Nik<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e50914] to-[#f5638f]">h</span>il
        </h1>
        <p className="rise mt-2 font-mono-d text-sm sm:text-base uppercase tracking-[.55em] text-[#e50914] font-semibold" style={{ animationDelay: '.25s' }}>The Series</p>
        <div className="rise mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] text-neutral-300" style={{ animationDelay: '.35s' }}>
          <span className="border border-white/40 rounded px-1.5 py-0.5 font-semibold text-white">AI / ML</span>
          <span>2023 – Present</span><span className="text-neutral-600">•</span>
          <span>B.Tech AI &amp; ML</span><span className="text-neutral-600">•</span>
          <span>{PROJECTS.length} Originals</span><span className="text-neutral-600">•</span>
          <span>{CERTIFICATIONS.length} Certifications</span>
        </div>
        <p className="rise mt-4 font-semibold tracking-wide text-[15px]" style={{ animationDelay: '.42s' }}>SOFTWARE ENGINEER &nbsp;•&nbsp; AI / ML &nbsp;•&nbsp; PYTHON &nbsp;•&nbsp; FULL-STACK</p>
        <p className="rise mt-4 text-[16px] leading-relaxed text-neutral-300 max-w-xl" style={{ animationDelay: '.5s' }}>
          A final-year Artificial Intelligence &amp; Machine Learning student at Anurag University (CGPA 6.65) who doesn&rsquo;t just study it — he ships it. A live student platform, a released fraud-detection extension, and a production site for a real client.
        </p>
        <div className="rise mt-8 flex flex-wrap items-center gap-4" style={{ animationDelay: '.6s' }}>
          <a href="#projects" className="inline-flex items-center gap-2.5 bg-white text-black font-semibold px-6 py-3 rounded-md hover:bg-neutral-200 transition-colors">▶ Play Intro</a>
          <a href="#about" className="inline-flex items-center gap-2.5 bg-white/15 backdrop-blur font-semibold px-6 py-3 rounded-md hover:bg-white/25 transition-colors">↓ The Journey</a>
          <a href="#contact" aria-label="Contact" className="w-11 h-11 rounded-full border-2 border-white/50 flex items-center justify-center font-serif-d italic text-lg hover:border-white transition-colors">i</a>
        </div>
        <p className="rise mt-6 font-mono-d text-xs text-neutral-400 flex items-center gap-2" style={{ animationDelay: '.7s' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot inline-block" /> {PERSONAL_INFO.status}
        </p>
      </div>

      {/* Portrait panel — swap the monogram for a photo when one is supplied */}
      <div className="rise relative mx-auto w-full max-w-[380px]" style={{ animationDelay: '.35s' }}>
        <div className="relative rounded-2xl overflow-hidden border border-white/12 bg-gradient-to-b from-[#131c3f] via-[#0a0f26] to-[#040714] aspect-[4/5] flex flex-col items-center justify-center">
          <span className="font-serif-d italic text-[120px] leading-none text-white/95">N</span>
          <span className="mt-1 font-mono-d text-[11px] uppercase tracking-[.35em] text-neutral-400">Ghanta</span>
          <span className="absolute bottom-5 font-mono-d text-[10px] uppercase tracking-widest text-neutral-500">Photo drops here — coming soon</span>
        </div>
        <div className="float-y absolute -left-4 top-10 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg px-3.5 py-2.5 text-xs">
          <p className="font-bold">CGPA 6.65</p><p className="text-neutral-400">B.Tech AI &amp; ML</p>
        </div>
        <div className="float-y absolute -right-3 bottom-16 bg-white/10 backdrop-blur-md border border-white/15 rounded-lg px-3.5 py-2.5 text-xs" style={{ animationDelay: '1.2s' }}>
          <p className="font-bold">Hyderabad</p><p className="text-neutral-400">Anurag University</p>
        </div>
      </div>
    </div>
  </section>
);
