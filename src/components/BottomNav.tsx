import { useState } from 'react';
import { Home, LayoutGrid, User, Mail } from 'lucide-react';
import { openPanel } from '../lib/ui';

const ITEMS = [
  { label: 'Home', panel: 'home' as const, Icon: Home },
  { label: 'Originals', panel: 'originals' as const, Icon: LayoutGrid },
  { label: 'About', panel: 'about' as const, Icon: User },
  { label: 'Contact', panel: 'contact' as const, Icon: Mail },
];
export const BottomNav = () => {
  const [active, setActive] = useState('Home');
  return (
    <nav className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-[#040714]/92 backdrop-blur-md border-t rule" aria-label="Mobile">
      <div className="grid grid-cols-4">
        {ITEMS.map(({ label, panel, Icon }) => (
          <button key={label} onClick={() => { setActive(label); openPanel(panel); }} className={`flex flex-col items-center gap-1 py-2.5 ${active === label ? 'text-white' : 'text-neutral-400'} active:text-white`}>
            <Icon className="w-5 h-5" />
            <span className="text-[10px] font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
