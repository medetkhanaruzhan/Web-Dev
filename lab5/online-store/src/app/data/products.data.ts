import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

export const CATEGORIES: Category[] = [
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Планшеты' },
    { id: 5, name: 'Избранное' },
];

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Apple iPhone 16 Pro Max 256Gb золотистый',
        description: 'Флагманский смартфон Apple с титановым корпусом и улучшенной камерой 48 МП.',
        price: 727000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-nanosim-esim-zolotistyi-123890547/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 1
    },
    {
        id: 2,
        name: 'Samsung Galaxy S24 Ultra 12 ГБ/256 ГБ серый',
        description: 'Смартфон со встроенным стилусом S Pen и камерой 200 МП.',
        price: 620000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 1
    },
    {
        id: 3,
        name: 'Apple iPhone 17 256Gb фиолетовый',
        description: 'Революционный смартфон с передовыми технологиями и элегантным дизайном в стильном фиолетовом цвете',
        price: 569000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pb8/p3b/64165135.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-nanosim-esim-fioletovyi-145466665/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 1
    },
    {
        id: 4,
        name: 'Google Pixel 9 Pro XL 16 ГБ/128 ГБ черный',
        description: 'Самый умный Pixel с продвинутым ИИ Gemini.',
        price: 490000,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pdd/pb6/3092410.jpeg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pdd/pb6/3092410.jpeg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/google-pixel-9-pro-xl-16-gb-128-gb-chernyi-128508316/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 1
    },
    {
        id: 5,
        name: 'HUAWEI Pura 70 Pro 12 ГБ/512 ГБ белый',
        description: 'Шедевр мобильной фотографии с уникальным дизайном.',
        price: 472000,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc6/h8f/86331958198302.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hc6/h8f/86331958198302.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/huawei-pura-70-pro-12-gb-512-gb-belyi-120278828/',
        likes: 0,
        liked:false,
        categoryId: 1
    },

    // Ноутбуки 
    {
        id: 6,
        name: 'Apple MacBook Air 13 M3 8 ГБ/256 ГБ серый',
        description: 'Тонкий, легкий и невероятно мощный ноутбук с чипом M3.',
        price: 640000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/p55/29100953.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p59/p55/29100953.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2024-13-6-8-gb-ssd-256-gb-macos-mrxn3-118570205/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 2
    },
    {
        id: 7,
        name: 'ASUS ROG Zephyrus G16 GU605 белый',
        description: 'Ультратонкий игровой ноутбук с OLED-дисплеем.',
        price: 1250000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pf7/p87/49274325.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pf7/p87/49274325.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/asus-rog-zephyrus-g16-16-32-gb-ssd-1024-gb-bez-os-ga605km-qr016-141460379/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 2
    },
    {
        id: 8,
        name: 'Lenovo Legion 5 Pro 16ARX8 серый',
        description: 'Мощный игровой инструмент для побед.',
        price: 819000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p42/pf6/15662421.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p42/pf6/15662421.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/lenovo-legion-pro-5-16arx8-16-16-gb-ssd-1024-gb-bez-os-82wm00hmrk-132137935/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 2
    },
    {
        id: 9,
        name: 'HP Victus 15-fb1016ci черный',
        description: 'Стильный игровой ноутбук по доступной цене.',
        price: 445000,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hd7/87125815853086.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hfb/hd7/87125815853086.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/hp-victus-15-6-16-gb-ssd-512-gb-bez-os-15-fb1003ci-9l6q6ea-115726252/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 2
    },
    {
        id: 10,
        name: 'Acer Aspire AL16-52P серебристый',
        description: 'Компактный ноутбук с ярким OLED-экраном для работы.',
        price: 280000,
        rating: 4.5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p91/pf8/28407711.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/acer-aspire-16-16-gb-emmc-512-gb-win-11-pro-nx-j5rem-01c-al16-52p-135804242/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 2
    },

    // Наушники 
    {
        id: 11,
        name: 'Apple AirPods Pro 2 MagSafe (USB-C) белый',
        description: 'Лучшее шумоподавление и объемный звук.',
        price: 105000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-usb-c-belyi-113677582/',
        likes: 0,
        liked:false,
        categoryId: 3
    },
    {
        id: 12,
        name: 'Sony WH-1000XM5 черный',
        description: 'Лидер в индустрии беспроводного шумоподавления.',
        price: 135000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hc7/hde/65099687657502.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-sony-wh-1000xm5-chernyi-105259822/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 3
    },
    {
        id: 13,
        name: 'Marshall Major IV коричневый',
        description: 'Классический дизайн и 80+ часов работы.',
        price: 50000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h57/h11/80130097381406.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h57/h11/80130097381406.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-marshall-major-iv-korichnevyi-104024603/',
        likes: 0,
        liked:false,
        categoryId: 3
    },
    {
        id: 14,
        name: 'Samsung Galaxy Buds3 Pro серебристый',
        description: 'Новое поколение звука от Samsung.',
        price: 75000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p67/p37/108495081.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-samsung-galaxy-buds3-pro-serebristyi-121198974/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 3
    },
    {
        id: 15,
        name: 'Huawei FreeClip 2 голубой',
        description: 'Шумоподавление во время вызовов и эффектов эквалайзера ',
        price: 78000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p0d/97887942.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pe0/p0d/97887942.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-huawei-freeclip-2-goluboi-155190383/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 3
    },

    // Планшеты 
    {
        id: 16,
        name: 'Apple iPad Pro 11 2024 M4 256 ГБ серебристый',
        description: 'Невероятно тонкий и функциональный планшет с OLED-экраном.',
        price: 505000,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/h2e/86057437462558.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h2a/h2e/86057437462558.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-ipad-pro-2024-wi-fi-11-djuim-8-gb-256-gb-serebristyi-119582267/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 4
    },
    {
        id: 17,
        name: 'Samsung Galaxy Tab S9 Ultra 256 ГБ серый',
        description: 'Огромный экран для творчества и работы.',
        price: 580000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pe5/p5f/1647298.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-tab-s10-ultra-14-6-djuim-12-gb-256-gb-seryi-128152132/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 4
    },
    {
        id: 18,
        name: 'Huawei MatePad SE AGS6-W09',
        description: 'Инновационный планшет с двухслойным OLED-экраном.',
        price: 75000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hc5/h60/86746842595358.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/huawei-matepad-se-ags6-w09-11-djuim-6-gb-128-gb-seryi-122142537/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 4
    },
    {
        id: 19,
        name: 'Xiaomi Pad 6 8 ГБ/256 ГБ серый',
        description: 'Лучший мультимедийный планшет в своем классе.',
        price: 158000,
        rating: 4.8,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pb1/pfa/78318164.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pb1/pfa/78318164.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/xiaomi-pad-6-11-djuim-8-gb-256-gb-seryi-112453226/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 4
    },
    {
        id: 20,
        name: 'Redmi Pad SE 8 ГБ/256 ГБ серый',
        description: 'Планшет с ярким 11-дюймовым экраном и мощным процессором Qualcomm Snapdragon 680',
        price: 120000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h46/ha8/85770775363614.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h46/ha8/85770775363614.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-se-global-11-djuim-8-gb-256-gb-grafit-118512774/?c=750000000',
        likes: 0,
        liked:false,
        categoryId: 4
    }
];
