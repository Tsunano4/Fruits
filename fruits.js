fetch('fruits.json')
  .then(response => response.json())
  .then(data => {
    
    const fruits = data.fruits;

    const fruitContainer = document.getElementById('fruitContainer');

    fruits.forEach(fruit => {
      
      const card = document.createElement('div');
      card.className = 'fruit-card';

   
      const name = document.createElement('h2');
      name.textContent = fruit.name;
      card.appendChild(name);

      const image = document.createElement('img');
      image.className = 'fruit-image';
      image.src = fruit.link;
      card.appendChild(image);

      
      const description = document.createElement('p');
      description.textContent = fruit.description;
      card.appendChild(description);

      
      const price = document.createElement('p');
      price.textContent = `₱${fruit.price.toFixed(2)} per kilo`;
      price.className = 'price';
      card.appendChild(price);

      
      fruitContainer.appendChild(card);
    });
  })
 
