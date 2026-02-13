export const PricingPlanData = {
    itemPrices: [
        { name: "Packaged Water", price: 30 },
        { name: "Mocktail", price: 80 },
        { name: "Veg Starter", price: 120 },
        { name: "Veg Starters", price: 120 },
        { name: "Farsan", price: 90 },
        { name: "Veg Mains", price: 180 },
        { name: "Dal or Kadhi", price: 100 },
        { name: "Rice or Pulao", price: 90 },
        { name: "Rice or Pulav or Biryani", price: 160 },
        { name: "Rice or Pulao or Biryani", price: 160 },
        { name: "Chinese Rice or Noodles", price: 150 },
        { name: "Chinese Noodles or Rice", price: 150 },
        { name: "Chinese Gravy", price: 140 },
        { name: "Pav Bhaji", price: 130 },
        { name: "Pizza", price: 150 },
        { name: "Pasta", price: 140 },
        { name: "Salad", price: 70 },
        { name: "Raita", price: 60 },
        { name: "Assorted Indian Breads", price: 80 },
        { name: "Ice Cream", price: 70 },
        { name: "Ice Cream or Malai Kulfi", price: 90 },
        { name: "Malai Kulfi", price: 90 },
        { name: "Sweet (Dry)", price: 80 },
        { name: "Sweet (Dry + Liquid)", price: 120 },
        { name: "Sweet (Dry 2 + Liquid 1)", price: 150 },
        { name: "Sweet (Dry 3 + Liquid 1)", price: 180 },
        { name: "Dessert", price: 120 },
        { name: "Live Station", price: 250 }
    ],
    banquetMenus: [
        {
            id: "economical-menu",
            planName: "Economical Menu",
            price: 1100,
            tax: "Plus Tax",
            items: [
                { name: "Packaged Water", quantity: "Any 2" },
                { name: "Mocktail", quantity: "Any 2" },
                { name: "Veg Starter", quantity: "Any 2" },
                { name: "Veg Mains", quantity: "Any 2" },
                { name: "Dal or Kadhi", quantity: "Any 1" },
                { name: "Rice or Pulao", quantity: "Any 1" },
                { name: "Salad", quantity: "Any 1" },
                { name: "Raita", quantity: "Any 1" },
                { name: "Assorted Indian Breads", quantity: "Included" },
                { name: "Ice Cream", quantity: "Any 1" },
                { name: "Sweet (Dry)", quantity: "Any 2" }
            ]
        },

        {
            id: "deluxe-menu",
            planName: "Deluxe Menu",
            price: 1200,
            tax: "Plus Tax",
            items: [
                { name: "Packaged Water", quantity: "Included" },
                { name: "Mocktail", quantity: "Any 2" },
                { name: "Veg Starters", quantity: "Any 2" },
                { name: "Farsan", quantity: "Any 1" },
                { name: "Veg Mains", quantity: "Any 3" },
                { name: "Dal or Kadhi", quantity: "Any 1" },
                { name: "Rice or Pulao or Biryani", quantity: "Any 1" },
                { name: "Salad", quantity: "Any 1" },
                { name: "Raita", quantity: "Any 1" },
                { name: "Assorted Indian Breads", quantity: "Included" },
                { name: "Ice Cream or Malai Kulfi", quantity: "Any 1" },
                { name: "Sweet (Dry + Liquid)", quantity: "Any 2" }
            ]
        },

        {
            id: "fast-food-menu",
            planName: "Fast Food Menu",
            price: 1200,
            tax: "Plus Tax",
            items: [
                { name: "Packaged Water", quantity: "Included" },
                { name: "Mocktail", quantity: "Any 2" },
                { name: "Veg Starters", quantity: "Any 2" },
                { name: "Chinese Noodles or Rice", quantity: "Any 1" },
                { name: "Chinese Gravy", quantity: "Any 1" },
                { name: "Pav Bhaji", quantity: "Any 1" },
                { name: "Pizza", quantity: "Any 1" },
                { name: "Pasta", quantity: "Any 1" },
                { name: "Pulao or Biryani", quantity: "Any 1" },
                { name: "Raita", quantity: "Any 1" },
                { name: "Ice Cream or Malai Kulfi", quantity: "Any 1" },
                { name: "Sweet (Dry)", quantity: "Any 2" },
                { name: "Dessert", quantity: "Any 1" },
                { name: "Live Station", quantity: "Any 1" }
            ]
        },


    ]
}