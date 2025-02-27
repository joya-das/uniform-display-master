
import React, { useState, useEffect } from 'react';
import { Bell, BarChart2, Package, CreditCard, FileText, Shield, User, Menu, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if user previously selected dark mode
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  };

  const sidebarItems = [
    { icon: <BarChart2 size={20} />, label: 'Dashboard', active: true },
    { icon: <Package size={20} />, label: 'Products', active: false },
    { icon: <CreditCard size={20} />, label: 'Billing', active: false },
    { icon: <FileText size={20} />, label: 'Invoice', active: false },
    { icon: <Shield size={20} />, label: 'Authentication', active: false },
    { icon: <User size={20} />, label: 'Profile', active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#fafafa] dark:bg-[#121212]">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-10 flex flex-col bg-white dark:bg-[#1e1e1e] border-r border-[#f1f1f5] dark:border-[#2d2d2d] transition-all duration-300 ease-in-out",
          isSidebarOpen ? "w-64" : "w-0 -translate-x-full"
        )}
      >
        <div className="flex items-center h-16 px-5 border-b border-[#f1f1f5] dark:border-[#2d2d2d]">
          <span className="text-xl font-semibold text-[#1A1F2C] dark:text-white">Blazewind</span>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {sidebarItems.map((item, index) => (
            <a
              key={item.label}
              href="#"
              className={cn(
                "sidebar-item slide-in",
                item.active ? "active" : "inactive",
                `stagger-${index + 1}`
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main
        className={cn(
          "flex-1 transition-all duration-300 ease-in-out",
          isSidebarOpen ? "ml-64" : "ml-0"
        )}
      >
        {/* Header */}
        <header className="sticky top-0 z-10 flex items-center justify-between h-16 px-6 bg-white dark:bg-[#1e1e1e] border-b border-[#f1f1f5] dark:border-[#2d2d2d]">
          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle sidebar"
          >
            <Menu size={20} className="dark:text-white" />
          </button>

          <div className="flex items-center space-x-4">
            <button 
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" 
              aria-label="Toggle theme"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? <Moon size={20} className="text-white" /> : <Sun size={20} />}
            </button>
            <div className="relative">
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Notifications">
                <Bell size={20} className="dark:text-white" />
              </button>
              <span className="absolute top-0 right-0 flex items-center justify-center w-5 h-5 text-xs text-white bg-red-500 rounded-full">
                3
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm font-medium dark:text-white">User</span>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
