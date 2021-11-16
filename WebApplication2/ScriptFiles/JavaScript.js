

document.getElementById("btnLogin").onclick = window.open("file:///C:/Users/Rina%20Saruri/source/repos/WebApplication2/WebApplication2/HtmlPages/LoginPage.html");

function createProduct(id, name, imageSource) {
    let myProduct = {
        id: id,
        name: name,
        imageSource: imageSource,
    };
    return myProduct;
}

myImage = new Image();
Image.src = 'C:\Users\Rina Saruri\source\repos\WebApplication2\picture\bamba.JPG';


let result = createProduct(1, 'aaa', myProductImage.src);
console.log(result);




