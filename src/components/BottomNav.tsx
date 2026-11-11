import { Home, LayoutGrid, User, Mail } from 'lucide-react';

const ITEMS = [
  { label: 'Home', href: '#top', Icon: Home },
  { label: 'Originals', href: '#projects', Icon: LayoutGrid },
  { label: 'About', href: '#about', Icon: User },
  { label: 'Contact', href: '#contact', Icon: Mail },
];

export const BottomNav = () => (
  <nav className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-[#040714]/92 backdrop-blur-md border-t rule" aria-label="Mobile">
    <div className="grid grid-cols-4">
      {ITEMS.map(({ label, href, Icon }) => (
        <a key={label} href={href} className="flex flex-col items-center gap-1 py-2.5 text-neutral-400 active:text-white">
          <Icon className="w-5 h-5" />
          <span className="text-[10px] font-medium">{label}</span>
        </a>
      ))}
    </div>
  </nav>
);
