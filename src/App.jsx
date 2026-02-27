import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronRight, Star, Shield, Truck, Package, Heart, X, Check, Menu, Info, ShoppingBag, Box, ChevronLeft, Maximize2, Mail, Phone, MapPin, Clock, CreditCard, Trash2, Globe, Award, Sparkles, Anchor, Settings, Layers } from 'lucide-react';

const COLOR_DESCRIPTIONS = {
  CLASSIC: "Klasszikus és időtálló elegancia",
  STYLE: "Finom hálós szövetek a kiváló légáramlásért",
  LUX: "Fenntartható luxusszövetek és műbőr részletek"
};

const IMAGE_BASE_URL = "https://raw.githubusercontent.com/JollyLlama-code/website/main/public/images";

// Segédfüggvény a fájlnevek generálásához (szóközök cseréje kötőjelre, kisbetűsítés)
const formatName = (str) => str.toLowerCase().replace(/\s+/g, '-');

const PRODUCTS = [
  {
    id: 'smile-5z',
    name: 'SMILE 5Z',
    basePrice: 349900,
    rating: 4.9,
    reviews: 156,
    tagline: 'Minden évszakra. Minden terepre. Korlátok nélkül.',
    description: 'A SMILE 5Z az eddigi legsokoldalúbb babakocsink. Akár a zsúfolt városi utcákon navigál, akár a természetet fedezi fel, a fejlett központi felfüggesztés és a kerekek zökkenőmentes utazást biztosítanak.',
    specs: {
      kor: 'Születéstől - 4 éves korig (22 kg)',
      suly: '13.8 kg',
      meret: '90 x 40 x 57 cm (összecsukva)',
      kosar: '7 kg teherbírás',
    },
    colors: [
      { name: 'Galaxy Black', hex: '#0a0a0a', collection: 'CLASSIC', extraPrice: 0, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0, availableSets: ['alone', 'essential'] },
      { name: 'Mineral Grey', hex: '#71717a', collection: 'STYLE', extraPrice: 0, availableSets: ['alone', 'essential'] },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0, availableSets: ['alone', 'essential'] },
      { name: 'Harbor Blue', hex: '#1e3a8a', collection: 'STYLE', extraPrice: 0, availableSets: ['alone', 'essential'] },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: 15000, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: 15000, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Linen Grey', hex: '#d1d5db', collection: 'LUX', extraPrice: 15000, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Warm Caramel', hex: '#a0522d', collection: 'LUX', extraPrice: 15000, availableSets: ['alone', 'comfort', 'comfort-plus'] }
    ],
    features: ['Központi felfüggesztés', 'Megfordítható ülésegység', 'UPF 50+ extra nagy kupola', 'Papucsbarát fékrendszer'],
    sets: [
      { id: 'alone', name: 'SMILE 5Z', price: 349900, contents: 'Sport babakocsi önmagában' },
      { id: 'essential', name: 'Essential set', price: 364900, contents: 'Sport babakocsi + Esővédő + Szúnyogháló' },
      { id: 'comfort', name: 'Comfort set', price: 429800, contents: 'Sport babakocsi + SMILE 5Z Mózeskosár' },
      { id: 'comfort-plus', name: 'Comfort Plus set', price: 549700, contents: 'Sport babakocsi + Mózeskosár + BABY-SAFE Pro hordozó + Bázistalp' }
    ],
    generalData: [
      "Kiváló minőségű, tartós vázszerkezet",
      "Defektmentes, minden terepen használható kerekek",
      "3M™ Scotchlite™ fényvisszaverő csíkok a jobb láthatóságért",
      "Egykezes, kompakt összecsukási mechanizmus",
      "Állítható tolókar magasság",
      "Nagy méretű, könnyen hozzáférhető bevásárlókosár",
      "Párnázott, 5 pontos biztonsági övrendszer",
      "Könnyen tisztítható, prémium minőségű huzatok"
    ]
  },
  {
    id: 'rio',
    name: 'RIO',
    basePrice: 189900,
    rating: 4.7,
    reviews: 92,
    tagline: 'Stílus és kényelem a városi kalandokhoz.',
    description: 'A RIO a modern szülők igényeire lett tervezve: rendkívül könnyű váz, agilis manőverezhetőség és prémium anyaghasználat jellemzi.',
    specs: {
      kor: '6 hónapos kortól - 22 kg-ig',
      suly: '8.2 kg',
      meret: '75 x 52 x 35 cm (összecsukva)',
      kosar: '5 kg teherbírás',
    },
    colors: [
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0 },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: 10000 },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: 10000 }
    ],
    features: ['Ultrakönnyű váz', 'Egykezes összecsukás', 'Állítható lábtartó', 'Bolygósítható első kerekek'],
    sets: [
      { id: 'alone', name: 'RIO', price: 189900, contents: 'RIO sport babakocsi önmagában' },
      { id: 'essential', name: 'Essential set', price: 199900, contents: 'RIO sport babakocsi + Esővédő' },
      { id: 'comfort', name: 'Comfort set', price: 254800, contents: 'RIO sport babakocsi + RIO Mózeskosár' },
      { id: 'comfort-plus', name: 'Comfort Plus set', price: 344700, contents: 'RIO sport babakocsi + Mózeskosár + BABY-SAFE hordozó' }
    ],
    generalData: [
      "Ultrakönnyű alumínium váz",
      "Városi közlekedésre optimalizált szélesség",
      "Automatikus összecsukás-gátló",
      "Állítható napfénytető betekintő ablakkal",
      "Puha tapintású tolókar borítás",
      "Bolygósítható és fixálható első kerekek",
      "Több fokozatban dönthető háttámla",
      "Könnyen kezelhető központi fék"
    ]
  },
  {
    id: 'flylite',
    name: 'FLYLITE',
    basePrice: 124900,
    rating: 4.8,
    reviews: 74,
    tagline: 'Az utazás szabadsága, súlytalanul.',
    description: 'A FLYLITE a legkönnyebb utazó babakocsink, amely akár a repülőgépek fedélzetére is felvihető.',
    specs: {
      kor: 'Születéstől - 15 kg-ig',
      suly: '5.9 kg',
      meret: '54 x 43 x 20 cm (kézipoggyász)',
      kosar: '3 kg teherbírás',
    },
    colors: [
      { name: 'Carbon Black', hex: '#1a1a1a', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', extraPrice: 0 },
      { name: 'Sage Green', hex: '#8a9a5b', extraPrice: 0 }
    ],
    features: ['Kézipoggyász méret', 'Vállpántos hordozó', 'Dönthető háttámla', 'Légáteresztő szövet'],
    generalData: [
      "IATA szabvány szerinti kézipoggyász méret",
      "Beépített hordozó pánt az egyszerű szállításhoz",
      "Nagy sűrűségű hálós panelek a szellőzésért",
      "Tágas lábtartó a kényelmes alváshoz",
      "Gyorsan kioldható biztonsági csat",
      "Tartozék hordtáska",
      "Extra könnyű vázszerkezet",
      "Párnázott ülésegység"
    ]
  }
];

