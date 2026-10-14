# ONDO 온도 — website files

```
ondo-website/
├── index.html          page shell (header, footer)
├── css/style.css       all styling (colours are at the top, in :root)
├── js/data.js          products, prices, colours + IMAGE PATHS  ← edit this
├── js/app.js           pages, cart, routing (no need to touch)
└── images/
    ├── IMAGE-LIST.txt  every file name the site looks for
    ├── hero/           hero.jpg
    ├── home/           jewelry-feature.jpg
    ├── about/          story.jpg
    ├── categories/     women.jpg, unisex.jpg, jewelry.jpg, accessories.jpg, footwear.jpg, bags-wallets.jpg
    ├── looks/          euljiro.jpg, hannam.jpg, seongsu.jpg
    └── products/       p01.jpg … p42.jpg
```

## Changing images

1. Put a photo in the matching folder with the matching name, e.g. `images/products/p01.jpg` for the Midnight Seongsu Hoodie. `images/IMAGE-LIST.txt` lists which ID is which product.
2. Refresh the page. That's it.

If a file is missing, the site shows the drawn illustration, so you can add photos one at a time.

**Product photo extras (optional)**

| File | Used for |
|---|---|
| `p01.jpg` | main photo (cards, cart, product page) |
| `p01-2.jpg`, `p01-3.jpg` | 2nd and 3rd photos on the product page |
| `p01-black.jpg`, `p01-grey.jpg` … | shown when that colour is selected |

Colour names: black, white, grey, cobalt, oat, navy, charcoal, pink, lilac, champagne, ivory, denim, silver, pearl, gold, cherry, brown, sky.

**Using different file names, PNG/WebP, or online links**

Open `js/data.js`:

- Change `ext:"jpg"` to `"png"` or `"webp"` to switch the product file type.
- Change any path in `IMAGES` (hero, categories, looks…) to another file or a full `https://` URL.
- To give one product a specific image, add it as the last item in that product's row:
  `["p01", "Midnight Seongsu Hoodie", …, "100% cotton fleece · Made in Korea", "images/products/hoodie-front.jpg"]`

**Recommended sizes**: products and categories in portrait (4:5 or 3:4), at least 1200 px wide, compressed under ~400 KB (squoosh.app works well). Photos are cropped to fit, so keep the subject centred.

## Running it

- **Quick look:** double-click `index.html`.
- **Local server (recommended):** in this folder run `python3 -m http.server 8000` and open http://localhost:8000
- **Going live:** upload the whole folder to Netlify (drag and drop), Vercel, GitHub Pages or any web host.

## Editing products

Each product in `js/data.js` is one row:
`[id, name, Korean name, category, illustration type, price in KRW, colours, tags, description, material, optional image]`

- Categories: `unisex`, `women`, `jewelry`, `accessories`, `footwear`, `bags`
- Tags: `"new"` → New Arrivals, `"trend"` → Trending. The Best Sellers order is `BEST_ORDER`.

Checkout, the contact form and the newsletter don't send anything yet. Connect a payment provider (Toss Payments, KakaoPay, Naver Pay) and a form service before going live.
