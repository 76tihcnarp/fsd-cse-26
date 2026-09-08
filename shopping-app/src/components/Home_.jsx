import Items from "./Items"

const Home = () => {


const Itemdata = [
  {
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    title: "Wireless Headphones",
    price: "1999"
  },
  {
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    title: "Smart Watch",
    price: "2499"
  },
  {
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    title: "Running Shoes",
    price: "1799"
  },
  {
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    title: "Digital Camera",
    price: "15999"
  },
  {
    image: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b",
    title: "Cotton T-Shirt",
    price: "599"
  },
  {
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    title: "Smartphone",
    price: "14999"
  },
  {
    image: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f",
    title: "Sneakers",
    price: "2299"
  },
  {
    image: "https://images.unsplash.com/photo-1519947486511-46149fa0a254",
    title: "Sunglasses",
    price: "799"
  },
  {
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa",
    title: "Lipstick",
    price: "499"
  },
  {
    image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
    title: "Skincare Set",
    price: "999"
  }
];



  return (
    
      <div className="box">
        {
          Itemdata.map((i,index)=>{
            return <Items key={index} props={i}/>
          })
        }
      </div>
    
  )
}

export default Home