const ACCESSORIES = [
  {
    id: 'style-bag', name: 'Pelenkázótáska', price: 38900, category: 'Táska', compatible: 'Univerzális', description: 'STÍLUSOS. TÁGAS. INTELLIGENS.',
    colors: [
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0 },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: 0 }
    ]
  },
  {
    id: 'rio-cot', name: 'Mózeskosár – RIO', price: 64900, category: 'Mózeskosár', compatible: 'RIO', description: 'MÉRETBEN KICSI, VÁROSI KALANDOKBAN ÓRIÁSI.',
    colors: [
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0 },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: 0 },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: 0 }
    ]
  },
  {
    id: 'flylite-bag', name: 'Utazótáska – FLYLITE', price: 19900, category: 'Táska', compatible: 'FLYLITE', description: 'SZABAD KEZEK, KÖNNYED UTAZÁS.',
    colors: [{ name: 'Black', hex: '#000000', extraPrice: 0 }]
  },
  {
    id: 'smile-5z-cot', name: 'Mózeskosár – SMILE 5Z', price: 79900, category: 'Mózeskosár', compatible: 'SMILE 5Z', description: 'MINDEN ÉVSZAKBAN. MINDEN TEREPEN. NINCSENEK KORLÁTOK.',
    colors: [
      { name: 'Galaxy Black', hex: '#0a0a0a', collection: 'CLASSIC', extraPrice: 0 },
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Mineral Grey', hex: '#71717a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0 },
      { name: 'Harbor Blue', hex: '#1e3a8a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: 0 },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: 0 },
      { name: 'Linen Grey', hex: '#d1d5db', collection: 'LUX', extraPrice: 0 },
      { name: 'Warm Caramel', hex: '#a0522d', collection: 'LUX', extraPrice: 0 }
    ]
  },
  {
    id: 'stay-cool-canopy', name: 'Stay Cool naptető', price: 14900, category: 'Időjárás védelem', compatible: 'SMILE 5Z / SMILE III / SMILE 4', description: 'BIZTONSÁGOSABB UTAZÁSOK, HOSSZABB ALVÁSOK.',
    colors: [{ name: 'Grey', hex: '#d1d5db', extraPrice: 0 }]
  },
  {
    id: 'stay-cool-liner', name: 'Stay Cool ülésbetét', price: 12500, category: 'Ülésbetét', compatible: 'SMILE 5Z / SMILE 4 / SMILE III', description: 'A LEGMENŐBB SMILE A VÁROSBAN.',
    colors: [{ name: 'Light Grey', hex: '#e5e7eb', extraPrice: 0 }]
  }
];

