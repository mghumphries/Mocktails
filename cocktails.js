const drinks = [
    {
      name: "Candy Cane Mocktail",
      ingredients: "Cranberry juice, Club soda, Peppermint syrup",
      recipe: "Combine 1 cup cranberry juice, 1/2 cup club soda, and a dash of peppermint syrup. Serve with crushed candy cane on the rim.",
      calories: 80,
      image: "drinks/candycane.jpeg",
    },
    {
      name: "Eggnog Martini",
      ingredients: "Eggnog, Vodka, Nutmeg",
      recipe: "Mix 1 cup eggnog with 1 oz vodka. Shake with ice and sprinkle nutmeg on top before serving.",
      calories: 250,
      image: "drinks/martini.jpg",
    },
    {
      name: "Sparkling Pomegranate Punch",
      ingredients: "Pomegranate juice, Ginger ale, Orange slices",
      recipe: "Mix 1 cup pomegranate juice with 1/2 cup ginger ale. Garnish with orange slices.",
      calories: 120,
      image: "drinks/Sparkling-Pomegranate-Punch-3.jpg",
    },
    {
      name: "Hot Buttered Rum",
      ingredients: "Butter, Brown sugar, Spices, Rum",
      recipe: "Combine 1 tbsp butter with 1 tbsp brown sugar, cinnamon, and clove. Add 2 oz rum and hot water.",
      calories: 300,
      image: "drinks/rum.jpg",
    },
    {
      name: "Gingerbread Latte Mocktail",
      ingredients: "Espresso, Gingerbread syrup, Milk",
      recipe: "Mix 1 shot espresso, 1 oz gingerbread syrup, and 1/2 cup steamed milk. Top with whipped cream.",
      calories: 150,
      image: "drinks/Iced-Gingerbread-Latte-SQUARE.jpg",
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
  
