// ============================================================================
// DUKAN MARKETPLACE — بيانات تجريبية
// Mock Data for Product Form Simulation (Arabic)
// ============================================================================

const LISTING_TYPES = {
    STANDARD: 'standard',
    UNIQUE: 'unique',
    WEIGHTED: 'weighted',
    SERVICE: 'service',
};

// ── Category tree ──
const CATEGORIES = [
    { id: 'cat-electronics', parent_id: null, name: 'إلكترونيات', slug: 'electronics', level: 0, listing_type: 'standard' },
    { id: 'cat-mobile', parent_id: 'cat-electronics', name: 'هواتف محمولة', slug: 'mobile', level: 1, listing_type: null },
    { id: 'cat-laptops', parent_id: 'cat-electronics', name: 'لابتوبات', slug: 'laptops', level: 1, listing_type: null },
    { id: 'cat-printers', parent_id: 'cat-electronics', name: 'طابعات', slug: 'printers', level: 1, listing_type: null },
    { id: 'cat-tv', parent_id: 'cat-electronics', name: 'تلفزيونات', slug: 'tv', level: 1, listing_type: null },

    { id: 'cat-realestate', parent_id: null, name: 'عقارات', slug: 'real-estate', level: 0, listing_type: 'unique' },
    { id: 'cat-apartments', parent_id: 'cat-realestate', name: 'شقق', slug: 'apartments', level: 1, listing_type: null },
    { id: 'cat-lands', parent_id: 'cat-realestate', name: 'أراضي', slug: 'lands', level: 1, listing_type: null },
    { id: 'cat-shops', parent_id: 'cat-realestate', name: 'محلات تجارية', slug: 'shops', level: 1, listing_type: null },

    { id: 'cat-vehicles', parent_id: null, name: 'سيارات', slug: 'vehicles', level: 0, listing_type: 'unique' },
    { id: 'cat-cars', parent_id: 'cat-vehicles', name: 'سيارات', slug: 'cars', level: 1, listing_type: null },

    { id: 'cat-food', parent_id: null, name: 'أغذية', slug: 'food', level: 0, listing_type: 'weighted' },
    { id: 'cat-grains', parent_id: 'cat-food', name: 'حبوب وأرز', slug: 'grains', level: 1, listing_type: null },
    { id: 'cat-oils', parent_id: 'cat-food', name: 'زيوت', slug: 'oils', level: 1, listing_type: null },
    { id: 'cat-vegetables', parent_id: 'cat-food', name: 'خضراوات', slug: 'vegetables', level: 1, listing_type: null },
    { id: 'cat-spices', parent_id: 'cat-food', name: 'بهارات وتوابل', slug: 'spices', level: 1, listing_type: null },

    { id: 'cat-services', parent_id: null, name: 'خدمات', slug: 'services', level: 0, listing_type: 'service' },
    { id: 'cat-repair', parent_id: 'cat-services', name: 'صيانة وإصلاح', slug: 'repair', level: 1, listing_type: null },
    { id: 'cat-delivery', parent_id: 'cat-services', name: 'توصيل', slug: 'delivery', level: 1, listing_type: null },
    { id: 'cat-cleaning', parent_id: 'cat-services', name: 'تنظيف', slug: 'cleaning', level: 1, listing_type: null },
    { id: 'cat-photography', parent_id: 'cat-services', name: 'تصوير', slug: 'photography', level: 1, listing_type: null },
];

