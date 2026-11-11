import { Reveal } from './Reveal';

const STATS = [
  { n: '2', label: 'Live products in the wild' },
  { n: '1', label: 'Browser extension released' },
  { n: '1', label: 'Real client, in production' },
  { n: '20+', label: 'Students led as Tech Lead Intern' },
];

export const About = () => (
  <section id="about" className="mx-auto max-w-7xl px-5 sm:px-10 pt-20 pb-4">
    <Reveal>
      <p className="font-serif-d italic text-3xl sm:text-[44px] leading-snug max-w-3xl">
        &ldquo;I learn by shipping — if it isn&rsquo;t live, it isn&rsquo;t finished.&rdquo;
      </p>
      <p className="mt-6 text-neutral-400 max-w-2xl leading-relaxed text-[16px]">
        Final-year AI &amp; ML student at Anurag University, Hyderabad. Tech Lead Intern at VISWAM.AI on the side. The work above is the story — everything else is in the posters.
      </p>
    </Reveal>
    <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#1b2340] border rule rounded-2xl overflow-hidden">
      {STATS.map((s, i) => (
        <div key={s.label} className="bg-[#0b1128] p-6 sm:p-8">
          <Reveal delay={i * 70}>
            <p className="text-4xl sm:text-5xl font-bold">{s.n}</p>
            <p className="mt-2 text-sm text-neutral-400 leading-snug">{s.label}</p>
          </Reveal>
        </div>
      ))}
    </div>
  </section>
);
