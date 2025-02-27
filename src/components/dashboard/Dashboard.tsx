
import React from 'react';
import StatCard from './StatCard';
import { LineChart, PieChart, BarChart2, RefreshCw } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
      
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
          title="Sales" 
          value="400" 
          icon={<LineChart size={24} />} 
          iconColor="bg-blazewind-icon-green" 
          delay={300}
        />
        <StatCard 
          title="Sales" 
          value="400" 
          icon={<RefreshCw size={24} />} 
          iconColor="bg-blazewind-icon-blue" 
          delay={400}
        />
      </div>
      
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f1f1f5]">
          <h2 className="text-lg font-medium mb-4">Chart Title</h2>
          <div className="aspect-[16/9] bg-gray-50 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Chart placeholder</span>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f1f1f5]">
          <h2 className="text-lg font-medium mb-4">Chart Title</h2>
          <div className="aspect-[16/9] bg-gray-50 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">Chart placeholder</span>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-white p-6 rounded-xl shadow-sm border border-[#f1f1f5]">
        <h2 className="text-lg font-medium mb-4">Recent Activity</h2>
        <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
          <span className="text-gray-400">Activity data placeholder</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
