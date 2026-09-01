import Test from "./Test.js";

const Problem=[
    {image: "",title:"ReactJS",price: 675},
]

function App(){
    const bookstore=Problem.map((b)=>{
      return Test(b)
    })
    const div=React.createElement("div",
        {className:"bookstore"},[...bookstore]
    )
    return div;
}

export default App;