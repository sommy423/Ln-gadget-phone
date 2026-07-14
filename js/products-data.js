// ============================================================
// LN Gadget and Phone — Product Catalog
// CUSTOMIZE: Replace names, prices and image paths with real
// stock. Prices are in Naira (NGN). Add/remove items freely —
// the page will re-render automatically from this list.
//
// image: point this to a real photo in /images once available,
// e.g. "images/iphone-13-pro.jpg". Until then, a styled
// placeholder is shown automatically.
// ============================================================

const PRODUCTS = [

  // ---- Apple iPhones ----
  { id: 1,  name: "iPhone 11",           category: "iphones",     price: 285000, image: "images/iphone11.jpg" },
  { id: 2,  name: "iPhone 13",           category: "iphones",     price: 480000, image: "images/iphone13.jpg" },
  { id: 3,  name: "iPhone 13 Pro Max",   category: "iphones",     price: 720000, image: "images/iphone13promax.jpg" },
  { id: 4,  name: "iPhone 15",           category: "iphones",     price: 980000, image: "images/iphone15.jpg" },

  // ---- Samsung Phones ----
  { id: 5,  name: "Samsung Galaxy A15",  category: "samsung",     price: 165000, image: "images/Samsung Galaxy A15.jpg" },
  { id: 6,  name: "Samsung Galaxy A54",  category: "samsung",     price: 340000, image: "images/Samsung Galaxy A54.jpg" },
  { id: 7,  name: "Samsung Galaxy S23",  category: "samsung",     price: 610000, image: "images/Samsung Galaxy S23.jpg" },

  // ---- Tecno Phones ----
  { id: 8,  name: "Tecno Spark 10",      category: "tecno",       price: 95000,  image: "images/Tecno Spark 10 pro.jpg" },
  { id: 9,  name: "Tecno Camon 20",      category: "tecno",       price: 175000, image: "images/Tecno Camon 20.jpg" },
  { id: 10, name: "Tecno Phantom V Flip",category: "tecno",       price: 420000, image: "images/Tecno Phantom V Flip.jpg" },

  // ---- Infinix Phones ----
  { id: 11, name: "Infinix Smart 8",     category: "infinix",     price: 78000,  image: "images/Infinix Smart 8.jpg" },
  { id: 12, name: "Infinix Hot 40",      category: "infinix",     price: 128000, image: "images/Infinix Hot 40.jpg" },
  { id: 13, name: "Infinix Note 30",     category: "infinix",     price: 190000, image: "images/Infinix Note 30.jpg" },

  // ---- AirPods ----
  { id: 14, name: "AirPods 2nd Gen",     category: "airpods",     price: 65000,  image: "images/Airpods 2nd Gen.jpg" },
  { id: 15, name: "AirPods Pro 2",       category: "airpods",     price: 165000, image: "images/Airpods pro 2.jpg" },
  { id: 16, name: "AirPods Max",         category: "airpods",     price: 420000, image: "images/AirPods Max.jpg" },

  // ---- Smart Watches ----
  { id: 17, name: "Smart Watch Series 8 (Clone)", category: "smartwatches", price: 22000,  image: "images/Smart Watch series 8.jpg" },
  { id: 18, name: "Apple Watch SE",      category: "smartwatches", price: 240000, image: "images/Apple Watch SE.jpg" },
  { id: 19, name: "Fitness Tracker Band", category: "smartwatches", price: 15000,  image: "images/Fitness Tracker Band.jpg" },

  // ---- Bluetooth Speakers ----
  { id: 20, name: "JBL Flip 6 Bluetooth Speaker", category: "speakers", price: 85000, image: "images/JBL Flip 6.jpg" },
  { id: 21, name: "Mini Bluetooth Speaker",       category: "speakers", price: 12000, image: "images/Mini Bluetooth speaker.jpg" },

  // ---- Sound Boxes ----
  { id: 22, name: "Portable Sound Box (Large)", category: "soundboxes", price: 45000, image: "images/Portale Sound Box.jpg" },
  { id: 23, name: "Rechargeable Sound Box",     category: "soundboxes", price: 28000, image: "images/Reachargeble Sound Box.jpg" },

  // ---- Chargers ----
  { id: 24, name: "20W Fast Charger (Type-C)", category: "chargers", price: 8500, image: "images/20W fast charger.jpg" },
  { id: 25, name: "Original iPhone Charger",   category: "chargers", price: 13500, image: "images/origina iphone charge.jpg" },

  // ---- Power Banks ----
  { id: 26, name: "10,000mAh Power Bank", category: "powerbanks", price: 14000, image: "images/10,000mAh.jpg" },
  { id: 27, name: "20,000mAh Power Bank", category: "powerbanks", price: 22000, image: "images/20mAh.jpg" },

  // ---- Phone Cases ----
  { id: 28, name: "Silicone Phone Case",  category: "cases", price: 3500, image: "images/silicon case.jpg" },
  { id: 29, name: "Leather Wallet Case",  category: "cases", price: 6500, image: "images/Leather wallet Case.jpg" },

  // ---- Screen Protectors ----
  { id: 30, name: "Tempered Glass Screen Protector", category: "protectors", price: 2000, image: "images/Tempered Glass.jpg" },
  { id: 31, name: "Privacy Screen Protector",        category: "protectors", price: 3000, image: "images/Privacy protector.jpg" },

  // ---- Other Accessories ----
  { id: 32, name: "Phone Holder / Stand", category: "accessories", price: 4500, image: "images/phone stand.jpg" },
  { id: 33, name: "USB-C to Aux Adapter", category: "accessories", price: 3000, image: "images/UBS-C.jpg" },
  { id: 34, name: "Selfie Ring Light",    category: "accessories", price: 9500, image: "images/ring light.jpg" },

];

// Category labels shown on the filter pills
const CATEGORIES = [
  { slug: "all",          label: "All Products" },
  { slug: "iphones",      label: "Apple iPhones" },
  { slug: "samsung",      label: "Samsung Phones" },
  { slug: "tecno",        label: "Tecno Phones" },
  { slug: "infinix",      label: "Infinix Phones" },
  { slug: "airpods",      label: "AirPods" },
  { slug: "smartwatches", label: "Smart Watches" },
  { slug: "speakers",     label: "Bluetooth Speakers" },
  { slug: "soundboxes",   label: "Sound Boxes" },
  { slug: "chargers",     label: "Chargers" },
  { slug: "powerbanks",   label: "Power Banks" },
  { slug: "cases",        label: "Phone Cases" },
  { slug: "protectors",   label: "Screen Protectors" },
  { slug: "accessories",  label: "Other Accessories" },
];