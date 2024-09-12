import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const data = [
    { name: "AK-47 Vulcan", image: "https://screenshots.cs.money/csmoney2/f8202e332bcb94eda8fe78f205332d21_large_preview.png", category: "rifle", float: "0.31", price: 70 },
    { name: "Desert Eagle Code Red", image: "https://screenshots.cs.money/csmoney2/c4df7d4e890fe92796022d3ce981137c_large_preview.png", category: "pistola", float: "0.15", price: 55 },
    { name: "Karambit Fade", image: "https://screenshots.cs.money/csmoney2/6b7eecb4bcdb0750d38416892ff4cf3e_large_preview.png", category: "faca", float: "0.07", price: 210 },
    { name: "AWP Dragon Lore", image: "https://screenshots.cs.money/csmoney2/1ce3dd5500d7ade803cf0e8d3095a721_large_preview.png", category: "rifle", float: "0.45", price: 1500 },
    { name: "M4A1-S Hyper Beast", image: "https://screenshots.cs.money/csmoney2/89a624df868bf29b1b96eb8e3e85b33a_large_preview.png", category: "rifle", float: "0.33", price: 75 },
    { name: "Glock-18 Fade", image: "https://screenshots.cs.money/csmoney2/16613eb4c6f485be3533c9430c0f1d11_large_preview.png", category: "pistola", float: "0.02", price: 120 },
    { name: "AWP Asiimov", image: "https://screenshots.cs.money/csmoney2/fad9e2331063bcb96de4a957fda3a2bf_large_preview.png", category: "rifle", float: "0.18", price: 200 },
    { name: "Butterfly Knife Marble Fade", image: "https://screenshots.cs.money/csmoney2/cacd1106fb70732cd0aa7944fec17f1e_large_preview.png", category: "faca", float: "0.03", price: 500 },
    { name: "M4A4 Howl", image: "https://screenshots.cs.money/csmoney2/a9a3bb628b35cc4391fcdfe3d727328a_large_preview.png", category: "rifle", float: "0.20", price: 3000 },
    { name: "P90 Death by Kitty", image: "https://screenshots.cs.money/csmoney2/44b6a0920f64f24b4b3778ea183b1d89_large_preview.png", category: "smg", float: "0.12", price: 90 },
    { name: "USP-S Kill Confirmed", image: "https://screenshots.cs.money/csmoney2/491311c27f00c4893f6a40802278fc9b_large_preview.png", category: "pistola", float: "0.19", price: 100 },
    { name: "Desert Eagle Blaze", image: "https://screenshots.cs.money/csmoney2/81864de016de9519444d2c516263ae48_large_preview.png", category: "pistola", float: "0.05", price: 400 },
    { name: "MAC-10 Neon Rider", image: "https://screenshots.cs.money/csmoney2/0668895fd72a861029df2cc6ae1e3015_large_preview.png", category: "smg", float: "0.20", price: 50 },
    { name: "AK-47 Redline", image: "https://screenshots.cs.money/csmoney2/15514c8cda53afefa85baad91b62bd8e_large_preview.png", category: "rifle", float: "0.25", price: 80 },
    { name: "AWP Medusa", image: "https://screenshots.cs.money/csmoney2/b6f469f94ad562a8e6ec406511d2e468_large_preview.png", category: "rifle", float: "0.09", price: 4000 }
  ];

  for (let item of data) {
    await prisma.item.create({
      data: item
    });
  }

  console.log("Data has been seeded.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
