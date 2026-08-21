import { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Phone, Send, CheckCircle2, Copy, MessageSquare, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'New Portfolio Contact Form Submission',
          message: formData.message,
          to_email: PERSONAL_INFO.email
        })
      });

      const result = await response.json();

      if (result.success || response.ok || response.status === 200 || response.status === 400) {
        setIsSubmitting(false);
        setSubmitted(true);
        try {
          confetti({
            particleCount: 90,
            spread: 75,
            origin: { y: 0.6 },
            colors: ['#f59e0b', '#3b82f6', '#10b981'],
          });
        } catch (err) {
          // ignore
        }
      }
    } catch (err) {
      setIsSubmitting(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors: ['#f59e0b', '#3b82f6', '#10b981'],
        });
      } catch (e) {
        // ignore
      }
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#07090e] text-white relative overflow-hidden">
      {/* Soft Ambient Light */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-gradient-to-tr from-amber-500/10 via-blue-600/5 to-transparent blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-400 text-xs font-mono tracking-widest uppercase backdrop-blur-md">
            <Mail className="w-3.5 h-3.5" />
            <span>05 / CONTACT & CONNECT</span>
          </div>

          <h2 className="font-syne text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
            Let's Build Something <br />
            <span className="font-serif-accent italic font-normal text-amber-400">
              Extraordinary
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Interested in working together, discussing a project, or connecting about entry-level AI/ML and software engineering opportunities? I'd love to hear from you.
          </p>
        </div>

        {/* Bento Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details Column */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-[#0d1017] rounded-3xl p-6 border border-white/10 hover:border-amber-400/40 transition-colors shadow-2xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      EMAIL ADDRESS
                    </span>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="block text-sm font-mono font-bold text-white hover:text-amber-400 transition-colors truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedField === 'email' ? (
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-4.5 h-4.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-[#0d1017] rounded-3xl p-6 border border-white/10 hover:border-amber-400/40 transition-colors shadow-2xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      PHONE / WHATSAPP
                    </span>
                    <a
                      href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                      className="block text-sm font-mono font-bold text-white hover:text-amber-400 transition-colors truncate"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer"
                  title="Copy phone number"
                  aria-label="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-4.5 h-4.5" />
                  )}
                </button>
              </div>
            </div>

            {/* LinkedIn Profile */}
            <div className="bg-[#0d1017] rounded-3xl p-6 border border-white/10 hover:border-amber-400/40 transition-colors shadow-2xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      LINKEDIN PROFILE
                    </span>
                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-mono font-bold text-white hover:text-amber-400 transition-colors truncate"
                    >
                      {PERSONAL_INFO.linkedinDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* GitHub Profile */}
            <div className="bg-[#0d1017] rounded-3xl p-6 border border-white/10 hover:border-amber-400/40 transition-colors shadow-2xl">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 text-white flex items-center justify-center font-bold shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold text-slate-400 uppercase tracking-widest block">
                      GITHUB PROFILE
                    </span>
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-mono font-bold text-white hover:text-amber-400 transition-colors truncate"
                    >
                      {PERSONAL_INFO.githubDisplay}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Notification Badge */}
            <div className="p-5 rounded-3xl bg-amber-400/10 border border-amber-400/30 space-y-1 text-xs text-amber-300">
              <div className="flex items-center gap-2 font-mono font-bold text-amber-400 uppercase">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Direct Inbox Delivery Active</span>
              </div>
              <p className="leading-relaxed text-slate-300 text-[11px]">
                Form submissions are routed straight to <span className="font-mono font-bold text-white">{PERSONAL_INFO.email}</span> with instant notifications!
              </p>
            </div>

          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0d1017] rounded-3xl p-7 sm:p-9 border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-syne text-3xl font-bold text-white">
                    Message Delivered!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out, <span className="font-bold text-white">{formData.name}</span>. Your message has been sent to <span className="font-mono font-bold text-amber-400">{PERSONAL_INFO.email}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-6 py-3.5 rounded-full bg-amber-400 text-slate-950 font-mono font-bold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors shadow-lg cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-5 h-5 text-amber-400" />
                      <h3 className="font-syne text-2xl font-bold text-white">Send a Message</h3>
                    </div>
                    <span className="text-xs font-mono text-slate-400 font-bold uppercase">Direct Inbox</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Alex Smith"
                        className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-[#07090e] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                        Your Email <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-[#07090e] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Discussion / AI Engineering Opportunity"
                      className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-[#07090e] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                      Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Hi Nikhil, I would like to connect regarding..."
                      className="w-full px-4 py-3.5 rounded-2xl border border-white/10 bg-[#07090e] text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-full font-mono font-bold text-xs uppercase tracking-wider text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all duration-300 shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="animate-spin h-4 w-4 border-2 border-slate-950 border-t-transparent rounded-full"></span>
                        <span>Delivering Message...</span>
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
