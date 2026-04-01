import React, { useState, useEffect } from 'react';
import { ShoppingCart, ChevronRight, Star, Shield, Truck, Package, Heart, X, Check, Menu, Info, ShoppingBag, Box, ChevronLeft, Maximize2, Mail, Phone, MapPin, Clock, CreditCard, Trash2, Globe, Award, Sparkles, Anchor, Settings, Layers, ChevronDown, ChevronUp, FileText, ListChecks } from 'lucide-react';

const COLOR_DESCRIPTIONS = {
  CLASSIC: "Klasszikus és időtálló elegancia",
  STYLE: "Finom hálós szövetek a kiváló légáramlásért",
  LUX: "Fenntartható luxusszövetek és műbőr részletek"
};

const BABY_SAFE_CORE_COLORS = [
  { name: 'Space Black', hex: '#111111' },
  { name: 'Ocean', hex: '#164e63' },
  { name: 'Chai', hex: '#d6d3d1' },
  { name: 'Midnight Grey', hex: '#374151' },
  { name: 'Frost Grey', hex: '#9ca3af' }
];

const IMAGE_BASE_URL = "/images";

const formatName = (str) => str.toLowerCase().replace(/\s+/g, '-');

const PRODUCTS = [
  {
    id: 'smile-5z',
    name: 'Britax Römer SMILE 5Z',
    basePrice: 272990,
    rating: 4.9,
    reviews: 156,
    tagline: 'Minden évszakra. Minden terepre. Korlátok nélkül.',
    description: 'A Britax Römer SMILE 5Z az eddigi legsokoldalúbb babakocsink. Akár a zsúfolt városi utcákon navigál, akár a természetet fedezi fel, a fejlett központi felfüggesztés és a kerekek zökkenőmentes utazást biztosítanak. Travel system: mózeskosárral vagy babahordozóval (Römer Baby-Safe Pro, 3 i-Size, 5Z2) már születéstől használható (a hordozó és mózes külön vásárolható). 2023-ban RedDot Design győztes modell.',
    features: [
      {
        title: 'KALAND MINDEN ÉVSZAKBAN',
        description: 'Egyik percben meleg és napos, a másikban hideg és esős idő? A SMILE 5Z-vel minden időjárási körülményre felkészülhet. Az UPF 50+ napellenző megbízható védelmet nyújt a napsütés ellen, míg a szellőzőablakok segítségével szabályozhatja a hőmérsékletet, friss levegőt biztosítva gyermekének. Ugyanakkor az extra nagy kupola és a szuperpuha, meleg bélés megvédi a babát a hidegtől, a széltől és az esőtől. Ráadásul a SMILE 5Z rendkívül stílusos is – így Ön mindig ízlésesen jelenhet meg.',
        mediaType: 'image',
        mediaSrc: '/images/smile-5z-feature-01.jpg'
      },
      {
        title: 'UTAZÁS MINDEN TEREPEN',
        description: 'Macskaköves utcákon haladna, vagy erdei ösvényen zötykölődne végig? Ne aggódjon – a SMILE 5Z fejlett központi felfüggesztése és kiegyensúlyozott első kerekei sima utazást biztosítanak gyermekének. Városi környezetben közlekedik? A keskeny kialakítás és a rendkívül rugalmas, forgatható első kerekek révén könnyedén manőverezhet a szűk helyeken is. Ráadásul a defektmentes, strapabíró kerekeknek köszönhetően a leeresztett gumiabroncsokkal sem kell többé bajlódnia.',
        mediaType: 'video',
        mediaSrc: 'https://www.youtube.com/embed/iNvOWxw2yG0'
      },
      {
        title: 'EGYÜTT NŐ GYERMEKÉVEL',
        description: 'A gyermekek gyorsan nőnek, ezért a SMILE 5Z is együtt nő velük – születéstől egészen 22 kg-ig (körülbelül 4 éves korig). A mózeskosár, a babahordozó és a sportülés között könnyedén válthat, így gyermeke mindig a lehető legnagyobb kényelemben utazhat, és az utazórendszer hosszú távon is kiszolgálja Önöket. Ráadásul a BABY-SAFE PRO* babahordozó rögzítéséhez szükséges adapterek már a csomag részét képezik. Egyszerű, ugye?\n\n*Az adapterek a BABY-SAFE 3 i-SIZE babahordozóval is kompatibilisek.',
        mediaType: 'image',
        mediaSrc: '/images/smile-5z-feature-02.gif'
      }
    ],
    specs: {
      'Életkor': 'Születéstől 4 éves korig',
      'Max. teherbírás': '29 kg (Ülés: 22 kg, Kosár: 7 kg)',
      'Összsúly': '13,8 kg (Váz: 9 kg, Ülés: 4,8 kg)',
      'Nyitva (Ma x Sz x Mé)': '112 x 57 x 97,7 cm',
      'Csukva üléssel (Ma x Sz x Mé)': '90 x 57 x 40 cm',
      'Csukva csak váz (Ma x Sz x Mé)': '84 x 57 x 27 cm',
      'Ülőfelület (Sz x Mé)': '30 x 23 cm',
      'Háttámla (Ma x Sz)': '48 x 23 cm',
      'Tolókar magassága': '80 - 113 cm',
      'Kerekek (Első / Hátsó)': 'Ø 19 cm / Ø 28 cm',
      'Szabvány': 'EN 1888: 2018-2'
    },
    colors: [
      { name: 'Galaxy Black', hex: '#0a0a0a', collection: 'CLASSIC', extraPrice: { alone: 0, essential: 0, comfort: 0, 'comfort-plus': 0 }, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: { alone: 0, essential: 0, comfort: 0, 'comfort-plus': 0 }, availableSets: ['alone', 'essential'] },
      { name: 'Mineral Grey', hex: '#71717a', collection: 'STYLE', extraPrice: { alone: 0, essential: 0, comfort: -95000, 'comfort-plus': 0 }, availableSets: ['alone', 'essential', 'comfort'] },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: { alone: 0, essential: 0, comfort: -95000, 'comfort-plus': 0 }, availableSets: ['alone', 'essential', 'comfort'] },
      { name: 'Harbor Blue', hex: '#1e3a8a', collection: 'STYLE', extraPrice: { alone: 0, essential: 0, comfort: 0, 'comfort-plus': 0 }, availableSets: ['alone', 'essential'] },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: { alone: 23000, essential: 23000, comfort: 72000, 'comfort-plus': 70700 }, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: { alone: 23000, essential: 23000, comfort: 72000, 'comfort-plus': 70700 }, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Linen Grey', hex: '#d1d5db', collection: 'LUX', extraPrice: { alone: 23000, essential: 23000, comfort: 72000, 'comfort-plus': 70700 }, availableSets: ['alone', 'comfort', 'comfort-plus'] },
      { name: 'Warm Caramel', hex: '#a0522d', collection: 'LUX', extraPrice: { alone: 23000, essential: 23000, comfort: 72000, 'comfort-plus': 70700 }, availableSets: ['alone', 'comfort', 'comfort-plus'] }
    ],
    sets: [
      { id: 'alone', name: 'Britax Römer SMILE 5Z', price: 272990, contents: 'Babakocsi önmagában', imageIndex: 0 },
      { id: 'essential', name: 'Essential set', price: 272990, originalPrice: 381990, contents: 'Babakocsi + SMILE 5Z Mózeskosár', imageIndex: 1 },
      { id: 'comfort', name: 'Comfort set', price: 476990, originalPrice: 516980, contents: 'Babakocsi + SMILE 5Z Mózeskosár + BABY-SAFE Pro hordozó', imageIndex: 2 },
      { id: 'comfort-plus', name: 'Comfort Plus set', price: 596990, contents: 'Babakocsi + SMILE 5Z Mózeskosár + BABY-SAFE Pro hordozó + Bázistalp', imageIndex: 3 }
    ],
    generalData: [
      "Menetirány szerint és háttal is beszerelhető, megfordítható sportülés",
      "Keskeny kialakítás (57 cm) - kényelmesen elfér a szűk folyosókon és ajtókon",
      "Központi és első kerék rugózás az egyenetlen terepen történő utazáshoz",
      "Defektbiztos, habbal töltött műanyag kerekek",
      "Bolygósítható és rögzíthető első kerekek",
      "Könnyen, egy kézzel összecsukható, csukva marad és megáll önmagában",
      "Lapos fekvőpozíció és fokozatmentesen állítható háttámla",
      "Állítható lábtartó (kb. 23 cm) az optimális fekvőpozícióhoz",
      "Extra nagy méretű kupola UV védelemmel és óriási szellőzőablakkal",
      "5 pontos, egyszerűen állítható biztonsági öv kényelmes vállpárnákkal",
      "Bőrhatású, állítható tolókar és oldalra kihajtható párnázott karfa",
      "Lábfék indikátorral, fentről kioldható (a cipő tiszta marad)",
      "Fényvisszaverő csíkok a sötétben való jobb láthatóságért",
      "Extra nagy bevásárlókosár",
      "Könnyen eltávolítható huzat (30 fokon, kímélő programon mosható)"
    ]
  },
  {
    id: 'rio',
    name: 'Britax Römer RIO',
    basePrice: 169990,
    rating: 4.7,
    reviews: 92,
    tagline: 'Stílus és kényelem a városi kalandokhoz.',
    description: 'A Britax Römer RIO a modern szülők igényeire lett tervezve: rendkívül könnyű váz, agilis manőverezhetőség és prémium anyaghasználat jellemzi. Travel system: mózeskosárral vagy babahordozóval (Römer Baby-Safe Pro) már születéstől használható (a termékeket külön kell megvásárolni!).',
    features: [
      {
        title: 'ÉLVEZZE A VÁROSI ÉLETSTÍLUST',
        description: 'Sétáljon végig a szűk utcákon a legkompaktabb utazó rendszerünkkel: mindössze 55 cm széles és szuperkönnyű, csupán 7 kg (10 kg a sportüléssel együtt), az egyszerűen kezelhető RIO tökéletesen illeszkedik dinamikus városi életstílusához. Induljon a helyi bisztróba, vagy látogasson meg barátokat a város másik felén! Helyet kell spórolnia? Csak egy kézzel összecsukhatja a RIO-t, majd könnyedén felemelheti a hordozófogantyúval, hogy könnyedén boldoguljon a lépcsőkkel vagy a metróval.',
        mediaType: 'image',
        mediaSrc: '/images/rio-feature-01.jpg'
      },
      {
        title: 'KÖNNYED MEGOLDÁS A VÁROSI MINDENNAPOKRA',
        description: 'Szeresse a város minden utcáját: a bolygókerekek és a könnyű, kompakt kialakítás lehetővé teszik, hogy a RIO-t olyan könnyedén tolhassa, hogy még egy csokor virágot is vihet a kezében. Ha vásárolni megy, akár 5 kg élelmiszert és babaápolási kelléket is tárolhat az egyszerűen hozzáférhető kosárban. Amikor a kicsi készen áll, hogy felfedezze a város zsongását, a RIO szuper rugalmas, így könnyedén válthat a mózeskosár, a babahordozó és a sportülés között (az adaptereket mellékeltük).',
        mediaType: 'video',
        mediaSrc: 'https://www.youtube.com/embed/QkjnzHTWrYo'
      },
      {
        title: 'KOMPAKT KIALAKÍTÁS, MAXIMÁLIS KÉNYELEM',
        description: 'Válassza az opcionálisan elérhető mózeskosarat a maximális kényelemért, vagy döntsön az ergonomikus kialakítású babahordozó mellett – mindkét megoldás teljes körű alátámasztást nyújt gyermekének. A szellőzőablakok révén biztosíthatja a megfelelő légáramlást, a nagy méretű kupola pedig hatékonyan óvja a napfénytől. Elérkezett az alvás ideje? Döntse hátra a hordozót teljesen vízszintes helyzetbe, és válassza a LUX változatot, amely még puhább, párnázott betéttel teszi még komfortosabbá az utazást. És ami még ennél is több: a RIO minden kerékre kiterjedő felfüggesztése és defektmentes kerekei sima, zökkenőmentes haladást biztosítanak, akár macskaköves utcákon is.',
        mediaType: 'image',
        mediaSrc: '/images/rio-feature-02.jpg'
      }
    ],
    specs: {
      'Életkor': 'Születéstől 4 éves korig',
      'Max. teherbírás': '27 kg (Ülés: 22 kg, Kosár: 5 kg)',
      'Összsúly': '10 kg (Váz: 7 kg)',
      'Nyitva (Ma x Sz x Mé)': '110 x 55 x 93 cm',
      'Csukva üléssel (Ma x Sz x Mé)': '78 x 55 x 32 cm',
      'Ülőfelület (Sz x Mé)': '32 x 23 cm',
      'Háttámla hossza': 'kb. 50 cm',
      'Tolókar magassága': '98 - 110 cm',
      'Kerekek (Első / Hátsó)': 'Ø 14 cm / Ø 19 cm',
      'Szabvány': 'EN 1888-2:2018, +A1:2022'
    },
    colors: [
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: { alone: 0, essential: 0, comfort: 0, 'comfort-plus': 0 } },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: { alone: 0, essential: 0, comfort: 0, 'comfort-plus': 0 } },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: { alone: 15000, essential: 25000, comfort: 38000, 'comfort-plus': 32500 } },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: { alone: 15000, essential: 25000, comfort: 38000, 'comfort-plus': 32500 } }
    ],
    sets: [
      { id: 'alone', name: 'Britax Römer RIO', price: 169990, contents: 'Babakocsi önmagában', imageIndex: 0 },
      { id: 'essential', name: 'Essential set', price: 268990, originalPrice: 388970, contents: 'Babakocsi + RIO Mózeskosár + Baby-Safe Core Hordozó + Bázistalp', imageIndex: 1 },
      { id: 'comfort', name: 'Comfort set', price: 383990, contents: 'Babakocsi + RIO Mózeskosár + BABY-SAFE Pro Hordozó', imageIndex: 2 },
      { id: 'comfort-plus', name: 'Comfort Plus set', price: 504990, contents: 'Babakocsi + RIO Mózeskosár + BABY-SAFE Pro hordozó + Bázistalp', imageIndex: 3 }
    ],
    generalData: [
      "Tartozékok: adapter mózeskosárhoz, adapter babahordozóhoz, pohártartó",
      "Menetirány szerint és háttal is beszerelhető, megfordítható sportülés",
      "Könnyű és kompakt, keskeny kialakítás (55 cm) - minden ajtón átfér",
      "Összkerék-felfüggesztés az egyenetlen terepen történő kényelmes utazáshoz",
      "Defektbiztos, habbal töltött műanyag kerekek",
      "Bolygósítható és rögzíthető első kerekek",
      "Könnyen, egy kézzel összecsukható, csukva marad és megáll önmagában",
      "Lapos fekvőpozíció és fokozatmentesen állítható háttámla",
      "Állítható lábtartó (kb. 19 cm) az optimális fekvőpozíhoz",
      "Extra nagy méretű kupola UV védelemmel és óriási szellőzőablakkal",
      "5 pontos, egyszerűen állítható biztonsági öv kényelmes vállpárnákkal",
      "Teleszkópos, állítható magasságú bőrhatású tolókar",
      "Bőrhatású, oldalra kihajtható párnázott karfa",
      "Lábfék fentről kioldható (a cipő tiszta marad)",
      "Extra nagy bevásárlókosár (max. 5 kg teherbírás)",
      "Könnyen eltávolítható huzat (30 fokon, kímélő programon mosható)"
    ]
  },
  {
    id: 'flylite',
    name: 'Britax Römer FLYLITE',
    basePrice: 127990,
    originalPrice: 149990,
    badge: 'AKCIÓ',
    rating: 4.8,
    reviews: 74,
    tagline: 'Az utazás szabadsága, súlytalanul.',
    description: 'A Britax Römer FLYLITE a legkönnyebb utazó babakocsink, amely akár a repülőgépek fedélzetére is felvihető.',
    features: [
      {
        title: 'MINDIG KÉSZEN MINDEN ÚTRA',
        description: 'Mindig indulásra kész: az egykezes automata összecsukással a FLYLITE kompakt, összecsukva önállóan megáll, és IATA-kézipoggyász kompatibilis. Legyen szó hétvégi kiruccanásról, városnézésről vagy családlátogatásról – a FLYLITE stresszmentes útitárs. A tágas, 6 kg-ig terhelhető kosárban minden kéznél van, a gyors összecsukás pedig megkönnyíti az utazást a check-in-től a leszállásig. (Utazás előtt mindig ellenőrizze a légitársaságnál, mert a felső poggyásztartó mérete eltérő lehet.)',
        mediaType: 'image',
        mediaSrc: '/images/flylite-feature-01.jpg'
      },
      {
        title: 'EXTRA KÉNYELEM ÚTKÖZBEN',
        description: 'Bárhová is vezeti útja, a FLYLITE biztosítja a kényelmet. Az extra nagy, kihúzható napellenző szellőzőablakkal védi gyermekét a naptól és az enyhe esőtől, miközben friss levegőt enged be. A háttámla szellőzése hűsítő, légies komfortot nyújt a melegebb napokon, a mellékelt puha ülőbetét pedig minden utat különösen kényelmessé tesz. A rugózás és a forgatható kerekek révén minden séta könnyed és elegáns élménnyé válik – legyen szó parkról, városi utcákról vagy távoli úti célokról.',
        mediaType: 'image',
        mediaSrc: '/images/flylite-feature-02.jpg'
      },
      {
        title: 'ALKALMAZKODIK MINDEN KALANDHOZ',
        description: 'Nincs két egyforma út – a FLYLITE minden pillanathoz alkalmazkodik. Akár aludni szeretne a gyermek, akár ülve szeretné nézni a világot, a fokozatmentes háttámla-állítás és az állítható lábtartó megkönnyíti a megfelelő pozíció megtalálását. Az egykezes háttámla-állítás lehetővé teszi a gyors beállítást útközben, a levehető karfa pedig egyszerű ki- és beszállást biztosít. Az 5 pontos biztonsági övnek köszönhetően a gyermek mindig biztonságosan és kényelmesen utazik.',
        mediaType: 'image',
        mediaSrc: '/images/flylite-feature-03.jpg'
      },
      {
        title: 'MINDEN, AMIRE SZÜKSÉGE VAN, AZ ELSŐ PILLANATTÓL',
        description: 'Az újszülöttel való utazás gyakran kihívásokkal jár, ezért könnyítse meg magának az indulást: legyen minden kéznél már az első pillanattól. A FLYLITE teljes felszereltséggel érkezik, puha betéttel, karfával és pohártartóval. Minden, amire a gondtalan és kényelmes utazáshoz szüksége van, már a dobozból kivéve rendelkezésére áll.',
        mediaType: 'image',
        mediaSrc: '/images/flylite-feature-04.jpg'
      }
    ],
    specs: {
      'Életkor': '6 hónapos kortól kb. 4 éves korig',
      'Max. teherbírás': '28 kg (Ülés: 22 kg, Kosár: 6 kg)',
      'Összsúly': '7,1 kg (Váz: 6,9 kg)',
      'Nyitva (Ma x Sz x Mé)': '103 x 45 x 78 cm',
      'Csukva (Ma x Sz x Mé)': '56 x 45 x 25 cm',
      'Ülőfelület (Sz x Mé)': '32 x 23 cm',
      'Háttámla hossza': '48 cm',
      'Tolókar magassága': 'kb. 103 cm',
      'Kerekek (Első / Hátsó)': 'Ø 14 cm / Ø 16,5 cm',
      'Szabvány': 'EN 1888-2:2018, +A1:2022'
    },
    colors: [
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0 },
      { name: 'Sage Green', hex: '#8a9a5b', collection: 'STYLE', extraPrice: 0 }
    ],
    generalData: [
      "Tartozékok: Pohártartó, Karfa, Ülésbetét",
      "Menetirány szerinti sportülés",
      "Extra könnyű és kompakt (45 cm széles) - minden ajtón átfér",
      "Könnyen, egy kézzel összecsukható - nagyon kis helyet foglal",
      "Csukva marad, és megáll önmagában",
      "Összkerék-felfüggesztés az egyenetlen terepen történő utazáshoz",
      "Defektbiztos, habbal töltött műanyag kerekek",
      "Bolygósítható és rögzíthető első kerekek",
      "Lapos fekvőpozíció és fokozatmentesen állítható háttámla",
      "Állítható lábtartó (kb. 16 cm) az optimális fekvőpozícióhoz",
      "Ülésbetét a még több kényelemért",
      "Extra nagy méretű kupola UV védelemmel és óriási szellőzőablakkal",
      "5 pontos, egyszerűen állítható biztonsági öv kényelmes vállpárnákkal",
      "Bőrhatású tolókar (magassága nem állítható)",
      "Bőrhatású, oldalra kihajtható párnázott karfa",
      "Lábfék fentről kioldható (a cipő tiszta marad)",
      "Bevásárlókosár (max. 6 kg teherbírás)"
    ]
  }
];

