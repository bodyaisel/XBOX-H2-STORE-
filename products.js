// ==========================================
// ملف البيانات والمنتجات والبنود المتوافق: products.js
// ==========================================

const storeSettings = {
    storeName: "XBOX-H2-STORE",
    whatsappNumber: "201221188837",
    currency: "ج.م",
    logoImage: "https://i.postimg.cc/c4Cr3542/image-b3dbe80f-(1).jpg",
    banners: {
        mainBanner: "https://i.postimg.cc/c4Cr3542/image-b3dbe80f-(1).jpg",
        subBanner1: "https://i.postimg.cc/c4Cr3542/image-b3dbe80f-(1).jpg"
    }
};

const categoryDefinitions = {
    "xbox-subs": `
        <div class="glass-panel p-4 sm:p-5 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/80 to-black/80 space-y-2.5">
            <h3 class="text-xs sm:text-sm font-black text-emerald-300 flex items-center gap-2">
                <i class="fa-solid fa-circle-info text-cyan-400"></i> دليل أنظمة تفعيل اشتراكات إكس بوكس جيم باس:
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
    `,
    "ps-subs": `
        <div class="glass-panel p-4 sm:p-5 rounded-2xl border border-blue-500/40 bg-gradient-to-r from-blue-950/80 to-black/80 space-y-2.5">
            <h3 class="text-xs sm:text-sm font-black text-blue-300 flex items-center gap-2">
                <i class="fa-brands fa-playstation text-cyan-400"></i> دليل اشتراكات وأنظمة بلايستيشن بلس (PS Plus):
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-[11px]">
                <div class="bg-black/50 p-3 rounded-xl border border-blue-500/25 space-y-1">
                    <span class="font-black text-blue-400 block">🏠 هوم / بريميري</span>
                    <p class="text-gray-300">تفعيل رئيسي واللعب بحسابك الشخصي مباشرة.</p>
                </div>
                <div class="bg-black/50 p-3 rounded-xl border border-cyan-500/25 space-y-1">
                    <span class="font-black text-cyan-400 block">🔑 ساين / سكندري</span>
                    <p class="text-gray-300">اللعب من داخل حساب المتجر المُسلَّم لك.</p>
                </div>
                <div class="bg-black/50 p-3 rounded-xl border border-purple-500/25 space-y-1">
                    <span class="font-black text-purple-400 block">👑 فل أكونت (Full Account)</span>
                    <p class="text-gray-300">حساب خاص بك بالكامل تملك بياناته وتتحكم به 100%.</p>
                </div>
            </div>
        </div>
    `,
    "xbox-games": `
        <div class="glass-panel p-3.5 sm:p-4 rounded-2xl border border-cyan-500/30 bg-black/50 space-y-1.5">
            <h4 class="text-xs sm:text-sm font-black text-cyan-300 flex items-center gap-2"><i class="fa-solid fa-gamepad"></i> ألعاب إكس بوكس الرقمية</h4>
            <p class="text-[11px] text-gray-300 leading-relaxed">أحدث ألعاب إكس بوكس بتفعيل رسمي فوري وضمان شامل.</p>
        </div>
    `,
    "playstation": `
        <div class="glass-panel p-3.5 sm:p-4 rounded-2xl border border-indigo-500/30 bg-black/50 space-y-1.5">
            <h4 class="text-xs sm:text-sm font-black text-indigo-300 flex items-center gap-2"><i class="fa-brands fa-playstation"></i> ألعاب بلايستيشن (PS4 / PS5)</h4>
            <p class="text-[11px] text-gray-300 leading-relaxed">أقوى الحصريات والألعاب العالمية وتنزيل مباشر على جهازك.</p>
        </div>
    `,
    "iptv": `
        <div class="glass-panel p-3.5 sm:p-4 rounded-2xl border border-purple-500/30 bg-black/50 space-y-1.5">
            <h4 class="text-xs sm:text-sm font-black text-purple-300 flex items-center gap-2"><i class="fa-solid fa-tv"></i> اشتراكات IPTV VIP</h4>
            <p class="text-[11px] text-gray-300 leading-relaxed">باقات بث رقمية متكاملة تضم أضخم مكتبة أفلام ومسلسلات والقنوات الرياضية العالمية بجودة 4K بدون تقطيع.</p>
        </div>
    `
};

