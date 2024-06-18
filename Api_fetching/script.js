
async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        const jsondata = await response.json();
        const product = jsondata.products
        displayProducts(product);
    } catch (error) {
        console.error("Error:", error);
    }
}


function displayProducts(products) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = ''; 

    products.forEach((product) => {
        
        const card = document.createElement('a');
        card.className = 'flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-lg transition';
        card.href = '#';

        
        const img = document.createElement('img');
        img.className = 'w-full h-auto rounded-t-xl';
        img.src = product.images[0];
        img.alt = 'Image Description';

        
        const contentDiv = document.createElement('div');
        contentDiv.className = 'p-4 md:p-5 flex flex-col flex-1';

        
        const title = document.createElement('h3');
        title.className = 'text-lg font-bold text-gray-800 text-center';
        title.textContent = product.title;

       
        const text = document.createElement('p');
        text.className = 'mt-1 text-gray-500 text-center';
        text.textContent = product.description;

        
        const price = document.createElement('div');
        price.className = 'mt-1 text-gray-500 text-center p-2 bg-gray-300 mt-auto'; // Ensure it stays at the bottom
        price.textContent = `$${product.price}`;

        
        contentDiv.appendChild(title);
        contentDiv.appendChild(text);
        contentDiv.appendChild(price);

        
        card.appendChild(img);
        card.appendChild(contentDiv);

        
        cardContainer.appendChild(card);
    });
}


async function handleonchange(event) {
    const search = event.target.value;
    try {
        const response = await fetch(`https://dummyjson.com/products/search?q=${search}`);
        const jsondata = await response.json();
        const product = jsondata.products
        displayProducts(product);
    } catch (error) {
        console.error("Error:", error);
    }
}


fetchData();