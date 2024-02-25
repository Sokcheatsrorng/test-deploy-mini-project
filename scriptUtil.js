
let NAV_BAR = document.querySelector('header');
let displayNavBar = `
<style>
   .active{
    color: #FFB41A;
   }
</style>
<nav class="bg-white border-gray-200 ">
<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-6">
<a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="../image/logo-thormcheat.png" class="h-12" alt="Thormcheat-Logo" />
</a>
<div>
<form class="max-w-md mx-auto">   
<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
<div class="relative">
    <input type="search" id="default-search" class="block md:w-[350px] sm:w-[400px] p-2 ps-4 text-sm text-gray-900 border border-gray-300 rounded-[25px] bg-gray-50  outline-none ring-none focus:ring-white" placeholder="Search..." required />
</div>
</form>
</div>
<div class="flex md:order-3 space-x-3 md:space-x-0 rtl:space-x-reverse">
    <button type="button" class="text-white bg-blue-700 hover:bg-[#FFB41A]  font-medium rounded-lg text-sm px-4 py-2 text-center md:block hidden">Get started</button>
    <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden " aria-controls="navbar-cta" aria-expanded="false">
      <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
      </svg>
  </button>
</div>
<div class="items-center  hidden w-full md:flex md:w-auto md:order-2" id="navbar-cta">
  <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
    <li>
      <a href="../index.html" class="block py-2 px-3 md:p-0 text-gray-900 bg-blue-700 rounded md:bg-transparent " aria-current="page" id="page1">Home</a>
    </li>
    <li>
      <a href="../detailPage.html" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent " id="page2">Detail</a>
    </li>
    <li>
      <a href="../aboutus.html" class="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent  " id="page3">About Us</a>
    </li>
  </ul>
</div>
</div>
</nav>
`;

NAV_BAR.innerHTML = displayNavBar;
document.addEventListener("DOMContentLoaded", function() {
    var currentPage = window.location.pathname.split("/").pop(); // Get the current page filename
    var navLinks = document.querySelectorAll("nav a");

    // Loop through each nav link
    navLinks.forEach(function(link) {
        // Check if the href attribute matches the current page filename
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

        // Add click event listener to each link
        link.addEventListener("click", function(event) {
            // Remove "active" class from all links
            navLinks.forEach(function(link) {
                link.classList.remove("active");
            });

            // Add "active" class to the clicked link
            link.classList.add("active");
        });
    });
});

// for footer 
let FOOTER = document.querySelector('footer');
let displayFooter = `
<div class="mx-auto w-full max-w-screen-xl p-6 py-6 lg:py-8">
    <div class="md:flex md:gap-[200px] ">
      <div class="mb-6 md:mb-0">
          <a href="index.html" class="flex items-center">
              <img src="../image/logo-thormcheat.png" class="h-20 me-3" alt="Thormcheat-Logo" />
          </a>
      </div>
      <div class="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 sm:grid-cols-3 mb-6 md:mb-0">
          <div>
              <h2 class="mb-6 text-[16px] font-bold text-[#003F49] ">Learn More</h2>
              <ul class="text-gray-500 dark:text-gray-400 text-[14px]">
                  <li class="mb-4">
                      <a href="" class="hover:text-[#FFB41A]">About Thormcheat</a>
                  </li>
                  <li class="mb-4">
                      <a href="" class="hover:text-[#FFB41A]">Order Online</a>
                  </li>
                  <li class="mb-4">
                      <a href="" class="hover:text-[#FFB41A]">Term & Condition</a>
                  </li>
                  <li class="mb-4">
                      <a href="" class="hover:text-[#FFB41A]">Privacy Policy</a>
                  </li>
                  <li>
                      <a href="" class="hover:text-[#FFB41A]">Contact Us</a>
                  </li>
              </ul>
          </div>
          <div>
              <h2 class="mb-6 text-[16px] font-bold text-[#003F49]  ">About Plants</h2>
              <ul class="text-gray-500 dark:text-gray-400 text-[14px]">
                  <li class="mb-4">
                      <a href="" class="hover:text-[#FFB41A]">About</a>
                  </li>
                  <li class="mb-4">
                      <a href="" class="hover:text-[#FFB41A]">Blogs</a>
                  </li>
                  <li>
                      <a href="" class="hover:text-[#FFB41A]">All Plants</a>
                  </li> 
              </ul>
          </div>
          <div>
              <h2 class="mb-6 text-[16px] font-bold text-[#003F49]  ">Contact Us</h2>
              <ul class="text-gray-500 dark:text-gray-400 text-[14px]">
                  <li class="mb-4">
                      <a href="" class="hover:text-[#FFB41A] ">Stock Manager: <tel class="font-bold text-[#003F49]">123-456-789</tel></a>
                  </li>
                  <li>
                      <a href="" class="hover:text-[#FFB41A]">Order Office: <tel class="font-bold text-[#003F49]">123-456-7890</tel></a>
                  </li>
              </ul>
          </div>
          <div>
              <h2 class="mb-6 text-[16px] font-bold text-[#003F49]  ">Social</h2>
              <ul class="text-gray-500 dark:text-gray-400 text-[14px]">
                  <li class=" flex gap-4 text-[16px] text-[#003F49]">
                      <a href="#" class="hover:text-[#FFB41A]">
                      <i class="fa-brands fa-facebook"></i></a>
                      <a href="#" class="hover:text-[#FFB41A]">
                      <i class="fa-brands fa-twitter"></i></a>
                      <a href="#" class="hover:text-[#FFB41A]">
                      <i class="fa-brands fa-youtube"></i></a>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  <div class="sm:flex sm:items-center sm:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="" class="hover:underline">Flowbite™</a>. All Rights Reserved.
      </span>
  </div>
</div>
`;
FOOTER.innerHTML = displayFooter;