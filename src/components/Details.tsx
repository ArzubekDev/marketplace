'use client'
import React from 'react';
import { 
  Star, 
  ShoppingCart, 
  Heart, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  RotateCcw 
} from 'lucide-react';
import { Product } from '../consts';
import { useRouter } from 'next/navigation';

interface ProductDetailProps {
  product: Product;
  onBack?: () => void; // Для навигации назад
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU').format(product.price);
  const router = useRouter();
  const handleBack = onBack ?? (() => router.back());

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        
        {/* Кнопка назад */}
        <button 
          onClick={handleBack}
          className="mb-6 flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
        >
          <ArrowLeft size={18} />
          Назад к покупкам
        </button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Левая колонка: Изображение */}
          <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-sm border border-gray-100">
            {product.isNew && (
              <span className="absolute top-8 left-8 z-10 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
                Новинка
              </span>
            )}
            <img
              src={product.image}
              alt={product.title}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          {/* Правая колонка: Инфо */}
          <div className="flex flex-col">
            <div className="mb-4">
              <span className="text-sm font-bold uppercase tracking-wider text-blue-600">
                {product.category}
              </span>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 leading-tight">
                {product.title}
              </h1>
            </div>

            {/* Рейтинг */}
            <div className="mb-6 flex items-center gap-4">
              <div className="flex items-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                    className={i < Math.floor(product.rating) ? "" : "text-gray-300"}
                  />
                ))}
                <span className="ml-2 text-lg font-bold text-gray-900">{product.rating}</span>
              </div>
              <span className="text-sm text-gray-500 underline cursor-pointer hover:text-blue-500">
                124 отзыва
              </span>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-gray-600 italic">
              «{product.description}»
            </p>

            {/* Блок цены и покупки */}
            <div className="mb-10 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-end justify-between">
                <div>
                  <span className="text-sm text-gray-500">Цена за единицу</span>
                  <div className="text-4xl font-black text-gray-900">
                    {formattedPrice} <span className="text-xl font-medium">сом</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-sm font-bold ${product.stock > 0 ? 'text-green-600' : 'text-red-500'}`}>
                    {product.stock > 0 ? `В наличии: ${product.stock}` : 'Нет в наличии'}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex flex-2 items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 text-lg font-bold text-white transition-all hover:bg-blue-700 active:scale-95 shadow-lg shadow-blue-200">
                  <ShoppingCart size={22} />
                  Добавить в корзину
                </button>
                <button className="flex flex-1 items-center justify-center rounded-2xl border-2 border-gray-100 py-4 transition-all hover:bg-gray-50 hover:border-red-200 hover:text-red-500 active:scale-95">
                  <Heart size={22} />
                </button>
              </div>
            </div>

            {/* Дополнительные преимущества */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
                <Truck className="text-blue-600" size={24} />
                <span className="text-xs font-semibold text-gray-700">Быстрая доставка</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
                <ShieldCheck className="text-blue-600" size={24} />
                <span className="text-xs font-semibold text-gray-700">Гарантия 12 мес.</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-4">
                <RotateCcw className="text-blue-600" size={24} />
                <span className="text-xs font-semibold text-gray-700">14 дней на возврат</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;