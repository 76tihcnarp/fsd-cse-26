import Test from "./Test.js";

const Problem=[
    { prblm:"1: what is the command used for running a react file developed by vite",
        sol1 : "npm run dev",
        sol2 : "nmp run dev",
        sol3 : "npm dev run",
        sol4 : "run npm dev"},
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