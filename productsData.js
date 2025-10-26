// productsData.js - Shared product data for DibbyFood canned food products

export const products = [
  {
    id: 1,
    name: "Premium Canned Tomatoes",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    description: "Rich, flavorful tomatoes packed at peak freshness. Perfect for sauces, soups, and stews.",
    category: "Vegetables",
    netWeight: "400g",
    shelfLife: "3 years"
  },
  {
    id: 2,
    name: "Organic Canned Beans",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
    description: "High-quality organic beans, ready to eat. Great source of protein and fiber.",
    category: "Legumes",
    netWeight: "425g",
    shelfLife: "2 years"
  },
  {
    id: 3,
    name: "Canned Tuna in Water",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    description: "Premium tuna packed in water. High in protein, low in fat. Perfect for salads and sandwiches.",
    category: "Seafood",
    netWeight: "185g",
    shelfLife: "3 years"
  },
  {
    id: 4,
    name: "Canned Corn Kernels",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400",
    description: "Sweet corn kernels, picked at peak ripeness. No preservatives added.",
    category: "Vegetables",
    netWeight: "340g",
    shelfLife: "2 years"
  },
  {
    id: 5,
    name: "Canned Pineapple Chunks",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?w=400",
    description: "Tropical pineapple chunks in natural juice. Perfect for desserts and smoothies.",
    category: "Fruits",
    netWeight: "227g",
    shelfLife: "2 years"
  },
  {
    id: 6,
    name: "Canned Chickpeas",
    price: 2.79,
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400",
    description: "Nutritious chickpeas, ready to use. Ideal for hummus, salads, and curries.",
    category: "Legumes",
    netWeight: "400g",
    shelfLife: "2 years"
  }
];

// Helper function to get products for order page (simplified data)
export const getOrderMenuItems = () => {
  return products.map(product => ({
    id: product.id,
    name: product.name,
    price: product.price,
    category: product.category,
    netWeight: product.netWeight
  }));
};
