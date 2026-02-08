const categories = [
  { name: "Vegetables & Fruits", emoji: "🥬" },
  { name: "Dairy, Bread & Eggs", emoji: "🥛" },
  { name: "Atta, Rice & Dal", emoji: "🌾" },
  { name: "Masala & Dry Fruits", emoji: "🌶️" },
  { name: "Sweet Cravings", emoji: "🍫" },
  { name: "Cold Drinks & Juices", emoji: "🥤" },
  { name: "Munchies", emoji: "🍿" },
  { name: "Biscuits & Bakery", emoji: "🥐" },
  { name: "Tea, Coffee & Health", emoji: "☕" },
  { name: "Bath & Body", emoji: "🧴" },
  { name: "Cleaning Essentials", emoji: "🧹" },
  { name: "Home & Kitchen", emoji: "🍳" },
];

const productNames = [
  "Aashirvaad Atta",
  "Tata Salt",
  "Fortune Sunflower Oil",
  "Britannia Bread",
  "Amul Butter",
  "Mother Dairy Milk",
  "Dettol Handwash",
  "Dove Soap",
  "Colgate Toothpaste",
  "Surf Excel",
  "Red Label Tea",
  "Bru Coffee",
  "Maggi Noodles",
  "Lay's Chips",
  "Kurkure",
  "Cadbury Dairy Milk",
  "Basmati Rice",
  "Organic Banana",
  "Shimla Apple",
  "Fresh Tomato",
  "Cucumber",
  "Onion",
  "Potato",
  "Moong Dal",
  "Chana Dal",
  "Kissan Jam",
  "Haldiram Bhujia",
  "Pepsi",
  "Coca-Cola",
  "Real Juice",
  "Fortune Biryani Rice",
  "Saffola Oats",
  "Nescafe Classic",
  "Himalaya Face Wash",
  "Ariel Detergent",
  "Godrej Aer",
  "Lizol Floor Cleaner",
];

const productEmojis = ["🥫", "🥛", "🍞", "🧈", "🧴", "🍚", "🍪", "🍫", "🥤", "🧼", "🍜", "🥬", "🍎", "🥔", "🧃"];
const tags = ["5 mins", "10 mins", "Bestseller", "Trending", "Limited offer", "Assured", "Fresh stock"];

const categoryRow = document.getElementById("category-row");
const productGrid = document.getElementById("product-grid");
const householdGrid = document.getElementById("household-grid");

categories.forEach((category) => {
  const card = document.createElement("div");
  card.className = "category-card";
  card.innerHTML = `<div class="emoji">${category.emoji}</div><strong>${category.name}</strong><span class="muted">600+ items</span>`;
  categoryRow.appendChild(card);
});

const randomFrom = (list) => list[Math.floor(Math.random() * list.length)];

const buildProductCard = (index) => {
  const name = randomFrom(productNames);
  const weight = `${100 + (index % 9) * 50} g`;
  const price = 30 + (index % 20) * 7;
  const mrp = price + 20;
  const emoji = randomFrom(productEmojis);
  const tag = randomFrom(tags);

  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <div class="thumb">${emoji}</div>
    <span class="tag">${tag}</span>
    <h4>${name} ${index + 1}</h4>
    <div class="meta">${weight}</div>
    <div class="price-row">
      <div>
        <strong>₹${price}</strong>
        <span class="meta">MRP ₹${mrp}</span>
      </div>
      <button>Add</button>
    </div>
  `;

  return card;
};

const fillGrid = (grid, count) => {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < count; i += 1) {
    fragment.appendChild(buildProductCard(i));
  }
  grid.appendChild(fragment);
};

fillGrid(productGrid, 1200);
fillGrid(householdGrid, 800);
