import { useState, useEffect } from "react";
import DropDown from "./components/DropDown";
import { Service } from "./service/Service";
import DataTablePosts from "./components/DataTablePosts";
import { ProgressSpinner } from "primereact/progressspinner";
import Cart from "./components/Cart";
import CheckoutButton from "./components/CheckoutButton";

import "./components/DataTablePosts.css";
import "./styles/dataManagement.css";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function DataManagement() {
  const [categories, setcategories] = useState();
  const [post, setPost] = useState();
  const [selectedCat, setSelectedCat] = useState();
  const [selectedPosts, setSelectedPosts] = useState();
  const [arrival, setArrival] = useState(false);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [toRender, setToRender] = useState(false);
  const service = new Service();

  useEffect(() => {
    service.getCat().then((categories) => {
      setcategories(categories);
      setArrival(true);
    });
    service.getCatPost().then((post) => {
      setPost(post);
    });
  }, [arrival]);

  useEffect(() => {
    setToRender(!toRender);
  }, [cart, total, categories, selectedCat, selectedPosts, toRender]);
  return (
    <div>
      <div className='headerDropdown'>
        <h1>Welcome to Anwar's E-Shop</h1>
        <div className='dropDownContainer'>
          <h2> Please choose a category</h2>
          {categories ? (
            <DropDown
              cat={categories}
              post={post}
              setSelectedCat={setSelectedCat}
              setSelectedPosts={setSelectedPosts}
              selectedCat={selectedCat}
            />
          ) : (
            <ProgressSpinner />
          )}
          <Cart cart={cart} setTotal={setTotal} total={total} />
          <CheckoutButton setTotal={setTotal} setCart={setCart} />
        </div>
      </div>
      {selectedPosts && (
        <DataTablePosts
          data={selectedPosts[0].posts}
          cat={categories}
          title={selectedPosts[0].name}
          setCart={setCart}
          cart={cart}
          setTotal={setTotal}
          total={total}
          setToRender={setToRender}
        ></DataTablePosts>
      )}
      ,
    </div>
  );
}

export default DataManagement;