// ── Form schemas ──
const FORM_SCHEMAS = {
    'cat-mobile': {
        listing_type: 'standard',
        fields: {
            price: { visible: true, required: true, type: 'fixed' },
            compare_at_price: { visible: true, required: false },
            stock_quantity: { visible: true, required: true, unit: 'قطعة' },
            sku: { visible: true, required: false },
            variants: { visible: true, required: false, hint: 'اختياري: أضف متغيرات للألوان أو السعات المختلفة' },
        },
        attributes: [
            { key: 'brand', label: 'العلامة التجارية', type: 'select', options: ['Samsung', 'Apple', 'Huawei', 'Xiaomi', 'Oppo', 'Realme'], required: true },
            { key: 'model', label: 'الموديل', type: 'text', required: true },
            { key: 'ram', label: 'الذاكرة العشوائية', type: 'select', options: ['2GB', '3GB', '4GB', '6GB', '8GB', '12GB', '16GB'], required: false },
            { key: 'storage', label: 'سعة التخزين', type: 'select', options: ['32GB', '64GB', '128GB', '256GB', '512GB', '1TB'], required: false },
            { key: 'color', label: 'اللون', type: 'text', required: false },
            { key: 'condition', label: 'الحالة', type: 'select', options: ['جديد', 'مستعمل - ممتاز', 'مستعمل - جيد', 'مستعمل - مقبول'], required: true },
            { key: 'warranty', label: 'الضمان', type: 'select', options: ['بدون ضمان', '3 أشهر', '6 أشهر', 'سنة', 'سنتين'], required: false },
        ],
    },
    'cat-laptops': {
        listing_type: 'standard',
        fields: {
            price: { visible: true, required: true, type: 'fixed' },
            compare_at_price: { visible: true, required: false },
            stock_quantity: { visible: true, required: true, unit: 'قطعة' },
            sku: { visible: true, required: false },
            variants: { visible: false },
        },
        attributes: [
            { key: 'brand', label: 'العلامة التجارية', type: 'select', options: ['Dell', 'HP', 'Lenovo', 'Apple', 'Asus', 'Acer', 'MSI', 'Toshiba'], required: true },
            { key: 'processor', label: 'المعالج', type: 'text', required: true },
            { key: 'ram', label: 'الذاكرة العشوائية', type: 'select', options: ['4GB', '8GB', '16GB', '32GB', '64GB'], required: true },
            { key: 'storage', label: 'التخزين', type: 'text', required: true },
            { key: 'screen_size', label: 'حجم الشاشة', type: 'select', options: ['13"', '14"', '15.6"', '16"', '17"'], required: false },
            { key: 'condition', label: 'الحالة', type: 'select', options: ['جديد', 'مستعمل - ممتاز', 'مستعمل - جيد', 'مستعمل - مقبول'], required: true },
        ],
    },
    'cat-printers': {
        listing_type: 'standard',
        fields: {
            price: { visible: true, required: true, type: 'fixed' },
            compare_at_price: { visible: true, required: false },
            stock_quantity: { visible: true, required: true, unit: 'قطعة' },
            sku: { visible: true, required: false },
            variants: { visible: false },
        },
        attributes: [
            { key: 'brand', label: 'العلامة التجارية', type: 'select', options: ['HP', 'Canon', 'Epson', 'Brother', 'Samsung'], required: true },
            { key: 'type', label: 'النوع', type: 'select', options: ['ليزر', 'حبر', 'حراري', 'نقطي'], required: true },
            { key: 'color_print', label: 'طباعة ملونة', type: 'select', options: ['نعم', 'لا - أبيض وأسود فقط'], required: true },
            { key: 'condition', label: 'الحالة', type: 'select', options: ['جديد', 'مستعمل - ممتاز', 'مستعمل - جيد'], required: true },
        ],
    },
    'cat-tv': {
        listing_type: 'standard',
        fields: {
            price: { visible: true, required: true, type: 'fixed' },
            compare_at_price: { visible: true, required: false },
            stock_quantity: { visible: true, required: true, unit: 'قطعة' },
            sku: { visible: false },
            variants: { visible: false },
        },
        attributes: [
            { key: 'brand', label: 'العلامة التجارية', type: 'select', options: ['Samsung', 'LG', 'Sony', 'TCL', 'Hisense', 'Toshiba'], required: true },
            { key: 'screen_size', label: 'حجم الشاشة', type: 'select', options: ['32"', '40"', '43"', '50"', '55"', '65"', '75"'], required: true },
            { key: 'resolution', label: 'الدقة', type: 'select', options: ['HD', 'Full HD', '4K UHD', '8K'], required: true },
            { key: 'smart', label: 'سمارت TV', type: 'select', options: ['نعم', 'لا'], required: true },
            { key: 'condition', label: 'الحالة', type: 'select', options: ['جديد', 'مستعمل - ممتاز', 'مستعمل - جيد', 'مستعمل - مقبول'], required: true },
        ],
    },
    'cat-apartments': {
        listing_type: 'unique',
        fields: {
            price: { visible: true, required: true, type: 'negotiable' },
            price_period: { visible: true, options: ['بيع', 'إيجار شهري', 'إيجار سنوي'] },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: false },
        },
        attributes: [
            { key: 'area_m2', label: 'المساحة', type: 'number', required: true, unit: 'م²' },
            { key: 'rooms', label: 'عدد الغرف', type: 'select', options: ['1', '2', '3', '4', '5', '6+'], required: true },
            { key: 'bathrooms', label: 'عدد الحمامات', type: 'select', options: ['1', '2', '3', '4+'], required: true },
            { key: 'floor', label: 'الطابق', type: 'select', options: ['أرضي', '1', '2', '3', '4', '5', '6+', 'أخير'], required: true },
            { key: 'furnished', label: 'الأثاث', type: 'select', options: ['بدون أثاث', 'نصف مفروشة', 'مفروشة بالكامل'], required: true },
            { key: 'elevator', label: 'مصعد', type: 'select', options: ['نعم', 'لا'], required: false },
            { key: 'heating', label: 'التدفئة', type: 'select', options: ['مركزية', 'فردية', 'بدون'], required: false },
            { key: 'city', label: 'المدينة', type: 'select', options: ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس', 'حماة'], required: true },
            { key: 'neighborhood', label: 'الحي', type: 'text', required: false },
        ],
    },
    'cat-lands': {
        listing_type: 'unique',
        fields: {
            price: { visible: true, required: false, type: 'contact_only' },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: false },
        },
        attributes: [
            { key: 'area_m2', label: 'المساحة', type: 'number', required: true, unit: 'م²' },
            { key: 'zoning', label: 'التصنيف', type: 'select', options: ['سكني', 'تجاري', 'زراعي', 'صناعي'], required: true },
            { key: 'road_access', label: 'الوصول للطريق', type: 'select', options: ['طريق رئيسي', 'طريق فرعي', 'طريق ترابي', 'بدون'], required: false },
            { key: 'city', label: 'المدينة', type: 'select', options: ['دمشق', 'ريف دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس'], required: true },
            { key: 'utilities', label: 'الخدمات', type: 'select', options: ['كاملة', 'كهرباء فقط', 'ماء فقط', 'بدون'], required: false },
            { key: 'ownership_type', label: 'نوع الملكية', type: 'select', options: ['طابو أخضر', 'طابو أحمر', 'حكم محكمة', 'وكالة غير قابلة للعزل'], required: true },
        ],
    },
    'cat-shops': {
        listing_type: 'unique',
        fields: {
            price: { visible: true, required: true, type: 'negotiable' },
            price_period: { visible: true, options: ['بيع', 'إيجار شهري', 'إيجار سنوي', 'خلو'] },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: false },
        },
        attributes: [
            { key: 'area_m2', label: 'المساحة', type: 'number', required: true, unit: 'م²' },
            { key: 'location_type', label: 'نوع الموقع', type: 'select', options: ['شارع رئيسي', 'مول تجاري', 'سوق شعبي', 'شارع فرعي'], required: true },
            { key: 'has_mezzanine', label: 'ميزانين', type: 'select', options: ['نعم', 'لا'], required: false },
            { key: 'city', label: 'المدينة', type: 'select', options: ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس'], required: true },
            { key: 'neighborhood', label: 'الحي / السوق', type: 'text', required: false },
        ],
    },
    'cat-cars': {
        listing_type: 'unique',
        fields: {
            price: { visible: true, required: true, type: 'negotiable' },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: false },
        },
        attributes: [
            { key: 'make', label: 'الشركة المصنعة', type: 'select', options: ['Toyota', 'Hyundai', 'Kia', 'BMW', 'Mercedes', 'Nissan', 'Peugeot', 'Suzuki', 'Chery', 'BYD'], required: true },
            { key: 'model', label: 'الموديل', type: 'text', required: true },
            { key: 'year', label: 'سنة الصنع', type: 'select', options: Array.from({ length: 30 }, (_, i) => String(2026 - i)), required: true },
            { key: 'mileage_km', label: 'الكيلومتراج', type: 'number', required: true, unit: 'كم' },
            { key: 'fuel', label: 'نوع الوقود', type: 'select', options: ['بنزين', 'ديزل', 'هجين', 'كهربائي', 'غاز'], required: true },
            { key: 'transmission', label: 'ناقل الحركة', type: 'select', options: ['أوتوماتيك', 'عادي (يدوي)', 'CVT'], required: true },
            { key: 'color', label: 'اللون', type: 'text', required: false },
            { key: 'condition', label: 'حالة السيارة', type: 'select', options: ['جديدة (0 كم)', 'ممتازة', 'جيدة جداً', 'جيدة', 'تحتاج صيانة', 'حادث (مصلحة)'], required: true },
            { key: 'city', label: 'المدينة', type: 'select', options: ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس', 'حماة'], required: true },
        ],
    },
    'cat-grains': {
        listing_type: 'weighted',
        fields: {
            price: { visible: false },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: true, unit_options: ['غ', 'كغ'], default_unit: 'كغ' },
        },
        attributes: [
            { key: 'origin', label: 'المصدر', type: 'select', options: ['الحسكة', 'دير الزور', 'الرقة', 'حلب', 'مستورد - مصري', 'مستورد - هندي'], required: true },
            { key: 'grain_type', label: 'النوع', type: 'select', options: ['بسمتي', 'مصري', 'أمريكي', 'بني', 'برغل ناعم', 'برغل خشن', 'فريكة', 'عدس أحمر', 'عدس أخضر', 'حمص'], required: true },
            { key: 'organic', label: 'عضوي', type: 'select', options: ['نعم', 'لا'], required: false },
            { key: 'harvest_year', label: 'سنة الحصاد', type: 'select', options: ['2026', '2025', '2024'], required: false },
        ],
    },
    'cat-oils': {
        listing_type: 'weighted',
        fields: {
            price: { visible: false },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: true, unit_options: ['مل', 'لتر'], default_unit: 'مل' },
        },
        attributes: [
            { key: 'oil_type', label: 'نوع الزيت', type: 'select', options: ['زيت زيتون', 'زيت زيتون بكر ممتاز', 'زيت دوار الشمس', 'زيت سمسم', 'زيت حبة البركة'], required: true },
            { key: 'press_method', label: 'طريقة العصر', type: 'select', options: ['عصر بارد', 'عصر حار', 'مكرر'], required: false },
            { key: 'region', label: 'المنطقة', type: 'select', options: ['عفرين', 'إدلب', 'اللاذقية', 'طرطوس', 'حماة', 'مستورد'], required: true },
            { key: 'acidity', label: 'نسبة الحموضة', type: 'select', options: ['أقل من 0.5%', '0.5% - 1%', '1% - 2%', 'أكثر من 2%', 'غير محدد'], required: false },
        ],
    },
    'cat-vegetables': {
        listing_type: 'weighted',
        fields: {
            price: { visible: false },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: true, unit_options: ['غ', 'كغ', 'ربطة', 'حبة'], default_unit: 'كغ' },
        },
        attributes: [
            { key: 'freshness', label: 'الطزاجة', type: 'select', options: ['طازج اليوم', 'طازج (1-2 يوم)', 'مبرّد'], required: true },
            { key: 'source', label: 'المصدر', type: 'select', options: ['مزرعة محلية', 'سوق الهال', 'مستورد'], required: false },
            { key: 'organic', label: 'عضوي', type: 'select', options: ['نعم', 'لا'], required: false },
        ],
    },
    'cat-spices': {
        listing_type: 'weighted',
        fields: {
            price: { visible: false },
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: true, unit_options: ['غ', 'كغ'], default_unit: 'غ' },
        },
        attributes: [
            { key: 'spice_form', label: 'الشكل', type: 'select', options: ['مطحون', 'حب كامل', 'مجفف', 'خليط'], required: true },
            { key: 'origin', label: 'المصدر', type: 'select', options: ['سوري', 'هندي', 'إيراني', 'تركي', 'مغربي'], required: false },
        ],
    },
    'cat-repair': {
        listing_type: 'service',
        fields: {
            price: { visible: true, required: false, type: 'service_pricing' },
            price_options: ['سعر ثابت', 'يبدأ من', 'حسب الفحص'],
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: false, hint: 'أضف الخدمات المختلفة بأسعارها', service_mode: true },
        },
        attributes: [
            { key: 'specialty', label: 'التخصص', type: 'select', options: ['هواتف', 'لابتوبات', 'تلفزيونات', 'طابعات', 'أجهزة منزلية', 'متعدد'], required: true },
            { key: 'warranty_on_repair', label: 'ضمان على الإصلاح', type: 'select', options: ['بدون ضمان', 'أسبوع', 'شهر', '3 أشهر', '6 أشهر'], required: false },
            { key: 'home_service', label: 'خدمة منزلية', type: 'select', options: ['نعم', 'لا - في المحل فقط'], required: true },
            { key: 'city', label: 'المدينة', type: 'select', options: ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس'], required: true },
        ],
    },
    'cat-delivery': {
        listing_type: 'service',
        fields: {
            price: { visible: true, required: false, type: 'service_pricing' },
            price_options: ['سعر ثابت', 'يبدأ من', 'حسب المسافة', 'حسب الوزن'],
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: false, hint: 'أضف خيارات التوصيل المختلفة', service_mode: true },
        },
        attributes: [
            { key: 'vehicle_type', label: 'نوع المركبة', type: 'select', options: ['دراجة نارية', 'سيارة صغيرة', 'فان', 'بيك أب', 'شاحنة'], required: true },
            { key: 'coverage', label: 'نطاق التغطية', type: 'select', options: ['داخل المدينة', 'المدينة والريف', 'بين المحافظات'], required: true },
            { key: 'max_weight', label: 'الوزن الأقصى', type: 'number', required: false, unit: 'كغ' },
            { key: 'same_day', label: 'توصيل نفس اليوم', type: 'select', options: ['نعم', 'لا'], required: false },
            { key: 'city', label: 'المدينة الرئيسية', type: 'select', options: ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس'], required: true },
        ],
    },
    'cat-cleaning': {
        listing_type: 'service',
        fields: {
            price: { visible: true, required: true, type: 'service_pricing' },
            price_options: ['بالساعة', 'بالجلسة', 'اشتراك شهري'],
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: false, hint: 'أضف باقات تنظيف مختلفة', service_mode: true },
        },
        attributes: [
            { key: 'service_type', label: 'نوع الخدمة', type: 'select', options: ['تنظيف منازل', 'تنظيف مكاتب', 'تنظيف بعد البناء', 'تنظيف سجاد', 'غسيل سيارات'], required: true },
            { key: 'team_size', label: 'حجم الفريق', type: 'select', options: ['شخص واحد', 'شخصين', 'فريق (3-5)', 'حسب الطلب'], required: false },
            { key: 'equipment', label: 'المعدات', type: 'select', options: ['نجلب معداتنا', 'معدات الزبون', 'كلاهما متاح'], required: false },
            { key: 'city', label: 'المدينة', type: 'select', options: ['دمشق', 'حلب', 'حمص', 'اللاذقية'], required: true },
        ],
    },
    'cat-photography': {
        listing_type: 'service',
        fields: {
            price: { visible: true, required: true, type: 'service_pricing' },
            price_options: ['بالساعة', 'بالجلسة', 'باقة كاملة'],
            compare_at_price: { visible: false },
            stock_quantity: { visible: false },
            sku: { visible: false },
            variants: { visible: true, required: false, hint: 'أضف باقات التصوير المختلفة', service_mode: true },
        },
        attributes: [
            { key: 'photo_type', label: 'نوع التصوير', type: 'select', options: ['حفلات وأعراس', 'منتجات', 'عقارات', 'بورتريه', 'مناسبات', 'فيديو', 'تصوير جوي (درون)'], required: true },
            { key: 'editing', label: 'المعالجة', type: 'select', options: ['مع معالجة كاملة', 'معالجة أساسية', 'بدون معالجة (خام)'], required: false },
            { key: 'delivery_time', label: 'مدة التسليم', type: 'select', options: ['نفس اليوم', '1-3 أيام', 'أسبوع', 'أسبوعين'], required: false },
            { key: 'city', label: 'المدينة', type: 'select', options: ['دمشق', 'حلب', 'حمص', 'اللاذقية', 'طرطوس'], required: true },
        ],
    },
};

