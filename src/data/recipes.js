
export const ingredientEmojis = {
  eggs: "🥚",
  milk: "🥛",
  carrot: "🥕",
  onion: "🧅",
  chicken: "🍗",
  potatoes: "🥔",
  garlic: "🧄",
  oil: "🫗",
  apple: "🍎",
  sourcream: "🥣",
  beetroot: "🫐",
  tomatoes: "🍅",
  butter: "🧈",
  pasta: "🍝",
  cheese: "🧀",
  mushrooms: "🍄",
  cucumber: "🥒",
  rice: "🍚",
  bread: "🍞",
  fish: "🐟",
  honey: "🍯"
};


export const recipes = [
  {
    id: 1,
    title: "Classic Vegetable Omelette",
    ingredients: ["eggs", "milk", "carrot", "onion"],
    detailedIngredients: [
      { name: "eggs", amount: "3 large" },
      { name: "milk", amount: "50ml" },
      { name: "carrot", amount: "1 small" },
      { name: "onion", amount: "1/2 piece" }
    ],
    category: "Breakfast",
    prepTime: "10 mins",
    steps: [
      "Crack the eggs into a bowl, add milk and a pinch of salt. Whisk vigorously until the mixture is uniform and slightly frothy.",
      "Finely grate the carrot and mince the onion to ensure they cook quickly.",
      "Coat a non-stick frying pan with a light layer of oil and heat it over medium heat. Sauté the onion and carrot for 2-3 minutes until softened.",
      "Pour the egg mixture over the vegetables, ensuring they are evenly distributed. Tilt the pan to spread the eggs to the edges.",
      "Cook for 3-4 minutes until the bottom is golden. Carefully fold the omelette in half using a spatula and slide it onto a warm plate."
    ]
  },
  {
    id: 2,
    title: "Garlic Roasted Chicken & Potatoes",
    ingredients: ["chicken", "potatoes", "garlic", "oil"],
    detailedIngredients: [
      { name: "chicken", amount: "500g (thighs or drumsticks)" },
      { name: "potatoes", amount: "4 large" },
      { name: "garlic", amount: "4 cloves" },
      { name: "oil", amount: "3 tbsp" }
    ],
    category: "Main Course",
    prepTime: "50 mins",
    steps: [
      "Preheat your oven to 200°C (400°F) to ensure a crispy skin.",
      "Wash and peel the potatoes, then cut them into roughly 3cm cubes. Pat the chicken dry with paper towels.",
      "In a small bowl, crush the garlic cloves and mix them with vegetable oil, salt, black pepper, and any dried herbs you like.",
      "Toss the chicken and potatoes in a large baking dish with the garlic oil until every piece is thoroughly coated.",
      "Spread everything in a single layer and roast for 40-45 minutes. Turn the potatoes halfway through so they get crispy on all sides."
    ]
  },
  {
    id: 3,
    title: "Fresh Vitamin Salad",
    ingredients: ["apple", "carrot", "sourcream"],
    detailedIngredients: [
      { name: "apple", amount: "2 sweet-sour" },
      { name: "carrot", amount: "2 medium" },
      { name: "sourcream", amount: "2 tbsp" },
      { name: "honey", amount: "1 tsp (optional)" }
    ],
    category: "Salads",
    prepTime: "5 mins",
    steps: [
      "Thoroughly wash the carrots and apples. Peel the carrots and remove the cores from the apples.",
      "Using a coarse grater, grate both ingredients into a deep salad bowl.",
      "Add two tablespoons of fresh sour cream (or Greek yogurt for a lighter version).",
      "Drizzle with a little honey if the apples are too tart, and mix gently to combine.",
      "Serve immediately to keep the maximum amount of vitamins and crunch."
    ]
  },
  {
    id: 4,
    title: "Simple Beetroot Salad",
    ingredients: ["beetroot", "garlic", "oil"],
    detailedIngredients: [
      { name: "beetroot", amount: "2 medium" },
      { name: "garlic", amount: "2 cloves" },
      { name: "oil", amount: "2 tbsp (sunflower or olive)" }
    ],
    category: "Salads",
    prepTime: "40 mins",
    steps: [
      "Place the whole beetroots (unpeeled) in a pot of water and boil for 30-40 minutes until a fork slides in easily.",
      "Drain the hot water and let the beetroots cool completely. This makes them much easier to peel.",
      "Grate the peeled beetroot using a medium grater into a bowl.",
      "Pass the garlic through a press or mince it very finely. Mix it into the beetroot with a pinch of salt.",
      "Add the oil, mix well, and let it chill in the fridge for 15 minutes to let the flavors meld."
    ]
  },
  {
    id: 5,
    title: "Crispy Potato Pancakes (Latkes)",
    ingredients: ["potatoes", "eggs", "onion"],
    detailedIngredients: [
      { name: "potatoes", amount: "3 large" },
      { name: "eggs", amount: "1 large" },
      { name: "onion", amount: "1 small" }
    ],
    category: "Main Course",
    prepTime: "25 mins",
    steps: [
      "Grate the potatoes and the onion using a fine grater. This creates the best texture for pancakes.",
      "Place the mixture in a clean kitchen towel and squeeze as hard as you can to remove all the excess liquid. This is the secret to crispiness!",
      "In a bowl, mix the dried potato-onion pulp with one egg and a generous pinch of salt.",
      "Heat oil in a heavy-bottomed pan. Form small cakes with your hands or a spoon and place them in the hot oil.",
      "Fry for 3-4 minutes per side until deeply golden and crunchy. Serve with a dollop of sour cream."
    ]
  },
  {
    id: 6,
    title: "Hearty Chicken Soup",
    ingredients: ["chicken", "carrot", "onion", "potatoes"],
    detailedIngredients: [
      { name: "chicken", amount: "400g (breast or thighs)" },
      { name: "carrot", amount: "1 large" },
      { name: "onion", amount: "1 medium" },
      { name: "potatoes", amount: "3 medium" }
    ],
    category: "Soups",
    prepTime: "60 mins",
    steps: [
      "Place the chicken in a large pot and cover with 2 liters of cold water. Bring to a boil, then skim off any foam from the surface.",
      "While the broth simmers, peel and dice the potatoes. Slice the carrots into rounds and finely chop the onion.",
      "Add all the vegetables to the pot. Reduce heat to low and cover with a lid.",
      "Simmer gently for about 45-50 minutes. The chicken should be tender enough to fall apart easily.",
      "Remove the chicken, shred it into bite-sized pieces, and return it to the pot. Season with salt, pepper, and fresh herbs before serving."
    ]
  },
  {
    id: 7,
    title: "Baked Apples with Honey",
    ingredients: ["apple", "honey", "butter"], // Убрали чеснок, добавили масло и мед
    detailedIngredients: [
      { name: "apple", amount: "4 large (firm)" },
      { name: "honey", amount: "4 tsp" },
      { name: "butter", amount: "20g" }
    ],
    category: "Dessert",
    prepTime: "20 mins",
    steps: [
      "Wash the apples and remove the core using a small knife or a corer, making sure not to cut all the way through to the bottom.",
      "Place a small piece of butter inside each apple cavity followed by a teaspoon of honey.",
      "Arrange the apples in a baking dish and add 2 tablespoons of water to the bottom of the dish to keep them moist.",
      "Bake at 180°C (350°F) for 15-20 minutes depending on the apple variety. They should be soft but still hold their shape.",
      "Let them cool slightly. The honey and apple juice will form a delicious syrup at the bottom."
    ]
  },
  {
    id: 8,
    title: "Fried Eggs with Tomatoes",
    ingredients: ["eggs", "tomatoes", "oil"],
    detailedIngredients: [
      { name: "eggs", amount: "2 large" },
      { name: "tomatoes", amount: "2 ripe" },
      { name: "oil", amount: "1 tbsp" }
    ],
    category: "Breakfast",
    prepTime: "10 mins",
    steps: [
      "Slice the tomatoes into thick rings. Heat oil in a frying pan over medium heat.",
      "Fry the tomato slices for about 2 minutes on each side until they soften and release some juice.",
      "Carefully crack the eggs directly over the tomatoes. Try to keep the yolks intact.",
      "Season with a pinch of salt. Cover the pan with a lid for 2-3 minutes if you like your yolks firm, or leave uncovered for runny yolks.",
      "Garnish with black pepper and serve immediately with fresh bread."
    ]
  },
  {
    id: 9,
    title: "Creamy Mashed Potatoes",
    ingredients: ["potatoes", "milk", "butter"],
    detailedIngredients: [
      { name: "potatoes", amount: "800g" },
      { name: "milk", amount: "150ml" },
      { name: "butter", amount: "50g" }
    ],
    category: "Side Dish",
    prepTime: "25 mins",
    steps: [
      "Peel the potatoes and cut them into equal-sized chunks so they cook evenly.",
      "Place in a pot of salted water, bring to a boil, and cook for 15-20 minutes until very soft.",
      "Drain the water completely. Warm the milk and butter together in a small pan or microwave (don't add them cold!).",
      "Mash the potatoes thoroughly using a potato masher, gradually adding the warm milk and butter mixture.",
      "Whisk with a spoon at the end for an extra fluffy, creamy texture. Add salt to taste."
    ]
  },
  {
    id: 10,
    title: "Quick Garlic Pasta",
    ingredients: ["pasta", "garlic", "oil"],
    detailedIngredients: [
      { name: "pasta", amount: "200g (Spaghetti or Penne)" },
      { name: "garlic", amount: "3 cloves" },
      { name: "oil", amount: "4 tbsp (extra virgin olive oil preferred)" }
    ],
    category: "Main Course",
    prepTime: "15 mins",
    steps: [
      "Bring a large pot of salted water to a boil and cook the pasta according to the package instructions until 'al dente'.",
      "While the pasta is boiling, peel and thinly slice the garlic cloves.",
      "Heat the oil in a wide pan over low heat. Add the garlic and sauté for about 1-2 minutes until it's fragrant and slightly golden (do not let it burn!).",
      "Reserve a small cup of pasta water, then drain the rest. Toss the pasta into the pan with the garlic oil.",
      "Mix well, adding a splash of pasta water if it looks too dry. Season with salt and red pepper flakes if you like it spicy."
    ]
  },
  {
    id: 11,
    title: "Cheesy Garlic Toast",
    ingredients: ["bread", "cheese", "garlic", "butter"],
    detailedIngredients: [
      { name: "bread", amount: "4 thick slices" },
      { name: "cheese", amount: "100g (Cheddar or Mozzarella)" },
      { name: "garlic", amount: "2 cloves" },
      { name: "butter", amount: "30g" }
    ],
    category: "Snacks",
    prepTime: "8 mins",
    steps: [
      "Take the butter out of the fridge in advance so it's soft. Mix it with finely minced garlic until smooth.",
      "Lightly toast the bread slices in a dry pan or toaster for 1 minute just to get a slight crunch.",
      "Spread the garlic butter generously over one side of each slice, reaching all the way to the edges.",
      "Cover with a thick layer of grated cheese. Place under a preheated grill (220°C) for 3-4 minutes.",
      "Remove when the cheese is bubbling and has small golden-brown spots. Slice diagonally and serve warm."
    ]
  },
  {
    id: 12,
    title: "Creamy Mushroom Pasta",
    ingredients: ["pasta", "mushrooms", "sourcream", "onion"],
    detailedIngredients: [
      { name: "pasta", amount: "250g (Fettuccine or Penne)" },
      { name: "mushrooms", amount: "300g (Champignons)" },
      { name: "sourcream", amount: "150ml" },
      { name: "onion", amount: "1 medium" }
    ],
    category: "Main Course",
    prepTime: "20 mins",
    steps: [
      "Start boiling a large pot of salted water and cook the pasta until 'al dente'.",
      "While the pasta cooks, finely dice the onion and slice the mushrooms into thin even pieces.",
      "Heat a pan with a little oil. Sauté the onions until translucent, then add mushrooms. Cook until the mushroom liquid evaporates and they turn golden.",
      "Reduce the heat to low, stir in the sour cream, and season with salt and pepper. Let it simmer gently for 2 minutes (do not boil hard).",
      "Drain the pasta and toss it directly into the mushroom sauce. Mix well so every noodle is coated in cream."
    ]
  },
  {
    id: 13,
    title: "Cucumber & Apple Salad",
    ingredients: ["cucumber", "apple", "oil"],
    detailedIngredients: [
      { name: "cucumber", amount: "2 medium" },
      { name: "apple", amount: "1 large (Green/Sour)" },
      { name: "oil", amount: "1 tbsp" }
    ],
    category: "Salads",
    prepTime: "5 mins",
    steps: [
      "Wash the vegetables and fruit. You can leave the skin on for extra crunch and vitamins.",
      "Slice the cucumbers into thin half-moons and the apples into matchsticks or thin wedges.",
      "Place them in a bowl and sprinkle with a tiny pinch of salt to draw out the flavors.",
      "Drizzle with oil (olive or avocado oil works best here) and toss gently to avoid bruising the apples.",
      "Serve immediately. This salad is a perfect light side dish for grilled fish or chicken."
    ]
  },
  {
    id: 14,
    title: "Foil-Baked Fish with Garlic",
    ingredients: ["fish", "garlic", "oil", "carrot"],
    detailedIngredients: [
      { name: "fish", amount: "2 fillets (Cod, Tilapia or Salmon)" },
      { name: "garlic", amount: "3 cloves" },
      { name: "oil", amount: "2 tbsp" },
      { name: "carrot", amount: "1 small" }
    ],
    category: "Main Course",
    prepTime: "30 mins",
    steps: [
      "Preheat your oven to 200°C. Prepare two sheets of aluminum foil large enough to wrap the fish.",
      "Finely grate the carrot and mince the garlic. Mix them in a small bowl with the oil.",
      "Place each fish fillet on its own piece of foil. Rub the garlic-carrot mixture evenly over the top of the fish.",
      "Season with salt and fold the foil edges upward and over the fish, sealing the packets tightly so no steam escapes.",
      "Bake for 15-20 minutes. Open the foil carefully (watch out for the hot steam!) and check if the fish flakes easily with a fork."
    ]
  },
  {
    id: 15,
    title: "Classic Fried Rice",
    ingredients: ["rice", "eggs", "onion", "carrot"],
    detailedIngredients: [
      { name: "rice", amount: "300g (cooked and chilled)" },
      { name: "eggs", amount: "2 large" },
      { name: "onion", amount: "1 small" },
      { name: "carrot", amount: "1 small" }
    ],
    category: "Main Course",
    prepTime: "15 mins",
    steps: [
      "Pro tip: Use rice that has been in the fridge overnight. It's drier and fries much better than fresh rice.",
      "Finely dice the onion and carrot. Heat a large skillet or wok with a little oil over high heat.",
      "Sauté the vegetables for 3 minutes until they start to brown at the edges.",
      "Push the vegetables to the side of the pan. Crack the eggs into the empty space, scramble them quickly, then mix with the vegetables.",
      "Add the cold rice, breaking up any clumps with a spatula. Fry everything together for 5 minutes, stirring constantly until the rice is heated through and slightly crispy."
    ]
  },
  {
    id: 16,
    title: "Cheesy Potato Gratin",
    ingredients: ["potatoes", "cheese", "milk", "butter"],
    detailedIngredients: [
      { name: "potatoes", amount: "600g (about 5-6 medium)" },
      { name: "cheese", amount: "150g (Hard cheese like Cheddar)" },
      { name: "milk", amount: "200ml" },
      { name: "butter", amount: "30g" }
    ],
    category: "Side Dish",
    prepTime: "45 mins",
    steps: [
      "Peel the potatoes and slice them into very thin rounds (about 2-3mm). This helps them cook through and absorb the milk.",
      "Grease a baking dish with a bit of butter. Arrange the potato slices in overlapping layers.",
      "Pour the milk over the potatoes, making sure it reaches the bottom layers. Season each layer with a pinch of salt.",
      "Dot the top with small pieces of butter and cover with a thick, even layer of grated cheese.",
      "Bake at 190°C (375°F) for about 35-40 minutes. If the cheese browns too quickly, cover with foil for the last 10 minutes."
    ]
  },
  {
    id: 17,
    title: "Fluffy Mushroom Omelette",
    ingredients: ["eggs", "mushrooms", "milk", "cheese"],
    detailedIngredients: [
      { name: "eggs", amount: "3 large" },
      { name: "mushrooms", amount: "150g" },
      { name: "milk", amount: "2 tbsp" },
      { name: "cheese", amount: "30g" }
    ],
    category: "Breakfast",
    prepTime: "12 mins",
    steps: [
      "Clean the mushrooms with a damp cloth and slice them thinly. Sauté them in a hot pan until they release their liquid and turn golden brown.",
      "While mushrooms are cooking, whisk the eggs with milk and a pinch of salt in a small bowl.",
      "Pour the egg mixture directly over the mushrooms in the pan. Tilt the pan to distribute the eggs evenly.",
      "As the edges start to set, sprinkle the grated cheese over one half of the omelette.",
      "Carefully fold the other half over the cheese. Cook for one more minute until the cheese inside has melted perfectly."
    ]
  },
  {
    id: 18,
    title: "Creamy Rice Pudding with Apple",
    ingredients: ["rice", "milk", "apple", "honey"],
    detailedIngredients: [
      { name: "rice", amount: "100g (Short grain or Arborio)" },
      { name: "milk", amount: "500ml" },
      { name: "apple", amount: "1 sweet" },
      { name: "honey", amount: "1-2 tbsp" }
    ],
    category: "Dessert",
    prepTime: "25 mins",
    steps: [
      "Rinse the rice under cold water. Place it in a pot with the milk and bring to a very gentle simmer.",
      "Cook on low heat, stirring frequently with a wooden spoon. The rice should absorb the milk and become thick and creamy.",
      "While the rice is simmering, peel and finely grate the fresh apple.",
      "Once the rice is soft (about 20 minutes), stir in the grated apple and honey. Cook for 2 more minutes.",
      "Serve warm or chilled. You can sprinkle a little cinnamon on top if you have some in your pantry!"
    ]
  },
  {
    id: 19,
    title: "Garden Cucumber & Tomato Salad",
    ingredients: ["cucumber", "tomatoes", "onion", "oil"],
    detailedIngredients: [
      { name: "cucumber", amount: "2 large" },
      { name: "tomatoes", amount: "3 ripe" },
      { name: "onion", amount: "1/2 red onion" },
      { name: "oil", amount: "2 tbsp" }
    ],
    category: "Salads",
    prepTime: "7 mins",
    steps: [
      "Cut the cucumbers and tomatoes into chunky, bite-sized pieces. Avoid making them too small so they don't get mushy.",
      "Thinly slice the red onion into half-moons. If the onion is too sharp, rinse the slices under cold water first.",
      "Combine all vegetables in a large bowl. Add salt and freshly ground black pepper to taste.",
      "Drizzle with high-quality oil and toss gently with two large spoons.",
      "Let the salad rest for 5 minutes before serving; this allows the juices from the tomatoes to mix with the oil for a natural dressing."
    ]
  },
  {
    id: 20,
    title: "Rustic Fish & Potato Stew",
    ingredients: ["fish", "potatoes", "onion", "carrot"],
    detailedIngredients: [
      { name: "fish", amount: "400g white fish fillet" },
      { name: "potatoes", amount: "4 medium" },
      { name: "onion", amount: "1 medium" },
      { name: "carrot", amount: "1 large" }
    ],
    category: "Soups",
    prepTime: "35 mins",
    steps: [
      "Prepare the base: finely chop the onion and dice the carrot. Sauté them in a large pot with a little oil until the onion is golden.",
      "Peel the potatoes and cut them into 2cm cubes. Add them to the pot and pour in enough water (or light broth) to just cover the vegetables.",
      "Bring to a boil, then reduce heat and simmer for 10-12 minutes until the potatoes are halfway cooked.",
      "Cut the fish fillet into large chunks and gently add them to the stew. Season with salt and a bay leaf if available.",
      "Simmer for another 10 minutes. Try not to stir too much so the fish chunks stay whole. Serve hot in deep bowls."
    ]
  }, 
  {
    id: 21,
    title: "Gourmet Mushroom & Garlic Pasta",
    ingredients: ["pasta", "mushrooms", "garlic", "oil"],
    detailedIngredients: [
      { name: "pasta", amount: "250g (Spaghetti or Linguine)" },
      { name: "mushrooms", amount: "200g (sliced)" },
      { name: "garlic", amount: "3 cloves" },
      { name: "oil", amount: "3 tbsp" }
    ],
    category: "Main Course",
    prepTime: "20 mins",
    steps: [
      "Cook the pasta in a large pot of boiling salted water until 'al dente'. Before draining, reserve half a cup of the pasta water.",
      "In a large skillet, heat the oil over medium heat. Add the sliced mushrooms and sauté until they release their juices and start to brown.",
      "Add the finely minced garlic to the mushrooms and cook for just 1 minute until fragrant. Be careful not to let the garlic burn!",
      "Transfer the drained pasta to the skillet. Pour in a splash of the reserved pasta water to create a silky emulsion with the oil.",
      "Toss everything together on high heat, seasoning generously with salt and freshly cracked black pepper. Serve immediately."
    ]
  },
  {
    id: 22,
    title: "Caramelized Sweet Apple Slices",
    ingredients: ["apple", "honey", "butter"],
    detailedIngredients: [
      { name: "apple", amount: "2 large (crisp variety)" },
      { name: "honey", amount: "2 tbsp" },
      { name: "butter", amount: "25g" }
    ],
    category: "Dessert",
    prepTime: "7 mins",
    steps: [
      "Wash the apples, remove the cores, and slice them into thin, even wedges (about 12 slices per apple).",
      "Melt the butter in a wide frying pan over medium-high heat until it begins to foam.",
      "Add the apple slices in a single layer. Fry them for 2-3 minutes on one side until they turn golden brown.",
      "Flip the slices and drizzle the honey evenly over them. Let the honey bubble and thicken into a caramel-like glaze.",
      "Cook for another 2 minutes until the apples are tender but not mushy. These are incredible served with a dollop of sour cream or Greek yogurt."
    ]
  },
  {
    id: 23,
    title: "Clear Fisherman's Soup",
    ingredients: ["fish", "potatoes", "onion", "carrot"],
    detailedIngredients: [
      { name: "fish", amount: "350g (white fish fillets)" },
      { name: "potatoes", amount: "3 medium" },
      { name: "onion", amount: "1 small" },
      { name: "carrot", amount: "1 medium" }
    ],
    category: "Soups",
    prepTime: "40 mins",
    steps: [
      "Bring 1.5 liters of water to a boil. Add the potatoes (diced into cubes) and carrots (sliced into thin rounds).",
      "Let the vegetables simmer on medium heat for about 15 minutes until they are nearly tender.",
      "While the vegetables cook, cut the fish fillets into large 3cm chunks. Finely chop the onion.",
      "Add the fish and onion to the pot. Lower the heat and simmer gently for another 10-12 minutes. Avoid boiling vigorously so the fish stays intact.",
      "Season with salt and pepper. Let the soup rest for 5 minutes off the heat before serving to let the flavors settle."
    ]
  },
  {
    id: 24,
    title: "Golden French Toast (Eggy Bread)",
    ingredients: ["bread", "eggs", "milk", "butter"],
    detailedIngredients: [
      { name: "bread", amount: "4 slices (slightly stale works best)" },
      { name: "eggs", amount: "2 large" },
      { name: "milk", amount: "60ml" },
      { name: "butter", amount: "20g" }
    ],
    category: "Breakfast",
    prepTime: "10 mins",
    steps: [
      "In a shallow bowl, whisk the eggs together with the milk and a tiny pinch of salt (or sugar if you want it sweet).",
      "Place each slice of bread into the egg mixture, allowing it to soak for about 30 seconds on each side.",
      "Melt the butter in a non-stick pan over medium heat.",
      "Fry the soaked bread until it is beautifully golden brown and slightly crispy on both sides (about 2-3 minutes per side).",
      "Serve hot. For a savory version, top with cheese; for a sweet version, drizzle with honey."
    ]
  },
  {
    id: 25,
    title: "Garlic & Cucumber Tzatziki-style Dip",
    ingredients: ["cucumber", "sourcream", "garlic"],
    detailedIngredients: [
      { name: "cucumber", amount: "1 large" },
      { name: "sourcream", amount: "200ml" },
      { name: "garlic", amount: "2 cloves" }
    ],
    category: "Snacks",
    prepTime: "5 mins",
    steps: [
      "Grate the cucumber using a coarse grater. This is the most important step: wrap the grated cucumber in a clean cloth and squeeze out all the excess liquid.",
      "Place the 'dry' cucumber pulp into a bowl and mix with the sour cream.",
      "Add the crushed or finely minced garlic and a pinch of salt.",
      "Stir everything together until well combined. This dip gets better if you let it chill in the fridge for 30 minutes.",
      "Serve as a refreshing dip for toasted bread, crackers, or fresh vegetable sticks."
    ]
  },
  {
    id: 26,
    title: "Creamy Mushroom Risotto Style",
    ingredients: ["rice", "mushrooms", "onion", "butter"],
    detailedIngredients: [
      { name: "rice", amount: "200g (Arborio or any short-grain)" },
      { name: "mushrooms", amount: "250g" },
      { name: "onion", amount: "1 medium" },
      { name: "butter", amount: "40g" }
    ],
    category: "Main Course",
    prepTime: "30 mins",
    steps: [
      "Finely dice the onion and slice the mushrooms. Melt half the butter in a deep pan and sauté them until the mushrooms are golden and the onion is soft.",
      "Add the dry rice to the pan and stir for 2 minutes until the edges of the grains become translucent. This 'toasts' the rice for better flavor.",
      "Begin adding warm water (or vegetable broth) one ladle at a time. Stir constantly and only add more liquid once the previous ladle has been fully absorbed.",
      "Continue this process for about 18-20 minutes. The rice should become creamy on the outside but stay slightly firm in the center.",
      "Turn off the heat, add the remaining butter, and stir vigorously to create that classic velvety risotto texture. Season with salt and pepper."
    ]
  },
  {
    id: 27,
    title: "Cheesy Baked Tomatoes",
    ingredients: ["tomatoes", "cheese", "garlic"],
    detailedIngredients: [
      { name: "tomatoes", amount: "4 large, firm" },
      { name: "cheese", amount: "80g (grated)" },
      { name: "garlic", amount: "2 cloves" }
    ],
    category: "Side Dish",
    prepTime: "15 mins",
    steps: [
      "Preheat your oven to 200°C (400°F). Slice the tomatoes in half horizontally and place them cut-side up on a baking tray.",
      "Finely mince the garlic and sprinkle it evenly over the tomato halves. Add a tiny pinch of salt to each.",
      "Mound a generous amount of grated cheese on top of each tomato half, pressing it down slightly so it stays in place.",
      "Bake for 10-12 minutes until the tomatoes have softened and the cheese has transformed into a golden, bubbly crust.",
      "Serve warm as a perfect side dish or a light Mediterranean snack."
    ]
  },
  {
    id: 28,
    title: "Honey Glazed Carrots",
    ingredients: ["carrot", "honey", "butter"],
    detailedIngredients: [
      { name: "carrot", amount: "400g" },
      { name: "honey", amount: "2 tbsp" },
      { name: "butter", amount: "30g" }
    ],
    category: "Side Dish",
    prepTime: "15 mins",
    steps: [
      "Peel the carrots and slice them into uniform sticks (batons) about 5cm long.",
      "Place them in a pot of boiling water and cook for exactly 5 minutes. They should be 'al dente' — cooked but still having a slight bite.",
      "Drain the water and put the pan back on medium heat. Add the butter and honey directly to the carrots.",
      "Sauté for 3-5 minutes, tossing frequently, until the honey and butter reduce into a thick, shiny glaze that coats every carrot stick.",
      "The carrots should look caramelized and vibrant. These are a great hit with kids and adults alike!"
    ]
  },
  {
    id: 29,
    title: "Golden Fish & Potato Patties",
    ingredients: ["fish", "potatoes", "eggs"],
    detailedIngredients: [
      { name: "fish", amount: "300g (cooked and flaked)" },
      { name: "potatoes", amount: "3 medium (boiled)" },
      { name: "eggs", amount: "1 large" }
    ],
    category: "Main Course",
    prepTime: "40 mins",
    steps: [
      "Mash the boiled potatoes until smooth. Ensure there are no large lumps left.",
      "Add the cooked fish (ensure all bones are removed) to the potatoes. Mix in one beaten egg and a good pinch of salt.",
      "Using your hands, shape the mixture into small, flat patties (about the size of a palm).",
      "Heat a thin layer of oil in a pan. Fry the patties for 4-5 minutes on each side until they have a deep golden-brown crust.",
      "Serve hot with a side of sour cream or the cucumber dip we made earlier."
    ]
  },
  {
    id: 30,
    title: "One-Pot Quick Mac & Cheese",
    ingredients: ["pasta", "cheese", "milk", "butter"],
    detailedIngredients: [
      { name: "pasta", amount: "200g (Macaroni or shells)" },
      { name: "cheese", amount: "120g (Cheddar works best)" },
      { name: "milk", amount: "100ml" },
      { name: "butter", amount: "25g" }
    ],
    category: "Main Course",
    prepTime: "15 mins",
    steps: [
      "Boil the pasta in salted water until tender, then drain and set aside for a moment.",
      "In the same hot pot, melt the butter over low heat. Pour in the milk and bring to a very gentle simmer.",
      "Add the grated cheese and stir constantly until you have a smooth, thick cheese sauce. Do not let it boil vigorously or the cheese might separate.",
      "Return the cooked pasta to the pot and toss thoroughly until every piece of pasta is smothered in the cheese sauce.",
      "Season with a little black pepper and serve immediately while the sauce is still creamy and stretchy."
    ]
  }
];