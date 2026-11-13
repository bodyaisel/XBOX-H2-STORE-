// ==========================================
// ملف البيانات والمنتجات والبنود: products.js
// ==========================================

// 1. إعدادات المتجر (اللوجو والبنرات المخصصة)
const storeSettings = {
    storeName: "XBOX-H2-STORE",
    // 🖼️ مكان رابط لوجو المتجر (يمكنك استبداله برابط شعارك الخاص)
    logoImage: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp",
    
    // 🖼️ أماكن مخصصة للبنرات الترويجية والإعلانية في الواجهة
    banners: {
        mainBanner: "https://i.postimg.cc/c4Cr3542/image-b3dbe80f-(1).jpg", // البانر الرئيسي المتحرك أعلى المتجر
        subBanner1: "https://i.postimg.cc/wB2p0gwV/images-(16).jpg" // بنر إضافي للعروض
    }
};

const categoryDefinitions = {
    "xbox-subs": `
        <div class="glass-panel p-4 sm:p-5 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/80 to-black/80 space-y-2.5">
            <h3 class="text-xs sm:text-sm font-black text-emerald-300 flex items-center gap-2">
                <i class="fa-solid fa-circle-info text-cyan-400"></i> دليل أنظمة تفعيل اشتراكات وألعاب إكس بوكس:
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
                <div class="bg-black/50 p-3 rounded-xl border border-emerald-500/25 space-y-1">
                    <span class="font-black text-emerald-400 block">🏠 نظام الهوم (Home Xbox)</span>
                    <p class="text-gray-300">لعب بحسابك الأساسي وحفظ التقدم.</p>
                </div>
                <div class="bg-black/50 p-3 rounded-xl border border-cyan-500/25 space-y-1">
                    <span class="font-black text-cyan-400 block">🔑 نظام الساين إن (Sign-in)</span>
                    <p class="text-gray-300">تسجيل الدخول بالحساب في الخلفية.</p>
                </div>
                <div class="bg-black/50 p-3 rounded-xl border border-purple-500/25 space-y-1">
                    <span class="font-black text-purple-400 block">👑 الحساب الكامل (Full Account)</span>
                    <p class="text-gray-300">حساب خاص بك تملكه وتتحكم به 100%.</p>
                </div>
            </div>
        </div>
    `
};