// ══════════════════════════════════════
// SAMPLE PRODUCTS
// ══════════════════════════════════════

const SAMPLE_PRODUCTS = {
    standard: [
        {
            name: 'Samsung Galaxy S23 Ultra',
            description: 'هاتف سامسونج جالكسي S23 ألترا جديد بالكرتونة. شاشة 6.8 إنش، كاميرا 200 ميجابكسل. مع شاحن أصلي وكفالة سنة.',
            category_id: 'cat-mobile',
            price: 1400000, compare_at_price: 1600000, stock_quantity: 5, sku: 'SAM-S23U-BLK-256',
            attributes: { brand: 'Samsung', model: 'Galaxy S23 Ultra', ram: '12GB', storage: '256GB', color: 'أسود', condition: 'جديد', warranty: 'سنة' },
            variants: [
                { label: 'أسود 256GB', price: 1400000, stock: 5 },
                { label: 'أخضر 256GB', price: 1400000, stock: 3 },
                { label: 'أسود 512GB', price: 1650000, stock: 2 },
            ],
            images: ['📱'],
        },
        {
            name: 'لابتوب Dell Inspiron 15 مستعمل',
            description: 'لابتوب ديل مستعمل بحالة ممتازة. استخدام مكتبي 6 أشهر فقط. البطارية ممتازة. سبب البيع: شراء جهاز جديد.',
            category_id: 'cat-laptops',
            price: 850000, compare_at_price: null, stock_quantity: 1, sku: null,
            attributes: { brand: 'Dell', processor: 'Intel i5-1235U', ram: '8GB', storage: '512GB SSD', screen_size: '15.6"', condition: 'مستعمل - ممتاز' },
            variants: [],
            images: ['💻'],
        },
        {
            name: 'طابعة HP LaserJet Pro',
            description: 'طابعة ليزر HP للمكاتب. سرعة 30 صفحة بالدقيقة. مع حبر أصلي ممتلئ. مثالية للمكاتب والمحلات.',
            category_id: 'cat-printers',
            price: 320000, compare_at_price: 380000, stock_quantity: 8, sku: 'HP-LJ-PRO-M404',
            attributes: { brand: 'HP', type: 'ليزر', color_print: 'لا - أبيض وأسود فقط', condition: 'جديد' },
            variants: [],
            images: ['🖨️'],
        },
        {
            name: 'تلفزيون Samsung 55" مستعمل',
            description: 'تلفزيون سامسونج 55 إنش سمارت. مستعمل سنتين، الشاشة نظيفة بدون خدوش. السبب: تحديث لحجم أكبر.',
            category_id: 'cat-tv',
            price: 450000, compare_at_price: null, stock_quantity: 1, sku: null,
            attributes: { brand: 'Samsung', screen_size: '55"', resolution: '4K UHD', smart: 'نعم', condition: 'مستعمل - ممتاز' },
            variants: [],
            images: ['📺'],
        },
    ],

    unique: [
        {
            name: 'شقة 120م² في المزة - دمشق',
            description: 'شقة مطلة على الشارع الرئيسي، طابق ثالث مع مصعد. قريبة من المدارس والخدمات. تدفئة مركزية وموقف سيارات.',
            category_id: 'cat-apartments',
            price: 85000000, negotiable: true, price_period: 'بيع',
            attributes: { area_m2: 120, rooms: '3', bathrooms: '2', floor: '3', furnished: 'نصف مفروشة', elevator: 'نعم', heating: 'مركزية', city: 'دمشق', neighborhood: 'المزة' },
            variants: [], images: ['🏢'],
        },
        {
            // EDGE CASE: price on contact only — no price displayed
            name: 'أرض 500م² سكنية - ريف دمشق',
            description: 'أرض سكنية في منطقة هادئة، طابو أخضر. على شارع فرعي معبد، جميع الخدمات متوفرة. مناسبة لبناء فيلا.',
            category_id: 'cat-lands',
            price: null, negotiable: true, price_mode: 'contact_only',
            attributes: { area_m2: 500, zoning: 'سكني', road_access: 'طريق فرعي', city: 'ريف دمشق', utilities: 'كاملة', ownership_type: 'طابو أخضر' },
            variants: [], images: ['🏗️'],
        },
        {
            // EDGE CASE: rental with monthly price (not sale)
            name: 'محل تجاري للإيجار - شارع الحمرا',
            description: 'محل 45م² على شارع الحمرا الرئيسي. واجهة زجاجية عريضة مع ميزانين 20م². مناسب لمحل ألبسة أو مطعم صغير.',
            category_id: 'cat-shops',
            price: 1500000, negotiable: false, price_period: 'إيجار شهري',
            attributes: { area_m2: 45, location_type: 'شارع رئيسي', has_mezzanine: 'نعم', city: 'دمشق', neighborhood: 'شارع الحمرا' },
            variants: [], images: ['🏪'],
        },
        {
            name: 'Hyundai Tucson 2019',
            description: 'هيونداي توسان 2019 فحص كامل. نظيفة جداً، صيانة دورية في الوكالة. فل كامل مع فتحة سقف.',
            category_id: 'cat-cars',
            price: 45000000, negotiable: true,
            attributes: { make: 'Hyundai', model: 'Tucson', year: '2019', mileage_km: 67000, fuel: 'بنزين', transmission: 'أوتوماتيك', color: 'فضي', condition: 'ممتازة', city: 'دمشق' },
            variants: [], images: ['🚗'],
        },
    ],

    weighted: [
        {
            name: 'أرز بسمتي سوري فاخر',
            description: 'أرز بسمتي من مزارع الحسكة. حبة طويلة، طبخ ممتاز. محصول 2025. مناسب للأوزي والكبسة.',
            category_id: 'cat-grains',
            attributes: { origin: 'الحسكة', grain_type: 'بسمتي', organic: 'لا', harvest_year: '2025' },
            variants: [
                { label: '500 غ', price: 5000, stock: 200, unit: 'غ' },
                { label: '1 كغ', price: 9000, stock: 150, unit: 'كغ' },
                { label: '5 كغ', price: 40000, stock: 50, unit: 'كغ' },
                { label: '25 كغ', price: 180000, stock: 10, unit: 'كغ' },
            ],
            images: ['🌾'],
        },
        {
            name: 'زيت زيتون بكر ممتاز - عفرين',
            description: 'زيت زيتون بكر ممتاز من عفرين. عصر بارد، حموضة أقل من 0.5%. إنتاج عائلي محدود.',
            category_id: 'cat-oils',
            attributes: { oil_type: 'زيت زيتون بكر ممتاز', press_method: 'عصر بارد', region: 'عفرين', acidity: 'أقل من 0.5%' },
            variants: [
                { label: '500 مل', price: 25000, stock: 80, unit: 'مل' },
                { label: '1 لتر', price: 45000, stock: 60, unit: 'لتر' },
                { label: '5 لتر (تنكة)', price: 200000, stock: 20, unit: 'لتر' },
                { label: '16 لتر (تنكة كبيرة)', price: 600000, stock: 5, unit: 'لتر' },
            ],
            images: ['🫒'],
        },
        {
            // EDGE CASE: mixed units — some by kg, some by "ربطة" (bundle)
            name: 'بندورة طازجة',
            description: 'بندورة طازجة من مزارع ريف دمشق. قطف اليوم. مناسبة للسلطة والطبخ.',
            category_id: 'cat-vegetables',
            attributes: { freshness: 'طازج اليوم', source: 'مزرعة محلية', organic: 'لا' },
            variants: [
                { label: '1 كغ', price: 3000, stock: 500, unit: 'كغ' },
                { label: '5 كغ', price: 13000, stock: 100, unit: 'كغ' },
                { label: 'صندوق 20 كغ', price: 45000, stock: 30, unit: 'كغ' },
            ],
            images: ['🍅'],
        },
        {
            // EDGE CASE: very small units (grams) + large bulk (kg)
            name: 'بهارات مشكلة سورية',
            description: 'خليط بهارات سوري تقليدي: كمون، كزبرة، فلفل أسود، بهار حلو، قرفة. مطحون طازج. ممتاز للكبة والمحاشي.',
            category_id: 'cat-spices',
            attributes: { spice_form: 'خليط', origin: 'سوري' },
            variants: [
                { label: '50 غ', price: 2000, stock: 300, unit: 'غ' },
                { label: '100 غ', price: 3500, stock: 200, unit: 'غ' },
                { label: '250 غ', price: 8000, stock: 100, unit: 'غ' },
                { label: '500 غ', price: 14000, stock: 50, unit: 'غ' },
                { label: '1 كغ', price: 25000, stock: 20, unit: 'كغ' },
            ],
            images: ['🌶️'],
        },
    ],

    service: [
        {
            // EDGE CASE: price depends on diagnosis — no upfront price
            name: 'صيانة وإصلاح هواتف',
            description: 'إصلاح جميع أنواع الهواتف: تبديل شاشات، بطاريات، سوفتوير. خبرة 8 سنوات. قطع أصلية ومقلدة حسب الطلب.',
            category_id: 'cat-repair',
            price: null, price_type: 'حسب الفحص',
            attributes: { specialty: 'هواتف', warranty_on_repair: 'شهر', home_service: 'لا - في المحل فقط', city: 'دمشق' },
            variants: [
                { label: 'تبديل شاشة', price: 50000, description: 'يختلف حسب الموديل' },
                { label: 'تبديل بطارية', price: 25000, description: 'يختلف حسب الموديل' },
                { label: 'إصلاح سوفتوير', price: 15000, description: 'فورمات + تنصيب' },
                { label: 'فحص عام', price: 5000, description: 'تشخيص المشكلة' },
            ],
            images: ['🔧'],
        },
        {
            // EDGE CASE: "starts from" pricing — distance-based
            name: 'خدمة توصيل داخل دمشق',
            description: 'توصيل طلبات داخل دمشق وريف دمشق. فان مغلق. نقل بضائع، أثاث صغير، طلبات مطاعم. متوفر يومياً 8ص - 10م.',
            category_id: 'cat-delivery',
            price: 10000, price_type: 'يبدأ من',
            attributes: { vehicle_type: 'فان', coverage: 'المدينة والريف', max_weight: 500, same_day: 'نعم', city: 'دمشق' },
            variants: [
                { label: 'داخل المدينة (حتى 10 كم)', price: 10000 },
                { label: 'ريف دمشق القريب (10-30 كم)', price: 20000 },
                { label: 'ريف دمشق البعيد (30-60 كم)', price: 35000 },
                { label: 'نقل أثاث صغير + عامل', price: 50000 },
            ],
            images: ['🚚'],
        },
        {
            // EDGE CASE: hourly + package + subscription pricing
            name: 'تنظيف منازل ومكاتب',
            description: 'خدمة تنظيف شاملة. فريق مدرب مع جميع المعدات ومواد التنظيف. نتائج مضمونة.',
            category_id: 'cat-cleaning',
            price: 15000, price_type: 'بالساعة',
            attributes: { service_type: 'تنظيف منازل', team_size: 'شخصين', equipment: 'نجلب معداتنا', city: 'دمشق' },
            variants: [
                { label: 'تنظيف عادي (3 ساعات)', price: 45000, description: 'غرفتين + صالون + مطبخ + حمام' },
                { label: 'تنظيف شامل (6 ساعات)', price: 80000, description: 'شقة كاملة مع الخزائن' },
                { label: 'تنظيف بعد بناء', price: 120000, description: 'إزالة غبار + تلميع + تعقيم' },
                { label: 'اشتراك شهري (4 زيارات)', price: 150000, description: 'زيارة أسبوعية 3 ساعات' },
            ],
            images: ['🧹'],
        },
        {
            name: 'تصوير حفلات ومناسبات',
            description: 'تصوير احترافي بكاميرا Canon R5 + إضاءة احترافية. معالجة كاملة وتسليم خلال أسبوع.',
            category_id: 'cat-photography',
            price: 100000, price_type: 'بالجلسة',
            attributes: { photo_type: 'حفلات وأعراس', editing: 'مع معالجة كاملة', delivery_time: 'أسبوع', city: 'دمشق' },
            variants: [
                { label: 'تغطية 3 ساعات', price: 100000, description: '100 صورة معالجة' },
                { label: 'تغطية كاملة (8 ساعات)', price: 250000, description: '300 صورة + فيديو highlights' },
                { label: 'باقة العرس الكاملة', price: 500000, description: 'يومين + ألبوم مطبوع + فيديو كامل' },
                { label: 'تصوير منتجات (10 قطع)', price: 50000, description: 'خلفية بيضاء + 3 زوايا لكل قطعة' },
            ],
            images: ['📷'],
        },
    ],
};

// ══════════════════════════════════════
// Helpers
// ══════════════════════════════════════

function getCategoryById(id) { return CATEGORIES.find(c => c.id === id); }

function getCategoryBreadcrumb(categoryId) {
    const trail = [];
    let current = getCategoryById(categoryId);
    while (current) { trail.unshift(current); current = current.parent_id ? getCategoryById(current.parent_id) : null; }
    return trail;
}

function resolveListingType(categoryId) {
    let current = getCategoryById(categoryId);
    while (current) { if (current.listing_type) return current.listing_type; current = current.parent_id ? getCategoryById(current.parent_id) : null; }
    return 'standard';
}

function getFormSchema(categoryId) {
    let current = getCategoryById(categoryId);
    while (current) { if (FORM_SCHEMAS[current.id]) return FORM_SCHEMAS[current.id]; current = current.parent_id ? getCategoryById(current.parent_id) : null; }
    return null;
}

function formatPrice(amount) {
    if (!amount && amount !== 0) return '—';
    return new Intl.NumberFormat('en-US').format(amount) + ' ل.س';
}