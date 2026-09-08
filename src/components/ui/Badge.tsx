import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'outline' | 'solid'; // Extensible for future use
}

export function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span className={`inline-block px-4 py-1.5 rounded-full font-bold text-xs tracking-widest uppercase mb-4 shadow-sm border ${className}`}>
      {children}
    </span>
  );
}
