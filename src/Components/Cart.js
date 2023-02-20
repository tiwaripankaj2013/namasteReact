import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

import { FoodCard } from "./common/FoodCard";
const Cart = () => {  

    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div>
            <h1> Add cart in Items {cartItems.length}</h1>
            <button className=" bg-red-600 text-white" onClick={handleClearCart}>Clear cart</button>
            <div className="flex">
                {cartItems.map((item) => (<FoodCard key={item.id} {...item} />))}
            </div>
        </div>
    )
}

export default Cart;