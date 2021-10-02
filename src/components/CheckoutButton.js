import React from "react";
import { Button } from "primereact/button";

export default function CheckoutButton(props) {
  const checkout = () => {
    props.setTotal(0);
    props.setCart([]);
  };
  return (
    <div>
      <Button onClick={checkout} label='Checkout' icon='pi pi-shopping-cart' />
    </div>
  );
}
