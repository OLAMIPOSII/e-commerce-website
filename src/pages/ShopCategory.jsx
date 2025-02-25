import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import { Item } from "../components/item/item";
export const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt="BANNER IMAGE"
      />
      <div className="shopcategory-indexsort">
        <p>
          <span>SHOWING 1-12</span> OUT OF 36 PRODUCTS.
        </p>
        <div className="shopcategory-sort">
          SORT BY <img src={dropdown_icon} alt="DROPDOWN ICON" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">EXPLORE MORE</div>
    </div>
  );
};
