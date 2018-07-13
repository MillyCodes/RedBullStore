axios.get("https://www.redbullshopus.com/products.json").then((response) => {
    console.log(response);
    let data  = response.data
    let products = data.products;
    // let productTitle = products.title

    // set a container for page
    let container = document.getElementById("container")
    products.forEach( (elementAtEachIteration) => {

        // create and insert product container
        let productContainer = document.createElement('div')
        productContainer.classList.add('product-container')
                container.appendChild(productContainer);

        // create and insert product title
        let productTitle = elementAtEachIteration.title        
        let productName = document.createElement('h3');
        productName.classList.add('product-title');
        productName.innerText= productTitle;
        productContainer.appendChild(productName);

        // create variable and insert product price
        let productPrice = elementAtEachIteration.variants[0].price;
        // console.log(productPrice)
        let priceDisplay = document.createElement('h5');
        priceDisplay.innerText = productPrice
        productContainer.appendChild(priceDisplay)

        // create variable and insert product img
        let productImg = elementAtEachIteration.images[0].src;
        console.log(productImg)
        let imgDisplay = document.createElement('img');
        imgDisplay.setAttribute('src', productImg)
        productContainer.appendChild(imgDisplay)
        
    })

});
