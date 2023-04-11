import React from "react";
import Offer from "./Offer";


export default function Listing({ items }) {
    
   return <div className="item-list">
    {items.map((item) => { return item.state === "active" && <Offer item={item} key={item.listing_id} />})}
    </div>  
}

Listing.defaultProps = {items: []};

