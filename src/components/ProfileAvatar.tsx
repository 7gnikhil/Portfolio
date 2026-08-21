import { User, Sparkles, Code2 } from 'lucide-react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg';
  showStatusBadge?: boolean;
}

export const ProfileAvatar = ({
  size = 'lg',
  showStatusBadge = true,
}: ProfileAvatarProps) => {
  const sizeClasses = {
    sm: 'w-24 h-24',
    md: 'w-44 h-44',
    lg: 'w-64 h-64 sm:w-72 sm:h-72',
  };

  return (
    <div className="relative group inline-block">
      {/* Subtle glowing aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full blur-md opacity-40 group-hover:opacity-75 transition duration-500 animate-pulse"></div>

      {/* Main Avatar Container Frame */}
      <div className={`relative ${sizeClasses[size]} rounded-full p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-xl overflow-hidden`}>
        <div className="w-full h-full rounded-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden text-white border-2 border-white/20">
          
          <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-purple-500/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-400/40 flex items-center justify-center mb-2 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <User className="w-8 h-8 sm:w-10 sm:h-10 text-blue-300" />
            </div>
            
            <div className="font-bold tracking-tight text-white text-lg sm:text-xl font-mono flex items-center gap-1.5">
              <span>NCG</span>
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            </div>
            
            <span className="text-[10px] sm:text-xs text-blue-200/80 uppercase tracking-widest mt-0.5 font-medium">
              AI / ML Engineer
            </span>
          </div>

          <div className="absolute top-4 left-4 text-blue-400/40">
            <Code2 className="w-4 h-4" />
          </div>
        </div>
      </div>

      {showStatusBadge && (
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-slate-900/95 text-slate-100 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-blue-500/40 shadow-lg backdrop-blur-md flex items-center gap-2 whitespace-nowrap z-20">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span>Graduating 2027 • Open for Roles</span>
        </div>
      )}
    </div>
  );
};
