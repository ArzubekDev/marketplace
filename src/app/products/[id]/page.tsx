import React from 'react';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/consts';
import ProductDetail from '@/components/Details';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Генерируем статические параметры для SEO и производительности (SSG)
export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: product.id,
  }));
}

const ProductPage = async ({ params }: PageProps) => {
  // Получаем id из параметров (разворачиваем промис)
  const { id } = await params;

  // Ищем товар в нашей базе констант
  const product = PRODUCTS.find((p) => p.id === id);

  // Если товар не найден, показываем стандартную 404 страницу Next.js
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <ProductDetail product={product} />
    </main>
  );
};

export default ProductPage;