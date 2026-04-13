import React from 'react';

interface SectionHeaderProps {
  title: string;
  sub: string;
}

const SectionHeader = ({ title, sub }: SectionHeaderProps) => (
  <div className="text-center mb-16 relative z-10">
    <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight">{title}</h2>
    <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">{sub}</p>
    <div className="mt-4 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/20" />
  </div>
);

export default SectionHeader;
