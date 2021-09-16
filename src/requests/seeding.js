import userRegister from './userRegister';
import createMyRecipe from './createMyRecipe';

const recipes = [
    {
        category: 'Dinner',
        name: 'Shrimp Paella',
        directions:
            'Start by cooking the chorizo sausage in a large skillet or paellera pan. When the chorizo has browned, remove and set aside.  Using a little of the chorizo drippings, stir-fry the shrimp lightly. Make sure to not overcook the shrimp by leaving them in the pan too long. When ready, remove and set aside.  Next, add the olive oil to your skillet and sauté the garlic with the diced bell peppers (red, green and yellow.) Then add the rice, fried chorizo and the water. Sprinkle the packages or cubes of yellow rice seasoning over the mixture, along with the salt and pepper. Stir with a wooden spoon, then lower the heat and cover the pan. Let the rice simmer for 20 to 30 minutes. When the mixture is almost finished, add the shrimp and frozen peas. Replace the lid and continue cooking for a few more minutes. Serve hot, accompanied by a fresh green salad.',
        cookTime: 60,
        servings: 4,
        isPublic: true,
        photoURL:
            'https://images-gmi-pmc.edge-generalmills.com/acd1145c-ed72-4efe-904c-675032ae47dc.jpg',
    },
    {
        category: 'Dinner',
        name: 'Best Hamburger Patty',
        directions:
            "First, set out a large mixing bowl and add in the ground beef, crushed crackers, egg, Worcestershire sauce, milk, and spices. Use your hands to thoroughly combine until the mixture is very smooth. Next, press the meat down in the bowl, into an even disk. Use a knife to cut and divide the hamburger patty mixture into 6 - 1/3 pound grill or skillet patties, or 12 thin griddle patties. Set out a baking sheet, lined with wax paper or foil, to hold the patties. One at a time, gather the patty mix and press firmly into patties of your desired thickness. You typically want hamburger patties to be slightly larger than the buns they'll be served on since they'll shrink a bit in the cooking process. Place the formed patties on the baking sheet. With thick patties, press a dent in the center of each patty, so they don't puff up while cooking. You can stack the patties with sheets of wax paper between layers if needed. Grill or fry the patties for 3-4 minutes per side for a medium burger.",
        cookTime: 30,
        servings: 6,
        isPublic: true,
        photoURL:
            'https://www.aspicyperspective.com/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-18-650x957.jpg',
    },
    {
        category: 'Breakfast',
        name: 'Good Old Fashioned Pancakes',
        directions:
            'In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth. Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.',
        cookTime: 20,
        servings: 8,
        isPublic: true,
        photoURL:
            'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-2-1200.jpg',
    },
    {
        category: 'Lunch',
        name: 'Classic Club Sandwich',
        directions:
            'Toast bread until golden, then spread a thin layer of butter on both sides of every slice. Spread mayonnaise on one side of one slice of bread. Top with lettuce and tomato slices, then season lightly with salt and pepper. Place bacon slices on top. Spread mayonnaise on both sides of a second piece of bread and place on top of bacon. Top with cheddar, turkey, and ham. Spread mayonnaise on one side of the last piece of bread and place on top of sandwich, mayo side down. Secure with toothpicks and cut into 4 triangles.',
        cookTime: 10,
        servings: 4,
        isPublic: true,
        photoURL:
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/11/26/0/FN_Classic-Club-Sandwich_s4x3.jpg.rend.hgtvcom.826.620.suffix/1386172256516.jpeg',
    },
    {
        category: 'Breakfast',
        name: 'Easy Sausage Gravy and Biscuits',
        directions:
            'Bake biscuits according to package directions. Meanwhile, cook sausage in large skillet over medium heat 5-6 minutes or until thoroughly heated, stirring frequently. Stir in flour. Gradually add milk; cook until mixture comes to a boil and thickens, stirring constantly. Reduce heat to medium-low; simmer 2 minutes, stirring onstantly. Season to taste with salt and pepper. Split biscuits in half. Place 2 halves on each of 8 plates; top with about 1/3 cup gravy.',
        cookTime: 15,
        servings: 8,
        isPublic: true,
        photoURL:
            'https://www.simplyrecipes.com/thmb/2P7fqsBzx60uwC7QjQFCLKIXNSo=/800x534/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__06__biscuits-and-gravy-horiz-800-02fd2c86996f41f18868b0383dbc9bf5.jpg',
    },
    {
        category: 'Lunch',
        name: 'Chicken Fajita Quesadillas',
        directions:
            'In a large skillet, coat chicken with salt, pepper, chili powder, cumin, cayenne, and garlic powder. Cook 5-7 minutes. Add the peppers and onions and cook for 5-7 minutes, or until they are soft. Remove chicken, onions and peppers from the pan and set aside. Place the tortilla in the skillet and add a layer of cheese on half of the tortilla. Add cooked chicken, peppers and onions. Top with more cheese and fold the tortilla in half. Cook for 6 minutes over medium heat, flipping half way.',
        cookTime: 40,
        servings: 8,
        isPublic: true,
        photoURL:
            'https://images-gmi-pmc.edge-generalmills.com/51b82e8d-6133-42b8-beb5-2ba3cb699b08.jpg',
    },
    {
        category: 'Dinner',
        name: 'Homemade Pizza',
        directions:
            'Preheat oven to 500 degrees. Spread the pizza sauce onto the dough. Top with the fresh mozzarella and tomatoes and bake 10 to 12 minutes, or until the crust is browned. Remove from the oven and top with fresh basil leaves and a pinch of red pepper flakes. Drizzle with olive oil and serve.',
        cookTime: 30,
        servings: 4,
        isPublic: true,
        photoURL:
            'https://cdn.loveandlemons.com/wp-content/uploads/2019/06/homemade-pizza-580x800.jpg',
    },
    {
        category: 'Breakfast',
        name: 'Bacon, Egg, and Potatoe Breakfast Skillet',
        directions:
            'In a large skillet, cook bacon over medium-high heat until crisp. Remove bacon and drain on paper towels, leaving about 2 tablespoons of drippings in the skillet. Add onion and potatoes to the pan stirring to coat in bacon drippings and cook for a couple of minutes. Add water and cover skillet. Cook for 15 minutes or until soft, only flipping once or twice. When you let the potatoes sit without flipping, they get nice and brown. Stir in garlic and cook for a minute. Add more salt and pepper to taste. Make four wells in the potatoes, exposing the skillet underneath. Carefully, crack the egg in each spot. Cover skillet and let eggs cook over low heat until egg whites are set, about 8-10 minutes. Sprinkle cheese and bacon on top during the last couple minutes of cooking. Sprinkle with green onions and serve.',
        cookTime: 30,
        servings: 4,
        isPublic: true,
        photoURL:
            'https://www.the-girl-who-ate-everything.com/wp-content/uploads/2018/09/bacon-egg-potato-breakfast-skillet-003-660x879.jpg',
    },
    {
        category: 'Dinner',
        name: 'Penne Pasta with Meat Sauce',
        directions:
            'Cook pasta according to package directions. Drain well. Return pasta to hot pan; cover to keep warm. Meanwhile, in a very large skillet, cook ground beef and onion until meat is brown. Drain off fat. In a blender or food processor, combine undrained tomatoes, tomato paste, wine, sugar, dried oregano, and pepper. Cover and blend or process until smooth. Stir tomato mixture into meat mixture in skillet. Bring to boiling; reduce heat. Cover and simmer for 10 minutes. Stir in cooked pasta and olives. Cover and heat through. Sprinkle individual servings with mozzarella cheese. If desired, garnish with oregano leaves.',
        cookTime: 55,
        servings: 6,
        isPublic: true,
        photoURL:
            'https://www.thespruceeats.com/thmb/0WkZYyp6WHRdiDN399WuaNevEN4=/2200x1237/smart/filters:no_upscale()/penne-with-creamy-meat-sauce-22-56a8c1565f9b58b7d0f4d5e5.jpg',
    },
]



const seed = async () => {
    for (let i = 1; i <= 25; i++) {
        try {
            const { status, json } = await userRegister({ email: `test${i}@email.com`, username: `user${i}`, password: 'Password1'})
            if(status === 200) {
                for(const recipe of recipes) {
                    await createMyRecipe({ ...recipe, views: i }, json.sessionToken);                    
                    console.log('success');
                }        
            }
        }
        catch(err) {
            console.log('fail');
        }
    }
}

export default seed;