const ACCESSORIES = [
  {
    id: 'flylite-bag', 
    name: 'Britax Römer FLYLITE Utazótáska', 
    price: 29990, 
    category: 'Táska', 
    compatible: 'FLYLITE', 
    description: 'Kifejezetten utazáshoz tervezve, a Britax Römer FLYLITE utazótáska minden utazást még könnyedebbé tesz. Puha, párnázott és állítható pántjaival kényelmesen viselhető a háton, így a kezek szabadon maradnak, hogy a legfontosabb dolgokra koncentrálhasson. Könnyű és mosható, védi a babakocsit útközben, és minden utazást rugalmasabbá tesz.',
    colors: [
      { name: 'Black', hex: '#000000', extraPrice: 0 }
    ]
  },
  {
    id: 'rio-cot', 
    name: 'Britax Römer RIO Mózeskosár', 
    price: 99000, 
    category: 'Mózeskosár', 
    compatible: 'RIO', 
    description: 'Tartsa gyermekét közel magához, és válassza a gerincének legmegfelelőbb megoldást – a Britax Römer RIO magasra szerelt, puha párnázottságú mózeskosarában a baba vízszintesen fekhet, miközben a napernyő alatt hűvösben marad. Kánikulában nyissa ki a panoráma szellőző ablakokat, hogy még hűvösebb utazást biztosítson. Ha gyermekét kényelmesen elhelyezte, könnyedén eltávolíthatja a kosarat az vázról, és egy kézzel viheti, hogy ő tovább pihenhessen, Ön pedig szabadon végezheti el a többi szülői teendőt.',
    colors: [
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0 },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: 10000 },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: 10000 }
    ]
  },
  {
    id: 'smile-5z-cot', 
    name: 'Britax Römer SMILE 5Z Mózeskosár', 
    price: 109000, 
    category: 'Mózeskosár', 
    compatible: 'SMILE 5Z', 
    description: 'Nemcsak az újszülötteknek van szükségük sok alvásra – ezért a tágas, lapos fekvőhelyzetet biztosító Britax Römer SMILE 5Z mózeskosár minden évszakban gondoskodik gyermeke kényelméről és biztonságáról, egészen addig, amíg el nem éri a 9 kg-os testsúlyt, vagy el nem kezd átfordulni. Puha és ölelő, ez a leghatékonyabb és legegészségesebb megoldás a hosszú közös sétákhoz. A cipzáras lábzsák hidegebb időben is melegen tartja a babát, és megkönnyíti a ki- és beemelést, míg a panoráma szellőzőablak lehetővé teszi, hogy a kicsi szemlélődjön, és élvezze a tavaszi és nyári lágy szellőket.',
    colors: [
      { name: 'Space Black', hex: '#0a0a0a', collection: 'CLASSIC', extraPrice: 0 },
      { name: 'Carbon Black', hex: '#1a1a1a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Harbor Blue', hex: '#1e3a8a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Mineral Grey', hex: '#71717a', collection: 'STYLE', extraPrice: 0 },
      { name: 'Teak', hex: '#4d3a2b', collection: 'STYLE', extraPrice: 0 },
      { name: 'Linen Grey', hex: '#d1d5db', collection: 'LUX', extraPrice: 23000 },
      { name: 'Soft Taupe', hex: '#b5a695', collection: 'LUX', extraPrice: 23000 },
      { name: 'Urban Olive', hex: '#4b5320', collection: 'LUX', extraPrice: 23000 },
      { name: 'Warm Caramel', hex: '#a0522d', collection: 'LUX', extraPrice: 23000 }
    ]
  }
];

