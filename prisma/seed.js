const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function seedProducts() {
  try {
    await prisma.products.create({
      data: {
        title: "Bouquet of 'Country Blues' roses",
        description:
          "Bouquets of 11, 15, 19, 23, 25, 31, 35, 51 and 101 roses on photos. Flowers used: peony-s≈haped rose (length: 50-60 cm)",
        url: "https://bunchovflowers.pl/2099-large_default/bouquet-of-country-blues-roses.jpg",
        price: 2500, // EG: 25.00
      },
    });
    await prisma.products.create({
      data: {
        title: "Large bouquet of limonium",
        description: "Size L on photo. Flowers used: limonium",
        url: "https://bunchovflowers.pl/950-large_default/large-bouquet-of-limonium.jpg",
        price: 2500, // EG: 25.00
      },
    });
  } catch (error) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
}

seedProducts();
