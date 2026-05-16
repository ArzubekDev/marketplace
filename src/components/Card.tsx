'use client'
import React from 'react';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Product } from '../consts';
import { useRouter } from 'next/navigation';

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  // Форматирование цены (например, 24900 -> 24 900)
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(product.price);
  const route = useRouter()

  return (
    <div onClick={() => route.push(`/products/${product.id}`)} className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all hover:shadow-xl hover:shadow-gray-200/50">
      
      {/* Изображение и Лейблы */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Бейдж "Новинка" */}
        {product.isNew && (
          <span className="absolute top-3 left-3 rounded-full bg-blue-600 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            Новинка
          </span>
        )}

        {/* Кнопка "В избранное" */}
        <button className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-600 backdrop-blur-sm transition-colors hover:bg-white hover:text-red-500">
          <Heart size={18} />
        </button>
      </div>

      {/* Контентная часть */}
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-1 flex items-center justify-between">
          <span className="text-[12px] font-medium text-gray-400 uppercase tracking-wide">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-gray-600">{product.rating}</span>
          </div>
        </div>

        <h3 className="mb-2 text-base font-semibold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {product.title}
        </h3>
        
        <p className="mb-4 text-sm text-gray-500 line-clamp-2 flex-1">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">
              {formattedPrice} <span className="text-sm font-medium">сом</span>
            </span>
            <span className="text-[10px] text-gray-400">
              В наличии: {product.stock} шт.
            </span>
          </div>

          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-900 text-white transition-all hover:bg-blue-600 active:scale-95">
            <ShoppingCart size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;