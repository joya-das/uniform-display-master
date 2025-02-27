
import React from 'react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconColor: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon, 
  iconColor,
  delay = 0 
}) => {
  return (
    <div 
      className={`stat-card fade-in`} 
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={`stat-icon ${iconColor}`}>
        {icon}
      </div>
      <div className="mt-1">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-white">{value}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{title}</p>
      </div>
    </div>
  );
};

export default StatCard;
