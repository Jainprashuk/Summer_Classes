import http from 'http';
import fs from 'fs';
import url from 'url';

const port = 8000;



const server = http.createServer(async (req, res) => {
    const { query, pathname } = url.parse(req.url, true);
    console.log(pathname);
    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = await fs.promises.readFile('./index.html', 'utf8');
        res.end(data);
    } else if (pathname === '/profile') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = await fs.promises.readFile('./profile.html', 'utf8');
        res.end(data);
    } else if (pathname === '/shop') {
        console.log("hitted");
        res.writeHead(200, { 'Content-Type': 'text/html' });
        const data = await fs.promises.readFile('./shop.html', 'utf8');
        
        res.end(data);
        
    }else if(pathname == '/view'){
        let id = query.id
        async function fetchData() {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const jsondata = await response.json();
                const product = await jsondata.products
                // console.log(product);

               let fdata =  product.find((ele)=>{
                    return id == ele.id
                })
                res.end(`
                    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-200">
    <div class="bg-white rounded-2xl mt-1 shadow-xl mx-auto w-1/2 mt-5  p-6 ">
        <h2 class="text-center font-bold text-3xl " >This is product id = ${query.id} </h2>
        <br/>
        <p> <span class="font-semibold text-lg">Product Tittle</span> :  ${fdata.title} </p>
        <img class="mx-auto" width="200px" height="200px" src=${fdata.thumbnail} alt="">
        <p> <span class="font-semibold text-lg">Product Description</span> :  ${fdata.description} </p>
        <p> <span class="font-semibold text-lg">Product category</span> :  ${fdata.category} </p>
        <p> <span class="font-semibold text-lg">Product stock</span> :  ${fdata.stock} </p>
        <p> <span class="font-semibold text-lg">Product Price</span> :  ${fdata.price} </p>
        <p> <span class="font-semibold text-lg">Product rating</span> :  ${fdata.rating} </p>
        <p> <span class="font-semibold text-lg">Product weight</span> :  ${fdata.weight} </p>
        <p> <span class="font-semibold text-lg">Product dimensions</span> :  ${fdata.dimensions.width} X ${fdata.dimensions.height} X ${fdata.dimensions.depth} </p>
        <p> <span class="font-semibold text-lg">Product warrantyInformation</span> :  ${fdata.warrantyInformation} </p>
        

    </div>
</body>
</html>`);
                console.log(fdata);
                
            } catch (error) {
                console.error("Error:", error);
            }
        }
        fetchData()
        
        

        // let fdata = data.find((ele)=>{
        //     return ele.id == id;
        // })
        

    }else if(pathname === '/shop.js'){
        res.writeHead(200, { 'Content-Type': 'application/javascript' });
        const data = await fs.promises.readFile('./shop.js', 'utf8');
        res.end(data)
    }
});

server.listen(port, () => {
    console.log(`Server started at port: ${port}`);
});
