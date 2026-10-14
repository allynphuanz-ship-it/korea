/* =====================================================================
   ONDO 온도 — store data
   Edit product names, prices, colours and tags here.
   Images: see IMAGES below and README.md
   ===================================================================== */

/* ---------- images ----------
   Put your files in the /images folder using these paths.
   Any path can also be a full URL (https://...).
   Missing files are fine: the drawn illustration shows instead. */
const IMAGES={
  ext:"jpg",                         // file type used for product photos (jpg, png or webp)
  productFolder:"images/products/",  // product photos: p01.jpg, p01-2.jpg, p01-3.jpg, p01-black.jpg ...
  hero:"images/hero/hero.jpg",
  jewelryFeature:"images/home/jewelry-feature.jpg",
  aboutStory:"images/about/story.jpg",
  categories:{
    women:"images/categories/women.jpg",
    unisex:"images/categories/unisex.jpg",
    jewelry:"images/categories/jewelry.jpg",
    accessories:"images/categories/accessories.jpg",
    footwear:"images/categories/footwear.jpg",
    bags:"images/categories/bags-wallets.jpg"
  },
  looks:{
    euljiro:"images/looks/euljiro.jpg",
    hannam:"images/looks/hannam.jpg",
    seongsu:"images/looks/seongsu.jpg"
  }
};

/* ---------- colors ---------- */
const COL={black:["Black","#1B1C21"],white:["White","#F6F6F3"],grey:["Melange grey","#A3A8B2"],cobalt:["Cobalt","#3243D6"],oat:["Oat","#D9CDB7"],navy:["Navy","#25315E"],charcoal:["Charcoal","#46494F"],pink:["Blush","#F0C4CE"],lilac:["Lilac","#C8BEE8"],champagne:["Champagne","#E7D6B4"],ivory:["Ivory","#EEE7D8"],denim:["Washed denim","#7091BA"],silver:["925 Silver","#C9CDD4"],pearl:["Pearl","#F1EEE6"],gold:["Gold vermeil","#D6B467"],cherry:["Cherry","#8D1F34"],brown:["Mocha","#7A5A45"],sky:["Sky","#B7CCEA"]};

/* ---------- catalog ---------- */
const CATS={
 unisex:{t:"Unisex",k:"유니섹스",i:"Boxy shapes cut to share. Sized S–XL on one block, so the fit reads the same on everyone."},
 women:{t:"Women",k:"여성",i:"Ribbons, pleats and low rises, balanced with clean tailoring. Sized XS–L."},
 jewelry:{t:"Jewelry",k:"주얼리",i:"925 sterling silver and gold vermeil, made in Jongno's jewelry district. Nickel-free."},
 accessories:{t:"Accessories",k:"액세서리",i:"Caps, frames, scarves and belts. The small pieces that finish a mirror selfie."},
 footwear:{t:"Footwear",k:"신발",i:"Korean sizing in millimetres, 230–275. Platforms, runners, loafers and boots."},
 bags:{t:"Bags & Wallets",k:"가방 · 지갑",i:"Nylon, puffer and vegan leather. Sized for a phone, a card holder and a lip tint, or for everything."}
};
const CAT_ROUTE={unisex:"unisex",women:"women",jewelry:"jewelry",accessories:"accessories",footwear:"footwear",bags:"bags-wallets"};
const TYPE_LABEL={hoodie:"Hoodies",tee:"Tees",jacket:"Outerwear",knit:"Knitwear",pants:"Pants",skirt:"Skirts",dress:"Dresses",ring:"Rings",signet:"Rings",necklace:"Necklaces",pearls:"Necklaces",earring:"Earrings",drops:"Earrings",bracelet:"Bracelets",sneaker:"Sneakers",runner:"Sneakers",boot:"Boots",loafer:"Flats & loafers",maryjane:"Flats & loafers",tote:"Totes",shoulder:"Shoulder bags",puffer:"Shoulder bags",hobo:"Shoulder bags",wallet:"Wallets",cardholder:"Wallets",cap:"Headwear",beanie:"Headwear",sunglasses:"Eyewear",shield:"Eyewear",scarf:"Scarves",belt:"Belts"};
/* Each product: [id, name, Korean name, category, illustration type, price (KRW),
   colours, tags, description, material, optional image path or URL]
   Example with a custom image:  ["p01", ..., "100% cotton", "images/products/my-hoodie.jpg"] */
