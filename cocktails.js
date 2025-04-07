const drinks = [
    {
      name: "Candy Cane Mocktail",
      ingredients: "Cranberry juice, Club soda, Peppermint syrup",
      recipe: "Combine 1 cup cranberry juice, 1/2 cup club soda, and a dash of peppermint syrup. Serve with crushed candy cane on the rim.",
      calories: 80,
      image: "https://dairyfarmersofcanada.ca/sites/default/files/styles/recipe_image/public/image_file_browser/conso_recipe/2023/QING_Candy%20Cane%20Cream%20Soda%20Mocktail_Website%20image.png.jpeg?itok=GyhbdprW",
    },
    {
      name: "Eggnog Martini",
      ingredients: "Eggnog, Vodka, Nutmeg",
      recipe: "Mix 1 cup eggnog with 1 oz vodka. Shake with ice and sprinkle nutmeg on top before serving.",
      calories: 250,
      image: "https://www.thespruceeats.com/thmb/xIOX1RzunadfYz8IglNVYm_WfAo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SES-eggnog-martini-4771125-hero-01-c64037a7d18f484a91f5112adfa79424.jpg",
    },
    {
      name: "Sparkling Pomegranate Punch",
      ingredients: "Pomegranate juice, Ginger ale, Orange slices",
      recipe: "Mix 1 cup pomegranate juice with 1/2 cup ginger ale. Garnish with orange slices.",
      calories: 120,
      image: "https://joylovefood.com/wp-content/uploads/2015/10/Sparkling-Pomegranate-Punch-3.jpg",
    },
    {
      name: "Hot Buttered Rum",
      ingredients: "Butter, Brown sugar, Spices, Rum",
      recipe: "Combine 1 tbsp butter with 1 tbsp brown sugar, cinnamon, and clove. Add 2 oz rum and hot water.",
      calories: 300,
      image: "https://cdn.apartmenttherapy.info/image/upload/v1695673785/k/Photo/Recipes/2023-09-hot-buttered-rum/hot-buttered-rum-1231.jpg",
    },
    {
      name: "Gingerbread Latte Mocktail",
      ingredients: "Espresso, Gingerbread syrup, Milk",
      recipe: "Mix 1 shot espresso, 1 oz gingerbread syrup, and 1/2 cup steamed milk. Top with whipped cream.",
      calories: 150,
      image: "https://thehealthfulideas.com/wp-content/uploads/2023/11/Iced-Gingerbread-Latte-SQUARE.jpg",
    }
  ];

  const setUpCards = () => {
    const wrapper = $('.wrapper');
    drinks.forEach((drink, index) => {
      let cardMarkup = `
        <div class="card" data-index="${index}">
          <img src="./images/${drink.image}" alt="${drink.name}">
          <div class="info">
            <strong>${drink.name}</strong>
            <p>Main ingredients: ${drink.ingredients}</p>
          </div>
        </div>`;
      wrapper.append(cardMarkup);
    });
  };
  
  const setEventHandlers = () => {
    $('.card').on('mouseover', function() {
      const index = $(this).data('index');
      $(this).find('.info').html(`<p>${drinks[index].recipe}</p>`);
    });
  
    $('.card').on('click', function() {
      const index = $(this).data('index');
      $(this).find('.info').html(`<p>Calories: ${drinks[index].calories}</p>`);
    });
  
    $('.card').on('mouseout', function() {
      const index = $(this).data('index');
      $(this).find('.info').html(`
        <strong>${drinks[index].name}</strong>
        <p>Main ingredients: ${drinks[index].ingredients}</p>
      `);
    });
  };
  
  $(document).ready(() => {
    setUpCards();
    setEventHandlers();
  });
  
