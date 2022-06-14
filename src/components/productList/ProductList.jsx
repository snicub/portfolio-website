import "./productList.css"
import Product from "../product/Product"
import {products} from "../../productData"

const ProductList = () => {
  return (
    <div className = "pl">
        <div className="pl-texts">
            <h1 className = "pl-title">Create & Inspire. It's Snikizzy</h1>
            <p className = "pl-desc">
                Snikizzy is a sharpshooter with rena and pheonix on valorant, don't mess
                w him and make sure to check ur corners ong.
            </p>
        </div>
        <div className = "pl-list">
            {products.map(item => (
              <Product key = {item.id} img = {item.img} link = {item.link}/>
              
            ))}
        </div>
    </div>
  )
}

export default ProductList