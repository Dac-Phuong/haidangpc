import React from "react";
import products from "../../data/products.json";
import "./style.css";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="wrap-product ">
      {products.data.map((item) => {
        return (
          <div key={item.id} className="col-product mb-3 ">
            <Link to={ `/Detail/${item.id}` }
            >
              <img className="h-4/5 w-full" src={item.image} alt="" />
              <h2  className="bt-2 text-base font-semibold">{item.name}</h2>
              <span>{item.price}đ</span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
export default Product;