const CONTACT_INFO = {
  email: 'kid@kid.hu', phone: '+36-30-595-0055', address: '1112 Budapest, Ördögorom út 4.', hours: 'Hétfő - Péntek: 10:00 - 19:00, Szombat: 10:00 - 17:00'
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
  const src = `${IMAGE_BASE_URL}/${product.id}-${firstSet}-${firstColor}-01.jpg`;

  if (imgError) {
    return product.category ? <BagIcon color={product.colors[0]?.hex} /> : <StrollerIcon color={product.colors[0]?.hex} />;
  }
  return <img src={src} onError={() => setImgError(true)} className="w-full h-full object-contain p-4 mix-blend-multiply" alt={product.name} />;
};

// Összecsukható Harmonika Komponens
const AccordionItem = ({ title, icon: Icon, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full py-5 flex items-center justify-between text-left focus:outline-none group">
        <div className="flex items-center gap-3">
          <Icon className={`w-5 h-5 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-400 group-hover:text-blue-600'}`} />
          <span className={`font-bold uppercase tracking-widest text-xs ${isOpen ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>{title}</span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        {children}
      </div>
    </div>
  );
};

// Jogi Szekciókhoz komponens
const LegalSection = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-xl font-black uppercase tracking-widest mb-4 text-slate-800">{title}</h3>
    <div className="text-slate-600 leading-relaxed space-y-4">
      {children}
    </div>
  </div>
);

const App = () => {
  // KEZDŐÁLLAPOT BETÖLTÉSE AZ URL-BŐL
  const [initialState] = useState(() => {
    const params = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '');
    const productId = params.get('product');
    const viewParam = params.get('view');
    
    let initProduct = null;
    let initSetIdx = 0;
    let initColorIdx = 0;

    if (productId) {
      initProduct = [...PRODUCTS, ...ACCESSORIES].find(p => p.id === productId) || null;
      if (initProduct) {
        const setId = params.get('set');
        if (setId && initProduct.sets) {
          const idx = initProduct.sets.findIndex(s => s.id === setId);
          if (idx !== -1) initSetIdx = idx;
        }
        const colorId = params.get('color');
        if (colorId && initProduct.colors) {
          const idx = initProduct.colors.findIndex(c => formatName(c.name) === colorId);
          if (idx !== -1) initColorIdx = idx;
        }
      }
    }
    return { initProduct, initSetIdx, initColorIdx, initView: viewParam || 'home' };
  });

  const [view, setView] = useState(initialState.initView);
  const [selectedProduct, setSelectedProduct] = useState(initialState.initProduct);
  const [activeColor, setActiveColor] = useState(initialState.initColorIdx);
  const [activeSetIdx, setActiveSetIdx] = useState(initialState.initSetIdx);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [activeCarSeatColor, setActiveCarSeatColor] = useState(0);
  
  const [validUrls, setValidUrls] = useState([]);
  const [cart, setCart] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', zipCode: '', city: '', street: '', delivery: 'pickup', payment: 'cash_pickup', message: ''
  });

  // SEO ÉS CÍMSOR SZINKRONIZÁLÓ MOTOR
  useEffect(() => {
    let title = "Britax Römer Prémium Babakocsik | Babakocsi Szakáruház";
    let canonicalUrl = "https://babakocsiszakaruhaz.hu/";
    let browserUrl = "/";

    if (selectedProduct) {
      title = `${selectedProduct.name} | Babakocsi Szakáruház`;
      const setId = selectedProduct.sets ? (selectedProduct.sets[activeSetIdx]?.id || 'alone') : 'alone';
      const colorId = formatName(selectedProduct.colors[activeColor]?.name || '');
      
      const queryString = `?product=${selectedProduct.id}&set=${setId}&color=${colorId}`;
      canonicalUrl = `https://babakocsiszakaruhaz.hu/${queryString}`;
      browserUrl = `/${queryString}`;
    } else if (view !== 'home') {
      const viewTitles = {
        'accessories': 'Kiegészítők',
        'contact': 'Kapcsolat',
        'checkout': 'Pénztár',
        'aszf': 'ÁSZF',
        'privacy': 'Adatvédelmi Tájékoztató',
        'impressum': 'Impresszum',
        'shipping': 'Szállítási információk',
        'cookies': 'Sütikezelés'
      };
      title = `${viewTitles[view] || ''} | Babakocsi Szakáruház`;
      browserUrl = `/?view=${view}`;
      canonicalUrl = `https://babakocsiszakaruhaz.hu${browserUrl}`;
    }

    document.title = title;

    let canonicalLink = document.querySelector("link[rel='canonical']");
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonicalUrl);

    try {
      window.history.replaceState({}, title, browserUrl);
    } catch (e) {}

  }, [selectedProduct, activeSetIdx, activeColor, view]);

  // Képkereső Effect
  useEffect(() => {
    let isMounted = true;
    
    const loadImages = async () => {
      if (!selectedProduct) {
        setValidUrls([]);
        return;
      }

      setValidUrls([]);

      const setId = selectedProduct.sets ? (selectedProduct.sets[activeSetIdx]?.id || 'alone') : 'alone';
      const colorName = selectedProduct.colors[activeColor]?.name || '';
      const formattedColor = formatName(colorName);
      
      const checkImage = (index) => {
        return new Promise((resolve) => {
          const paddedIndex = index.toString().padStart(2, '0');
          const url = `${IMAGE_BASE_URL}/${selectedProduct.id}-${setId}-${formattedColor}-${paddedIndex}.jpg`;
          const img = new Image();
          img.onload = () => resolve({ url, valid: true, index });
          img.onerror = () => resolve({ url, valid: false, index });
          img.src = url;
        });
      };

      const promises = [];
      for (let i = 1; i <= 15; i++) {
        promises.push(checkImage(i));
      }

      const results = await Promise.all(promises);

      if (!isMounted) return;

      results.sort((a, b) => a.index - b.index);
      
      const validImages = [];
      for (const res of results) {
        if (res.valid) {
          validImages.push(res.url);
        } else {
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
    const activeSetId = selectedProduct.sets?.[activeSetIdx]?.id || 'alone';
    const base = selectedProduct.sets ? selectedProduct.sets[activeSetIdx].price : (selectedProduct.basePrice || selectedProduct.price);
    
    const ep = selectedProduct.colors?.[activeColor]?.extraPrice;
    const extra = typeof ep === 'object' ? (ep[activeSetId] || 0) : (ep || 0);
    
    return base + extra;
  };

  const currentTotalPrice = calculateCurrentPrice();
  const activeSetId = selectedProduct?.sets?.[activeSetIdx]?.id || 'alone';

  const addToCart = () => {
    const isRioEssential = selectedProduct.id === 'rio' && activeSetId === 'essential';
    
    const item = {
      id: Math.random().toString(36).substr(2, 9),
      productId: selectedProduct.id,
      name: selectedProduct.name,
      setName: selectedProduct.sets ? selectedProduct.sets[activeSetIdx].name : null,
      color: selectedProduct.colors[activeColor].name,
      carSeatColor: isRioEssential ? BABY_SAFE_CORE_COLORS[activeCarSeatColor].name : null,
      price: currentTotalPrice,
      quantity: 1,
      image: validUrls[0] || null
    };
    setCart([...cart, item]);
    setSelectedProduct(null);
    setView('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    setActiveCarSeatColor(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setIsSubmitting(true);
    
    const orderSummary = cart.map(item => 
      `${item.name} (${item.setName || 'Alap'}), Szín: ${item.color}${item.carSeatColor ? `, Hordozó szín: ${item.carSeatColor}` : ''}, Ár: ${formatPrice(item.price)} Ft`
    ).join('\n');
    
    const payload = {
      ...formData,
      teljes_cim: `${formData.zipCode} ${formData.city}, ${formData.street}`,
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
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden flex flex-col">
      {/* Navigáció */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigateTo('home')}>
              <img src={`${IMAGE_BASE_URL}/logo.png`} alt="Gyerekülés Kft." className="h-10 w-auto object-contain" />
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

      <main className="pt-20 flex-grow">
        {selectedProduct ? (
          <div className="max-w-7xl mx-auto px-6 py-10 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <button onClick={() => navigateTo('home')} className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-900 mb-12 transition-colors uppercase tracking-widest">
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

              {/* ÚJRATERVEZETT JOBB OLDALI SÁV */}
              <div className="flex flex-col gap-8">
                <div>
                  {selectedProduct.badge && (
                    <span className="inline-block bg-red-600 text-white text-[10px] font-black uppercase tracking-widest py-1.5 px-3 rounded-full shadow-sm mb-4">{selectedProduct.badge}</span>
                  )}
                  <h1 className="text-5xl font-black mb-2 tracking-tight">{selectedProduct.name}</h1>
                  <p className="text-3xl font-black text-blue-900 flex items-center">
                    {(() => {
                      const origPrice = selectedProduct.sets ? selectedProduct.sets[activeSetIdx]?.originalPrice : selectedProduct.originalPrice;
                      if (origPrice) {
                        const ep = selectedProduct.colors[activeColor]?.extraPrice;
                        const extra = typeof ep === 'object' ? (ep[activeSetId] || 0) : (ep || 0);
                        const displayOrig = extra > 0 ? origPrice + extra : origPrice;
                        return <span className="text-xl text-slate-400 line-through mr-3">{formatPrice(displayOrig)} Ft</span>;
                      }
                      return null;
                    })()}
                    {formatPrice(currentTotalPrice)} Ft
                  </p>
                </div>
                
                {selectedProduct.sets && (
                  <div className="space-y-3">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 flex items-center gap-2"><Box className="w-3 h-3" /> Válasszon csomagot:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedProduct.sets.map((set, idx) => {
                        const ep = selectedProduct.colors[activeColor]?.extraPrice;
                        const btnExtraPrice = typeof ep === 'object' ? (ep[set.id] || 0) : (ep || 0);
                        
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
                            className={`p-4 rounded-2xl border-2 text-left transition-all flex flex-col justify-center ${activeSetIdx === idx ? 'border-blue-600 bg-blue-50/50 shadow-md' : 'border-transparent bg-slate-50 hover:border-slate-200'}`}
                          >
                            <div className="flex justify-between items-center w-full mb-1">
                              <span className={`font-bold text-sm ${activeSetIdx === idx ? 'text-blue-900' : 'text-slate-700'}`}>{set.name}</span>
                              <div className="text-right">
                                {set.originalPrice && (() => {
                                  const displayOrig = btnExtraPrice > 0 ? set.originalPrice + btnExtraPrice : set.originalPrice;
                                  return <span className="text-xs text-slate-400 line-through block">{formatPrice(displayOrig)} Ft</span>;
                                })()}
                                <span className="font-black text-sm">{formatPrice(set.price + btnExtraPrice)} Ft</span>
                              </div>
                            </div>
                            <p className="text-xs text-slate-500">{set.contents}</p>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}
                
                <div className="space-y-3">
                  <h4 className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-3 flex justify-between items-center">
                    <span>Szín: <span className="text-slate-900 ml-1">{selectedProduct.colors[activeColor].name}</span></span>
                    {selectedProduct.colors[activeColor].collection && (
                      <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded-md">{selectedProduct.colors[activeColor].collection}</span>
                    )}
                  </h4>
                  
                  <div className="flex flex-wrap gap-3">
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
                          className={`w-12 h-12 rounded-full p-1 transition-all ${activeColor === idx ? 'ring-2 ring-blue-900 ring-offset-2' : 'hover:scale-110'}`}
                        >
                          <div className="w-full h-full rounded-full shadow-inner border border-slate-100" style={{ backgroundColor: color.hex }} />
                        </button>
                      );
                    })}
                  </div>

                  {selectedProduct.colors[activeColor].collection && (
                    <p className="text-xs text-slate-500 mt-2">
                      <span className="font-bold text-slate-700 mr-1">{selectedProduct.colors[activeColor].collection}:</span>
                      {COLOR_DESCRIPTIONS[selectedProduct.colors[activeColor].collection]}
                    </p>
                  )}
                </div>

                {/* Új funkció: Hordozó színválasztó, ha a RIO Essential szett van kiválasztva */}
                {selectedProduct.id === 'rio' && activeSetId === 'essential' && (
                  <div className="pt-4 border-t border-slate-100">
                    <h4 className="font-black uppercase tracking-widest text-[10px] text-slate-400 mb-3">
                      A Baby-Safe Core színe az alábbiak közül választható ki: <span className="text-slate-900 ml-1">{BABY_SAFE_CORE_COLORS[activeCarSeatColor].name}</span>
                    </h4>
                    
                    <div className="flex gap-5 items-center bg-slate-50 p-4 rounded-3xl border border-slate-100">
                      <div className="w-20 h-20 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 shrink-0 shadow-sm">
                        <img 
                          src={`${IMAGE_BASE_URL}/baby-safe-core-${formatName(BABY_SAFE_CORE_COLORS[activeCarSeatColor].name)}-01.jpg`} 
                          alt="Baby-Safe Core" 
                          className="w-full h-full object-contain mix-blend-multiply" 
                        />
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {BABY_SAFE_CORE_COLORS.map((color, idx) => (
                          <button
                            key={idx}
                            onClick={() => setActiveCarSeatColor(idx)}
                            className={`w-10 h-10 p-1 transition-all rounded-md ${activeCarSeatColor === idx ? 'ring-2 ring-slate-900 ring-offset-1 border-slate-900' : 'border border-slate-200 hover:border-slate-400'}`}
                          >
                            <div className="w-full h-full rounded-sm shadow-inner" style={{ backgroundColor: color.hex }} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <button onClick={addToCart} className="w-full bg-blue-900 text-white py-5 rounded-[1.5rem] font-black text-lg hover:bg-blue-800 transition-all shadow-xl shadow-blue-900/20 flex items-center justify-center gap-3 uppercase tracking-widest active:scale-95 mt-2">
                  <ShoppingCart className="w-5 h-5" /> Kosárba teszem
                </button>

                {/* Harmonikák: Leírás, Adatok, Jellemzők */}
                <div className="pt-6 mt-2 border-t border-slate-100">
                  <AccordionItem title="Termékleírás" icon={FileText} defaultOpen={true}>
                    <p className="text-slate-600 leading-relaxed text-sm">{selectedProduct.description}</p>
                  </AccordionItem>

                  {selectedProduct.specs && (
                    <AccordionItem title="Technikai adatok" icon={Settings}>
                      <ul className="space-y-1">
                        {Object.entries(selectedProduct.specs).map(([label, value]) => (
                          <li key={label} className="flex justify-between py-2.5 border-b border-slate-50 last:border-0 text-sm">
                            <span className="text-slate-500 pr-4">{label}</span>
                            <span className="font-bold text-slate-900 text-right w-1/2">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
                  )}

                  {selectedProduct.generalData && (
                    <AccordionItem title="Részletes jellemzők" icon={ListChecks}>
                      <ul className="space-y-3 pt-2">
                        {selectedProduct.generalData.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm">
                            <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600 leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionItem>
                  )}
                </div>
              </div>
            </div>

            {/* Főbb Jellemzők (Landing Page Szekció) */}
            {selectedProduct.features && selectedProduct.features.length > 0 && (
              <div className="mt-32 pt-16 border-t border-slate-100 animate-in fade-in duration-700">
                <div className="text-center mb-20">
                  <h2 className="text-4xl font-black uppercase tracking-tight">Főbb jellemzők</h2>
                </div>
                <div className="space-y-32">
                  {selectedProduct.features.map((feature, idx) => (
                    <div key={idx} className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}>
                      <div className="flex-1 space-y-6">
                        <h3 className="text-3xl font-black uppercase tracking-tight text-slate-900 leading-tight">{feature.title}</h3>
                        <p className="text-slate-600 leading-relaxed text-lg whitespace-pre-line">{feature.description}</p>
                      </div>
                      <div className="flex-1 w-full">
                        {feature.mediaType === 'video' ? (
                          <div className="aspect-video w-full rounded-[2rem] overflow-hidden shadow-2xl bg-slate-100">
                            <iframe 
                              width="100%" 
                              height="100%" 
                              src={feature.mediaSrc} 
                              title={feature.title} 
                              frameBorder="0" 
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                              allowFullScreen
                            ></iframe>
                          </div>
                        ) : (
                          <img 
                            src={feature.mediaSrc} 
                            alt={feature.title} 
                            className="w-full h-auto rounded-[2rem] shadow-2xl object-cover"
                          />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : view === 'aszf' ? (
          <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tight">Általános Szerződési Feltételek</h2>
            <LegalSection title="Jogfenntartás">
              <p>A honlapon szereplő képek, leírások, egyéb megjelenések a Gyerekülés Kft. kizárólagos tulajdonát képezik, ezeknek bármilyen formában történő felhasználása kizárólag a cég ügyvezetője által aláírt hozzájárulással valósulhat meg.</p>
            </LegalSection>
            <LegalSection title="A Termékek">
              <p>A honlapról való eladás/termékválasztás telefonon vagy emailen elektronikus úton történik, interneten keresztül.</p>
              <p>A honlapon kizárólag gyári csomagolású új termékek kerülnek értékesítésre.</p>
              <p>A kiválasztott termékek fő jellemzőit a megjelenített képek melletti leírás tartalmazza.</p>
              <p>A vételár mindig a kiválasztott termék mellett feltüntetett ár, amely tartalmazza az Általános Forgalmi Adót is (bruttó ár).</p>
            </LegalSection>
            <LegalSection title="Garancia, Szavatosság">
              <p>Az eladó az általa eladott árukra a hatályos jogszabályoknak megfelelően 2 év szavatossági időt vállal. A vevő hibás teljesítés esetén az észlelést követően haladéktalanul jelezze a hibát (e-mail, telefon), illetve közölje szavatossági igényét.</p>
              <p>A fogyasztói kifogás megtételének helye a mindenkori telephely címén történik.</p>
              <p>Az eladó szavatossági és jótállási felelősségére a Polgári Törvénykönyvben foglaltak az irányadóak.</p>
            </LegalSection>
            <LegalSection title="A vásárlástól való elállás joga online rendelés esetén">
              <p>A távollevők között kötött szerződésekről szóló 45/2017. (II.26.) (rendelet) alapján úgynevezett elállási jog (a termék visszaküldésének joga, visszaküldési garancia) illeti meg a vásárlót internetes vásárlás esetén. A vevő jogosult a megrendelést követő 14 naptári napon belül a vásárlástól elállni, bárminemű indoklás nélkül illetve a korábban megrendelt terméket más típusúra cserélni.</p>
              <p>Ezt az igényét jelezheti e-mailen vagy telefonon a honlapon szereplő telefonszámon. Ebben az esetben a vevőt terheli a visszaküldés költsége.</p>
            </LegalSection>
            <LegalSection title="Rendelés, áruátvétel, szállítás, fizetés">
              <p>A honlapról kiválasztott termék/termékek megrendelése e-mailen vagy telefonon is leadható.</p>
              <p>A honlapról való rendeléssel a vásárló kijelenti, hogy megismerte és elfogadja jelen szabályzatot, tisztában van a rendelés menetével, a termék jellemzőivel és annak vételi árával.</p>
              <p>Az áruátvétel személyesen a mindenkori telephelyen történik, ahol az árut megtekintheti, kipróbálhatja és további információt kérhet a termékekre vonatkozóan.</p>
              <p>Postai illetve futárszolgálati kiszállítás esetén vevő köteles a kiszállítás időpontjában a csomagban lévő terméket/termékeket tételesen ellenőrizni és hiánytalan teljesítés esetén az utánvételi elismervényt aláírni, ezt követően hiányosságokra vonatkozó reklamációkat nem áll módunkban elfogadni.</p>
              <p>A termékek ellenértékének kiegyenlítése helyszíni (telephelyi) átvétel esetén készpénzben történik, postai/futárszolgálati utánvételes kiszállítás esetén szintén készpénzben a szállító cég alkalmazottjának.</p>
            </LegalSection>
            <LegalSection title="A felelősség korlátozása">
              <p>A honlapról való megrendelés/vásárlás feltételezi a vásárló részéről az Internet lehetőségeinek és korlátainak ismeretét és elfogadását, különös tekintettel a technikai teljesítményekre és a felmerülő hibákra. A honlap tulajdonosa semmilyen módon nem felelős az alább felsorolt pontokban foglaltak miatt, bármilyen okból is következtek be:</p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>Az Interneten küldött és / vagy fogadott bármilyen adat.</li>
                <li>Bármilyen működési hiba az internetes hálózatban, ami megakadályozza a honlap akadálytalan működését és a megrendelést.</li>
                <li>Bármilyen meghibásodás, bármely vételi eszközben a kommunikációs vonalakon.</li>
                <li>Bármilyen programhiba, abnormális esemény vagy technikai hiba következményei.</li>
              </ul>
              <p className="mt-4">A honlap nem felelős semmilyen alapon, semmilyen közvetett vagy közvetlen kárért, ami a honlaphoz való csatlakozás miatt a vásárlónál következett be. A résztvevő felelőssége felmérni, hogy hogyan védheti meg a számítógépén tárolt adatait a behatolóktól.</p>
              <p>A honlap üzemeltetője nem vonható felelősségre semmilyen esetben vis maior esetén vagy bármilyen eseménnyel kapcsolatosan, ami nem az ő érdekkörében merül fel.</p>
              <p>A honlap üzemeltetője bármikor szabadon megváltoztathat bármilyen árat, szállítási határidőt. A változás a honlapon történt megjelenés időpontjától lép hatályba.</p>
              <p>A honlap üzemeltetője bármikor szabadon módosíthatja a vásárlás feltételeit és szabályait vagy a honlap egyéb tartalmát, ezt teheti bármikor, értesítési és bárminemű kötelezettség nélkül arra nézve, hogy megindokolja a döntés helyességét, és a honlap üzemeltetője nem vonható felelősségre ezen cselekedete miatt. Bármely módosítás abban az időpontban lép életbe, amikor a módosítás on-line megtalálható a honlapon.</p>
            </LegalSection>
          </div>
        ) : view === 'privacy' ? (
          <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tight">Adatvédelmi Tájékoztató</h2>
            <LegalSection title="Személyes adatok kezelése">
              <p>A megrendelők személyes adatainak felhasználása az Adatvédelmi törvény hatályos szabályozásának megfelelően történik.</p>
              <p>Az eladó a vásárlók adatait a szerződés teljesítése, és a szerződés feltételeinek későbbi bizonyítása érdekében a szavatossági időtartamig tárolja, de az adatokat semmilyen módon nem jogosult ezen időtartamon túl megőrizni, felhasználni, illetve további személyeknek bármikor is átadni.</p>
            </LegalSection>
          </div>
        ) : view === 'impressum' ? (
          <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tight">Impresszum</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-slate-50 p-8 rounded-[2rem]">
                <h3 className="font-black uppercase tracking-widest mb-6 text-slate-800">Üzemeltető adatai</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li><span className="font-bold text-slate-900 block">Cégnév:</span> Gyerekülés Kft.</li>
                  <li><span className="font-bold text-slate-900 block">Felelős vezető:</span> Szondi Attila (ügyvezető)</li>
                  <li><span className="font-bold text-slate-900 block">Székhely és Telephely:</span> 1112 Budapest, Ördögorom út 4.</li>
                  <li><span className="font-bold text-slate-900 block">Cégjegyzékszám:</span> 01-09-283610 (Fővárosi Bíróság bejegyzése)</li>
                  <li><span className="font-bold text-slate-900 block">Adószám:</span> 25584307-2-43</li>
                  <li><span className="font-bold text-slate-900 block">Nyilvántartásba vételi szám:</span> ERK16/98342 (2016) - Budapest Főv. XI. ker. Önk.</li>
                  <li className="pt-4 border-t border-slate-200"><span className="font-bold text-slate-900 block">Telefon:</span> +36-30-595-0055</li>
                  <li><span className="font-bold text-slate-900 block">E-mail:</span> kid@kid.hu</li>
                </ul>
              </div>
              <div className="bg-slate-50 p-8 rounded-[2rem] h-fit">
                <h3 className="font-black uppercase tracking-widest mb-6 text-slate-800">Tárhelyszolgáltató</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li><span className="font-bold text-slate-900 block">Cégnév:</span> Cloudflare, Inc.</li>
                  <li><span className="font-bold text-slate-900 block">Székhely:</span> 101 Townsend St, San Francisco, CA 94107, USA</li>
                  <li><span className="font-bold text-slate-900 block">Honlap:</span> <a href="https://www.cloudflare.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">www.cloudflare.com</a></li>
                </ul>
              </div>
            </div>
          </div>
        ) : view === 'shipping' ? (
          <div className="max-w-5xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="text-4xl font-black mb-6 uppercase tracking-tight">Szállítási és Fizetési Információk</h2>
            <p className="text-slate-600 text-lg mb-12">Az általunk forgalmazott termékeket személyesen megtekinthetik, kipróbálhatják és megvásárolhatják a 1112 Budapest, Ördögorom út 4. szám alatt.</p>
            
            <h3 className="text-xl font-black uppercase tracking-widest mb-6 text-slate-800">Átvételi és Szállítási módok díjai</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="p-8 bg-white rounded-[2rem] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-blue-900"></div>
                <div className="font-black text-xl mb-2">Személyes átvétel</div>
                <div className="text-green-600 font-black uppercase tracking-widest text-sm mb-4">Ingyenes</div>
                <p className="text-sm text-slate-600 font-medium">1112 Budapest, Ördögorom út 4.<br/>Hétfőtől péntekig 10-től 19h-ig, szombaton 10-17 h-ig</p>
              </div>
              <div className="p-8 bg-white rounded-[2rem] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-green-500"></div>
                <div className="font-black text-xl mb-2">Ingyenes szállítás</div>
                <div className="text-green-600 font-black uppercase tracking-widest text-sm mb-4">Ingyenes</div>
                <p className="text-sm text-slate-600 font-medium">Minden olyan rendelés amiben babakocsi vagy babakocsi és egyéb termékek együttes vásárlása történik.</p>
              </div>
              <div className="p-8 bg-white rounded-[2rem] border-2 border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-slate-300"></div>
                <div className="font-black text-xl mb-2">Postai utánvét</div>
                <div className="text-slate-900 font-black uppercase tracking-widest text-sm mb-4">2.990 Ft</div>
                <p className="text-sm text-slate-600 font-medium">Babakocsi nélküli, azaz csak kiegészítők, alkatrészek és egyéb termék rendelése esetén.</p>
              </div>
            </div>

            <div className="bg-slate-50 p-10 rounded-[3rem]">
              <ul className="space-y-4 text-slate-700 font-medium">
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /> A babakocsik kiszállítása ingyenes az ország egész területén (kivétel csak kiegészítők, alkatrészek).</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /> Postai utánvéttel szállítjuk a termékeket. (MPL)</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /> Rendelést telefonon, e-mailen és a honlapról is elfogadunk!</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /> A termékek vadonatújak, gyári csomagolásban vannak, tartalmaznak magyar nyelvű használati útmutatót és 2 év gyártói garanciával rendelkeznek.</li>
                <li className="flex items-start gap-3"><Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" /> A raktáron nem lévő termékeket 2-3 nap szállítási határidővel beszerezzük.</li>
              </ul>
            </div>
          </div>
        ) : view === 'cookies' ? (
          <div className="max-w-4xl mx-auto px-6 py-20 animate-in fade-in slide-in-from-bottom-8">
            <h2 className="text-4xl font-black mb-12 uppercase tracking-tight">Sütikezelési (Cookie) Tájékoztató</h2>
            <LegalSection title="Mik azok a sütik?">
              <p>A sütik (cookie-k) kisméretű szöveges fájlok, amelyeket a weboldal tárol el az Ön számítógépén vagy mobil eszközén a weboldal látogatásakor. Ezek segítségével a weboldal bizonyos ideig megjegyzi az Ön műveleteit és beállításait (pl. a kosár tartalmát), így nem kell azokat minden alkalommal újra megadnia, amikor visszatér az oldalra.</p>
            </LegalSection>
            <LegalSection title="Milyen sütiket használunk?">
              <p>Weboldalunk kizárólag olyan <strong>Feltétlenül szükséges sütiket</strong> használ, amelyek az oldal alapvető működéséhez és a vásárlási folyamat lebonyolításához elengedhetetlenek. Ilyen például a virtuális bevásárlókosár tartalmának megjegyzése a böngészés során.</p>
              <p>Ezek a sütik nem gyűjtenek személyes adatokat marketing célokra, és a böngésző bezárásával, vagy a munkamenet lejártával automatikusan törlődnek.</p>
            </LegalSection>
            <LegalSection title="Sütik kezelése és törlése">
              <p>Önnek lehetősége van a sütik kezelésére, illetve azok törlésére a böngészője beállításaiban. Kérjük, vegye figyelembe, hogy a feltétlenül szükséges sütik letiltása esetén előfordulhat, hogy a weboldal bizonyos funkciói (pl. a rendelés leadása) nem fognak megfelelően működni.</p>
            </LegalSection>
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
                      <h3 className="text-xl font-black uppercase tracking-widest flex items-center gap-2"><MapPin className="w-5 h-5 text-blue-600" /> Cím Adatok</h3>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <input required type="text" placeholder="Irányítószám" className="p-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600 transition-all sm:col-span-1" value={formData.zipCode} onChange={e => setFormData({...formData, zipCode: e.target.value})} />
                        <input required type="text" placeholder="Település" className="p-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600 transition-all sm:col-span-2" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
                      </div>
                      <input required type="text" placeholder="Utca, házszám" className="w-full p-5 rounded-2xl bg-slate-50 border-none outline-none focus:ring-2 ring-blue-600 transition-all" value={formData.street} onChange={e => setFormData({...formData, street: e.target.value})} />
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
                              <p className="text-xs text-blue-900 font-bold mt-1">Babakocsi: {item.color}</p>
                              {item.carSeatColor && (
                                <p className="text-xs text-slate-700 font-bold mt-0.5">Hordozó: {item.carSeatColor}</p>
                              )}
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
             <div className="mt-12 h-96 bg-slate-100 rounded-[3rem] relative overflow-hidden flex items-center justify-center border-2 border-slate-50">
               <iframe 
                 src="https://maps.google.com/maps?q=1112%20Budapest,%20%C3%96rd%C3%B6gorom%20%C3%BAt%204.&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen="" 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
             </div>
          </div>
        ) : (
          <>
            <section className="relative h-[650px] w-full bg-slate-950 overflow-hidden flex items-center mb-20">
              <div className="absolute inset-0 opacity-50 bg-gradient-to-tr from-blue-950 via-slate-900 to-transparent z-10"></div>
              <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-white text-center md:text-left">
                <div className="max-w-3xl">
                  <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9] break-words">
                    <span className="block text-2xl sm:text-3xl md:text-4xl text-blue-400 mb-4 tracking-widest uppercase font-bold">Britax Römer</span>
                    PRÉMIUM <br /><span className="text-blue-500 italic">BABAKOCSIK</span>
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-slate-300 max-w-xl font-light leading-relaxed mx-auto md:mx-0">Német minőség, amely generációk óta szolgálja és kényezteti a legdrágább kincsünket.</p>
                  <button onClick={() => document.getElementById('shop').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-600 text-white px-10 py-5 rounded-full font-bold hover:bg-blue-500 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20 mx-auto md:mx-0">Kollekció megtekintése <ChevronRight className="w-5 h-5" /></button>
                  
                  <div className="flex flex-col sm:flex-row items-center md:justify-start justify-center gap-8 mt-12 text-lg font-medium text-slate-300">
                    <a href={`tel:${CONTACT_INFO.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer">
                      <Phone className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span>{CONTACT_INFO.phone}</span>
                    </a>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer">
                      <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span>{CONTACT_INFO.email}</span>
                    </a>
                    <a href={`https://maps.google.com/?q=${encodeURIComponent(CONTACT_INFO.address)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white transition-colors group cursor-pointer">
                      <MapPin className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                      <span>{CONTACT_INFO.address}</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="shop" className="max-w-7xl mx-auto px-6 mb-32">
              <div className="text-center mb-16"><h2 className="text-4xl font-black tracking-tight mb-4 uppercase">Kiváló Minőségű Kínálat</h2><p className="text-slate-500 text-lg">Válassza ki az életstílusához legjobban illő modellt.</p></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {PRODUCTS.map((product) => (
                  <div key={product.id} className="group flex flex-col cursor-pointer" onClick={() => openProduct(product)}>
                    <div className="relative aspect-[3/4] bg-slate-50 rounded-[2rem] flex items-center justify-center overflow-hidden mb-6 group-hover:shadow-2xl transition-all duration-500">
                       {product.badge && (
                         <div className="absolute top-6 left-6 bg-red-600 text-white text-xs font-black uppercase tracking-widest py-2 px-4 rounded-full z-10 shadow-lg">
                           {product.badge}
                         </div>
                       )}
                       <CatalogImage product={product} />
                    </div>
                    <div className="px-2">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-2xl font-extrabold pr-2">{product.name}</h3>
                        <div className="text-right flex-shrink-0">
                          {product.originalPrice && (
                            <span className="block text-sm text-slate-400 line-through mb-1">{formatPrice(product.originalPrice)} Ft</span>
                          )}
                          <span className="font-black text-blue-900 block">{formatPrice(product.basePrice)} {product.sets ? 'Ft-tól' : 'Ft'}</span>
                        </div>
                      </div>
                      <p className="text-slate-500 font-medium">{product.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="bg-slate-950 text-white pt-24 pb-12 mt-auto">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div>
              <img src={`${IMAGE_BASE_URL}/logo-footer.png`} alt="Gyerekülés Kft." className="h-12 w-auto object-contain mb-6" />
              <p className="text-slate-400 font-medium leading-relaxed">Biztonság és kényelem 1930 óta.</p>
            </div>
            <div>
              <h5 className="font-black uppercase tracking-widest text-sm mb-8 text-blue-500">Termékek</h5>
              <ul className="text-slate-400 space-y-4 font-medium">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Babakocsik</button></li>
                <li><button onClick={() => navigateTo('accessories')} className="hover:text-white transition-colors">Kiegészítők</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Kapcsolat</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black uppercase tracking-widest text-sm mb-8 text-blue-500">Információk</h5>
              <ul className="text-slate-400 space-y-4 font-medium">
                <li><button onClick={() => navigateTo('aszf')} className="hover:text-white transition-colors">Általános Szerződési Feltételek</button></li>
                <li><button onClick={() => navigateTo('privacy')} className="hover:text-white transition-colors">Adatvédelmi tájékoztató</button></li>
                <li><button onClick={() => navigateTo('impressum')} className="hover:text-white transition-colors">Impresszum</button></li>
                <li><button onClick={() => navigateTo('cookies')} className="hover:text-white transition-colors">Sütikezelési tájékoztató</button></li>
                <li><button onClick={() => navigateTo('shipping')} className="hover:text-white transition-colors">Szállítási információk</button></li>
              </ul>
            </div>
            <div>
              <h5 className="font-black uppercase tracking-widest text-sm mb-8 text-blue-500">Kapcsolat</h5>
              <ul className="text-slate-400 space-y-4 font-medium mb-8">
                <li className="flex items-center gap-3"><Phone className="w-4 h-4" /> {CONTACT_INFO.phone}</li>
                <li className="flex items-center gap-3"><Mail className="w-4 h-4" /> {CONTACT_INFO.email}</li>
                <li className="flex items-start gap-3"><MapPin className="w-4 h-4 mt-1" /> {CONTACT_INFO.address}</li>
              </ul>
              <h5 className="font-black uppercase tracking-widest text-sm mb-4 text-blue-500">Nyitvatartás</h5>
              <p className="text-slate-400 font-medium flex items-center gap-3"><Clock className="w-4 h-4" /> {CONTACT_INFO.hours}</p>
            </div>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-600 border-t border-slate-900 pt-12 text-center md:text-left">© 2026 Britax Römer Premium Store Hungary.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
