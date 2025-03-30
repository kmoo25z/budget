export const defaultCategories = [
  // Income Categories
  {
    id: "salary",
    name: "Salary",
    type: "INCOME",
    color: "#22c55e", // green-500
    icon: "Wallet",
  },
  {
    id: "freelance",
    name: "Freelance",
    type: "INCOME",
    color: "#06b6d4", // cyan-500
    icon: "Laptop",
  },
  {
    id: "investments",
    name: "Investments",
    type: "INCOME",
    color: "#6366f1", // indigo-500
    icon: "TrendingUp",
  },
  {
    id: "business",
    name: "Business",
    type: "INCOME",
    color: "#ec4899", // pink-500
    icon: "Building",
  },
  {
    id: "royalties",
    name: "Royalties",
    type: "INCOME",
    color: "#f472b6", // pink-400
    icon: "Crown",
  },
  {
    id: "rental",
    name: "Rental",
    type: "INCOME",
    color: "#f59e0b", // amber-500
    icon: "Home",
  },
  {
    id: "other-income",
    name: "Other Income",
    type: "INCOME",
    color: "#64748b", // slate-500
    icon: "Plus",
  },

  // Expense Categories
  {
    id: "housing",
    name: "Housing",
    type: "EXPENSE",
    color: "#ef4444", // red-500
    icon: "Home",
    subcategories: ["Rent", "Mortgage", "Property Tax", "Maintenance"],
  },
  {
    id: "transportation",
    name: "Transportation",
    type: "EXPENSE",
    color: "#f97316", // orange-500
    icon: "Car",
    subcategories: ["Fuel", "Public Transport", "Maintenance", "Parking"],
  },
  {
    id: "groceries",
    name: "Groceries",
    type: "EXPENSE",
    color: "#84cc16", // lime-500
    icon: "Shopping",
  },
  {
    id: "utilities",
    name: "Utilities",
    type: "EXPENSE",
    color: "#06b6d4", // cyan-500
    icon: "Zap",
    subcategories: ["Electricity", "Water", "Gas", "Internet", "Phone"],
  },
  {
    id: "education",
    name: "Education",
    type: "EXPENSE",
    color: "#6366f1", // indigo-500
    icon: "GraduationCap",
    subcategories: ["Tuition", "Books", "Courses", "Workshops"],
  },
  {
    id: "travel",
    name: "Travel",
    type: "EXPENSE",
    color: "#0ea5e9", // sky-500
    icon: "Plane",
    subcategories: ["Flights", "Accommodation", "Tours"],
  },
  {
    id: "insurance",
    name: "Insurance",
    type: "EXPENSE",
    color: "#64748b", // slate-500
    icon: "Shield",
    subcategories: ["Life", "Home", "Vehicle", "Health"],
  },
  {
    id: "subscriptions",
    name: "Subscriptions",
    type: "EXPENSE",
    color: "#8b5cf6", // violet-500
    icon: "CreditCard",
    subcategories: ["Streaming", "Software", "Memberships","Netflix", "Domains","microsoft",,"Ms Office","Adobe"],
  },
  {
    id: "emergency",
    name: "Emergency Fund",
    type: "EXPENSE",
    color: "#f43f5e", // rose-500
    icon: "AlertCircle",
    subcategories: ["Savings", "Benovelence"],
  },
  {
    id: "gifts",
    name: "Gifts & Donations",
    type: "EXPENSE",
    color: "#f472b6", // pink-400
    icon: "Gift",
    subcategories: ["Charity", "Presents", "Special Occasions", "Tithing"],
  },
  {
    id: "misc",
    name: "Miscellaneous",
    type: "EXPENSE",
    color: "#94a3b8", // slate-400
    icon: "DotsHorizontal",
    subcategories: ["Unexpected Costs", "Fees", "Other"],
  },
  {
    id: "forein money transfer",
    name: "Foreign Money Transfer",
    type: "EXPENSE",
    color: "#a21caf", // purple-700
    icon: "Heart",
    subcategories: ["Savings (Foreign Bank)", "Family Support(Africa)", "Chama","Investment","Business","Other","Project Funding"],
  },
  {
    id: "entertainment",
    name: "Entertainment",
    type: "EXPENSE",
    color: "#eab308", // amber-400
    icon: "Film",
    subcategories: ["Dining Out", "Movies", "Events"],
  },
  {
    id: "shopping",
    name: "Shopping",
    type: "EXPENSE",
    color: "#facc15", // amber-300
    icon: "ShoppingCart",
  },
  {
    id: "loans, debt and credit cards",
    name: "Loans, Debt & Credit Cards",
    type: "EXPENSE",
    color: "#4ade80", // green-400
    icon: "Heart",
    subcategories: ["Student Loan", "Credit Cards", "Personal Loan", "Car Loan", "Mortgage", "Other"],
  },
  {
    id: "personal",
    name: "Personal Care",
    type: "EXPENSE",
    color: "#a78bfa", // purple-300
    icon: "Scissors",
    subcategories: ["Haircuts", "Cosmetics", "Spa"],
  },
  {
    id: "bills",
    name: "Bills",
    type: "EXPENSE",
    color: "#fbbf24", // amber-300
    icon: "FileText",
  },
];

// Mapping category IDs to colors
export const categoryColors = defaultCategories.reduce((acc, category) => {
  acc[category.id] = category.color;
  return acc;
}, {});