const CONTACT_INFO = {
  email: 'kid@kid.hu', phone: '+36-30-595-0055', address: '1112 Budapest, Ördögorom út 4.', hours: 'Hétfő - Péntek: 10:00 - 18:00'
};

const formatPrice = (price) => new Intl.NumberFormat('hu-HU').format(price);

// Fallback Ikonok
const StrollerIcon = ({ color, variant = 0 }) => {
  const transforms = ['', 'scaleX(-1)', 'scale(1.2) translateY(-10px)', 'rotate(-5deg) scale(0.9)', 'scale(0.8) rotate(10deg)'];
  const transform = transforms[variant % transforms.length];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full p-12 transition-all duration-700 ease-in-out opacity-80" style={{ transform }}>
      <circle cx="6" cy="19" r="2" /><circle cx="17" cy="19" r="2" /><path d="M17 17h-11v-12h-3" /><path d="M6 8h11l2 5h-13" /><path d="M10 8l1-3h6" />
    </svg>
  );
};

const BagIcon = ({ color, variant = 0 }) => {
  const transforms = ['', 'scale(1.1) rotate(5deg)', 'scaleX(-1)', 'translateY(-20px) scale(1.3)'];
  const transform = transforms[variant % transforms.length];
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full p-12 transition-all duration-700 ease-in-out opacity-80" style={{ transform }}>
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
};

// Intelligens Catalog kép betöltő (főoldalra)
const CatalogImage = ({ product }) => {
  const [imgError, setImgError] = useState(false);
  const firstColor = formatName(product.colors[0].name);
  const firstSet = product.sets ? 'alone' : 'alone';
  const src = `${IMAGE_BASE_URL}/${product.id}-${firstSet}-${firstColor}-1.jpg`;

  if (product.category || imgError) {
    return product.category ? <BagIcon color={product.colors[0]?.hex} /> : <StrollerIcon color={product.colors[0]?.hex} />;
  }
  return <img src={src} onError={() => setImgError(true)} className="w-full h-full object-contain p-4 mix-blend-multiply" alt={product.name} />;
};

