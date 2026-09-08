import  "./Items.css"
const Items = ({props}) => {
  return (
    <div className="card">
      <img src={props.image} width={100} height={100} />
      <h3>title {props.title}</h3>
      <h3>price: {props.price}</h3>
      <button>Add To Cart</button>
    </div>
  )
}

export default Items
