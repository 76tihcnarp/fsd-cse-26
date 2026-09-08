function Test(props){
    const prblm=React.createElement("h2",
        {color:"red"},"que-"+props.prblm);
    const sol1=React.createElement("h2",
           {style:{color: "blue",marginLeft:"30px"}},"option 1:"+props.sol1)
    const sol2=React.createElement("h2",
           {style:{color: "blue",marginLeft:"30px"}},"option 2:"+props.sol2)
    const sol3=React.createElement("h2",
           {style:{color: "blue",marginLeft:"30px"}},"option 3:"+props.sol3)
    const sol4=React.createElement("h2",
           {style:{color: "blue",marginLeft:"30px"}},"option 4:"+props.sol4)
    const btn=React.createElement("button",
           {style:{color: "blue", margin: "20px"}},"submit")
    const div=React.createElement("div",
        {className:"book"},[prblm,sol1,sol2,sol3,sol4,btn])
    return div;                    
}

export default Test;