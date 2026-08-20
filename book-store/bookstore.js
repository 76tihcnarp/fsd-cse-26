const books = [
    {
        image: "https://images.ctfassets.net/9htf9uzhsn4z/51ynRwyfYI3iCsHLT7n9ew/0987e51e30a65974ac6adc97c84c84ed/lulu-products-product-types-print-books-2x.jpg?w=2880&h=960&fm=webp",
        price: 465
    },
    {
        image: "https://images.ctfassets.net/9htf9uzhsn4z/51ynRwyfYI3iCsHLT7n9ew/0987e51e30a65974ac6adc97c84c84ed/lulu-products-product-types-print-books-2x.jpg?w=2880&h=960&fm=webp",
        price: 550
    },
    { image: "https://images.ctfassets.net/9htf9uzhsn4z/51ynRwyfYI3iCsHLT7n9ew/0987e51e30a65974ac6adc97c84c84ed/lulu-products-product-types-print-books-2x.jpg?w=2880&h=960&fm=webp",
        price: 300
    }
];

const parent=document.getElementById("root");
books.forEach((book) => {

const div=document.createElement("div");
div.setAttribute("class","book");

const img=document.createElement("img");
img.setAttribute("src",book.image);
img.setAttribute("height","150px");
img.setAttribute("width","150px");

const head=document.createElement("h4");
head.innerText=`Price: ${book.price}`;

const btn=document.createElement("button");
btn.innerText="add to cart";

div.appendChild(img);
div.appendChild(head);
div.appendChild(btn);

div.style.margin="30px";
div.style.backgroundColor="green";
div.style.width="200px";
div.style.padding="30px";

parent.appendChild(div);


})