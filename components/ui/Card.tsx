import React from 'react';
import { BaseProps } from '../../types';

interface CardProps extends BaseProps {
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  bordered?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md',
  bordered = false
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div className={`bg-white rounded-[24px] md:rounded-[32px] ${bordered ? 'border border-slate-200' : 'shadow-sm'} ${hover ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-md' : ''} ${paddings[padding]} ${className}`}>
      {children}
    </div>
  );
};
