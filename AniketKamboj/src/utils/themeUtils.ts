type Theme = 'light' | 'dark';

export const getCardBg = (theme: Theme) => 
  theme === 'light' ? 'bg-white/70 border-gray-200' : 'bg-[#1a1f35]/50 border-[#0ea5e9]/20';

export const getTextPrimary = (theme: Theme) =>
  theme === 'light' ? 'text-gray-900' : 'text-[#e2e8f0]';

export const getTextSecondary = (theme: Theme) =>
  theme === 'light' ? 'text-gray-600' : 'text-[#94a3b8]';

export const getHeadingGradient = (theme: Theme) =>
  theme === 'light' ? 'from-gray-900 to-gray-600' : 'from-white to-[#94a3b8]';

export const getBorder = (theme: Theme) =>
  theme === 'light' ? 'border-gray-200' : 'border-[#0ea5e9]/20';

export const getHoverBg = (theme: Theme) =>
  theme === 'light' ? 'hover:bg-gray-100' : 'hover:bg-[#1e293b]/50';
