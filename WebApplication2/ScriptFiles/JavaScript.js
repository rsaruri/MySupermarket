
//open new html page for login 
document.getElementById("btnLogin").onclick = window.open("file:///C:/Users/Rina%20Saruri/source/repos/WebApplication2/WebApplication2/HtmlPages/LoginPage.html");


//option 1: Create array object

let productsArray = [
    { id: 1, name: 'Bamba', price: 5, source: 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\bamba.JPG' },
    { id: 2, name: 'chips', price: 4, source: 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\chips.JPG' },
    { id: 3, name: 'Bisli', price: 3, source: 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\bisli.JPG' },
];

//sum of price products
const productSumPrice = productsArray.map(item => item.price).reduce((prev, curr) => prev + curr, 0);
console.log(productSumPrice);
document.createElement 

//show the source of image
let productSource = productsArray.map(item => item.source);
console.log(productSource);


//option 2: Show 3 imagas from array
/*function createProduct(id, name, imageSource) {
    let myProduct = {
        id: id,
        name: name,
        imageSource: imageSource,
    };
    return myProduct;
}

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\bamba.JPG';
imgArray[1] = new Image();
imgArray[1].src = 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\chips.JPG';
imgArray[2] = new Image();
imgArray[2].src = 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\bisli.JPG';

let result1 = createProduct(1, 'bamba', imgArray[0].src)
console.log(result1);
let result2 = createProduct(2, 'chips', imgArray[1].src)
console.log(result2);
let result3 = createProduct(3, 'bisli', imgArray[2].src)
console.log(result3);*/



//option 3: Show 1 image 

/*let img = document.createElement("img");
img.src = 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\bamba.JPG';
img.style.border = "0.5px solid orange";
img.style.borderRadius = "100px";
document.body.appendChild(img);*/





