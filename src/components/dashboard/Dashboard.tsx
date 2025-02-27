
import React from 'react';
import StatCard from './StatCard';
import { LineChart, PieChart, BarChart2, RefreshCw, Package, FileText, Check, Clock, X } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Sample data for the sales table
  const salesData = [
    { id: '#5371', invoice: 'INV-5371', name: 'John Smith', date: '12 May 2023', price: '$120.00', status: 'approved' },
    { id: '#5372', invoice: 'INV-5372', name: 'Sarah Johnson', date: '13 May 2023', price: '$245.99', status: 'pending' },
    { id: '#5373', invoice: 'INV-5373', name: 'Michael Brown', date: '14 May 2023', price: '$545.50', status: 'canceled' },
    { id: '#5374', invoice: 'INV-5374', name: 'Emily Davis', date: '15 May 2023', price: '$97.99', status: 'approved' },
    { id: '#5375', invoice: 'INV-5375', name: 'Robert Wilson', date: '16 May 2023', price: '$325.00', status: 'pending' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <Check size={16} className="text-green-500" />;
      case 'pending':
        return <Clock size={16} className="text-amber-500" />;
      case 'canceled':
        return <X size={16} className="text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400';
      case 'pending':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400';
      case 'canceled':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400';
      default:
        return '';
    }
  };

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
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#2d2d2d] dark:text-gray-300">
                <tr>
                  <th scope="col" className="px-4 py-3">User ID</th>
                  <th scope="col" className="px-4 py-3">Invoice</th>
                  <th scope="col" className="px-4 py-3">User Name</th>
                  <th scope="col" className="px-4 py-3">Order Date</th>
                  <th scope="col" className="px-4 py-3">Price</th>
                  <th scope="col" className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {salesData.map((item) => (
                  <tr key={item.id} className="border-b dark:border-[#2d2d2d] hover:bg-gray-50 dark:hover:bg-[#252525]">
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{item.id}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{item.invoice}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{item.name}</td>
                    <td className="px-4 py-3 text-gray-600 dark:text-gray-300">{item.date}</td>
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{item.price}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(item.status)}`}>
                        {getStatusIcon(item.status)}
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
