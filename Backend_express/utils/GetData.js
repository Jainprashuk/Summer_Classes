import fs from 'fs/promises';

const GetData = async () => {
  let products;
  try {
    const data = await fs.readFile('./data.json', 'utf-8');
    products = JSON.parse(data);
  } catch (error) {
    console.error('Error reading or parsing data:', error);
    products = [];
  }
  return products;
};

export { GetData };
