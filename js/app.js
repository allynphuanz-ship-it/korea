(function(){

/* ---------- product art (line illustrations) ---------- */
function ringP(cx,cy,R,r,ry,rry){ry=ry||R;rry=rry||r;return `M${cx-R} ${cy}a${R} ${ry} 0 1 0 ${2*R} 0a${R} ${ry} 0 1 0 ${-2*R} 0ZM${cx-r} ${cy}a${r} ${rry} 0 1 0 ${2*r} 0a${r} ${rry} 0 1 0 ${-2*r} 0Z`}
const N='fill="none"';
const SHAPES={
 hoodie:c=>`<path d="M66 64Q100 40 134 64L164 82L182 156L162 162L148 116V212H52V116L38 162L18 156L36 82Z"/><path ${N} d="M72 66Q100 106 128 66"/><path ${N} d="M93 88L91 122M107 88L109 122"/><path ${N} d="M70 160H130L136 192H64Z"/><path ${N} d="M52 200H148M22 146L40 152M178 146L160 152"/>`,
 tee:c=>`<path d="M74 52Q100 70 126 52L170 74L156 112L136 104V206H64V104L44 112L30 74Z"/><path ${N} d="M80 54Q100 78 120 54"/><path ${N} d="M84 120H116" stroke-dasharray="3 4"/>`,
 jacket:c=>`<path d="M72 50L100 64L128 50L166 72L180 182L160 186L148 120V210H52V120L40 186L20 182L34 72Z"/><path ${N} d="M100 64V210"/><path ${N} d="M72 50L86 92L100 64L114 92L128 50"/><path ${N} d="M52 196H148M24 168L42 171M176 168L158 171M60 140H84M116 140H140"/>`,
 knit:c=>`<path d="M74 54Q100 66 126 54L162 74L176 190L156 194L144 118V206H56V118L44 194L24 190L38 74Z"/><path ${N} d="M74 54L100 122L126 54"/><path ${N} d="M56 192H144M66 192V206M78 192V206M90 192V206M102 192V206M114 192V206M126 192V206M138 192V206M28 178L46 181M172 178L154 181"/><path ${N} d="M100 122V192"/><circle cx="106" cy="140" r="2.4"/><circle cx="106" cy="162" r="2.4"/><circle cx="106" cy="184" r="2.4"/>`,
 pants:c=>`<path d="M62 36H138L150 214H110L100 98L90 214H50Z"/><path ${N} d="M62 50H138M100 50V98M70 114H90V140H70ZM110 114H130V140H110ZM54 196H88M112 196H146"/>`,
 skirt:c=>`<path d="M68 66H132L162 188Q100 200 38 188Z"/><path ${N} d="M68 80H132M82 80L66 192M100 80V196M118 80L134 192M91 80L83 195M109 80L117 195"/>`,
 dress:c=>`<path d="M80 52Q100 64 120 52L124 100Q150 160 158 212Q100 224 42 212Q50 160 76 100Z"/><path ${N} d="M80 52L85 24M120 52L115 24M76 100Q100 112 124 100"/><path d="M90 102L100 110L110 102V118L100 110L90 118Z"/><path ${N} d="M70 170Q100 178 130 170" stroke-dasharray="2 5"/>`,
 ring:c=>`<path fill-rule="evenodd" d="${ringP(100,144,54,42)}"/><path d="M100 104L84 88A10 10 0 0 1 100 74A10 10 0 0 1 116 88Z"/><path ${N} d="M70 178Q100 196 130 178"/>`,
 signet:c=>`<path fill-rule="evenodd" d="${ringP(100,150,52,40)}"/><rect x="74" y="82" width="52" height="40" rx="12"/><path ${N} d="M90 102H110M100 92V112"/>`,
 necklace:c=>`<path ${N} stroke-width="2.4" stroke-dasharray="1 6" d="M44 36Q100 196 156 36"/><path d="M100 150L108 164L124 166L112 177L115 193L100 185L85 193L88 177L76 166L92 164Z"/>`,
 pearls:c=>`<path ${N} stroke="${c}" stroke-width="13" stroke-linecap="round" stroke-dasharray="0.1 15" d="M40 50Q100 170 160 50"/><path ${N} stroke-width="1" d="M40 50Q100 170 160 50" opacity=".4"/>`,
 earring:c=>`<path fill-rule="evenodd" d="${ringP(66,140,34,24)}"/><path fill-rule="evenodd" d="${ringP(134,140,34,24)}"/><circle cx="66" cy="98" r="5"/><circle cx="134" cy="98" r="5"/>`,
 drops:c=>`<circle cx="70" cy="70" r="6"/><circle cx="130" cy="70" r="6"/><path ${N} d="M70 76V108M130 76V108"/><path d="M70 108Q88 140 70 176Q52 140 70 108Z"/><path d="M130 108Q148 140 130 176Q112 140 130 108Z"/>`,
 bracelet:c=>`<path fill-rule="evenodd" d="${ringP(100,130,70,56,40,28)}"/><path ${N} d="M44 112L52 124M66 98L70 112M100 92V104M134 98L130 112M156 112L148 124M56 150L64 140M144 150L136 140M100 170V158"/>`,
 sneaker:c=>`<path d="M24 160L30 120Q34 106 48 106L78 102Q94 118 114 126L158 136Q182 142 182 160Z"/><path fill="var(--surface)" d="M20 160H186V174Q186 182 178 182H28Q20 182 20 174Z"/><path ${N} d="M74 110L88 104M82 117L97 111M90 124L105 118M58 148Q102 128 146 148M20 170H186"/>`,
 runner:c=>`<path d="M22 156L32 116Q36 104 50 104L82 100Q98 116 120 122L160 132Q186 140 186 156Z"/><path fill="var(--surface)" d="M16 154Q60 150 190 154V176Q190 190 176 190H30Q16 190 16 176Z"/><path ${N} d="M30 168Q100 160 188 168M78 108L92 102M86 116L101 110M95 123L110 117M40 140L76 132L110 146"/>`,
 boot:c=>`<path d="M62 30H116L118 138L162 150Q182 156 182 174H54L62 30Z"/><path fill="var(--surface)" d="M50 174H186V188Q186 194 180 194H56Q50 194 50 188Z"/><path ${N} d="M98 50L114 56M98 70L114 76M98 90L114 96M98 110L114 116M62 44H116M50 184H186"/>`,
 loafer:c=>`<path d="M24 166Q24 140 58 134L120 130Q172 130 182 160V166Z"/><path fill="var(--surface)" d="M20 166H186V176Q186 182 180 182H26Q20 182 20 176Z"/><path ${N} d="M58 134Q86 124 112 132M88 140H124V150H88ZM24 172H186"/>`,
 maryjane:c=>`<path d="M24 166Q24 140 58 134L120 130Q172 130 182 160V166Z"/><path fill="var(--surface)" d="M20 166H186V176Q186 182 180 182H26Q20 182 20 176Z"/><path ${N} stroke-width="5" d="M70 134L90 104L112 132"/><circle cx="90" cy="104" r="4"/><path ${N} d="M58 134Q86 124 112 132"/>`,
 tote:c=>`<path ${N} stroke-width="6" stroke="${c}" d="M74 96V70Q74 44 100 44Q126 44 126 70V96"/><path ${N} d="M70 96V70Q70 40 100 40Q130 40 130 70V96M78 96V70Q78 48 100 48Q122 48 122 70V96"/><path d="M44 96H156L166 212H34Z"/><path ${N} d="M44 112H156M74 150H126" /><text x="100" y="172" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="18" font-weight="700" fill="var(--ink-line)" stroke="none">온도</text>`,
 shoulder:c=>`<path ${N} stroke-width="3" d="M52 110Q100 4 148 110"/><path d="M38 124Q38 106 56 106H144Q162 106 162 124V188Q162 206 144 206H56Q38 206 38 188Z"/><path ${N} d="M38 132Q100 168 162 132"/><circle cx="100" cy="150" r="6"/>`,
 puffer:c=>`<path ${N} stroke-width="3" d="M44 116Q100 30 156 116"/><path d="M36 136Q36 112 60 112H140Q164 112 164 136V180Q164 204 140 204H60Q36 204 36 180Z"/><path ${N} d="M36 146H164M36 170H164M36 192H164" stroke-dasharray="0" opacity=".9"/>`,
 hobo:c=>`<path ${N} stroke-width="4" d="M60 104Q100 50 140 104"/><path d="M50 104Q40 160 70 200Q100 214 130 200Q160 160 150 104Q100 120 50 104Z"/><path ${N} d="M62 120Q70 160 80 196M84 116Q88 160 94 204M116 116Q112 160 106 204M138 120Q130 160 120 196"/>`,
 wallet:c=>`<rect x="54" y="72" width="70" height="30" rx="3" fill="var(--surface)"/><rect x="36" y="90" width="128" height="90" rx="8"/><path ${N} d="M36 122H164M48 170H96"/><circle cx="140" cy="122" r="6"/>`,
 cardholder:c=>`<rect x="62" y="70" width="76" height="40" rx="3" fill="var(--surface)"/><rect x="48" y="96" width="104" height="72" rx="6"/><path ${N} d="M48 116H152M48 134H152"/>`,
 cap:c=>`<path d="M48 140Q50 70 112 70Q168 72 168 140Z"/><path d="M18 150Q62 128 168 140Q118 162 18 150Z"/><path ${N} d="M112 70Q100 100 98 140M112 70Q138 100 140 140M80 118H96"/><circle cx="112" cy="68" r="5"/>`,
 beanie:c=>`<circle cx="100" cy="58" r="16"/><path d="M56 156Q48 74 100 70Q152 74 144 156Z"/><rect x="48" y="146" width="104" height="44" rx="8"/><path ${N} d="M62 150V186M76 150V186M90 150V186M104 150V186M118 150V186M132 150V186M146 150V186"/>`,
 sunglasses:c=>`<path d="M28 108Q28 94 44 94H86Q98 94 95 108L90 134Q86 152 68 152H52Q32 152 30 134Z"/><path d="M172 108Q172 94 156 94H114Q102 94 105 108L110 134Q114 152 132 152H148Q168 152 170 134Z"/><path ${N} d="M95 106Q100 98 105 106M28 102L12 96M172 102L188 96M44 106L60 126M128 106L144 126" />`,
 shield:c=>`<path d="M20 112Q22 88 60 88H140Q178 88 180 112Q178 150 140 150H112Q100 140 88 150H60Q22 150 20 112Z"/><path ${N} d="M20 104L8 98M180 104L192 98M50 104Q100 96 150 104"/>`,
 scarf:c=>`<path d="M62 36H138V150L150 214H120L116 150H84L80 214H50L62 150Z"/><path ${N} d="M62 64H138M62 92H138M62 120H138M54 214V222M62 214V222M70 214V222M78 214V222M122 214V222M130 214V222M138 214V222M146 214V222"/>`,
 belt:c=>`<path d="M14 118H186V146H14Z"/><rect x="54" y="108" width="40" height="48" rx="5" fill="var(--surface)"/><path ${N} stroke-width="3" d="M58 132H90"/><circle cx="130" cy="132" r="3" fill="var(--ink-line)"/><circle cx="146" cy="132" r="3" fill="var(--ink-line)"/><circle cx="162" cy="132" r="3" fill="var(--ink-line)"/>`
};
function art(type,colorKey){const c=(COL[colorKey]||COL.black)[1];return `<svg class="art" viewBox="0 0 200 240" aria-hidden="true"><g fill="${c}" stroke="var(--ink-line)" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round">${SHAPES[type](c)}</g></svg>`}


/* ---------- photos with illustration fallback ----------
   Each picture tries its image paths in order. If none of the files exist,
   the line illustration underneath stays visible. */
window.ondoNext=function(el){const l=(el.dataset.alt||"").split("|").filter(Boolean);if(l.length){el.dataset.alt=l.slice(1).join("|");el.src=l[0]}else el.remove()};
function pic(srcs,type,color,alt){srcs=(srcs||[]).filter(Boolean);const first=srcs[0];
  return `<span class="pic">${art(type,color)}${first?`<img src="${first}" data-alt="${srcs.slice(1).join("|")}" alt="${esc(alt||"")}" loading="lazy" onerror="ondoNext(this)">`:""}</span>`}
function base(p){return p.img||`${IMAGES.productFolder}${p.id}`}
function prodSrcs(p,color){const b=base(p);if(/\.(jpe?g|png|webp|avif)(\?|$)/i.test(b))return[b];const e=IMAGES.ext;return[`${b}-${color}.${e}`,`${b}.${e}`]}
function gallerySrcs(p,color){const b=base(p),e=IMAGES.ext;if(/\.(jpe?g|png|webp|avif)(\?|$)/i.test(b))return[[b],[b],[b]];
  return[[`${b}-${color}.${e}`,`${b}.${e}`],[`${b}-2.${e}`,`${b}.${e}`],[`${b}-3.${e}`,`${b}.${e}`]]}

/* ---------- helpers ---------- */
const $=s=>document.querySelector(s);
const won=n=>"₩"+n.toLocaleString("ko-KR");
const esc=s=>String(s).replace(/[&<>"]/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[m]));
function sizesFor(p){
  if(p.c==="unisex")return["S","M","L","XL"];
  if(p.c==="women")return["XS","S","M","L"];
  if(p.c==="footwear")return["230","235","240","245","250","255","260","265","270","275"];
  if(p.t==="ring"||p.t==="signet")return["7호","9호","11호","13호","15호"];
  return["ONE SIZE"];
}
function store(k,v){try{if(v===undefined)return JSON.parse(localStorage.getItem(k));localStorage.setItem(k,JSON.stringify(v))}catch(e){return null}}

/* ---------- cart ---------- */
let bag=store("ondo-bag")||[];
let promo=store("ondo-promo")||"";
if(!Array.isArray(bag))bag=[];
bag=bag.filter(l=>byId[l.id]);
function saveBag(){store("ondo-bag",bag);store("ondo-promo",promo);$("#bagcount").textContent=bag.reduce((a,l)=>a+l.qty,0)}
function addToBag(id,color,size,qty){
  const p=byId[id];color=color||p.col[0];size=size||(sizesFor(p).length===1?"ONE SIZE":null);
  if(!size)return false;
  const ex=bag.find(l=>l.id===id&&l.color===color&&l.size===size);
  if(ex)ex.qty+=qty||1;else bag.push({id,color,size,qty:qty||1});
  saveBag();toast(`Added <b>${esc(p.n)}</b> to your bag`,true);return true;
}
let toastT;
function toast(html,link){const t=$("#toast");t.innerHTML=`<span>${html}</span>${link?'<a href="#cart">View bag</a>':""}`;t.hidden=false;clearTimeout(toastT);toastT=setTimeout(()=>t.hidden=true,2800)}

/* ---------- nav ---------- */
const NAV=[["new-arrivals","New","신상"],["trending","Trending","인기"],["best-sellers","Best","베스트"],["women","Women","여성"],["unisex","Unisex","공용"],["jewelry","Jewelry","주얼리"],["accessories","Accessories","액세서리"],["footwear","Footwear","신발"],["bags-wallets","Bags & Wallets","가방"]];
function renderNav(route){
  $("#catnav").innerHTML=NAV.map(([r,t,k])=>`<a href="#${r}" class="${route===r?"on":""}">${t}<small>${k}</small></a>`).join("");
  $("#drawersheet").innerHTML=`<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px"><b style="font-family:var(--display);font-size:26px;letter-spacing:.12em">ONDO</b><button data-act="menu-close" aria-label="Close menu" style="font-size:22px;width:40px;height:40px">×</button></div>`+
  [["home","Home","홈"],["products","Shop all","전체"],...NAV,["about","About","브랜드"],["contact","Contact","문의"],["cart","Bag","장바구니"]].map(([r,t,k])=>`<a href="#${r}">${t}<span>${k}</span></a>`).join("");
}

/* ---------- card ---------- */
function card(p,rank){
  const tags=p.tag.includes("new")?'<span class="tag new">New</span>':p.tag.includes("best")?'<span class="tag">Best</span>':p.tag.includes("trend")?'<span class="tag">Trending</span>':"";
  return `<article class="card"><div class="mwrap"><a href="#product-${p.id}" class="media" aria-label="${esc(p.n)}">${pic(prodSrcs(p,p.col[0]),p.t,p.col[0],p.n)}<span class="tags">${rank?"":tags}</span>${rank?`<span class="rank">${rank}</span>`:""}</a>
  <button class="quick" data-act="quick" data-id="${p.id}">${sizesFor(p).length===1?"+ Add":"Choose size"}</button></div>
  <a href="#product-${p.id}" class="info"><span class="nm">${esc(p.n)}</span><span class="kn">${p.k}</span><span class="pr">${won(p.p)}</span><span class="sw">${p.col.map(c=>`<i class="dot" style="background:${COL[c][1]}" title="${COL[c][0]}"></i>`).join("")}</span></a></article>`;
}


/* ---------- pages ---------- */
function home(){
  const news=P.filter(p=>p.tag.includes("new")).slice(0,8);
  const trend=P.filter(p=>p.tag.includes("trend"));
  const best=BEST_ORDER.slice(0,4).map(id=>byId[id]);
  const catTiles=[["women","skirt","charcoal"],["unisex","hoodie","black"],["jewelry","ring","silver"],["accessories","cap","cobalt"],["footwear","sneaker","white"],["bags","shoulder","black"]];
  return `
  <section class="hero"><div class="wrap hero-grid">
    <div class="hero-copy">
      <div>
        <p class="eyebrow">FW26 Collection · Seoul</p>
        <h1 class="display" style="margin-top:18px">Dressed for<br><em>Seoul after dark.</em><span class="ko-line">늦은 밤의 서울을 위한 옷</span></h1>
        <p class="hero-lead">Boxy outerwear, pleats, silver and platforms, cut in small runs in Seongsu-dong. Made for 17 to 25, for late subway rides, café shifts and the walk home along the river.</p>
        <div class="hero-ctas"><a class="btn btn-solid" href="#new-arrivals">Shop new arrivals</a><a class="btn btn-ghost" href="#trending">See what's trending</a></div>
      </div>
      <div class="hero-meta">
        <div><b>${P.filter(p=>p.tag.includes("new")).length}</b><span>new this drop</span></div>
        <div><b>Fri 19:00</b><span>weekly drop, KST</span></div>
        <div><b>₩100K</b><span>free shipping from</span></div>
      </div>
    </div>
    <a class="hero-stage" href="#product-p07" aria-label="Boxy Varsity Jacket, featured">
      <span class="hangul">온도</span>
      <span class="temp"><b>17°</b><span>Seongsu-dong · 23:40</span></span>
      <span class="sticker s1">#오오티디</span>
      <img class="cover-img" src="${IMAGES.hero}" alt="FW26 campaign" onload="this.parentNode.classList.add('photo')" onerror="this.remove()">
      <span class="fig a">${art("jacket","navy")}</span>
      <span class="fig b">${art("shoulder","silver")}</span>
      <span class="fig c">${art("loafer","black")}</span>
      <span class="sticker s2">Varsity · ${won(189000)}</span>
    </a>
  </div></section>

  <div class="marquee" aria-hidden="true"><div class="track">${Array(2).fill(`<span>Seoul after dark</span><span class="k">#데일리룩</span><span>Small runs, no restocks of the same color</span><span class="k">#오오티디</span><span>Made in Seongsu</span><span class="k">#성수동</span><span>925 silver</span><span class="k">#인스타감성</span>`).join("")}</div></div>

  <section class="block"><div class="wrap">
    <div class="sec-head"><h2 class="display">Shop by category<span class="ko">카테고리</span></h2><a class="link-u" href="#products">Shop all ${P.length} pieces</a></div>
    <div class="cat-grid">${catTiles.map(([c,t,col])=>`<a class="cat-tile" href="#${CAT_ROUTE[c]}"><span class="m">${pic([IMAGES.categories[c]],t,col,CATS[c].t)}</span><span><b>${CATS[c].t}</b><span>${CATS[c].k}</span></span></a>`).join("")}</div>
  </div></section>

  <section class="block" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2 class="display">New <em>arrivals</em><span class="ko">이번 주 신상품</span></h2><a class="link-u" href="#new-arrivals">View all new</a></div>
    <div class="grid">${news.map(p=>card(p)).join("")}</div>
  </div></section>

  <section class="block" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2 class="display">Three looks, <em>three neighbourhoods</em><span class="ko">동네별 스타일링</span></h2></div>
    <div class="looks">
      <div class="look l1"><img class="cover-img" src="${IMAGES.looks.euljiro}" alt="" onload="this.parentNode.classList.add('photo')" onerror="this.remove()"><span class="shade"></span><div class="figs">${art("jacket","black")}${art("boot","black")}</div>
        <div class="lt"><b>Euljiro</b><span>02:30</span></div>
        <div class="lb"><p>Varsity over a hoodie, combat boots for the stairs down to the bar.</p><a href="#product-p07">Shop the look</a></div></div>
      <div class="look l2"><img class="cover-img" src="${IMAGES.looks.hannam}" alt="" onload="this.parentNode.classList.add('photo')" onerror="this.remove()"><span class="shade"></span><div class="figs">${art("skirt","charcoal")}${art("maryjane","cherry")}</div>
        <div class="lt"><b>Hannam</b><span>15:10</span></div>
        <div class="lb"><p>Pleats, Mary Janes and a baby tee for gallery hopping.</p><a href="#product-p09">Shop the look</a></div></div>
      <div class="look l3"><img class="cover-img" src="${IMAGES.looks.seongsu}" alt="" onload="this.parentNode.classList.add('photo')" onerror="this.remove()"><span class="shade"></span><div class="figs">${art("pants","grey")}${art("runner","silver")}</div>
        <div class="lt"><b>Seongsu</b><span>23:40</span></div>
        <div class="lb"><p>Wide cargos and chunky runners for a pop-up queue.</p><a href="#product-p04">Shop the look</a></div></div>
    </div>
  </div></section>

  <section class="block" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2 class="display">Trending <em>now</em><span class="ko">요즘 인기</span></h2><a class="link-u" href="#trending">View trending</a></div>
    <div class="rail">${trend.map(p=>card(p)).join("")}</div>
  </div></section>

  <section class="block" style="padding-top:0"><div class="wrap">
    <div class="sec-head"><h2 class="display">Best <em>sellers</em><span class="ko">30일 판매 순위</span></h2><a class="link-u" href="#best-sellers">See the full ranking</a></div>
    <div class="grid">${best.map((p,i)=>card(p,i+1)).join("")}</div>
  </div></section>

  <section class="block" style="padding-top:0"><div class="wrap split">
    <div class="art-panel">${pic([IMAGES.jewelryFeature],"ring","silver","Silver jewelry")}<span class="sticker" style="left:20px;top:20px">925 Sterling</span><span class="sticker" style="right:20px;bottom:20px;background:var(--accent);color:var(--accent-fg)">Free engraving</span></div>
    <div>
      <p class="eyebrow">Jewelry · 주얼리</p>
      <h2 class="display" style="margin-top:14px">Silver that <em>stacks.</em></h2>
      <p>Rings, hoops and chains hand-finished in Jongno's jewelry district. Rings come in Korean sizes 7호 to 15호, and every piece ships in a pouch you can reuse.</p>
      <div class="hero-ctas"><a class="btn btn-solid" href="#jewelry">Shop jewelry</a><a class="btn btn-ghost" href="#product-p17">Silver Heart Ring · ${won(59000)}</a></div>
    </div>
  </div></section>

  <div class="wrap"><div class="promise">
    <div><b>Free shipping over ₩100,000</b><span>CJ대한통운, 1–2 business days</span></div>
    <div><b>Same-day in Seoul</b><span>Order by 13:00 for evening delivery</span></div>
    <div><b>7-day exchanges</b><span>Unworn, tags on, free size swaps</span></div>
    <div><b>Pick up in Seongsu</b><span>Ready in 2 hours at the flagship</span></div>
  </div></div>

  <section class="block"><div class="wrap"><div class="news">
    <div><h2 class="display">Get the drop <em>first.</em></h2><p>One email on Thursday night with Friday's pieces, plus 10% off your first order.</p></div>
    <form data-form="news"><input id="news-email" type="email" required placeholder="you@email.com" aria-label="Email address"><button class="btn" type="submit">Subscribe</button><p class="note" id="news-note">No spam. Unsubscribe in one click.</p></form>
  </div></div></section>`;
}

let LS={chip:"all",sort:"featured",q:""};
function listing(cfg){
  return `<div class="wrap">
    <div class="phead"><div><p class="crumbs"><a href="#home">Home</a> / ${cfg.crumb||"Shop"}</p><h1 class="display">${cfg.title}<span class="ko">${cfg.ko}</span></h1></div><p>${cfg.intro}</p></div>
    <div class="toolbar"><div class="chips" id="chips"></div>
      <div class="tools-r">${cfg.search?'<input class="field" id="q" type="search" placeholder="Search pieces" aria-label="Search">':""}
      <select class="field" id="sort" aria-label="Sort"><option value="featured">${cfg.rank?"Ranking":"Featured"}</option><option value="new">Newest first</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select>
      <span class="count" id="count"></span></div></div>
    <div class="grid" id="grid"></div>
  </div>`;
}
let curList=null;
function drawList(){
  const cfg=curList;let items=P.filter(cfg.f);
  if(cfg.rank)items=BEST_ORDER.map(id=>byId[id]).filter(cfg.f);
  // chips
  const chipKey=cfg.chipBy==="cat"?(p=>p.c):(p=>TYPE_LABEL[p.t]);
  const chipVals=[...new Set(items.map(chipKey))];
  const chipName=v=>cfg.chipBy==="cat"?CATS[v].t:v;
  $("#chips").innerHTML=`<button class="chip ${LS.chip==="all"?"on":""}" data-act="chip" data-v="all">All</button>`+chipVals.map(v=>`<button class="chip ${LS.chip===v?"on":""}" data-act="chip" data-v="${esc(v)}">${chipName(v)}</button>`).join("");
  if(LS.chip!=="all")items=items.filter(p=>chipKey(p)===LS.chip);
  if(LS.q){const q=LS.q.toLowerCase();items=items.filter(p=>(p.n+" "+p.k+" "+TYPE_LABEL[p.t]+" "+CATS[p.c].t).toLowerCase().includes(q))}
  const ranked=cfg.rank&&LS.sort==="featured";
  if(LS.sort==="new")items=[...items].sort((a,b)=>(b.tag.includes("new")-a.tag.includes("new"))||b.order-a.order);
  if(LS.sort==="low")items=[...items].sort((a,b)=>a.p-b.p);
  if(LS.sort==="high")items=[...items].sort((a,b)=>b.p-a.p);
  $("#count").textContent=items.length+(items.length===1?" piece":" pieces");
  $("#grid").innerHTML=items.length?items.map(p=>card(p,ranked?BEST_ORDER.indexOf(p.id)+1:0)).join(""):`<p class="empty" style="grid-column:1/-1">Nothing matches that yet. Try another filter or <a class="link-u" href="#products">shop all</a>.</p>`;
}

let pdpSel={};
function pdp(p){
  pdpSel={id:p.id,color:p.col[0],size:sizesFor(p).length===1?"ONE SIZE":null,qty:1};
  const related=P.filter(x=>x.c===p.c&&x.id!==p.id).slice(0,4);
  const sz=sizesFor(p);
  let guide="";
  if(p.c==="footwear")guide=`<div class="tbl"><table class="sg"><tr><th>KR (mm)</th><td>230</td><td>240</td><td>250</td><td>260</td><td>270</td></tr><tr><th>US W</th><td>6</td><td>7</td><td>8</td><td>9</td><td>10</td></tr><tr><th>US M</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><th>EU</th><td>36</td><td>37.5</td><td>39</td><td>40.5</td><td>42</td></tr></table></div><p>Between sizes? Go 5mm up for the boots and runners.</p>`;
  else if(p.t==="ring"||p.t==="signet")guide=`<div class="tbl"><table class="sg"><tr><th>KR (호)</th><td>7</td><td>9</td><td>11</td><td>13</td><td>15</td></tr><tr><th>Inner Ø (mm)</th><td>15.3</td><td>16.0</td><td>16.6</td><td>17.3</td><td>17.9</td></tr><tr><th>US</th><td>4</td><td>5</td><td>6</td><td>6.5</td><td>7.5</td></tr></table></div>`;
  else if(p.c==="unisex"||p.c==="women")guide=`<div class="tbl"><table class="sg"><tr><th>Size</th>${sz.map(s=>`<td>${s}</td>`).join("")}</tr><tr><th>KR</th>${(p.c==="women"?["44","55","66","77"]:["90","95","100","105"]).map(s=>`<td>${s}</td>`).join("")}</tr><tr><th>Height (cm)</th>${(p.c==="women"?["150–158","158–165","163–170","168–175"]:["160–168","168–175","175–182","180–188"]).map(s=>`<td>${s}</td>`).join("")}</tr></table></div><p>Model is 172cm and wears ${p.c==="women"?"S":"M"}. The fit is relaxed; size down for a closer fit.</p>`;
  else guide=`<p>One size, adjustable where it matters.</p>`;
  return `<div class="wrap">
  <p class="crumbs" style="margin-top:22px"><a href="#home">Home</a> / <a href="#${CAT_ROUTE[p.c]}">${CATS[p.c].t}</a> / ${esc(p.n)}</p>
  <div class="pdp">
    <div class="gallery" id="gallery">${galleryHTML(p,p.col[0])}</div>
    <div class="pinfo">
      <div><p class="eyebrow">${CATS[p.c].t} · ${TYPE_LABEL[p.t]}</p><h1 class="display" style="margin-top:10px">${esc(p.n)}</h1><p class="kn">${p.k}</p></div>
      <p class="price">${won(p.p)}</p>
      <div><div class="opt-l"><b>Color</b><span id="colname">${COL[p.col[0]][0]}</span></div><div class="swatches">${p.col.map((c,i)=>`<button class="swatch ${i?"":"on"}" data-act="color" data-v="${c}" style="background:${COL[c][1]}" aria-label="${COL[c][0]}"></button>`).join("")}</div></div>
      <div><div class="opt-l"><b>Size</b><span>${p.c==="footwear"?"Korean mm":(p.t==="ring"||p.t==="signet")?"Korean ring size":""}</span></div><div class="sizes">${sz.map(s=>`<button class="size ${sz.length===1?"on":""}" data-act="size" data-v="${s}">${s}</button>`).join("")}</div><p class="err" id="sizeerr" hidden>Choose a size first.</p></div>
      <div class="buy-row"><div class="qty"><button data-act="pq" data-d="-1" aria-label="Fewer">−</button><span id="pqty">1</span><button data-act="pq" data-d="1" aria-label="More">+</button></div><button class="btn btn-accent" data-act="add">Add to bag · ${won(p.p)}</button></div>
      <p class="hint">${p.p>=100000?"Ships free.":`Add ${won(100000-p.p)} more for free shipping.`} Order by 13:00 for same-day delivery in Seoul.</p>
      <div class="details">
        <details open><summary>Description</summary><p>${esc(p.d)}</p></details>
        <details><summary>Material &amp; care</summary><p>${esc(p.m)}. ${p.c==="jewelry"?"Store in the pouch and wipe with a polishing cloth. Avoid perfume and swimming pools.":"Machine wash cold inside out, or hand wash. Dry flat."}</p></details>
        <details><summary>Size guide</summary>${guide}</details>
        <details><summary>Shipping &amp; exchanges</summary><ul><li>Free shipping on orders over ₩100,000 (₩3,000 otherwise)</li><li>Same-day delivery within Seoul for orders placed by 13:00</li><li>Free size exchanges within 7 days, unworn with tags</li></ul></details>
      </div>
    </div>
  </div>
  <section class="block" style="padding-top:0"><div class="sec-head"><h2 class="display">Complete <em>the look</em><span class="ko">함께 보면 좋은 아이템</span></h2><a class="link-u" href="#${CAT_ROUTE[p.c]}">More ${CATS[p.c].t.toLowerCase()}</a></div><div class="grid">${related.map(x=>card(x)).join("")}</div></section>
  </div>`;
}
function galleryHTML(p,c){const g=gallerySrcs(p,c);return `<div class="g">${pic(g[0],p.t,c,p.n)}</div><div class="g alt">${pic(g[1],p.t,c,p.n)}</div><div class="g zoom">${pic(g[2],p.t,c,p.n)}</div>`}

function cart(){
  if(!bag.length)return `<div class="wrap"><div class="phead"><div><p class="crumbs"><a href="#home">Home</a> / Bag</p><h1 class="display">Your bag<span class="ko">장바구니</span></h1></div></div>
  <div class="empty"><p style="font-family:var(--display);font-size:32px;color:var(--fg)">Your bag is empty.</p><p style="margin-top:10px">New pieces drop every Friday at 19:00.</p><div class="hero-ctas" style="justify-content:center"><a class="btn btn-solid" href="#new-arrivals">Shop new arrivals</a><a class="btn btn-ghost" href="#best-sellers">Best sellers</a></div></div></div>`;
  const sub=bag.reduce((a,l)=>a+byId[l.id].p*l.qty,0);
  const disc=promo==="ONDO17"?Math.round(sub*0.1/100)*100:0;
  const ship=sub-disc>=100000?0:3000;
  const pct=Math.min(100,Math.round((sub-disc)/1000));
  return `<div class="wrap"><div class="phead"><div><p class="crumbs"><a href="#home">Home</a> / Bag</p><h1 class="display">Your bag<span class="ko">장바구니 · ${bag.reduce((a,l)=>a+l.qty,0)} items</span></h1></div></div>
  <div class="cart"><div class="lines">${bag.map((l,i)=>{const p=byId[l.id];return `<div class="line"><a class="thumb" href="#product-${p.id}">${pic(prodSrcs(p,l.color),p.t,l.color,p.n)}</a><div class="meta"><b>${esc(p.n)}</b><span>${p.k}</span><span>${COL[l.color][0]} · ${l.size}</span><div class="acts"><div class="qty"><button data-act="lq" data-i="${i}" data-d="-1" aria-label="Fewer">−</button><span>${l.qty}</span><button data-act="lq" data-i="${i}" data-d="1" aria-label="More">+</button></div><button class="rm" data-act="rm" data-i="${i}">Remove</button></div></div><span class="lp">${won(p.p*l.qty)}</span></div>`}).join("")}
    <div style="padding-top:22px"><a class="link-u" href="#products">← Keep shopping</a></div></div>
    <aside class="summary"><h3>Summary</h3>
      <div><p class="hint" style="margin-bottom:8px">${ship?`${won(100000-(sub-disc))} away from free shipping`:"You've unlocked free shipping"}</p><div class="ship-bar"><i style="width:${pct}%"></i></div></div>
      <div class="srow"><span>Subtotal</span><span>${won(sub)}</span></div>
      ${disc?`<div class="srow"><span>ONDO17 · 10% off</span><span>−${won(disc)}</span></div>`:""}
      <div class="srow"><span>Shipping</span><span>${ship?won(ship):"Free"}</span></div>
      <div class="srow tot"><span>Total</span><span>${won(sub-disc+ship)}</span></div>
      <form class="promo" data-form="promo"><input id="promo-code" placeholder="Promo code" aria-label="Promo code" value="${esc(promo)}"><button type="submit">Apply</button></form>
      <p class="hint" id="promo-note">${promo==="ONDO17"?"ONDO17 applied.":"First order? Try ONDO17 for 10% off."}</p>
      <button class="btn btn-accent btn-block" data-act="checkout">Checkout</button>
      <div class="notice" id="checkout-note" hidden>Checkout isn't connected yet. This storefront is a preview, so no payment is taken. Connect a payment provider such as Toss Payments, KakaoPay or Naver Pay to start taking orders.</div>
      <p class="hint">Pay with card, KakaoPay, Naver Pay or Toss once checkout is live.</p>
    </aside></div></div>`;
}

function about(){
  return `<div class="wrap">
  <div class="about-hero"><div><p class="eyebrow">About · 브랜드 소개</p><h1 class="display" style="margin-top:16px">Clothes at the <em>temperature</em> of the city.</h1></div>
  <p>온도 means temperature. We started ONDO in a third-floor studio in Seongsu-dong in 2022, making the clothes we couldn't find: pieces that look sharp on a 17°C night in Seoul, sit right in a mirror selfie, and don't cost a month of part-time shifts.</p></div>
  <div class="facts"><div><b>2022</b><span>founded in Seongsu-dong</span></div><div><b>300</b><span>units max per color, per drop</span></div><div><b>17–25</b><span>the age of most of our team</span></div><div><b>92%</b><span>of pieces made within Seoul</span></div></div>
  <section class="block"><div class="sec-head"><h2 class="display">What we <em>care about</em><span class="ko">우리의 기준</span></h2></div>
  <div class="values"><div><h3>Small runs</h3><p>Every color is made once, in a run of 300 or fewer. When it sells out, the next drop is something new. You won't see your outfit on everyone on Line 2.</p></div>
  <div><h3>Made nearby</h3><p>Cut and sewn by partner workshops in Changsin-dong and finished in our studio. Jewelry is cast and polished in Jongno. Shorter trips, closer checks.</p></div>
  <div><h3>Fair price</h3><p>We sell direct and skip the department-store markup. Most pieces sit under ₩150,000, and we publish what each one costs us to make on request.</p></div></div></section>
  <section class="block" style="padding-top:0"><div class="split"><div class="art-panel">${pic([IMAGES.aboutStory],"hoodie","black","ONDO studio")}<span class="sticker" style="left:20px;top:20px">The first piece, 2022</span></div>
  <div><p class="eyebrow">Our story</p><h2 class="display" style="margin-top:14px">From one hoodie <em>to a flagship.</em></h2>
  <div class="timeline" style="margin-top:24px"><div><b>2022</b><p>First drop: one black hoodie, 120 units, sold out from an Instagram story in four hours.</p></div><div><b>2023</b><p>Added women's and a silver jewelry line made in Jongno.</p></div><div><b>2024</b><p>First pop-up in Seongsu. The queue went around the block.</p></div><div><b>2025</b><p>Opened the Seongsu flagship and started weekly Friday drops.</p></div><div><b>2026</b><p>FW26 "Seoul after dark" and our second store in Hongdae.</p></div></div></div></div></section>
  </div>`;
}

function contact(){
  return `<div class="wrap">
  <div class="phead"><div><p class="crumbs"><a href="#home">Home</a> / Contact</p><h1 class="display">Contact<span class="ko">고객센터 · 매장 안내</span></h1></div><p>Questions about sizing, an order or a collab? We answer within one business day. CS hours are weekdays 10:00–18:00 KST.</p></div>
  <div class="contact">
    <div style="display:flex;flex-direction:column;gap:36px">
      <div><p class="eyebrow" style="margin-bottom:12px">Reach us</p>
        <div style="display:flex;flex-direction:column;gap:12px">
          <div class="copyrow"><span>hello@ondo.example</span><button data-act="copy" data-v="hello@ondo.example">Copy</button></div>
          <div class="copyrow"><span>KakaoTalk channel: @ondo_seoul</span><button data-act="copy" data-v="@ondo_seoul">Copy</button></div>
          <div class="copyrow"><span>Instagram: @ondo.seoul</span></div>
        </div></div>
      <div><p class="eyebrow" style="margin-bottom:6px">Stores</p><div class="stores">
        <div class="store"><b>Seongsu Flagship</b><span class="hrs">11:00–22:00</span><span>성동구 성수동 · 3 min from Seongsu Stn. exit 4</span><span class="hrs">Daily</span></div>
        <div class="store"><b>Hongdae</b><span class="hrs">12:00–22:00</span><span>마포구 서교동 · 5 min from Hongik Univ. Stn. exit 9</span><span class="hrs">Daily</span></div>
        <div class="store"><b>Pick-up point</b><span class="hrs">2 hours</span><span>Click and collect at the Seongsu flagship</span><span class="hrs">After order</span></div>
      </div></div>
      <div class="faq"><p class="eyebrow" style="margin-bottom:6px">Quick answers</p>
        <details><summary>When do new drops go live?</summary><p>Every Friday at 19:00 KST. Subscribers get a preview email on Thursday night.</p></details>
        <details><summary>How do exchanges work?</summary><p>Request an exchange within 7 days of delivery. Size swaps are free; items must be unworn with tags attached.</p></details>
        <details><summary>Do you ship outside Korea?</summary><p>Yes, to Japan, Taiwan, Hong Kong, Singapore and the US via EMS. Duties are paid by the customer.</p></details>
        <details><summary>Is the jewelry hypoallergenic?</summary><p>All jewelry is nickel-free 925 sterling silver or gold vermeil on silver.</p></details>
      </div>
    </div>
    <form class="cform" data-form="contact" novalidate>
      <label>Name<input id="c-name" required placeholder="김하늘"></label>
      <label>Email<input id="c-email" type="email" required placeholder="you@email.com"></label>
      <label>Topic<select id="c-topic"><option>Sizing &amp; fit</option><option>My order</option><option>Exchange or return</option><option>Collab &amp; press</option><option>Something else</option></select></label>
      <label>Order number (optional)<input id="c-order" placeholder="ONDO-26-000000"></label>
      <label class="full">Message<textarea id="c-msg" required placeholder="Tell us what you need"></textarea></label>
      <div class="full" style="display:flex;gap:14px;align-items:center;flex-wrap:wrap"><button class="btn btn-solid" type="submit">Send message</button><p class="hint" id="c-note">We reply within one business day.</p></div>
    </form>
  </div></div>`;
}

/* ---------- router ---------- */
function route(){
  const h=(location.hash||"#home").slice(1)||"home";
  const app=$("#app");curList=null;
  renderNav(h);
  if(h==="home")app.innerHTML=home();
  else if(h==="cart")app.innerHTML=cart();
  else if(h==="about")app.innerHTML=about();
  else if(h==="contact")app.innerHTML=contact();
  else if(h.startsWith("product-")&&byId[h.slice(8)])app.innerHTML=pdp(byId[h.slice(8)]);
  else{
    let cfg=null;
    if(h==="products")cfg={title:"Shop all",ko:"전체 상품",intro:`All ${P.length} pieces in the FW26 collection, from 925 silver to platform sneakers.`,f:()=>true,chipBy:"cat",search:true};
    else if(COLLECTIONS[h]){const c=COLLECTIONS[h];cfg={title:c.t,ko:c.k,intro:c.i,f:c.f,chipBy:"cat",rank:c.rank,crumb:c.t}}
    else{const ck=Object.keys(CAT_ROUTE).find(k=>CAT_ROUTE[k]===h);if(ck){const c=CATS[ck];cfg={title:c.t,ko:c.k,intro:c.i,f:p=>p.c===ck,chipBy:"type",crumb:c.t}}}
    if(!cfg){app.innerHTML=home()}
    else{LS={chip:"all",sort:"featured",q:""};curList=cfg;app.innerHTML=listing(cfg);drawList()}
  }
  $("#drawer").hidden=true;
  window.scrollTo(0,0);
}

/* ---------- events ---------- */
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-act]");if(!b)return;
  const a=b.dataset.act;
  if(a==="menu"){$("#drawer").hidden=false}
  else if(a==="menu-close"){$("#drawer").hidden=true}
  else if(a==="quick"){e.preventDefault();const p=byId[b.dataset.id];if(sizesFor(p).length===1)addToBag(p.id);else location.hash="product-"+p.id}
  else if(a==="chip"){LS.chip=b.dataset.v;drawList()}
  else if(a==="color"){pdpSel.color=b.dataset.v;document.querySelectorAll(".swatch").forEach(s=>s.classList.toggle("on",s===b));$("#colname").textContent=COL[b.dataset.v][0];$("#gallery").innerHTML=galleryHTML(byId[pdpSel.id],b.dataset.v)}
  else if(a==="size"){pdpSel.size=b.dataset.v;document.querySelectorAll(".size").forEach(s=>s.classList.toggle("on",s===b));$("#sizeerr").hidden=true}
  else if(a==="pq"){pdpSel.qty=Math.max(1,Math.min(9,pdpSel.qty+ +b.dataset.d));$("#pqty").textContent=pdpSel.qty}
  else if(a==="add"){if(!pdpSel.size){$("#sizeerr").hidden=false;return}addToBag(pdpSel.id,pdpSel.color,pdpSel.size,pdpSel.qty)}
  else if(a==="lq"){const l=bag[+b.dataset.i];l.qty=Math.max(1,Math.min(9,l.qty+ +b.dataset.d));saveBag();$("#app").innerHTML=cart()}
  else if(a==="rm"){const l=bag.splice(+b.dataset.i,1)[0];saveBag();$("#app").innerHTML=cart();toast(`Removed ${esc(byId[l.id].n)}`)}
  else if(a==="checkout"){$("#checkout-note").hidden=false}
  else if(a==="copy"){const v=b.dataset.v;const done=()=>{b.textContent="Copied"};try{navigator.clipboard.writeText(v).then(done,()=>{selectText(b.previousElementSibling)})}catch(err){selectText(b.previousElementSibling)}}
  else if(a==="theme"){cycleTheme()}
});
function selectText(el){const r=document.createRange();r.selectNodeContents(el);const s=getSelection();s.removeAllRanges();s.addRange(r)}
document.addEventListener("input",e=>{if(e.target.id==="q"){LS.q=e.target.value.trim();drawList()}});
document.addEventListener("change",e=>{if(e.target.id==="sort"){LS.sort=e.target.value;drawList()}});
document.addEventListener("submit",e=>{
  e.preventDefault();const f=e.target.dataset.form;
  if(f==="news"){const v=$("#news-email").value.trim();$("#news-note").textContent=/.+@.+\..+/.test(v)?`Thanks. ${v} is on the list for Thursday's preview (preview site: emails aren't connected yet).`:"Enter a valid email address."}
  if(f==="promo"){const v=$("#promo-code").value.trim().toUpperCase();if(v==="ONDO17"){promo=v;saveBag();$("#app").innerHTML=cart();toast("ONDO17 applied: 10% off")}else{$("#promo-note").textContent=v?`"${esc(v)}" isn't a valid code.`:"Enter a code first.";$("#promo-note").className="err"}}
  if(f==="contact"){const n=$("#c-name").value.trim(),em=$("#c-email").value.trim(),m=$("#c-msg").value.trim();const note=$("#c-note");
    if(!n||!/.+@.+\..+/.test(em)||!m){note.className="err";note.textContent="Add your name, a valid email and a message.";return}
    note.className="hint";note.textContent=`Thanks, ${n}. Your message is ready. This preview isn't connected to an inbox yet, so please also email hello@ondo.example.`;e.target.reset()}
});
document.addEventListener("keydown",e=>{if(e.key==="Escape")$("#drawer").hidden=true});

/* ---------- theme ---------- */
const THEMES=["system","light","dark"];
let theme=store("ondo-theme")||"system";
function applyTheme(){if(theme==="system")document.documentElement.removeAttribute("data-theme");else document.documentElement.setAttribute("data-theme",theme);$("#themebtn").textContent="Theme: "+theme}
function cycleTheme(){theme=THEMES[(THEMES.indexOf(theme)+1)%3];store("ondo-theme",theme);applyTheme()}

applyTheme();saveBag();
window.addEventListener("hashchange",route);
route();
})();
