// ملف التكوين والمنتجات لمتجر XBOX-H2-STORE

// روابط الصور الأساسية (البانر وصور المنتجات)
const assetImages = {
    mainBanner: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?q=80&w=1000&auto=format&fit=crop"
};

// قائمة المنتجات والأسعار (يمكنك تعديلها وإضافة منتجات جديدة بسهولة)
const allProducts = [
    {
        id: "xbox-ultimate-1m",
        name: "اشتراك Xbox Game Pass Ultimate - شهر واحد",
        category: "xbox-subs",
        price: 180,
        badge: "الأكثر طلباً",
        image: "https://images.unsplash.com/photo-1612287233306-604586d1d78f?q=80&w=600&auto=format&fit=crop",
        tag: "XBOX ULTIMATE",
        desc: "اشتراك رسمي يتيح لك اللعب أونلاين ومكتبة ضخمة تضم مئات الألعاب الفورية."
    },
    {
        id: "xbox-ultimate-3m",
        name: "اشتراك Xbox Game Pass Ultimate - 3 أشهر",
        category: "xbox-subs",
        price: 450,
        badge: "توفير مميز",
        image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=600&auto=format&fit=crop",
        tag: "XBOX ULTIMATE",
        desc: "اشتراك لمدة ثلاثة أشهر كاملة مع تحديثات مكتبة الألعاب المستمرة وتخفيضات حصرية."
    },
    {
        id: "ea-play-1y",
        name: "اشتراك EA Play - سنة كاملة",
        category: "xbox-subs",
        price: 600,
        badge: "عروض الرياضة",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
        tag: "EA PLAY",
        desc: "استمتع بألعاب EA الرياضية الشهيرة (FIFA/FC, Battlefield, Need for Speed) لمدة سنة كاملة."
    },
    {
        id: "game-gta6",
        name: "لعبة GTA VI (حجز مسبق / طلب مسبق)",
        category: "xbox-games",
        price: 3200,
        badge: "ترند العام",
        image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=600&auto=format&fit=crop",
        tag: "XBOX SERIES X/S",
        desc: "النسخة الرقمية الرسمية للعبة المنتظرة بشغف مع تسليم فور صدورها مباشرة."
    },
    {
        id: "game-fc25",
        name: "لعبة EA Sports FC 26 (Xbox)",
        category: "xbox-games",
        price: 1850,
        badge: "أحدث إصدار",
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop",
        tag: "XBOX ONE / SERIES",
        desc: "لعبة كرة القدم الأشهر مع تحديثات الفرق والمواسم الجديدة كلياً."
    },
    {
        id: "card-usd-10",
        name: "بطاقة هدايا Xbox Store - بقيمة 10 دولار",
        category: "giftcards",
        price: 550,
        badge: "شحن رصيد",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
        tag: "USA GIFT CARD",
        desc: "كود رقمي أصلي لشحن رصيد الحساب الأمريكي وشراء الإضافات والألعاب."
    },
    {
        id: "psn-card-20",
        name: "بطاقة بلس / متجر PlayStation - 20 دولار",
        category: "playstation",
        price: 1100,
        badge: "قسم بلايستيشن",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=600&auto=format&fit=crop",
        tag: "PLAYSTATION",
        desc: "شحن رصيد متجر بلايستيشن أو تفعيل باقات بلس للألعاب الجماعية."
    },
    {
        id: "steam-wallet-10",
        name: "بطاقة ستيم Steam Wallet - 10 دولار",
        category: "steam",
        price: 560,
        badge: "تخفيضات ستيم",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=600&auto=format&fit=crop",
        tag: "STEAM PC",
        desc: "شحن محفظة ستيم لحسابك الشخصي على الكمبيوتر لشراء الألعاب والخصومات."
    },
    {
        id: "iptv-1y",
        name: "اشتراك IPTV ترفيهي ورياضي - سنة كاملة",
        category: "iptv",
        price: 400,
        badge: "بث مباشر",
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=600&auto=format&fit=crop",
        tag: "IPTV STREAMING",
        desc: "آلاف القنوات الرياضية والترفيهية العالمية والمحلية بدون تقطيع بجودات مختلفة."
    }
];