const storeProducts = [
    // --- اشتراكات الجيم باس التميت (بروابطك المباشرة تماماً) ---
    { id: "gp-ult-14day", category: "xbox-subs", name: "اشتراك 14 يوم ( جيم باس التميت )", tag: "جيم باس ✨", price: 150, badge: "الأكثر طلباً", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل." },
    { id: "gp-ult-2m", category: "xbox-subs", name: "اشتراك 2 شهرين ( جيم باس التميت )", tag: "جيم باس ✨", price: 700, badge: "الأكثر طلباً", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل." },
    { id: "gp-ult-4m", category: "xbox-subs", name: "اشتراك ٤ شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 1250, badge: "الأكثر طلباً", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل." },
    { id: "gp-ult-6m", category: "xbox-subs", name: "اشتراك 6 شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 1900, badge: "الأكثر طلباً", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل." },
    { id: "gp-ult-8m", category: "xbox-subs", name: "اشتراك ٨ شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 2550, badge: "عرض مميز", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل." },
    { id: "gp-ult-10m", category: "xbox-subs", name: "اشتراك ١٠ شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 3200, badge: "توفير عالي", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "اشتراك لمدة 10 أشهر جيم باس التميت." },
    { id: "gp-ult-12m", category: "xbox-subs", name: "اشتراك سنة كاملة ١٢ شهر ( جيم باس التميت )", tag: "الباقة الشاملة 👑", price: 3850, badge: "الأفضل قيمة", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "اشتراك جيم باس التميت لمدة 12 شهر كاملة." },
    { id: "gp-ult-14m", category: "xbox-subs", name: "اشتراك سنة كاملة ١4 شهر ( جيم باس التميت )", tag: "الباقة الشاملة 👑", price: 4300, badge: "الأفضل قيمة", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "اشتراك جيم باس التميت لمدة 12 شهر كاملة." },
    { id: "gp-ult-16m", category: "xbox-subs", name: "اشتراك سنة كاملة ١6 شهر ( جيم باس التميت )", tag: "الباقة الشاملة 👑", price: 4900, badge: "الأفضل قيمة", image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp", desc: "اشتراك جيم باس التميت لمدة 12 شهر كاملة." },
    
    // --- اشتراكات Xbox Core / Essential ---
    { id: "gp-core-3m", category: "xbox-subs", name: "اشتراك ٣ شهور ( Xbox Core / Essential )", tag: "إسنشال / كور", price: 550, badge: "أساسي", image: "https://i.postimg.cc/T14tJFjP/Gemini-Generated-Image-382x3t382x3t382x.jpg", desc: "اشتراك الأونلاين الأساسي للعب الجماعي." },
    { id: "gp-core-6m", category: "xbox-subs", name: "اشتراك 6 شهور ( Xbox Core / Essential )", tag: "إسنشال / كور", price: 1000, badge: "أساسي", image: "https://i.postimg.cc/T14tJFjP/Gemini-Generated-Image-382x3t382x3t382x.jpg", desc: "اشتراك الأونلاين الأساسي للعب الجماعي." },
    { id: "gp-core-12m", category: "xbox-subs", name: "اشتراك سنة كاملة ( Xbox Core / Essential )", tag: "إسنشال / كور", price: 1950, badge: "توفير ممتاز", image: "https://i.postimg.cc/T14tJFjP/Gemini-Generated-Image-382x3t382x3t382x.jpg", desc: "اشتراك الأونلاين الأساسي لمدة سنة." },
    
    // --- بطاقات هدايا أكس بوكس (أمريكي) ---
    { id: "xb-card-us-10", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 10$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 550, badge: "رصيد رسمي", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 10 دولار." },
    { id: "xb-card-us-15", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 15$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 800, badge: "رصيد رسمي", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 10 دولار." },
    { id: "xb-card-us-20", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 20$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 1150, badge: "الأكثر طلباً", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 20 دولار." },
    { id: "xb-card-us-25", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 25$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 1350, badge: "الأكثر طلباً", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 20 دولار." },
    { id: "xb-card-us-50", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 50$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 2650, badge: "وفر أكثر", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 50 دولار." },
    { id: "xb-card-us-100", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 100$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 5200, badge: "وفر أكثر", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 50 دولار." },
   
    // --- بطاقات بلايستيشن ---
    { id: "ps-card-us-10", category: "ps-cards", name: "بطاقات ستور بلايستيشن 10$ (أمريكي)", tag: "بلايستيشن 🇺🇸", price: 610, badge: "رصيد رسمي", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "كود شحن متجر بلايستيشن أمريكي 10$." },
    { id: "ps-card-us-25", category: "ps-cards", name: "بطاقات ستور بلايستيشن 25$ (أمريكي)", tag: "بلايستيشن 🇺🇸", price: 1450, badge: "موصى به", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "كود شحن متجر بلايستيشن أمريكي 25$." },
    { id: "ps-card-tr-250", category: "ps-cards", name: "بطاقة بلايستيشن 250 ليرة (تركي)", tag: "بلايستيشن 🇹🇷", price: 580, badge: "تركي اقتصادي", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "شحن رصيد متجر بلايستيشن تركي." },
    { id: "ps-card-in-1000", category: "ps-cards", name: "بطاقة بلايستيشن 1000 روبية (هندي)", tag: "بلايستيشن 🇮🇳", price: 540, badge: "هندي مميز", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "شحن رصيد متجر بلايستيشن هندي." },

    // --- الألعاب ---
    { id: "game-fc27", category: "xbox-games", name: "FC 27 STANDARD EDITION", tag: "ألعاب إكس بوكس", price: 2300, badge: "إصدار قياسي", image: "https://i.postimg.cc/RZpXvYpJ/380f3806-2db0-4763-9f17-e0b2821bc758.jpg", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل." },
    { id: "game-gta6", category: "xbox-games", name: "GTA VI - الإصدار الرقمي المسبق", tag: "حدث العام 🎮", price: 3900, badge: "حصري", image: "https://i.postimg.cc/DZrr4p6d/the-full-gta-vi-reveal-artwork-directly-from-rockstars-v0-dkj530ewih4c1.png", desc: "احجز نسختك الرقمية من لعبة الجيل المنتظرة." },
    { id: "game-cyberpunk", category: "xbox-games", name: "Cyberpunk 2077 Ultimate Edition", tag: "ألعاب إكس بوكس", price: 1100, badge: "عروض قوية", image: "https://i.postimg.cc/76wCdH1V/images-(13).jpg", desc: "اللعبة كاملة مع التوسعة الكبرى." },
    { id: "game-spider2", category: "playstation", name: "Marvel's Spider-Man 2 (PS5)", tag: "بلايستيشن 🕹️", price: 1650, badge: "حصريات PS5", image: "https://i.postimg.cc/5yFMmvHG/images-(17).jpg", desc: "رحلة بيتر باركر ومايلز موريلز المثيرة." },
    { id: "game-gow-ragnarok", category: "playstation", name: "God of War Ragnarok (PS5)", tag: "بلايستيشن 🕹️", price: 1700, badge: "مغامرة كبرى", image: "https://i.postimg.cc/VsSShVn3/God-of-War-Ragnar-1000x.png", desc: "الملحمة الأسطورية على بلايستيشن." },
    
    // --- ستيم و IPTV ---
    { id: "steam-wallet-10", category: "steam", name: "بطاقة ستيم 10 دولار أمريكي (Wallet)", tag: "ستيم PC 💻", price: 620, badge: "كود رسمي", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "شحن محفظة ستيم لشراء ألعاب الحاسب." },
    { id: "steam-wallet-20", category: "steam", name: "بطاقة ستيم 20 دولار أمريكي (Wallet)", tag: "ستيم PC 💻", price: 1200, badge: "توفير", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "شحن محفظة ستيم 20$." },
    { id: "iptv-12m", category: "iptv", name: "اشتراك قنوات وسيرفرات IPTV لمدة سنة كاملة", tag: "بث تلفزيوني 📺", price: 550, badge: "4K جودة", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "أكثر من 8000 قناة ومكتبة أفلام ومسلسلات." }
];