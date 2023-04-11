import React from "react";
import PropTypes from "prop-types"

export default function Offer ({item}) {
   const doPrice = (currency, price) => { // так по мне читабельнее - хотя проброс значений туда сюда смущает.
    switch (currency) {
        case "USD": return "$ " + price
        case "EUR": return "€ " + price
        default: return price + " " + currency
    } 
   }

   const doLevel = (quantity) => {
    if (quantity > 20) return "level-high" 
    else if (quantity > 10) return "level-medium"
    else if (quantity > 0) return "level-low"
    //else поменять state на с active на out of stock -_-
   }


  return <div className="item">
    <div className="item-image">
      <a href={item.url}>
        <img src={item.MainImage.url_570xN} alt="" />
      </a>
    </div>
    <div className="item-details">
      <p className="item-title">{item.title.length > 50 ? item.title.slice(0, 49) + "..." : item.title}</p> 
      <p className="item-price">{doPrice(item.currency_code, item.price)}</p>
      <p className={"item-quantity " + doLevel(item.quantity)}>{item.quantity} left</p>
    </div>
  </div>
 
}


// не уверен что оно так будет работать - на сколько вообще глубоко эта приблуда смотрит?
// дефолтные значения для частей объекта (одного из пропсов), как я понял тоже не задать, только явным assign.
Offer.propTypes = {
    url :  PropTypes.string,
    MainImage: PropTypes.object,
    title :  PropTypes.string,
    currency_code :  PropTypes.string,
    price :  PropTypes.string,
    quantity :  PropTypes.number
}

