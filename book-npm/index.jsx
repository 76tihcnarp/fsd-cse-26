import React from "react";
import { createRoot } from "react-dom/client";

function Book(){
    return(
        <div className="book">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_SCvkd4fXro9fYWbipypGIg1PzVsrFs-Wc6CHCDvy8PLBN_FOwJ7tN8Y&s=10"
             width="100" height="150" />
            <h3>title: ReactJS</h3>
            <h3>author: J.B Dutta</h3>
            <h3>price : Rs. 467</h3>
            <button>Add To Cart</button>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>
                <center>
                    Prx. Book Store
                </center>
            </h1>
            <div className="bookstore">
            <Book/>
            <Book/>
            <Book/>
            </div>
        </div>
    )
}

const parent=document.getElementById("root");
const root = createRoot(parent);
root.render(<App />)