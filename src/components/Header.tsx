import React from 'react';
import { Search, ShoppingCart, User, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 gap-8">
        
        {/* Логотип */}
        <div className="flex items-center gap-2">
          <button className="lg:hidden p-2 hover:bg-gray-100 rounded-md">
            <Menu size={24} />
          </button>
          <a href="/" className="text-2xl font-bold tracking-tight text-blue-600">
            MARKET<span className="text-gray-900">PLACE</span>
          </a>
        </div>

        {/* Поиск (Скрыт на мобилках, виден на десктопе) */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input
            type="text"
            placeholder="Поиск товаров..."
            className="w-full rounded-full border border-gray-300 bg-gray-50 py-2 pl-4 pr-10 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
          <Search 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={18} 
          />
        </div>

        {/* Навигация и Действия */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <button className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors">
            Категории
          </button>
          
          <div className="h-6 w-px bg-gray-200 hidden sm:block"></div>

          {/* Иконки */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded-full transition-all relative">
              <User size={22} />
            </button>
            
            <button className="p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600 rounded-full transition-all relative">
              <ShoppingCart size={22} />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                3
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Мобильный поиск (появляется только на маленьких экранах под основным хедером) */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input
            type="text"
            placeholder="Поиск..."
            className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-4 pr-10 text-sm outline-none"
          />
          <Search 
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" 
            size={16} 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;