
export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
  stock: number;
  isNew?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Беспроводные наушники Pro Max',
    description: 'Наушники с активным шумоподавлением и глубоким басом.',
    price: 24900,
    category: 'Электроника',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=500',
    rating: 4.8,
    stock: 15,
    isNew: true,
  },
  {
    id: '2',
    title: 'Смарт-часы Series S',
    description: 'Стильные часы с мониторингом здоровья и GPS.',
    price: 18500,
    category: 'Аксессуары',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=500',
    rating: 4.5,
    stock: 22,
  },
  {
    id: '3',
    title: 'Кожаный городской рюкзак',
    description: 'Минималистичный дизайн, отделение для ноутбука до 15 дюймов.',
    price: 7200,
    category: 'Сумки',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=500',
    rating: 4.7,
    stock: 8,
  },
  {
    id: '4',
    title: 'Механическая клавиатура RGB',
    description: 'Тактильные переключатели и настраиваемая подсветка.',
    price: 12000,
    category: 'Компьютеры',
    image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=500',
    rating: 4.9,
    stock: 5,
    isNew: true,
  },
  {
    id: '5',
    title: 'Кофемашина Espresso Express',
    description: 'Идеальный кофе одним нажатием кнопки.',
    price: 45000,
    category: 'Техника для дома',
    image: 'https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?q=80&w=500',
    rating: 4.6,
    stock: 12,
  },
  {
    id: '6',
    title: 'Кроссовки для бега Neo-Lite',
    description: 'Легкие и дышащие материалы для длинных дистанций.',
    price: 9800,
    category: 'Обувь',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=500',
    rating: 4.4,
    stock: 30,
  },
  {
    id: '7',
    title: 'Портативная колонка BoomBox',
    description: 'Защита от воды IPX7 и 20 часов автономной работы.',
    price: 6500,
    category: 'Электроника',
    image: 'https://images.unsplash.com/photo-1608156639585-b3a034ef9199?q=80&w=500',
    rating: 4.3,
    stock: 18,
  },
  {
    id: '8',
    title: 'Настольная лампа Minimal',
    description: 'Регулировка яркости и цветовой температуры.',
    price: 3200,
    category: 'Дом и интерьер',
    image: 'https://images.unsplash.com/photo-1534073828943-f801091bb18c?q=80&w=500',
    rating: 4.8,
    stock: 25,
  },
  {
    id: '9',
    title: 'Набор для йоги (коврик + блоки)',
    description: 'Нескользящая поверхность и экологичные материалы.',
    price: 4100,
    category: 'Спорт',
    image: 'https://images.unsplash.com/photo-1518611012118-2969c6390ecb?q=80&w=500',
    rating: 4.9,
    stock: 10,
    isNew: true,
  },
  {
    id: '10',
    title: 'Внешний аккумулятор 20000mAh',
    description: 'Быстрая зарядка и несколько выходных портов.',
    price: 3500,
    category: 'Аксессуары',
    image: 'https://images.unsplash.com/photo-1609592424209-43a088927003?q=80&w=500',
    rating: 4.7,
    stock: 40,
  },
];

export const CATEGORIES = [
  'Все',
  'Электроника',
  'Аксессуары',
  'Сумки',
  'Компьютеры',
  'Техника для дома',
  'Обувь',
  'Спорт',
];