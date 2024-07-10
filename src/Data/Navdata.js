const Navdata = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "top", href: `{woman/clothing/tops}` },
            { name: "Dresses", id: "woman_dress" , href: "#" },
            { name: "Pants", id: "woman_pants" },
            { name: "Denim", id: "woman_denim" },
            { name: "Sweaters", id: "woman_sweaters" },
            { name: "T-Shirts", id: "woman_tshirts" },
            { name: "Jackets", id: "woman_jackets" },
            { name: "Activewear", id: "woman_activewear" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "woman_watches" },
            { name: "Wallets", id: "woman_wallets" },
            { name: "Bags", id: "woman_bags" },
            { name: "Sunglasses", id: "woman_sunglasses" },
            { name: "Hats", id: "woman_hats" },
            { name: "Belts", id: "woman_belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Full Nelson", id: "woman_nelson" },
            { name: "My Way", id: "woman_my_way" },
            { name: "Re-Arranged", id: "woman_arranged" },
            { name: "Counterfeit", id: "woman_counterfeit" },
            { name: "Significant Other", id: "woman_others" },
          ],
        },
      ],
    },
    {
      id: "men",
      name: "Men",
      featured: [
        {
          name: "New Arrivals",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg",
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Artwork Tees",
          href: "/",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg",
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "clothing",
          name: "Clothing",
          items: [
            { name: "Tops", id: "men_tops" },
            { name: "Pants", id: "men_pants" },
            { name: "Sweaters", id: "men_sweaters" },
            { name: "T-Shirts", id: "men_tshirts" },
            { name: "Jackets", id: "men_jackets" },
            { name: "Activewear", id: "men_activewear" },
          ],
        },
        {
          id: "accessories",
          name: "Accessories",
          items: [
            { name: "Watches", id: "men_watches" },
            { name: "Wallets", id: "men_wallets" },
            { name: "Bags", id: "men_bags" },
            { name: "Sunglasses", id: "men_sunglasses" },
            { name: "Hats", id: "men_hats" },
            { name: "Belts", id: "men_belts" },
          ],
        },
        {
          id: "brands",
          name: "Brands",
          items: [
            { name: "Re-Arranged", id: "men_arranged" },
            { name: "Counterfeit", id: "men_counterfeit" },
            { name: "Full Nelson", id: "men_nelson" },
            { name: "My Way", id: "men_way" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Company", href: "/" },
    { name: "Stores", href: "/" },
  ],
};

export default Navdata;