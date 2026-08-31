// js/products.js

const products = [
    {
        id: 1,
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        category: "Smartphones",
        price: 159900,
        oldPrice: 169900,
        discount: 6,
        rating: 4.9,
        reviewCount: 1245,
        stock: 15,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=600&auto=format&fit=crop"
        ],
        description: "The iPhone 15 Pro Max features a strong and lightweight aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that's tougher than any smartphone glass.",
        specifications: {
            display: "6.7-inch Super Retina XDR",
            processor: "A17 Pro chip",
            ram: "8 GB",
            storage: "256 GB",
            battery: "4422 mAh",
            camera: "48MP Main | 12MP Ultra Wide | 12MP Telephoto"
        },
        colors: ["Natural Titanium", "Blue Titanium", "White Titanium", "Black Titanium"],
        features: ["Titanium design", "A17 Pro chip", "Customizable Action button", "USB-C connector"]
    },
    {
        id: 2,
        name: "Samsung Galaxy S24 Ultra",
        brand: "Samsung",
        category: "Smartphones",
        price: 129999,
        oldPrice: 139999,
        discount: 7,
        rating: 4.8,
        reviewCount: 956,
        stock: 22,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility — starting with the most important device in your life. Your smartphone.",
        specifications: {
            display: "6.8-inch Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 3",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5000 mAh",
            camera: "200MP Main | 12MP Ultra Wide | 50MP Telephoto"
        },
        colors: ["Titanium Gray", "Titanium Black", "Titanium Violet", "Titanium Yellow"],
        features: ["Galaxy AI", "Built-in S Pen", "Titanium exterior", "Corning Gorilla Armor"]
    },
    {
        id: 3,
        name: "Google Pixel 8 Pro",
        brand: "Google",
        category: "Smartphones",
        price: 106999,
        oldPrice: 116999,
        discount: 8,
        rating: 4.7,
        reviewCount: 632,
        stock: 8,
        stockStatus: "Low Stock",
        image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Meet Pixel 8 Pro, the all-pro phone engineered by Google. It's sleek, sophisticated, powerful, and secure. And with Google AI, you can do more, even faster.",
        specifications: {
            display: "6.7-inch Super Actua",
            processor: "Google Tensor G3",
            ram: "12 GB",
            storage: "128 GB",
            battery: "5050 mAh",
            camera: "50MP Main | 48MP Ultra Wide | 48MP Telephoto"
        },
        colors: ["Obsidian", "Porcelain", "Bay"],
        features: ["Google Tensor G3", "Pro-level cameras", "Audio Magic Eraser", "Temperature sensor"]
    },
    {
        id: 4,
        name: "OnePlus 12",
        brand: "OnePlus",
        category: "Smartphones",
        price: 64999,
        oldPrice: 69999,
        discount: 7,
        rating: 4.6,
        reviewCount: 421,
        stock: 30,
        stockStatus: "In Stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMqkeXt_6GYnb_yQs8dGRuS6IJMybfgsxj3qsiwncMmrD3ZX4X7urlVA&s=10",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROMqkeXt_6GYnb_yQs8dGRuS6IJMybfgsxj3qsiwncMmrD3ZX4X7urlVA&s=10"
        ],
        description: "The OnePlus 12 balances powerful hardware with optimized software for a smooth, fast, and stable experience.",
        specifications: {
            display: "6.82-inch ProXDR",
            processor: "Snapdragon 8 Gen 3",
            ram: "12 GB",
            storage: "256 GB",
            battery: "5400 mAh",
            camera: "50MP Main | 48MP Ultra Wide | 64MP Telephoto"
        },
        colors: ["Flowy Emerald", "Silky Black"],
        features: ["Snapdragon 8 Gen 3", "4th Gen Hasselblad Camera", "100W SUPERVOOC", "Aqua Touch"]
    },
    {
        id: 5,
        name: "MacBook Pro 16-inch (M3 Max)",
        brand: "Apple",
        category: "Laptops & Tablets",
        price: 319900,
        oldPrice: 349900,
        discount: 8,
        rating: 4.9,
        reviewCount: 312,
        stock: 5,
        stockStatus: "Low Stock",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=600&auto=format&fit=crop"
        ],
        description: "MacBook Pro blasts forward with the M3 Max chip. Built on 3‑nanometer technology and featuring an all-new GPU architecture, it's the most advanced chip ever built for a personal computer.",
        specifications: {
            display: "16.2-inch Liquid Retina XDR",
            processor: "Apple M3 Max",
            ram: "36 GB",
            storage: "1 TB SSD",
            battery: "Up to 22 hours",
            camera: "1080p FaceTime HD"
        },
        colors: ["Space Black", "Silver"],
        features: ["M3 Max chip", "Hardware-accelerated ray tracing", "Up to 22 hrs battery", "Studio-quality mics"]
    },
    {
        id: 6,
        name: "Dell XPS 15",
        brand: "Dell",
        category: "Laptops & Tablets",
        price: 189999,
        oldPrice: 199999,
        discount: 5,
        rating: 4.7,
        reviewCount: 514,
        stock: 10,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?q=80&w=600&auto=format&fit=crop"
        ],
        description: "The XPS 15 is the perfect balance of size and performance to fuel even more intensive creative projects.",
        specifications: {
            display: "15.6-inch OLED 3.5K",
            processor: "Intel Core i9-13900H",
            ram: "32 GB",
            storage: "1 TB SSD",
            battery: "86 Wh",
            camera: "720p at 30 fps HD"
        },
        colors: ["Platinum Silver"],
        features: ["InfinityEdge display", "NVIDIA RTX 4070", "CNC machined aluminum", "Quad speaker design"]
    },
    {
        id: 7,
        name: "iPad Pro 12.9-inch",
        brand: "Apple",
        category: "Laptops & Tablets",
        price: 109900,
        oldPrice: 119900,
        discount: 8,
        rating: 4.9,
        reviewCount: 845,
        stock: 18,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Astonishing performance. Incredibly advanced displays. Superfast wireless connectivity. Next-level Apple Pencil capabilities. Powerful new features in iPadOS 17. The ultimate iPad experience.",
        specifications: {
            display: "12.9-inch Liquid Retina XDR",
            processor: "Apple M2",
            ram: "8 GB",
            storage: "256 GB",
            battery: "40.88-watt-hour",
            camera: "12MP Wide | 10MP Ultra Wide"
        },
        colors: ["Space Gray", "Silver"],
        features: ["M2 chip", "Liquid Retina XDR display", "Pro cameras", "Thunderbolt / USB 4"]
    },
    {
        id: 8,
        name: "Sony WH-1000XM5",
        brand: "Sony",
        category: "Audio & Wearables",
        price: 29990,
        oldPrice: 34990,
        discount: 14,
        rating: 4.8,
        reviewCount: 2150,
        stock: 45,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Our WH-1000XM5 headphones rewrite the rules for distraction-free listening and exceptional call clarity. Two processors control multiple microphones for unprecedented noise canceling.",
        specifications: {
            display: "N/A",
            processor: "Integrated Processor V1",
            ram: "N/A",
            storage: "N/A",
            battery: "Up to 30 hours",
            camera: "N/A"
        },
        colors: ["Black", "Silver", "Midnight Blue"],
        features: ["Industry-leading noise cancellation", "Auto NC Optimizer", "Premium sound quality", "Up to 30 hrs battery"]
    },
    {
        id: 9,
        name: "AirPods Pro (2nd generation)",
        brand: "Apple",
        category: "Audio & Wearables",
        price: 24900,
        oldPrice: 26900,
        discount: 7,
        rating: 4.8,
        reviewCount: 3540,
        stock: 120,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=600&auto=format&fit=crop"
        ],
        description: "AirPods Pro feature up to 2x more Active Noise Cancellation, plus Adaptive Transparency, and Personalized Spatial Audio with dynamic head tracking for immersive sound.",
        specifications: {
            display: "N/A",
            processor: "H2 headphone chip",
            ram: "N/A",
            storage: "N/A",
            battery: "Up to 6 hours",
            camera: "N/A"
        },
        colors: ["White"],
        features: ["Active Noise Cancellation", "Adaptive Transparency", "Personalized Spatial Audio", "MagSafe Charging Case (USB-C)"]
    },
    {
        id: 10,
        name: "Apple Watch Series 9",
        brand: "Apple",
        category: "Audio & Wearables",
        price: 41900,
        oldPrice: 44900,
        discount: 6,
        rating: 4.7,
        reviewCount: 1250,
        stock: 25,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Smarter. Brighter. Mightier. Apple Watch Series 9 helps you stay connected, active, healthy, and safe.",
        specifications: {
            display: "Always-On Retina display",
            processor: "S9 SiP",
            ram: "N/A",
            storage: "64 GB",
            battery: "Up to 18 hours",
            camera: "N/A"
        },
        colors: ["Midnight", "Starlight", "Silver", "Product(RED)"],
        features: ["S9 chip", "Double tap gesture", "Blood oxygen app", "ECG app"]
    },
    {
        id: 11,
        name: "Anker 737 Power Bank",
        brand: "Anker",
        category: "Accessories",
        price: 9999,
        oldPrice: 12999,
        discount: 23,
        rating: 4.8,
        reviewCount: 420,
        stock: 50,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge.",
        specifications: {
            display: "Smart Digital Display",
            processor: "N/A",
            ram: "N/A",
            storage: "N/A",
            battery: "24,000 mAh",
            camera: "N/A"
        },
        colors: ["Black"],
        features: ["140W Two-Way Fast Charging", "24,000mAh Capacity", "Smart Digital Display", "Charge 3 Devices Simultaneously"]
    },
    {
        id: 12,
        name: "Logitech MX Master 3S",
        brand: "Logitech",
        category: "Accessories",
        price: 10995,
        oldPrice: 11995,
        discount: 8,
        rating: 4.9,
        reviewCount: 890,
        stock: 0,
        stockStatus: "Out of Stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatuAWhy7FLS3ZftBI2IShWxmuDINrEFdDG2gtBnmIaJx8bQXBGflZocY&s=10",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQatuAWhy7FLS3ZftBI2IShWxmuDINrEFdDG2gtBnmIaJx8bQXBGflZocY&s=10"
        ],
        description: "Meet MX Master 3S – an iconic mouse remastered. Feel every moment of your workflow with even more precision, tactility, and performance, thanks to Quiet Clicks and an 8,000 DPI track-on-glass sensor.",
        specifications: {
            display: "N/A",
            processor: "N/A",
            ram: "N/A",
            storage: "N/A",
            battery: "70 days on a full charge",
            camera: "N/A"
        },
        colors: ["Graphite", "Pale Gray"],
        features: ["8000 DPI Any-Surface Tracking", "Quiet Clicks", "MagSpeed Scrolling", "Multi-Device, Multi-OS"]
    },
    {
        id: 13,
        name: "Samsung Galaxy Z Fold 5",
        brand: "Samsung",
        category: "Smartphones",
        price: 154999,
        oldPrice: 164999,
        discount: 6,
        rating: 4.6,
        reviewCount: 312,
        stock: 10,
        stockStatus: "In Stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGOPuWbNZG5eSLiIo5bwzcXB8iaecM48YaBZgc-5vug&s=10",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCGOPuWbNZG5eSLiIo5bwzcXB8iaecM48YaBZgc-5vug&s=10"
        ],
        description: "The ultimate 7.6-inch Main Display unfolds to deliver immersive gaming, cinematic viewing, and PC-like productivity.",
        specifications: {
            display: "7.6-inch Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 2",
            ram: "12 GB",
            storage: "512 GB",
            battery: "4400 mAh",
            camera: "50MP Main | 12MP Ultra Wide | 10MP Telephoto"
        },
        colors: ["Icy Blue", "Phantom Black", "Cream"],
        features: ["Foldable design", "S Pen compatible", "Flex Mode", "Snapdragon 8 Gen 2"]
    },
    {
        id: 14,
        name: "Bose QuietComfort Ultra",
        brand: "Bose",
        category: "Audio & Wearables",
        price: 35900,
        oldPrice: 39900,
        discount: 10,
        rating: 4.7,
        reviewCount: 452,
        stock: 18,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=600&auto=format&fit=crop"
        ],
        description: "World-class noise cancellation, quieter than ever before. Breakthrough spatial audio for more immersive listening, no matter the content or source.",
        specifications: {
            display: "N/A",
            processor: "Bose Custom DSP",
            ram: "N/A",
            storage: "N/A",
            battery: "Up to 24 hours",
            camera: "N/A"
        },
        colors: ["Black", "White Smoke"],
        features: ["Immersive Spatial Audio", "World-Class Noise Cancellation", "CustomTune Technology", "Up to 24 hrs battery"]
    },
    {
        id: 15,
        name: "HP Spectre x360",
        brand: "HP",
        category: "Laptops & Tablets",
        price: 139999,
        oldPrice: 149999,
        discount: 6,
        rating: 4.6,
        reviewCount: 278,
        stock: 7,
        stockStatus: "Low Stock",
        image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=600&auto=format&fit=crop"
        ],
        description: "The HP Spectre x360 2-in-1 PC automatically adjusts to your surroundings for the best on-screen image.",
        specifications: {
            display: "13.5-inch OLED Touch",
            processor: "Intel Core i7-1355U",
            ram: "16 GB",
            storage: "1 TB SSD",
            battery: "66 Wh",
            camera: "5MP IR Camera"
        },
        colors: ["Nightfall Black", "Nocturne Blue"],
        features: ["2-in-1 convertible", "OLED display", "HP Rechargeable MPP2.0 Tilt Pen", "Intel Evo Platform"]
    },
    {
        id: 16,
        name: "Xiaomi 14 Ultra",
        brand: "Xiaomi",
        category: "Smartphones",
        price: 99999,
        oldPrice: 109999,
        discount: 9,
        rating: 4.5,
        reviewCount: 156,
        stock: 20,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Co-engineered with Leica, Xiaomi 14 Ultra offers an unparalleled mobile photography experience.",
        specifications: {
            display: "6.73-inch AMOLED",
            processor: "Snapdragon 8 Gen 3",
            ram: "16 GB",
            storage: "512 GB",
            battery: "5000 mAh",
            camera: "50MP Main | 50MP Ultra Wide | 50MP Telephoto x2"
        },
        colors: ["Black", "White"],
        features: ["Leica Summilux optical lens", "Snapdragon 8 Gen 3", "90W HyperCharge", "All Around Liquid Display"]
    },
    {
        id: 17,
        name: "Samsung Galaxy Tab S9 Ultra",
        brand: "Samsung",
        category: "Laptops & Tablets",
        price: 119999,
        oldPrice: 129999,
        discount: 7,
        rating: 4.8,
        reviewCount: 342,
        stock: 14,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=600&auto=format&fit=crop"
        ],
        description: "The new Galaxy Tab S9 Ultra brings the biggest, most vibrant display yet, now with an IP68 rating for water and dust resistance.",
        specifications: {
            display: "14.6-inch Dynamic AMOLED 2X",
            processor: "Snapdragon 8 Gen 2",
            ram: "12 GB",
            storage: "256 GB",
            battery: "11200 mAh",
            camera: "13MP Main | 8MP Ultra Wide"
        },
        colors: ["Graphite", "Beige"],
        features: ["14.6-inch AMOLED display", "S Pen included", "IP68 water resistance", "Armor Aluminum frame"]
    },
    {
        id: 18,
        name: "Apple 20W USB-C Power Adapter",
        brand: "Apple",
        category: "Accessories",
        price: 1900,
        oldPrice: 1900,
        discount: 0,
        rating: 4.9,
        reviewCount: 5621,
        stock: 200,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=600&auto=format&fit=crop"
        ],
        description: "The Apple 20W USB-C Power Adapter offers fast, efficient charging at home, in the office, or on the go.",
        specifications: {
            display: "N/A",
            processor: "N/A",
            ram: "N/A",
            storage: "N/A",
            battery: "N/A",
            camera: "N/A"
        },
        colors: ["White"],
        features: ["20W fast charging", "USB-C compatible", "Compact design", "Official Apple Accessory"]
    },
    {
        id: 19,
        name: "Garmin Fenix 7 Pro",
        brand: "Garmin",
        category: "Audio & Wearables",
        price: 84990,
        oldPrice: 89990,
        discount: 5,
        rating: 4.8,
        reviewCount: 231,
        stock: 9,
        stockStatus: "Low Stock",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Meet any challenge with the fēnix 7 Pro Solar multisport GPS smartwatch. Its Power Glass solar charging lens yields battery life that can sustain a whole array of athletic and outdoor features.",
        specifications: {
            display: "1.3-inch MIP",
            processor: "N/A",
            ram: "N/A",
            storage: "32 GB",
            battery: "Up to 22 days (Solar)",
            camera: "N/A"
        },
        colors: ["Slate Gray", "Titanium"],
        features: ["Solar charging", "Built-in LED flashlight", "Advanced training metrics", "Multi-band GPS"]
    },
    {
        id: 20,
        name: "Spigen Ultra Hybrid Case for iPhone 15 Pro",
        brand: "Spigen",
        category: "Accessories",
        price: 1499,
        oldPrice: 1999,
        discount: 25,
        rating: 4.7,
        reviewCount: 1450,
        stock: 80,
        stockStatus: "In Stock",
        image: "https://spigen.in/cdn/shop/files/1_b06a25d6-1c9d-46fd-98b2-9ae3bc341d40.jpg?v=1756704788",
        images: [
            "https://spigen.in/cdn/shop/files/1_b06a25d6-1c9d-46fd-98b2-9ae3bc341d40.jpg?v=1756704788"
        ],
        description: "Experience hybrid technology that packs advanced drop protection in a single layer. The Ultra Hybrid combines a shock-absorbing flexible bumper with a rigid back to maximize defensive features.",
        specifications: {
            display: "N/A",
            processor: "N/A",
            ram: "N/A",
            storage: "N/A",
            battery: "N/A",
            camera: "N/A"
        },
        colors: ["Crystal Clear", "Matte Black"],
        features: ["Anti-yellowing", "Air Cushion Technology", "Raised edges for screen and camera", "Wireless charging compatible"]
    },
    {
        id: 21,
        name: "Sonos Roam",
        brand: "Sonos",
        category: "Audio & Wearables",
        price: 19999,
        oldPrice: 21999,
        discount: 9,
        rating: 4.6,
        reviewCount: 310,
        stock: 22,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Experience size-defying sound at home and on the go with this lightweight, outdoor-ready portable smart speaker.",
        specifications: {
            display: "N/A",
            processor: "Quad Core 1.4 GHz",
            ram: "1 GB",
            storage: "4 GB",
            battery: "Up to 10 hours",
            camera: "N/A"
        },
        colors: ["Shadow Black", "Lunar White"],
        features: ["Wi-Fi and Bluetooth", "IP67 waterproof", "Drop resistant", "Apple AirPlay 2"]
    },
    {
        id: 22,
        name: "Google Pixel Tablet",
        brand: "Google",
        category: "Laptops & Tablets",
        price: 49999,
        oldPrice: 54999,
        discount: 9,
        rating: 4.5,
        reviewCount: 184,
        stock: 16,
        stockStatus: "In Stock",
        image: "https://i5.walmartimages.com/seo/Google-Pixel-Tablet-11-128GB-with-Charging-Speaker-Dock-Hazel_3345f78e-4080-4fd4-b913-86e4a84d530b.e75cb6f0c94d4e8befbeb70ab4576fc2.jpeg",
        images: [
            "https://i5.walmartimages.com/seo/Google-Pixel-Tablet-11-128GB-with-Charging-Speaker-Dock-Hazel_3345f78e-4080-4fd4-b913-86e4a84d530b.e75cb6f0c94d4e8befbeb70ab4576fc2.jpeg"
        ],
        description: "The Pixel Tablet is engineered by Google to be helpful at home and on the go. It includes a Charging Speaker Dock.",
        specifications: {
            display: "10.95-inch LCD",
            processor: "Google Tensor G2",
            ram: "8 GB",
            storage: "128 GB",
            battery: "27-watt-hour",
            camera: "8MP Front | 8MP Rear"
        },
        colors: ["Porcelain", "Hazel"],
        features: ["Charging Speaker Dock included", "Google Tensor G2", "Chromecast built-in", "Hub Mode"]
    },
    {
        id: 23,
        name: "Samsung Galaxy Buds2 Pro",
        brand: "Samsung",
        category: "Audio & Wearables",
        price: 17999,
        oldPrice: 19999,
        discount: 10,
        rating: 4.7,
        reviewCount: 654,
        stock: 35,
        stockStatus: "In Stock",
        image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop",
        images: [
            "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=600&auto=format&fit=crop"
        ],
        description: "Hear every detail in your favorite songs with 24-bit Hi-Fi audio, which provides a premium listening experience.",
        specifications: {
            display: "N/A",
            processor: "N/A",
            ram: "N/A",
            storage: "N/A",
            battery: "Up to 5 hours (ANC on)",
            camera: "N/A"
        },
        colors: ["Graphite", "White", "Bora Purple"],
        features: ["24-bit Hi-Fi audio", "Intelligent Active Noise Cancellation", "360 Audio", "Comfortable fit"]
    },
    {
        id: 24,
        name: "Belkin BoostCharge Pro 3-in-1",
        brand: "Belkin",
        category: "Accessories",
        price: 14999,
        oldPrice: 15999,
        discount: 6,
        rating: 4.6,
        reviewCount: 234,
        stock: 12,
        stockStatus: "In Stock",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVR55e0xdJwIr4tXQsIytJi_16MJagusbkGwMPuQRkw&s=10",
        images: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVR55e0xdJwIr4tXQsIytJi_16MJagusbkGwMPuQRkw&s=10"
        ],
        description: "Charge your Apple devices faster with this beautifully designed charging stand featuring MagSafe.",
        specifications: {
            display: "N/A",
            processor: "N/A",
            ram: "N/A",
            storage: "N/A",
            battery: "N/A",
            camera: "N/A"
        },
        colors: ["White", "Black"],
        features: ["15W MagSafe charging", "Charges iPhone, Apple Watch, AirPods", "Architecturally inspired design", "LED charging indicator"]
    }
];

export default products;
