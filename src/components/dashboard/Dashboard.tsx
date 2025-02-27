
import React from 'react';
import StatCard from './StatCard';
import { LineChart, PieChart, BarChart2, RefreshCw, Package, FileText } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6 dark:text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Products" 
          value="513" 
          icon={<BarChart2 size={24} />} 
          iconColor="bg-blazewind-purple" 
          delay={100}
        />
        <StatCard 
          title="Sales" 
          value="400" 
          icon={<RefreshCw size={24} />} 
          iconColor="bg-blazewind-icon-pink" 
          delay={200}
        />
        <StatCard 
          title="Revenue" 
          value="$8,942" 
          icon={<LineChart size={24} />} 
          iconColor="bg-blazewind-icon-green" 
          delay={300}
        />
        <StatCard 
          title="Orders" 
          value="120" 
          icon={<FileText size={24} />} 
          iconColor="bg-blazewind-icon-blue" 
          delay={400}
        />
      </div>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-sm border border-[#f1f1f5] dark:border-[#2d2d2d]">
          <h2 className="text-lg font-medium mb-4 dark:text-white">Sales Overview</h2>
          <div className="aspect-[16/9] bg-gray-50 dark:bg-[#2d2d2d] rounded-lg flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500">Chart placeholder</span>
          </div>
        </div>
        
        <div className="bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-sm border border-[#f1f1f5] dark:border-[#2d2d2d]">
          <h2 className="text-lg font-medium mb-4 dark:text-white">Revenue Breakdown</h2>
          <div className="aspect-[16/9] bg-gray-50 dark:bg-[#2d2d2d] rounded-lg flex items-center justify-center">
            <span className="text-gray-400 dark:text-gray-500">Chart placeholder</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white dark:bg-[#1e1e1e] p-6 rounded-xl shadow-sm border border-[#f1f1f5] dark:border-[#2d2d2d]">
        <h2 className="text-lg font-medium mb-4 dark:text-white">Recent Activity</h2>
        <div className="bg-gray-50 dark:bg-[#2d2d2d] rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-400 dark:text-gray-500">Activity data placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
