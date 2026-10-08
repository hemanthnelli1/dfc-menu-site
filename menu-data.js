const DFC_MENU = [
  { category: 'Recommended', name: 'Chicken Supreme Pizza', price: 369, rating: '3.7 (156)', type: 'nonveg', custom: true, desc: 'Chicken Supreme Pizza', image: 'pizza' },
  { category: 'Recommended', name: 'Chicken Keema Pizza', price: 379, rating: '4.1 (48)', type: 'nonveg', custom: true, desc: 'Onion, capsicum and chicken keema.', image: 'pizza' },
  { category: 'Recommended', name: 'Chicken Hot Wings', price: 319, rating: '4.8 (7)', type: 'nonveg', best: true, custom: true, desc: 'Juicy chicken wings dunked in seasoning and cooked to golden perfection.', image: 'wings' },
  { category: 'Recommended', name: 'Chicken Maharaja Burger', price: 199, rating: '4.6 (326)', type: 'nonveg', best: true, custom: true, desc: 'Crunchy chicken, cheese slice, mayo and fresh veggies.', image: 'burger' },
  { category: 'Recommended', name: 'Fries', price: 79, rating: '4.7 (1.1K+)', type: 'veg', best: true, custom: true, desc: 'Fresh French fries with added salt.', image: 'fries' },
  { category: 'Recommended', name: 'Dinner Meal', price: 489, rating: '4.4 (156)', type: 'nonveg', custom: true, desc: 'Chicken (3 pcs), regular fries and regular Coke.', image: 'meal' },

  { category: 'Quick Bites', name: 'Chicken Popcorn', price: 169, rating: '5.0 (4)', type: 'nonveg', best: true, custom: true, desc: 'Juicy, tender chicken chunks fried to golden perfection.', image: 'popcorn' },
  { category: 'Quick Bites', name: 'Chicken Lollipop', price: 359, rating: '4.9 (9)', type: 'nonveg', best: true, custom: true, desc: 'Juicy chicken lollipop served dry with bone and a nice spice.', image: 'lollipop' },
  { category: 'Quick Bites', name: 'Chicken Nuggets', price: 169, rating: '5.0 (334)', type: 'nonveg', custom: true, desc: 'Chicken chunks in seasoned batter, fried and tossed with peppers.', image: 'nuggets' },
  { category: 'Quick Bites', name: 'Chicken Hot Wings', price: 319, rating: '4.8 (7)', type: 'nonveg', best: true, custom: true, desc: 'Incredibly juicy wings cooked to golden perfection.', image: 'wings' },
  { category: 'Quick Bites', name: 'Chicken Strips (6 Pcs)', price: 339, rating: '4.4 (485)', type: 'nonveg', best: true, custom: true, desc: 'Perfect-cut spicy chicken strips.', image: 'strips' },
  { category: 'Quick Bites', name: 'Chicken Buckets', price: 679, rating: '4.5 (3)', type: 'nonveg', best: true, custom: true, desc: 'Bucket includes wings, legs and ribs.', image: 'bucket' },
  { category: 'Quick Bites', name: 'Veg Nuggets', price: 149, rating: '3.9 (128)', type: 'veg', desc: 'A crispy combination of vegetables.', image: 'nuggets' },
  { category: 'Quick Bites', name: 'Samosa (6 Pcs)', price: 139, rating: '4.8 (525)', type: 'veg', best: true, custom: true, desc: 'Six crispy, freshly fried samosas.', image: 'samosa' },
  { category: 'Quick Bites', name: 'Cheese Pops (10 Pcs)', price: 149, rating: '5.0 (127)', type: 'veg', desc: 'Feel the cheese in every bite.', image: 'cheese' },
  { category: 'Quick Bites', name: 'Veg Bullets (5 Pcs)', price: 159, rating: '3.4 (80)', type: 'veg', custom: true, desc: 'Five crisp vegetarian snack bullets.', image: 'nuggets' },
  { category: 'Quick Bites', name: 'Potato Wedges', price: 119, rating: '4.8 (123)', type: 'veg', best: true, desc: 'Flavoured wedges with a spice touch.', image: 'fries' },

  { category: 'Pizzas', name: 'Chicken Supreme Pizza', price: 369, rating: '3.7 (156)', type: 'nonveg', custom: true, desc: 'Chicken Supreme Pizza.', image: 'pizza' },
  { category: 'Pizzas', name: 'Chicken Keema Pizza', price: 379, rating: '4.1 (48)', type: 'nonveg', custom: true, desc: 'Onion, capsicum and chicken keema.', image: 'pizza' },
  { category: 'Pizzas', name: 'Chicken Delight Pizza', price: 369, rating: '4.9 (80)', type: 'nonveg', custom: true, desc: 'Onion, capsicum, chicken and cheese.', image: 'pizza' },
  { category: 'Pizzas', name: 'Veg Maharaja Pizza', price: 349, rating: '2.6 (354)', type: 'veg', custom: true, desc: 'Onion, capsicum, sweet corn, jalapeno and mushroom.', image: 'pizza' },
  { category: 'Pizzas', name: 'Paneer Delight Pizza', price: 349, rating: '4.4 (103)', type: 'veg', custom: true, desc: 'Onion, capsicum, tomato and paneer.', image: 'pizza' },
  { category: 'Pizzas', name: 'Chicken Maharaja Pizza', price: 369, rating: '3.7 (106)', type: 'nonveg', custom: true, desc: 'Onion, capsicum, jalapeno, sweet corn and mushroom.', image: 'pizza' },
  { category: 'Pizzas', name: 'Veg Supreme Pizza', price: 349, rating: '4.8 (42)', type: 'veg', custom: true, desc: 'Onion, capsicum, tomato, jalapeno and olives.', image: 'pizza' },
  { category: 'Pizzas', name: 'Veg Delight Pizza', price: 349, rating: '2.9 (13)', type: 'veg', custom: true, desc: 'Onion, capsicum, tomato and cheese.', image: 'pizza' },

  { category: 'Non Veg Burgers', name: 'Chicken Maharaja Burger', price: 199, rating: '4.6 (326)', type: 'nonveg', best: true, custom: true, desc: 'Crunchy chicken, cheese slice, mayo and veggies.', image: 'burger' },
  { category: 'Non Veg Burgers', name: 'Spicy Crunchy Burger', price: 189, rating: '4.8 (456)', type: 'nonveg', best: true, custom: true, desc: 'A crunchy chicken burger with mayo.', image: 'burger' },
  { category: 'Non Veg Burgers', name: 'Royal Crunchy Burger', price: 199, rating: '4.3 (39)', type: 'nonveg', custom: true, desc: 'Crunchy chicken patty burger served with veggies.', image: 'burger' },
  { category: 'Non Veg Burgers', name: 'Crunchy Burger', price: 189, rating: '4.6 (65)', type: 'nonveg', custom: true, desc: 'Crispier, crunchier chicken burger with veggies.', image: 'burger' },
  { category: 'Non Veg Burgers', name: 'Fish Burger', price: 199, rating: '3.3 (19)', type: 'nonveg', custom: true, desc: 'Breaded fish patty burger served with veggies.', image: 'burger' },

  { category: 'Meals', name: 'DFC Best', price: 1339, type: 'nonveg', desc: 'Chicken bucket (9 pcs), hot wings (4 pcs), strips (3 pcs), fries and 2 Thums Up.', image: 'family' },
  { category: 'Meals', name: 'DFC Family Meal', price: 1179, rating: '4.9 (78)', type: 'nonveg', custom: true, desc: 'Chicken bucket (6 pcs), wings (4 pcs), strips (4 pcs), fries and 2 Thums Up.', image: 'family' },
  { category: 'Meals', name: 'Dinner Meal', price: 489, rating: '4.4 (156)', type: 'nonveg', custom: true, desc: 'Chicken (3 pcs), regular fries and regular Coke.', image: 'meal' },
  { category: 'Meals', name: 'DFC Chicken Snackers', price: 399, rating: '5.0 (60)', type: 'nonveg', desc: 'Chicken (1 pc), crunchy burger and regular Coke.', image: 'meal' },

  { category: 'Beverage Combos', name: 'Chicken Lollipop + Coke', price: 369, rating: '5.0 (19)', type: 'nonveg', desc: 'All-time favourite chicken lollipop served with Coke.', image: 'lollipop' },
  { category: 'Beverage Combos', name: 'Chicken Strips (6 Pcs) + Coke', price: 379, rating: '4.9 (44)', type: 'nonveg', desc: 'Tasty chicken strips served with Coke.', image: 'strips' },
  { category: 'Beverage Combos', name: 'Chicken Hot Wings + Coke', price: 379, rating: '5.0 (11)', type: 'nonveg', desc: 'Hot chicken wings served with Coke.', image: 'wings' },
  { category: 'Beverage Combos', name: 'Chicken Maharaja Burger + Coke', price: 319, rating: '5.0 (102)', type: 'nonveg', desc: 'The perfect crunch-time snack of chicken burger and Coke.', image: 'burger' },
  { category: 'Beverage Combos', name: 'Chicken Crunchy Burger + Coke', price: 299, rating: '4.9 (78)', type: 'nonveg', desc: 'Chicken crunchy burger with Coke for a great snack.', image: 'burger' },

  { category: 'Ala Carte', name: 'Fries', price: 79, rating: '4.7 (1.1K+)', type: 'veg', best: true, custom: true, desc: 'Fresh French fries with added salt.', image: 'fries' },
  { category: 'Ala Carte', name: 'Kinley Water Bottle (1 Ltr)', price: 30, rating: '4.9 (28)', type: 'veg', desc: 'Chilled Kinley water bottle.', image: 'water' },

  { category: 'Veg Burgers', name: 'Veg Burger', price: 149, rating: '4.9 (44)', type: 'veg', custom: true, desc: 'Crispy veg patty with onion and lettuce in a soft bun.', image: 'burger' },
  { category: 'Veg Burgers', name: 'Paneer Burger', price: 149, rating: '4.9 (75)', type: 'veg', custom: true, desc: 'Breaded paneer burger with fresh veggies.', image: 'burger' },
  { category: 'Veg Burgers', name: 'Aloo Tikki Burger', price: 109, rating: '4.6 (165)', type: 'veg', custom: true, desc: 'Aloo patty burger with fresh veggies.', image: 'burger' }
];

const DFC_CATEGORIES = [...new Set(DFC_MENU.map(item => item.category))];
