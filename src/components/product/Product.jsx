import "./product.css"

const Product = ({img,link}) => {
  return (
    <div className = "p">
        <div className="p-browser">
          <div className="p-circle" style={{ backgroundColor: "rgb(255, 96, 92)" }} ></div>
          <div className="p-circle" style={{ backgroundColor: "rgb(255, 189, 68)" }} ></div>
          <div className="p-circle" style={{ backgroundColor: "rgb(0, 202, 78)" }} ></div>
        </div>

        <a href= {link} target="_blank" rel = "noreferrer">
        <img src={img} alt="" className="p-img" />
        
        </a>
    </div>
  )
}

export default Product