import userRegister from './userRegister';
import createMyRecipe from './createMyRecipe';

const recipes = [
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
            category: 'Breakfast',
            name: 'Scrambled Eggs With Bacon',
            directions:
                'Cook 2 pieces of bacon according to the package directions. I usually cook it in the microwave to make it quick. You can use regular bacon or turkey bacon if you want something lower in calories. Once cooked cut it up into 1/2 inch pieces. Melt butter in a skillet over medium high heat. Once melted add in eggs. Once the egg mixture seems to have set, break it up with a spatula to scramble and flip. Continue cooking and scrambling until eggs are fully cooked and no longer runny. Serve immediately and enjoy!',
            cookTime: 10,
            servings: 4,
            isPublic: true,
            photoURL:
                'https://brooklynfarmgirl.com/wp-content/uploads/2014/09/Scrambled-Eggs-With-Bacon_5-2-650x975.jpg',
        },
        {
            category: 'Breakfast',
            name: 'Homemade Belgian Waffle Recipe',
            directions:
                "Preheat your waffle iron, spray with non stick cooking spray and set aside. In a large bowl whisk together the flour, baking powder, sugar, salt, and cinnamon. In a medium bowl beat the egg whites with a hand mixer until stiff peaks form. Set aside. In a separate medium bowl mix together the egg yolks, vegetable oil, milk, and vanilla extract. Add the egg yolk mixture to the dry ingredients and mix well. Fold in the egg whites. Pour the batter onto your hot waffle iron and cook according to manufacturer's directions. Serve immediately with butter, syrup, powdered sugar or any other favorite toppings.",
            cookTime: 35,
            servings: 8,
            isPublic: true,
            photoURL:
                'https://thesaltymarshmallow.com/wp-content/uploads/2018/08/belgian-waffles.jpg',
        },
        {
            category: 'Breakfast',
            name: 'Cheesy Bacon Breakfast Burrito',
            directions:
                'In a large skillet over medium heat, cook bacon, working in batches if necessary, until crispy, about 8 minutes per batch. Drain on a paper towel-lined plate and pour off half the fat. Cook hash browns according to package directions in bacon fat and transfer to a plate. In a medium bowl, whisk together eggs and milk. Wipe out skillet, place over medium heat, and melt butter. When butter is just starting to foam, reduce heat to medium-low and add beaten eggs. Using a rubber spatula, stir every occasionally until soft curds form. Season with salt and pepper. Assemble burritos: In the center of each tortilla, layer hash browns, scrambled eggs, cheese, two slices of bacon, and sliced avocado. Fold in the two sides and roll up tightly. Serve with hot sauce.',
            cookTime: 45,
            servings: 4,
            isPublic: true,
            photoURL:
                'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-breakfast-burrito-vertical-1541626472.jpg',
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
            category: 'Lunch',
            name: 'Spicy Grilled Cheese Sandwich',
            directions:
                'Heat a large skillet over low heat. Spread butter or margarine onto one side of two slices of bread. Place both pieces buttered side down in the skillet. Lay a slice of cheese on each one, and top with slices of tomato, onion and jalapeno. Butter one side of the remaining slices of bread, and place on top buttered side up. When the bottom of the sandwiches are toasted, flip and fry until brown on the other side.',
            cookTime: 5,
            servings: 2,
            isPublic: true,
            photoURL:
                'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F5434462.jpg&w=596&h=399&c=sc&poi=face&q=85',
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
            category: 'Lunch',
            name: 'Basic Italian Bean Soup',
            directions:
                "Heat olive oil in a pot over medium-high heat. Cook and stir onion in hot oil until tender, about 5 minutes; add garlic and continue cooking until fragrant, 1 to 2 minutes more. Pour tomato sauce into the pot; stir. Add cannelini beans, basil, oregano, salt, and pepper. Bring the mixture to a simmer, reduce heat to medium-low, and cook until the beans are hot, 5 to 7 minutes more. You can add orzo, cut spaghetti, or grated cheese. It's also good with just some saltine crackers.",
            cookTime: 25,
            servings: 4,
            isPublic: true,
            photoURL:
                'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F1938306.jpg&w=596&h=596&c=sc&poi=face&q=85',
        },
        {
            category: 'Lunch',
            name: 'Delicious Egg Salad for Sandwiches',
            directions:
                'Place egg in a saucepan and cover with cold water. Bring water to a boil and immediately remove from heat. Cover and let eggs stand in hot water for 10 to 12 minutes. Remove from hot water, cool, peel and chop. Place the chopped eggs in a bowl, and stir in the mayonnaise, mustard and green onion. Season with salt, pepper and paprika. Stir and serve on your favorite bread or crackers.',
            cookTime: 35,
            servings: 4,
            isPublic: true,
            photoURL:
                'https://iambaker.net/wp-content/uploads/2019/04/6H5A9284.eggsalad.jpg',
        },
        {
            category: 'Lunch',
            name: 'Cobb Salad',
            directions:
                'Cook the bacon in a skillet on medium heat until crisp on both sides. Remove from skillet and lay out on paper towels to absorb the excess fat. Allow the bacon to cool. Crumble the bacon and set aside. Toss the various lettuces in a large salad bowl, toss together well various lettuces and watercress. Arrange chicken, bacon, tomato, and avocado decoratively over the greens and garnish the salad with the chopped egg and the chives. In a small bowl whisk together the vinegar, the mustard, and salt and pepper to taste, add the oil in a slow stream, whisking, and whisk the dressing until it is emulsified. Stir in the Roquefort. Add sugar to taste, 1/2 teaspoon at a time. Whisk the dressing. Serve separately or toss in with the salad.',
            cookTime: 50,
            servings: 6,
            isPublic: true,
            photoURL:
                'https://www.cookingclassy.com/wp-content/uploads/2021/03/cobb-salad-18-600x900.jpg',
        },
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
        {
            category: 'Dinner',
            name: 'Honey Garlic Glazed Salmon',
            directions:
                'Prepare and sear the salmon. Pat dry salmon fillets and season with salt and pepper. Set aside at room temperature for 10 to 15 minutes. In a large skillet, heat oil for 2 minutes over medium-high heat until the hot oil sizzles. Sear the salmon fillets for 5-6 minutes on each side (skin side facing up first), until golden brown and fully cooked. When salmon is cooked, the flesh will turn opaque, and it will flake easily when inserting a fork. Transfer the cooked salmon onto a plate. Make the honey garlic glaze. In a small bowl, whisk together soy sauce, honey, water, cornstarch and lemon juice. Whisk well to combine until the cornstarch dissolves. Set aside. In the same skillet, add garlic and sauté until fragrant over medium heat, about 1 minute. Stir in sauce mixture and cook for 3-4 minutes. Keep stirring until thickened to a desired consistency. Assemble and serve. Return the cooked salmon to the skillet and toss well to coat evenly. Garnish with green onions and serve warm with a bowl of steamed rice.',
            cookTime: 25,
            servings: 4,
            isPublic: true,
            photoURL:
                'https://www.aheadofthyme.com/wp-content/uploads/2021/02/honey-garlic-glazed-salmon-3-683x1024.jpg.webp',
        },
        {
            category: 'Dinner',
            name: 'Stovetop Mac and Cheese with White Cheddar',
            directions:
                'Make a roux. In a large pot, melt butter over medium heat. Stir in the flour and cook for 1 minute. Pour in water, and whisk until smooth. Pour in milk and whisk to combine. Add pasta. Add uncooked pasta, garlic powder, ground mustard, salt and pepper. Bring to a boil over high heat, then reduce heat to medium low heat. Cook for 9-10 minutes until al dente, stirring occasionally to prevent the pasta from sticking to the bottom of the pot. Stir in cheese. Remove from heat and stir in the cheddar, Parmesan and mozzarella. Make the panko topping (optional): In small bowl, mix together the panko breadcrumbs, garlic powder, and paprika. Heat olive oil in a skillet over medium heat and add panko mixture. Toast the breadcrumbs until light brown, about 2-3 minutes. Remove from heat. Serve. Serve mac and cheese warm, with a sprinkle of toasted panko on top.',
            cookTime: 20,
            servings: 6,
            isPublic: true,
            photoURL:
                'https://www.aheadofthyme.com/wp-content/uploads/2020/11/stovetop-mac-and-cheese-with-white-cheddar-6-683x1024.jpg.webp',
        },
        {
            category: 'Dessert',
            name: 'Chocolate Chip Cookie Dough Dip',
            directions:
                'Combine butter, cream cheese and sugars and vanilla and salt in the bowl of stand mixer until smooth. This took a couple of minutes on low. Fold in mini chocolate chips until evenly distributed in the dip. Serve with dippers like pretzels, green apples or chocolate graham crackers, waffle cones or get really wild and try a sweet and salty combo with corn chip dippers!',
            cookTime: 10,
            servings: 6,
            isPublic: true,
            photoURL:
                'https://www.thecookierookie.com/wp-content/uploads/2020/07/cookie-dough-dip-recipe-7-of-7-650x975.jpg',
        },
        {
            category: 'Dessert',
            name: 'Black Magic Chocolate Cake with BEST White Icing',
            directions:
                'Adjust oven rack to middle position and heat oven to 350°F. Spray your chosen baking pan(s) with nonstick baking spray. Sift together flour, sugar, cocoa, baking soda, baking powder and salt into the bowl of an electric mixer. Beat with paddle attachment, on low speed, just until combined. In a different bowl, combine buttermilk, oil, eggs and vanilla. Return the mixer to low speed and slowly add the wet ingredients to the dry ingredients. Mix about 15-20 seconds just until ingredients are incorporated. Add the coffee and stir, on low speed, just until combined. Pour the cake batter (it will very thin) into the cake pan(s) and bake until a toothpick inserted in the center comes out clean. Baking times for the 8-inch cake pans is 35-40 minutes, for the Bundt pan 50-55 minutes and for the 13×9 pan about 35-45 minutes. Top with your favorite icing.',
            cookTime: 50,
            servings: 12,
            isPublic: true,
            photoURL:
                'https://www.thecookierookie.com/wp-content/uploads/2020/05/black-magic-chocolate-cake-white-icing-3-of-8-650x975.jpg',
        },
        {
            category: 'Dessert',
            name: 'Pumpkin Brownies',
            directions:
                'Preheat your oven to whatever instructions are on the brownie mix box. 350F works well. Make the brownie mix in a separate bowl. Follow the directions on the box. Add the chocolate chips to the brownie mix. Stir them in and set the bowl and set to the side. Mix the pumpkin, cream cheese (softened), sugar, and pumpkin pie spice in another bowl. Mix until very smooth. Spray your pan with cooking spray before starting. Pour half of the brownie mix into the pan and spread out so the entire bottom of the pan is covered. Next add the pumpkin. You can either spoon the pumpkin filling onto the brownie in chunks or spread it out evenly. Cover the pumpkin with the rest of the brownie batter and smooth out the top. Now you’re ready to bake! I added 10 minutes to the directions on the box (cooked for 35 minutes for my pan size). Since you’re adding quite a bit of depth with the pumpkin mix…you’ll need to cook longer. To check if brownies are done…dip a fork into the middle of the brownies. If the fork comes out clean…they’re done! Enjoy!',
            cookTime: 45,
            servings: 12,
            isPublic: true,
            photoURL:
                'https://www.thecookierookie.com/wp-content/uploads/2012/10/pumpkin-brownies-2-of-9-650x917.jpg',
        },
        {
            category: 'Dessert',
            name: "S'mores Cookies",
            directions:
                'Preheat oven to 350 degrees F. Line a large baking sheet with aluminum foil or parchment paper. Place cookies 2 inches apart on baking sheet and bake per package directions. Also, while cookies are baking, crush the graham crackers and pour the crushed crackers in a small bowl. When cookies are ready, transfer cookies and tray to a cooling rack. Turn the oven to broil. Place 8-10 mini marshmallows on the top of each cookie and very lightly press down (just so marshmallows will stay put). Place the cookies back in the oven, under broil, just until marshmallows begin to turn golden brown. Remove the cookies from the oven, place the tray with the cookies on a cooling rack and allow them to cool completely. Once cookies have cooled, melt the chocolate (melt in 30 second intervals until smooth and fully melted when stirred.) then dip each cookie halfway into the melted chocolate. Sprinkle crushed graham cracker crumbs over the chocolate. Transfer cookies to a cooling rack until chocolate is set.',
            cookTime: 20,
            servings: 8,
            isPublic: true,
            photoURL:
                'https://www.thecookierookie.com/wp-content/uploads/2016/12/easy-smore-cookies-1-of-9-650x975.jpg',
        },
        {
            category: 'Dessert',
            name: 'Blueberry, Raspberry, Strawberry Tiramisu',
            directions:
                'Spray a 9×9 baking dish with nonstick spray. Place half of the lady fingers on the bottom of the pan, side by side. I used 10 on the bottom, 2 rows of 5. In a large bowl, beat the heavy cream until soft peaks form, about 3-4 minutes. Beat in the mascarpone, 1/2 cup sugar, vanilla, and 2 tablespoons Chambord. Beat until fully combined and smooth. Set aside. In a separate small bowl, stir together the jam/jelly and the remaining 3 tablespoons Chambord. Set aside. In yet another bowl, mix together all of the fruit with 1/2 cup sugar. Stir to coat all the fruit; macerating the fruit and allowing some juices to form. Set aside. Start my smoothing half of the cream mixture over the lady fingers. Use a spatula to smooth out the layer. Top with half of the jam mixture and use a fork to incorporate the jam into the cream. Top with half of the fruit. Repeat the layers, starting with ladyfingers, cream, jam, then fruit. Cover and refrigerate for a minimum of 4 hours. Serve cold.',
            cookTime: 15,
            servings: 9,
            isPublic: true,
            photoURL:
                'https://www.thecookierookie.com/wp-content/uploads/2016/02/triple-berry-tiramisu-recipe-5-650x975.jpg',
        },
        {
            category: 'Dessert',
            name: 'Easy Homemade Apple Pie Recipe',
            directions:
                'Combine sugar, flour and cinnamon; mix with apples. (I used about 6 apples for my pie plate and only about 3/4 of sugar). Line pie plate with pie crust. Then pour sugar coated apples into pie plate. Dot with butter. I used 1/2 or 1/4 teaspoon of butter and just put 4-5 smaller balls of butter randomly on top of the apples. Place second crust on top of apples and butter. Cut a few slits for steam to escape on top layer of crust. Spread a small amount of milk on top of pastry (I use a fork, when I use a spoon the pastry gets soggy.) Then sprinkle pie with sugar on milk. This will give the pie a warm and brown look on top. Bake pie at 400 for 50 minutes. I would put a cookie sheet a rack lower in the oven in case juices overflow your pie plate.',
            cookTime: 35,
            servings: 8,
            isPublic: true,
            photoURL:
                'https://www.thecookierookie.com/wp-content/uploads/2013/11/homemade-apple-pie-5-of-8-650x972.jpg',
        },
];

const seed = async () => {
    for (let i = 1; i <= 20; i++) {
        try {
            const { status, json } = await userRegister({
                email: `test${i}@email.com`,
                username: `user${i}`,
                password: 'Password1',
            });
            if (status === 200) {
                for (const recipe of recipes) {
                    await createMyRecipe(
                        { ...recipe, views: i },
                        json.sessionToken
                    );
                    console.log('success');
                }
            }
        } catch (err) {
            console.log('fail');
        }
    }
};

export default seed;