const App = () => {
  const [view, setView] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeColor, setActiveColor] = useState(0);
  const [activeSetIdx, setActiveSetIdx] = useState(0);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  
  // Automatikusan generált, érvényes kép linkek
  const [validUrls, setValidUrls] = useState([]);
  
  const [cart, setCart] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', delivery: 'pickup', payment: 'cash_pickup', message: ''
  });

  // Dinamikus, intelligens képkereső Effect
  useEffect(() => {
    let isMounted = true;
    
    const loadImages = async () => {
      // Ha nincs termék, vagy kiegészítőről van szó (ahol még nincs kép), nullázzuk
      if (!selectedProduct || selectedProduct.category) {
        setValidUrls([]);
        return;
      }

      // Képek ürítése töltés közben
      setValidUrls([]);

      const setId = selectedProduct.sets ? (selectedProduct.sets[activeSetIdx]?.id || 'alone') : 'alone';
      const colorName = selectedProduct.colors[activeColor]?.name || '';
      const formattedColor = formatName(colorName);
      
      const validImages = [];
      
      // Megpróbálunk betölteni maximum 15 képet (biztos, ami biztos)
      for (let i = 1; i <= 15; i++) {
        const url = `${IMAGE_BASE_URL}/${selectedProduct.id}-${setId}-${formattedColor}-${i}.jpg`;
        
        const isValid = await new Promise(resolve => {
          const img = new Image();
          img.onload = () => resolve(true);
          img.onerror = () => resolve(false);
          img.src = url;
        });

        if (!isMounted) return;

        if (isValid) {
          validImages.push(url);
        } else {
          // Ha megszakad a sorozat (pl. a 4. kép nincs meg), megállítjuk a keresést
          break; 
        }
      }

      if (isMounted) {
        setValidUrls(validImages);
      }
    };

    loadImages();
    return () => { isMounted = false; };
  }, [selectedProduct, activeSetIdx, activeColor]);

  // Árkalkuláció
  const calculateCurrentPrice = () => {
    if (!selectedProduct) return 0;
    const base = selectedProduct.sets ? selectedProduct.sets[activeSetIdx].price : (selectedProduct.basePrice || selectedProduct.price);
    const isAloneSet = selectedProduct.sets?.[activeSetIdx]?.id === 'alone' || !selectedProduct.sets;
    const extra = isAloneSet ? (selectedProduct.colors[activeColor]?.extraPrice || 0) : 0;
    return base + extra;
  };

  const currentTotalPrice = calculateCurrentPrice();
  const activeSetId = selectedProduct?.sets?.[activeSetIdx]?.id || 'alone';

  const addToCart = () => {
    const item = {
      id: Math.random().toString(36).substr(2, 9),
      productId: selectedProduct.id,
      name: selectedProduct.name,
      setName: selectedProduct.sets ? selectedProduct.sets[activeSetIdx].name : null,
      color: selectedProduct.colors[activeColor].name,
      price: currentTotalPrice,
      quantity: 1,
      image: validUrls[0] || null // Kosárba az első kép kerül be
    };
    setCart([...cart, item]);
    setSelectedProduct(null);
    setView('checkout');
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  const totalPriceInCart = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const navigateTo = (newView) => {
    setView(newView);
    setSelectedProduct(null);
    setOrderComplete(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openProduct = (product) => {
    setSelectedProduct(product);
    setActiveColor(0);
    setActiveSetIdx(0);
    setActiveImageIdx(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsSubmitting(true);
    const orderSummary = cart.map(item => `${item.name} (${item.setName || 'Alap'}), Szín: ${item.color}, Ár: ${formatPrice(item.price)} Ft`).join('\n');
    const payload = {
      ...formData,
      rendeles_osszesito: orderSummary,
      vegosszeg: `${formatPrice(totalPriceInCart)} Ft`,
      szallitasi_mod: formData.delivery === 'pickup' ? 'Személyes átvétel (Budapest)' : 'Ingyenes kiszállítás',
      fizetesi_mod: formData.payment === 'cash_pickup' ? 'Készpénz átvételkor' : 'Utánvét (Készpénz/Kártya)'
    };
    try {
      const response = await fetch("https://formspree.io/f/mlgwolay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (response.ok) {
        setOrderComplete(true);
        setCart([]);
      } else {
        alert("Hiba történt a rendelés során.");
      }
    } catch (err) {
      alert("Hálózati hiba történt.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Navigáció */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <span className="text-2xl font-black tracking-tighter text-blue-900">BRITAX RÖMER</span>
            </div>
            <div className="hidden md:flex items-center gap-10 font-semibold text-sm uppercase tracking-wider text-slate-600">
              <button onClick={() => navigateTo('home')} className={`transition-colors ${view === 'home' && !selectedProduct ? 'text-blue-900' : 'hover:text-blue-900'}`}>Babakocsik</button>
              <button onClick={() => navigateTo('accessories')} className={`transition-colors ${view === 'accessories' && !selectedProduct ? 'text-blue-900' : 'hover:text-blue-900'}`}>Kiegészítők</button>
              <button onClick={() => navigateTo('contact')} className={`transition-colors ${view === 'contact' ? 'text-blue-900' : 'hover:text-blue-900'}`}>Kapcsolat</button>
            </div>
            <div className="flex items-center gap-5">
              <button onClick={() => navigateTo('checkout')} className="relative cursor-pointer group p-2">
                <ShoppingCart className="w-6 h-6 text-slate-700 group-hover:text-blue-900 transition-colors" />
                {cart.length > 0 && <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">{cart.length}</span>}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {selectedProduct ? (
          <div className="max-w-7xl mx-auto px-6 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <button onClick={() => setSelectedProduct(null)} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-900 mb-12 transition-colors uppercase tracking-widest">
              <ChevronLeft className="w-4 h-4" /> Vissza a kínálathoz
            </button>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Dinamikus Galéria */}
              <div className="sticky top-32 space-y-8">
                <div className="aspect-square bg-slate-50 rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-inner group">
                   {validUrls.length > 0 ? (
                     <img src={validUrls[activeImageIdx] || validUrls[0]} className="w-full h-full object-contain p-4 mix-blend-multiply" />
                   ) : (
                     selectedProduct.category ? <BagIcon color={selectedProduct.colors[activeColor]?.hex} variant={activeImageIdx} /> : <StrollerIcon color={selectedProduct.colors[activeColor]?.hex} variant={activeImageIdx} />
                   )}
                </div>
                
                <div className="relative group/gallery">
                  <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
                    {/* Ha van betöltött kép, akkor abból építünk listát, ha nincs (mert kiegészítő vagy nincs még feltöltve), akkor mutatunk 4 ikont */}
                    {(validUrls.length > 0 ? validUrls : [0, 1, 2, 3]).map((item, idx) => (
                      <button 
                        key={idx} 
                        onClick={() => setActiveImageIdx(idx)} 
                        className={`aspect-square w-20 h-20 rounded-2xl bg-slate-50 border-2 flex items-center justify-center cursor-pointer transition-all flex-shrink-0 overflow-hidden ${activeImageIdx === idx ? 'border-blue-600 ring-4 ring-blue-50' : 'border-transparent hover:border-slate-200'}`}
                      >
                        <div className="w-full h-full p-2">
                           {validUrls.length > 0 ? (
                             <img src={item} className="w-full h-full object-contain scale-90 mix-blend-multiply" />
                           ) : (
                             selectedProduct.category ? <BagIcon color={selectedProduct.colors[activeColor]?.hex} variant={idx} /> : <StrollerIcon color={selectedProduct.colors[activeColor]?.hex} variant={idx} />
                           )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h1 className="text-6xl font-black mb-4 tracking-tight">{selectedProduct.name}</h1>
                  <p className="text-3xl font-black text-blue-900 mb-8">{formatPrice(currentTotalPrice)} Ft</p>
                  
                  {selectedProduct.sets && (
                    <div className="mb-10 p-6 bg-slate-50 rounded-[2rem] border border-slate-100">
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2"><Box className="w-4 h-4" /> Válasszon csomagot:</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedProduct.sets.map((set, idx) => {
                          const isSetAlone = set.id === 'alone';
                          const btnExtraPrice = isSetAlone ? (selectedProduct.colors[activeColor]?.extraPrice || 0) : 0;
                          
                          return (
                            <button 
                              key={set.id} 
                              onClick={() => {
                                setActiveSetIdx(idx);
                                setActiveImageIdx(0);
                                const newSetId = set.id;
                                const currentColorData = selectedProduct.colors[activeColor];
                                if (currentColorData?.availableSets && !currentColorData.availableSets.includes(newSetId)) {
                                  const firstAvail = selectedProduct.colors.findIndex(c => !c.availableSets || c.availableSets.includes(newSetId));
                                  setActiveColor(firstAvail >= 0 ? firstAvail : 0);
                                }
                              }} 
                              className={`p-4 rounded-2xl border-2 text-left transition-all ${activeSetIdx === idx ? 'border-blue-600 bg-white shadow-md' : 'border-transparent hover:border-slate-200'}`}
                            >
                              <div className="flex justify-between items-center mb-1">
                                <span className={`font-bold ${activeSetIdx === idx ? 'text-blue-900' : 'text-slate-700'}`}>{set.name}</span>
                                <span className="font-black text-sm">{formatPrice(set.price + btnExtraPrice)} Ft</span>
                              </div>
                              <p className="text-xs text-slate-500">{set.contents}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  <p className="text-slate-500 text-xl leading-relaxed font-medium">{selectedProduct.description}</p>
                </div>
                
                <div className="p-8 bg-slate-50 rounded-[2.5rem]">
                  <h4 className="font-black uppercase tracking-widest text-xs text-slate-400 mb-6 flex justify-between items-center">
                    <span>Szín: <span className="text-slate-900">{selectedProduct.colors[activeColor].name}</span></span>
                    {selectedProduct.colors[activeColor].collection && (
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-[10px]">{selectedProduct.colors[activeColor].collection}</span>
                    )}
                  </h4>
                  
                  <div className="flex flex-wrap gap-4 mb-6">
                    {selectedProduct.colors.map((color, idx) => {
                      const isAvailable = !color.availableSets || color.availableSets.includes(activeSetId);
                      if (!isAvailable) return null;

                      return (
                        <button 
                          key={idx} 
                          onClick={() => {
                            setActiveColor(idx); 
                            setActiveImageIdx(0);
                          }} 
                          className={`w-14 h-14 rounded-full p-1 transition-all ${activeColor === idx ? 'ring-2 ring-blue-900 ring-offset-4' : 'hover:scale-110'}`}
                        >
                          <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color.hex }} />
                        </button>
                      );
                    })}
                  </div>

                  {selectedProduct.colors[activeColor].collection && (
                    <div className="p-4 bg-white/50 border border-blue-50 rounded-2xl animate-in fade-in duration-300">
                      <p className="text-xs text-slate-600 italic">
                        <span className="font-bold text-blue-900 non-italic mr-1">{selectedProduct.colors[activeColor].collection}:</span>
                        {COLOR_DESCRIPTIONS[selectedProduct.colors[activeColor].collection]}
                        {activeSetId === 'alone' && selectedProduct.colors[activeColor].extraPrice > 0 && (
                          <span className="block mt-1 text-blue-900 font-bold"> (+{formatPrice(selectedProduct.colors[activeColor].extraPrice)} Ft felár)</span>
                        )}
                      </p>
                    </div>
                  )}
                </div>

                {selectedProduct.specs && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {Object.entries(selectedProduct.specs).map(([label, value]) => (
                      <div key={label} className="p-6 border border-slate-100 rounded-3xl">
                        <span className="block text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">{label}</span>
                        <span className="text-lg font-bold text-slate-800">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button onClick={addToCart} className="w-full bg-blue-900 text-white py-6 rounded-[2rem] font-black text-lg hover:bg-blue-800 transition-all shadow-2xl shadow-blue-900/30 flex items-center justify-center gap-3 uppercase tracking-widest active:scale-95">
                  <ShoppingCart className="w-6 h-6" /> Kosárba teszem
                </button>
                
                {selectedProduct.generalData && (
                  <div className="pt-20 border-t border-slate-100 space-y-12">
                     <div className="flex items-center gap-3 text-slate-900 font-black uppercase tracking-[0.2em] text-[10px]">
                        <Settings className="w-4 h-4" /> Részletes jellemzők
                     </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                        {selectedProduct.generalData.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 py-2 border-b border-slate-50">
                             <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                             <span className="text-slate-600 text-sm font-medium">{item}</span>
                          </div>
                        ))}
                     </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : view === 'checkout' ? (
          <div className="max-w-7xl mx-auto px-6 py-20">
            {orderComplete ? (
              <div className="text-center py-32 animate-in zoom-in duration-500">
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8"><Check className="w-12 h-12" /></div>
                <h2 className="text-5xl font-black mb-4 uppercase">Köszönjük a rendelést!</h2>
                <p className="text-slate-500 text-xl mb-12">Rendelését sikeresen rögzítettük.</p>
                <button onClick={() => navigateTo('home')} className="bg-blue-900 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-blue-800 transition-all">Vissza a főoldalra</button>
              </div>
            ) : (
              <>
                <h2 className="text-5xl font-black mb-16 uppercase text-center md:text-left">Pénztár</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                  <form onSubmit={handleOrderSubmit} className="space-y-10">
                    <section className="space-y-6">
                      <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-2"><Info className="w-5 h-5 text-blue-600" /> Kapcsolati Adatok</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input required type="text" placeholder="Teljes név" className="p-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600 transition-all" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                        <input required type="email" placeholder="E-mail cím" className="p-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600 transition-all" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                        <input required type="tel" placeholder="Telefonszám" className="p-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600 transition-all" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
                      </div>
                    </section>
                    <section className="space-y-6">
                      <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-2"><Truck className="w-5 h-5 text-blue-600" /> Szállítási Mód</h3>
                      <div className="space-y-3">
                        <label className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer ${formData.delivery === 'pickup' ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 hover:border-slate-200'}`}>
                          <input type="radio" name="delivery" className="mt-1" checked={formData.delivery === 'pickup'} onChange={() => setFormData({...formData, delivery: 'pickup', payment: 'cash_pickup'})} />
                          <div><span className="font-bold block">Személyes átvétel</span><span className="text-sm text-slate-500">1112 Budapest, Ördögorom út 4.</span></div>
                          <span className="ml-auto font-black text-green-600 uppercase text-xs">Ingyenes</span>
                        </label>
                        <label className={`flex items-start gap-4 p-5 rounded-2xl border-2 transition-all cursor-pointer ${formData.delivery === 'shipping' ? 'border-blue-600 bg-blue-50/30' : 'border-slate-100 hover:border-slate-200'}`}>
                          <input type="radio" name="delivery" className="mt-1" checked={formData.delivery === 'shipping'} onChange={() => setFormData({...formData, delivery: 'shipping', payment: 'cod'})} />
                          <div><span className="font-bold block">Házhozszállítás</span><span className="text-sm text-slate-500">Országos kiszállítás futárszolgálattal</span></div>
                          <span className="ml-auto font-black text-green-600 uppercase text-xs">Ingyenes</span>
                        </label>
                      </div>
                      {formData.delivery === 'shipping' && <textarea required placeholder="Pontos szállítási cím" className="w-full p-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600 transition-all mt-4" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})} />}
                    </section>
                    <section className="space-y-6">
                      <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-2"><CreditCard className="w-5 h-5 text-blue-600" /> Fizetési Mód</h3>
                      <div className="space-y-3">
                        {formData.delivery === 'pickup' ? (
                          <label className={`flex items-start gap-4 p-5 rounded-2xl border-2 border-blue-600 bg-blue-50/30 transition-all cursor-pointer`}>
                            <input type="radio" checked readOnly name="payment" className="mt-1" />
                            <div><span className="font-bold block">Személyes átvételkor készpénzben</span><span className="text-sm text-slate-500">Fizetés az üzletben az átvételkor.</span></div>
                          </label>
                        ) : (
                          <label className={`flex items-start gap-4 p-5 rounded-2xl border-2 border-blue-600 bg-blue-50/30 transition-all cursor-pointer`}>
                            <input type="radio" checked readOnly name="payment" className="mt-1" />
                            <div><span className="font-bold block">Postai utánvéttel készpénzben vagy bankkártyával</span><span className="text-sm text-slate-500">Fizetés a futárnál a termék megérkezésekor.</span></div>
                          </label>
                        )}
                      </div>
                    </section>
                    <button disabled={isSubmitting || cart.length === 0} type="submit" className="w-full bg-blue-900 text-white py-6 rounded-[2.5rem] font-black text-xl hover:bg-blue-800 transition-all shadow-2xl shadow-blue-900/30 uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed">{isSubmitting ? 'Küldés...' : 'Rendelés elküldése'}</button>
                  </form>
                  <div className="bg-slate-50 p-10 rounded-[3rem] h-fit sticky top-32">
                    <h3 className="text-2xl font-black uppercase tracking-tight mb-8">Rendelés Összesítő</h3>
                    {cart.length === 0 ? (
                      <div className="text-center py-10"><ShoppingBag className="w-12 h-12 text-slate-200 mx-auto mb-4" /><p className="text-slate-400 font-bold">A kosara jelenleg üres.</p></div>
                    ) : (
                      <div className="space-y-6">
                        {cart.map(item => (
                          <div key={item.id} className="flex gap-4 items-center">
                            <div className="w-20 h-20 bg-white rounded-2xl border border-slate-100 flex items-center justify-center p-2 flex-shrink-0">
                               {item.image ? <img src={item.image} className="w-full h-full object-contain" /> : <Package className="text-slate-200" />}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-black text-sm uppercase leading-tight">{item.name}</h4>
                              <p className="text-xs text-slate-500">{item.setName || 'Alap'}</p>
                              <p className="text-xs text-blue-900 font-bold">Szín: {item.color}</p>
                            </div>
                            <div className="text-right"><p className="font-black text-sm">{formatPrice(item.price)} Ft</p><button onClick={() => removeFromCart(item.id)} className="text-red-500 p-1 hover:bg-red-50 rounded-lg transition-colors mt-1"><Trash2 className="w-4 h-4" /></button></div>
                          </div>
                        ))}
                        <div className="pt-6 border-t border-slate-200 mt-6"><div className="flex justify-between items-center"><span className="text-xl font-black uppercase tracking-widest">Fizetendő</span><span className="text-3xl font-black text-blue-900">{formatPrice(totalPriceInCart)} Ft</span></div></div>
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        ) : view === 'accessories' ? (
          <div className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-5xl font-black tracking-tight mb-4 uppercase">Kiegészítők</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {ACCESSORIES.map((acc) => (
                <div key={acc.id} className="group bg-white rounded-[2.5rem] border border-slate-100 p-8 hover:shadow-2xl transition-all duration-500 cursor-pointer" onClick={() => openProduct(acc)}>
                  <div className="aspect-square bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 relative overflow-hidden">
                    <CatalogImage product={acc} />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-blue-900 transition-colors leading-tight">{acc.name}</h3>
                  <span className="font-black text-blue-900 block mt-2">{formatPrice(acc.price)} Ft</span>
                </div>
              ))}
            </div>
          </div>
        ) : view === 'contact' ? (
          <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8 duration-700">
             <div className="text-center mb-20"><h2 className="text-5xl font-black tracking-tight mb-4 uppercase">Kapcsolat</h2><p className="text-slate-500 text-xl">Látogasson el hozzánk vagy keressen minket bizalommal.</p></div>
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="p-10 bg-slate-50 rounded-[3rem] flex flex-col items-center text-center"><div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6"><Mail /></div><h4 className="text-xl font-bold mb-2">E-mail</h4><a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-900 font-black hover:underline">{CONTACT_INFO.email}</a></div>
                <div className="p-10 bg-slate-50 rounded-[3rem] flex flex-col items-center text-center border-4 border-blue-900/5"><div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-white shadow-sm mb-6"><MapPin /></div><h4 className="text-xl font-bold mb-2">Üzletünk</h4><p className="text-slate-700 font-bold">{CONTACT_INFO.address}</p><p className="text-slate-400 text-sm mt-2">{CONTACT_INFO.hours}</p></div>
                <div className="p-10 bg-slate-50 rounded-[3rem] flex flex-col items-center text-center"><div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6"><Phone /></div><h4 className="text-xl font-bold mb-2">Telefon</h4><a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-900 font-black hover:underline">{CONTACT_INFO.phone}</a></div>
             </div>
             <div className="mt-12 h-96 bg-slate-100 rounded-[3rem] relative overflow-hidden flex items-center justify-center border-2 border-slate-50"><div className="text-center p-8"><MapPin className="w-12 h-12 text-slate-300 mx-auto mb-4" /><p className="text-slate-400 font-bold tracking-widest uppercase text-sm">Budapest, Ördögorom út 4.</p></div></div>
          </div>
        ) : (
          <>
            <section className="relative h-[650px] w-full bg-slate-950 overflow-hidden flex items-center mb-20">
              <div className="absolute inset-0 opacity-50 bg-gradient-to-tr from-blue-950 via-slate-900 to-transparent z-10"></div>
              <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white text-center md:text-left">
                <div className="max-w-3xl">
                  <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9]">PRÉMIUM <br /><span className="text-blue-500 italic">BABAKOCSIK.</span></h1>
                  <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-xl font-light leading-relaxed">Német mérnöki precizitás, amely generációk óta védi a legfontosabb utast az életében.</p>
                  <button onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-500 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20 mx-auto md:mx-0">Kollekció megtekintése <ChevronRight className="w-5 h-5" /></button>
                </div>
              </div>
            </section>
            
            <section id="shop" className="max-w-7xl mx-auto px-6 mb-32">
              <div className="text-center mb-16"><h2 className="text-4xl font-black tracking-tight mb-4 uppercase">Kiváló Minőségű Kínálat</h2><p className="text-slate-500 text-lg">Válassza ki az életstílusához legjobban illő modellt.</p></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="group flex flex-col cursor-pointer" onClick={() => openProduct(product)}>
                    <div className="relative aspect-[3/4] bg-slate-50 rounded-[2rem] flex items-center justify-center overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500">
                       <CatalogImage product={product} />
                    </div>
                    <div className="px-2">
                      <div className="flex justify-between items-center mb-2"><h3 className="text-2xl font-extrabold">{product.name}</h3><span className="font-black text-blue-900">{formatPrice(product.basePrice)} Ft-tól</span></div>
                      <p className="text-slate-500 font-medium">{product.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="bg-slate-950 text-white pt-24 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div><span className="text-2xl font-black tracking-tighter text-white mb-8 block">BRITAX RÖMER</span><p className="text-slate-400 font-medium leading-relaxed">Biztonság és kényelem 1930 óta.</p></div>
            <div>
              <h5 className="font-black uppercase tracking-widest text-sm mb-8 text-blue-500">Oldaltérkép</h5>
              <ul className="text-slate-400 space-y-4 font-medium">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Babakocsik</button></li>
                <li><button onClick={() => navigateTo('accessories')} className="hover:text-white transition-colors">Kiegészítők</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Kapcsolat</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black uppercase tracking-widest text-sm mb-8 text-blue-500">Kapcsolat</h5>
              <ul className="text-slate-400 space-y-4 font-medium">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> {CONTACT_INFO.phone}</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> {CONTACT_INFO.email}</li>
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1" /> {CONTACT_INFO.address}</li>
              </ul>
            </div>
            <div><h5 className="font-black uppercase tracking-widest text-sm mb-8 text-blue-500">Nyitvatartás</h5><p className="text-slate-400 font-medium flex items-center gap-3"><Clock className="w-4 h-4" /> {CONTACT_INFO.hours}</p></div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 border-t border-slate-900 pt-12 text-center md:text-left">© 2024 Britax Römer Premium Store Hungary.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