const P=[
 ["p01","Midnight Seongsu Hoodie","미드나잇 성수 후디","unisex","hoodie",89000,["black","grey","cobalt"],["new","best"],"Heavyweight 480gsm brushed fleece with a double-layer hood and a dropped shoulder.","100% cotton fleece · Made in Korea"],
 ["p02","Han River Track Jacket","한강 트랙 재킷","unisex","jacket",129000,["cobalt","black","navy"],["trend"],"Glossy nylon track top with a two-way zip and contrast piping. Light enough for a night ride along the river.","100% recycled nylon · Mesh lining"],
 ["p03","17° Oversized Logo Tee","17° 오버핏 로고 티","unisex","tee",45000,["white","black","grey"],["best"],"Our everyday tee in a boxy cut with a small 17° print at the back neck.","100% combed cotton, 240gsm"],
 ["p04","Wide Cargo Pants","와이드 카고 팬츠","unisex","pants",98000,["grey","black","oat"],["trend","best"],"Wide straight leg with low cargo pockets and drawcord hems you can cinch to a jogger.","Cotton-nylon ripstop"],
 ["p05","Cable Knit Vest","케이블 니트 베스트","unisex","knit",79000,["oat","grey","navy"],["new"],"A chunky cable vest to layer over a shirt or a long-sleeve tee.","70% wool, 30% nylon"],
 ["p06","Parachute Pants","파라슈트 팬츠","unisex","pants",92000,["black","sky","grey"],["new","trend"],"Swishy nylon with an elastic waist, toggle hems and a crisp crinkle finish.","100% nylon taffeta"],
 ["p07","Boxy Varsity Jacket","박시 바시티 재킷","unisex","jacket",189000,["navy","black","cherry"],["trend","best"],"Wool-blend body with vegan leather sleeves and a chenille 온도 patch on the chest.","Wool blend · Quilted lining"],
 ["p08","Washed Graphic Tee","워싱 그래픽 티","unisex","tee",49000,["grey","black"],[],"Pigment-washed for a lived-in fade, with a hand-drawn Seoul skyline print.","100% cotton"],
 ["p09","Pleated Mini Skirt","플리츠 미니 스커트","women","skirt",69000,["charcoal","black","grey"],["best","trend"],"Knife pleats with built-in shorts and a side zip. The skirt we restock most.","Poly-wool blend"],
 ["p10","Ribbon Slip Dress","리본 슬립 드레스","women","dress",139000,["pink","black","ivory"],["new"],"Bias-cut satin slip with adjustable straps and a small bow at the neckline.","100% polyester satin"],
 ["p11","Cropped Cardigan","크롭 가디건","women","knit",85000,["lilac","ivory","black"],["trend"],"Soft cropped cardigan with pearl-tone buttons. Wear it buttoned as a top.","Wool-cashmere blend"],
 ["p12","Satin Midi Skirt","새틴 미디 스커트","women","skirt",99000,["champagne","black"],["new"],"Liquid satin cut on the bias so it moves when you walk.","Satin · Elastic back waist"],
 ["p13","Ribbon Baby Tee","리본 베이비 티","women","tee",39000,["white","pink","black"],["best"],"Shrunken fit with a tiny ribbon at the neck. Pairs with anything low-rise.","Cotton-spandex rib"],
 ["p14","Tweed Mini Jacket","트위드 미니 재킷","women","jacket",209000,["ivory","black","pink"],["new","trend"],"Cropped bouclé tweed with frayed edges and gold-tone buttons.","Cotton-acrylic tweed · Lined"],
 ["p15","Knit Halter Dress","니트 홀터 드레스","women","dress",119000,["black","oat"],[],"Ribbed halter maxi that hugs, with a tie at the neck.","Viscose-nylon rib"],
 ["p16","Low-rise Flare Jeans","로우라이즈 플레어 진","women","pants",89000,["denim","black"],["trend"],"Low rise, long flare, washed light. Cut long for wearing with platforms.","100% cotton denim"],
 ["p17","Silver Heart Ring","실버 하트 링","jewelry","ring",59000,["silver","gold"],["best"],"A puffed heart on a slim band. Comfortable enough to stack.","925 sterling silver"],
 ["p18","Pearl Choker","진주 초커","jewelry","pearls",89000,["pearl"],["trend","new"],"Freshwater pearls on a silver clasp with an extension chain.","Freshwater pearl · 925 silver"],
 ["p19","Chunky Hoop Earrings","청키 후프 귀걸이","jewelry","earring",49000,["silver","gold"],["best"],"Hollow, so they look heavy but wear light all day.","925 sterling silver"],
 ["p20","Star Pendant Necklace","스타 펜던트 목걸이","jewelry","necklace",75000,["silver","gold"],[],"A small five-point star on a fine ball chain, 42cm with a 5cm extender.","925 sterling silver"],
 ["p21","Signet Ring 17","시그넷 링 17","jewelry","signet",69000,["silver","gold"],["new"],"Flat-top signet engraved with a tiny cross. Unisex sizing.","925 sterling silver"],
 ["p22","Link Bracelet","체인 링크 팔찌","jewelry","bracelet",65000,["silver","gold"],["trend"],"Oval links with a toggle clasp. 17cm.","925 sterling silver"],
 ["p23","Twin Drop Earrings","트윈 드롭 귀걸이","jewelry","drops",55000,["gold","silver"],[],"Teardrop charms that catch light when you turn.","Gold vermeil on silver"],
 ["p24","Washed Ball Cap","워싱 볼캡","accessories","cap",42000,["cobalt","black","oat"],["best"],"Soft unstructured crown and a curved brim, with an embroidered 17° on the side.","100% cotton twill"],
 ["p25","Cat-eye Sunglasses","캣아이 선글라스","accessories","sunglasses",119000,["black","cherry"],["trend"],"Slim acetate cat-eye with UV400 lenses and a low bridge for Asian fit.","Acetate · UV400"],
 ["p26","Mohair Scarf","모헤어 머플러","accessories","scarf",69000,["grey","lilac","cherry"],["new"],"Brushed mohair with long fringe. Warm without bulk.","Mohair-wool-nylon"],
 ["p27","Skinny Leather Belt","스키니 레더 벨트","accessories","belt",55000,["black","brown"],[],"A 2cm belt with a squared silver buckle. Fits low-rise loops.","Vegan leather · Zinc buckle"],
 ["p28","Ribbed Knit Beanie","골지 니트 비니","accessories","beanie",35000,["grey","cobalt","black"],["new","trend"],"Fold-up rib beanie with an optional pompom.","Acrylic-wool"],
 ["p29","Oval Shield Shades","오벌 쉴드 선글라스","accessories","shield",129000,["silver","black"],["new"],"One-piece wraparound lens. The Y2K frame of the season.","TR90 frame · UV400"],
 ["p30","Platform Court Sneaker","플랫폼 코트 스니커즈","footwear","sneaker",159000,["white","black"],["best","trend"],"A 5cm platform court shoe with a padded collar. Adds height, stays light.","Leather upper · Rubber sole"],
 ["p31","Chunky Runner 26","청키 러너 26","footwear","runner",179000,["grey","silver","black"],["new"],"Layered mesh runner on a sculpted EVA sole.","Mesh & suede · EVA"],
 ["p32","Square-toe Loafer","스퀘어토 로퍼","footwear","loafer",149000,["black","brown"],["best"],"Polished square-toe penny loafer with a lug sole.","Leather · Rubber lug sole"],
 ["p33","Lace-up Combat Boot","레이스업 컴뱃 부츠","footwear","boot",199000,["black"],["trend"],"Ankle combat boot with a side zip, so you can skip the laces.","Leather · Side zip"],
 ["p34","Ballet Mary Jane","발레 메리제인","footwear","maryjane",119000,["cherry","black","ivory"],["new","trend"],"Soft ballet flat with a buckle strap.","Patent leather"],
 ["p35","Suede Low Sneaker","스웨이드 로우 스니커즈","footwear","sneaker",139000,["brown","grey"],[],"Slim retro trainer in brushed suede.","Suede · Gum sole"],
 ["p36","Nylon Shoulder Bag","나일론 숄더백","bags","shoulder",139000,["black","silver","cobalt"],["best","trend"],"Our signature underarm bag with a magnetic flap and inner zip pocket.","Recycled nylon · Vegan trim"],
 ["p37","Mini Tote 온도","미니 토트 온도","bags","tote",99000,["ivory","black"],["new"],"Small structured tote with a Hangul 온도 print. Fits a phone and a wallet.","Coated canvas"],
 ["p38","Puffer Crossbody","패딩 크로스백","bags","puffer",109000,["silver","black","lilac"],["trend"],"Quilted puffer pouch on an adjustable strap.","Nylon · Recycled fill"],
 ["p39","Compact Bifold Wallet","컴팩트 반지갑","bags","wallet",69000,["black","cherry"],["best"],"Six card slots, a coin pocket and a snap closure.","Vegan leather"],
 ["p40","Slim Card Holder","슬림 카드지갑","bags","cardholder",39000,["cobalt","black","pink"],[],"Three slots and a centre pocket for a T-money card.","Vegan leather"],
 ["p41","Canvas Big Tote","캔버스 빅 토트","bags","tote",79000,["oat","black"],[],"Heavy canvas tote that fits a 14-inch laptop.","16oz cotton canvas"],
 ["p42","Ruched Hobo Bag","셔링 호보백","bags","hobo",149000,["cherry","black","brown"],["new"],"Slouchy ruched hobo with a short shoulder strap.","Vegan leather"]
].map((r,i)=>({id:r[0],n:r[1],k:r[2],c:r[3],t:r[4],p:r[5],col:r[6],tag:r[7],d:r[8],m:r[9],img:r[10]||null,order:i}));
const byId=Object.fromEntries(P.map(p=>[p.id,p]));
const BEST_ORDER=["p01","p36","p30","p09","p03","p17","p04","p13","p24","p19","p32","p39","p07"];

const COLLECTIONS={
 "new-arrivals":{t:"New Arrivals",k:"신상품",i:"Fresh from the FW26 run. New pieces drop every Friday at 19:00 KST.",f:p=>p.tag.includes("new")},
 "trending":{t:"Trending",k:"요즘 인기",i:"What's being styled most on feeds and in the Seongsu fitting rooms this week.",f:p=>p.tag.includes("trend")},
 "best-sellers":{t:"Best Sellers",k:"베스트",i:"Ranked by units sold over the last 30 days. Restocked first.",f:p=>BEST_ORDER.includes(p.id),rank:true}
};

