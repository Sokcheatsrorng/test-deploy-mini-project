// script for display 3 advertise card 
let adsDisplay = [
    {
      title : "Advertise1",
      image: "../image/advertise1.png"
    },
    {
      title : "Advertise2",
      image: "../image/advertise2.png"
    },
    {
      title : "Advertise3",
      image: "../image/advertise3.png"
    },
    {
      title : "Advertise4",
      image: "../image/advertise4.png"
    }
]
let displayAdds = document.querySelector('#displayAdvertiseCard');
adsDisplay.map(item=>{
    displayAdds.innerHTML += `
    <style>
      .advertise-cards{
        transition: transform 0.3s;
      }
      .advertise-cards:hover{
        transform: scale(1.05); 
      }
    </style>
    <a href="#"
    class="flex flex-row justify-center text-center bg-white border border-gray-200 rounded-lg shadow md:flex-row advertise-cards">
    <img
    class="object-contain mx-auto rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src="${item.image}" alt>
  
</a>
    `;
})

// script for display best seller cards 
let productsBestSell = [
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/bestseller1.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/bestseller2.png"
    },
    {
        title : "Calathea Orbifilio- Rubber Plant",
        price: 39,
        image: "../image/bestseller3.png"
    },
    {
        title : "Artificial - Rubber Plant",
        price: 39,
        image: "../image/bestseller4.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/bestseller1.png"
    },
    {
        title : "Ficus elastica Robusta - Rubber Plant",
        price: 39,
        image: "../image/bestseller2.png"
    },
    {
        title : "Calathea Orbifilio- Rubber Plant",
        price: 39,
        image: "../image/bestseller3.png"
    },
    {
        title : "Artificial - Rubber Plant",
        price: 39,
        image: "../image/bestseller4.png"
    },
   
]

let productListBestSell = document.querySelector("#productListBestSell");
productsBestSell.map(pro =>{
    productListBestSell.innerHTML += `
    <style>
    .bestseller-cards{
      transition: transform 0.3s;
    }
    .bestseller-cards:hover{
      transform: scale(1.05); 
    }
  </style>
    <div
    class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow  bestseller-cards ">
    <a href="#" >
        <img class="p-8 rounded-t-lg"
            src="${pro.image}"
            alt="product image" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5
                class="text-xl font-semibold tracking-tight text-gray-900 ">${pro.title}</h5>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <div
                class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg class="w-4 h-4 text-yellow-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                    class="w-4 h-4 text-gray-200 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor" viewBox="0 0 22 20">
                    <path
                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
            </div>
            <span
                class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
        </div>
        <div class="flex items-center justify-between">
            <span
                class="text-3xl font-bold text-red-500 ">$${pro.price}</span>
            <a href="#"
                class="text-white bg-[#003F49] hover:bg-[#FFB41A]  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add
                to cart</a>
        </div>
    </div>
</div>
    `;
})