const storeProducts = [
    // ====================================================
    // 1. اشتراكات جيم باس التميت (لها 3 أسعار: هوم / ساين / فل أكونت)
    // ====================================================
    { id: "gp-ult-14day", group: "gp-ultimate", durationLabel: "14 يوم", category: "xbox-subs", name: "اشتراك 14 يوم ( جيم باس التميت )", tag: "جيم باس ✨", price: 150, badge: "الأكثر طلباً", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل.", variants: [{ label: "هوم", price: 150 }, { label: "ساين", price: 120 }, { label: "فل أكونت", price: 220 }] },
    { id: "gp-ult-2m", group: "gp-ultimate", durationLabel: "2 شهرين", category: "xbox-subs", name: "اشتراك 2 شهرين ( جيم باس التميت )", tag: "جيم باس ✨", price: 700, badge: "الأكثر طلباً", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل.", variants: [{ label: "هوم", price: 700 }, { label: "ساين", price: 550 }, { label: "فل أكونت", price: 950 }] },
    { id: "gp-ult-4m", group: "gp-ultimate", durationLabel: "4 شهور", category: "xbox-subs", name: "اشتراك ٤ شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 1250, badge: "الأكثر طلباً", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل.", variants: [{ label: "هوم", price: 1250 }, { label: "ساين", price: 950 }, { label: "فل أكونت", price: 1750 }] },
    { id: "gp-ult-6m", group: "gp-ultimate", durationLabel: "6 شهور", category: "xbox-subs", name: "اشتراك 6 شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 1900, badge: "الأكثر طلباً", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل.", variants: [{ label: "هوم", price: 1900 }, { label: "ساين", price: 1450 }, { label: "فل أكونت", price: 2600 }] },
    { id: "gp-ult-8m", group: "gp-ultimate", durationLabel: "8 شهور", category: "xbox-subs", name: "اشتراك ٨ شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 2550, badge: "عرض مميز", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل.", variants: [{ label: "هوم", price: 2550 }, { label: "ساين", price: 1950 }, { label: "فل أكونت", price: 3400 }] },
    { id: "gp-ult-10m", group: "gp-ultimate", durationLabel: "10 شهور", category: "xbox-subs", name: "اشتراك ١٠ شهور ( جيم باس التميت )", tag: "جيم باس ✨", price: 3200, badge: "توفير عالي", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "اشتراك لمدة 10 أشهر جيم باس التميت.", variants: [{ label: "هوم", price: 3200 }, { label: "ساين", price: 2450 }, { label: "فل أكونت", price: 4200 }] },
    { id: "gp-ult-12m", group: "gp-ultimate", durationLabel: "12 شهر", category: "xbox-subs", name: "اشتراك سنة كاملة ١٢ شهر ( جيم باس التميت )", tag: "الباقة الشاملة 👑", price: 3850, badge: "الأفضل قيمة", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "اشتراك جيم باس التميت لمدة 12 شهر كاملة.", variants: [{ label: "هوم", price: 3850 }, { label: "ساين", price: 2900 }, { label: "فل أكونت", price: 4950 }] },
    { id: "gp-ult-14m", group: "gp-ultimate", durationLabel: "14 شهر", category: "xbox-subs", name: "اشتراك سنة كاملة ١4 شهر ( جيم باس التميت )", tag: "الباقة الشاملة 👑", price: 4300, badge: "الأفضل قيمة", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "اشتراك جيم باس التميت لمدة 14 شهر كاملة.", variants: [{ label: "هوم", price: 4300 }, { label: "ساين", price: 3250 }, { label: "فل أكونت", price: 5450 }] },
    { id: "gp-ult-16m", group: "gp-ultimate", durationLabel: "16 شهر", category: "xbox-subs", name: "اشتراك سنة كاملة ١6 شهر ( جيم باس التميت )", tag: "الباقة الشاملة 👑", price: 4900, badge: "الأفضل قيمة", image: "https://i.postimg.cc/2jWvk69d/image-41159626.jpg", desc: "اشتراك جيم باس التميت لمدة 16 شهر كاملة.", variants: [{ label: "هوم", price: 4900 }, { label: "ساين", price: 3700 }, { label: "فل أكونت", price: 5900 }] },
    
    // ====================================================
    // 2. اشتراكات جيم باس كور / إسنشال (لها 3 أسعار: هوم / ساين / فل أكونت)
    // ====================================================
    { id: "gp-core-3m", group: "gp-core", durationLabel: "3 شهور", category: "xbox-subs", name: "اشتراك ٣ شهور ( Xbox Core / Essential )", tag: "إسنشال / كور", price: 550, badge: "أساسي", image: "https://i.postimg.cc/DydXGNTq/image-e13e2b37.jpg", desc: "اشتراك الأونلاين الأساسي للعب الجماعي.", variants: [{ label: "هوم", price: 550 }, { label: "ساين", price: 420 }, { label: "فل أكونت", price: 750 }] },
    { id: "gp-core-6m", group: "gp-core", durationLabel: "6 شهور", category: "xbox-subs", name: "اشتراك 6 شهور ( Xbox Core / Essential )", tag: "إسنشال / كور", price: 1000, badge: "أساسي", image: "https://i.postimg.cc/DydXGNTq/image-e13e2b37.jpg", desc: "اشتراك الأونلاين الأساسي للعب الجماعي.", variants: [{ label: "هوم", price: 1000 }, { label: "ساين", price: 780 }, { label: "فل أكونت", price: 1350 }] },
    { id: "gp-core-12m", group: "gp-core", durationLabel: "12 شهر", category: "xbox-subs", name: "اشتراك سنة كاملة ( Xbox Core / Essential )", tag: "إسنشال / كور", price: 1950, badge: "توفير ممتاز", image: "https://i.postimg.cc/DydXGNTq/image-e13e2b37.jpg", desc: "اشتراك الأونلاين الأساسي لمدة سنة.", variants: [{ label: "هوم", price: 1950 }, { label: "ساين", price: 1450 }, { label: "فل أكونت", price: 2500 }] },

    // ====================================================
    // 3. اشتراكات البلايستيشن بلس (لها 3 أسعار: هوم / ساين / فل أكونت)
    // ====================================================
    { id: "ps-plus-extra-1m", group: "ps-extra", durationLabel: "شهر واحد", category: "ps-subs", name: "اشتراك شهر واحد ( PS Plus Extra )", tag: "بلايستيشن بلس 🔵", price: 450, badge: "مكتبة ضخمة", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "أكثر من 400 لعبة PS4 و PS5 مع اللعب أونلاين.", variants: [{ label: "هوم", price: 450 }, { label: "ساين", price: 320 }, { label: "فل أكونت", price: 650 }] },
    { id: "ps-plus-extra-3m", group: "ps-extra", durationLabel: "3 شهور", category: "ps-subs", name: "اشتراك ٣ شهور ( PS Plus Extra )", tag: "بلايستيشن بلس 🔵", price: 1150, badge: "الأكثر طلباً", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "أكثر من 400 لعبة PS4 و PS5 لمدة 3 أشهر.", variants: [{ label: "هوم", price: 1150 }, { label: "ساين", price: 850 }, { label: "فل أكونت", price: 1650 }] },
    { id: "ps-plus-extra-12m", group: "ps-extra", durationLabel: "12 شهر", category: "ps-subs", name: "اشتراك سنة كاملة ١٢ شهر ( PS Plus Extra )", tag: "بلايستيشن بلس 👑", price: 3400, badge: "الأفضل قيمة", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "اشتراك بلايستيشن بلس إكسترا لمدة سنة كاملة.", variants: [{ label: "هوم", price: 3400 }, { label: "ساين", price: 2450 }, { label: "فل أكونت", price: 4600 }] },
    { id: "ps-plus-ess-3m", group: "ps-ess", durationLabel: "3 شهور", category: "ps-subs", name: "اشتراك ٣ شهور ( PS Plus Essential )", tag: "بلايستيشن بلس 🔵", price: 750, badge: "أونلاين أساسي", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "اشتراك الأونلاين الأساسي والألعاب الشهرية لمدة 3 شهور.", variants: [{ label: "هوم", price: 750 }, { label: "ساين", price: 550 }, { label: "فل أكونت", price: 1100 }] },
    { id: "ps-plus-ess-12m", group: "ps-ess", durationLabel: "12 شهر", category: "ps-subs", name: "اشتراك سنة كاملة ( PS Plus Essential )", tag: "بلايستيشن بلس 🔵", price: 2350, badge: "توفير ممتاز", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "اشتراك الأونلاين الأساسي والألعاب الشهرية لمدة سنة.", variants: [{ label: "هوم", price: 2350 }, { label: "ساين", price: 1700 }, { label: "فل أكونت", price: 3200 }] },
    
    // ====================================================
    // 4. باقي الأقسام (سعر واحد ثابت لكل كارت بدون خيارات هوم/ساين/فل)
    // ====================================================
    // كروت هدايا إكس بوكس
    { id: "xb-card-us-10", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 10$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 550, badge: "رصيد رسمي", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 10 دولار." },
    { id: "xb-card-us-15", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 15$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 800, badge: "رصيد رسمي", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 15 دولار." },
    { id: "xb-card-us-20", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 20$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 1150, badge: "الأكثر طلباً", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 20 دولار." },
    { id: "xb-card-us-25", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 25$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 1350, badge: "الأكثر طلباً", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 25 دولار." },
    { id: "xb-card-us-50", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 50$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 2650, badge: "وفر أكثر", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 50 دولار." },
    { id: "xb-card-us-100", category: "xbox-cards", name: "بطاقة هدايا أكس بوكس 100$ (أمريكي)", tag: "أكس بوكس 🇺🇸", price: 5200, badge: "وفر أكثر", image: "https://i.postimg.cc/025Zgx5w/image-d876ecb7.jpg", desc: "كود شحن رصيد المتجر الأمريكي 100 دولار." },
   
    // كروت هدايا بلايستيشن
    { id: "ps-card-us-10", category: "ps-cards", name: "بطاقات ستور بلايستيشن 10$ (أمريكي)", tag: "بلايستيشن 🇺🇸", price: 610, badge: "رصيد رسمي", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "كود شحن متجر بلايستيشن أمريكي 10$." },
    { id: "ps-card-us-25", category: "ps-cards", name: "بطاقات ستور بلايستيشن 25$ (أمريكي)", tag: "بلايستيشن 🇺🇸", price: 1450, badge: "موصى به", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "كود شحن متجر بلايستيشن أمريكي 25$." },
    { id: "ps-card-tr-250", category: "ps-cards", name: "بطاقة بلايستيشن 250 ليرة (تركي)", tag: "بلايستيشن 🇹🇷", price: 580, badge: "تركي اقتصادي", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "شحن رصيد متجر بلايستيشن تركي." },
    { id: "ps-card-in-1000", category: "ps-cards", name: "بطاقة بلايستيشن 1000 روبية (هندي)", tag: "بلايستيشن 🇮🇳", price: 540, badge: "هندي مميز", image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg", desc: "شحن رصيد متجر بلايستيشن هندي." },

    // الألعاب (سعر واحد لكل كارت)
    { id: "game-fc27", category: "xbox-games", name: "FC 27 STANDARD EDITION", tag: "ألعاب إكس بوكس", price: 2300, badge: "إصدار قياسي", image: "https://i.postimg.cc/RZpXvYpJ/380f3806-2db0-4763-9f17-e0b2821bc758.jpg", desc: "تفعيل رسمي فوري لحسابك مع ضمان كامل." },
    { id: "game-gta6", category: "xbox-games", name: "GTA VI - الإصدار الرقمي المسبق", tag: "حدث العام 🎮", price: 3900, badge: "حصري", image: "https://i.postimg.cc/DZrr4p6d/the-full-gta-vi-reveal-artwork-directly-from-rockstars-v0-dkj530ewih4c1.png", desc: "احجز نسختك الرقمية من لعبة الجيل المنتظرة." },
    { id: "game-cyberpunk", category: "xbox-games", name: "Cyberpunk 2077 Ultimate Edition", tag: "ألعاب إكس بوكس", price: 1100, badge: "عروض قوية", image: "https://i.postimg.cc/76wCdH1V/images-(13).jpg", desc: "اللعبة كاملة مع التوسعة الكبرى." },
    { id: "game-spider2", category: "playstation", name: "Marvel's Spider-Man 2 (PS5)", tag: "بلايستيشن 🕹️", price: 1650, badge: "حصريات PS5", image: "https://i.postimg.cc/5yFMmvHG/images-(17).jpg", desc: "رحلة بيتر باركر ومايلز موريلز المثيرة." },
    { id: "game-gow-ragnarok", category: "playstation", name: "God of War Ragnarok (PS5)", tag: "بلايستيشن 🕹️", price: 1700, badge: "مغامرة كبرى", image: "https://i.postimg.cc/VsSShVn3/God-of-War-Ragnar-1000x.png", desc: "الملحمة الأسطورية على بلايستيشن." },
    
    // ستيم
    { id: "steam-wallet-10", category: "steam", name: "بطاقة ستيم 10 دولار أمريكي (Wallet)", tag: "ستيم PC 💻", price: 620, badge: "كود رسمي", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "شحن محفظة ستيم لشراء ألعاب الحاسب." },
    { id: "steam-wallet-20", category: "steam", name: "بطاقة ستيم 20 دولار أمريكي (Wallet)", tag: "ستيم PC 💻", price: 1200, badge: "توفير", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "شحن محفظة ستيم 20$." },
    
    // IPTV
    { id: "iptv-3m", group: "iptv-vip", durationLabel: "3 شهور", category: "iptv", name: "اشتراك IPTV VIP لمدة 3 شهور", tag: "بث تلفزيوني 📺", price: 200, badge: "تجريبي ممتاز", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "أكثر من 8000 قناة ومكتبة أفلام لمدة 3 أشهر بجودة عالية." },
    { id: "iptv-6m", group: "iptv-vip", durationLabel: "6 شهور", category: "iptv", name: "اشتراك IPTV VIP لمدة 6 شهور", tag: "بث تلفزيوني 📺", price: 350, badge: "توفير جيد", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "اشتراك قنوات وسيرفرات IPTV لمدة 6 أشهر متواصلة." },
    { id: "iptv-12m", group: "iptv-vip", durationLabel: "سنة كاملة", category: "iptv", name: "اشتراك قنوات وسيرفرات IPTV لمدة سنة كاملة", tag: "بث تلفزيوني 📺", price: 550, badge: "4K جودة", image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg", desc: "أكثر من 8000 قناة ومكتبة أفلام ومسلسلات لمدة سنة كاملة." }
];

const exclusiveOffersSlider = [
    {
        productId: "gp-ult-12m",
        title: "اشتراك سنة كاملة ١٢ شهر ( جيم باس التميت )",
        subtitle: "الاشتراك الأكثر طلباً الآن في متجر XBOX-H2-STORE - تفعيل فوري بسعر 3850 ج.م ⚡",
        badges: ["الأكثر مبيعاً 🔥", "جيم باس ✨", "كامل"],
        image: "https://i.postimg.cc/Jn8c3m9Z/c59f28ce-6040-44a2-9d7f-fc636de4a224.webp"
    },
    {
        productId: "ps-plus-extra-12m",
        title: "اشتراك سنة كاملة ١٢ شهر ( PS Plus Extra )",
        subtitle: "استمتع بأكثر من 400 لعبة على PS4 و PS5 مع تفعيل فوري وضمان شامل 🔵",
        badges: ["بلايستيشن بلس 🔥", "مكتبة ضخمة"],
        image: "https://i.postimg.cc/VNS0nZfF/image-648604a2.jpg"
    },
    {
        productId: "game-fc27",
        title: "FC 27 STANDARD EDITION",
        subtitle: "اللعبة الأكثر طلباً الآن في متجر XBOX-H2-STORE - تفعيل فوري بسعر 2300 ج.م ⚡",
        badges: ["إصدار جديد 🔥", "ألعاب إكس بوكس"],
        image: "https://i.postimg.cc/RZpXvYpJ/380f3806-2db0-4763-9f17-e0b2821bc758.jpg"
    },
    {
        productId: "game-gta6",
        title: "GTA VI - الإصدار الرقمي المسبق",
        subtitle: "احجز نسختك الرسمية الآن وكن أول من يلعب النسخة المنتظرة عالمياً بسعر 3900 ج.م 🚀",
        badges: ["حدث العام 🎮", "حصري"],
        image: "https://i.postimg.cc/DZrr4p6d/the-full-gta-vi-reveal-artwork-directly-from-rockstars-v0-dkj530ewih4c1.png"
    },
    {
        productId: "iptv-12m",
        title: "اشتراك قنوات وسيرفرات IPTV لمدة سنة كاملة",
        subtitle: "أكثر من 8000 قناة ومكتبة أفلام ومسلسلات بجودة 4K وبدون تقطيع بسعر 550 ج.م 📺",
        badges: ["4K جودة", "عرض VIP 👑"],
        image: "https://i.postimg.cc/6qLxSK0h/image-755b78fd.jpg"
    }
];