import React, {useContext} from 'react';

const Basket = () => {
    const cartContext = useContext(CartContext)

    const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;

    const hasItems = cartContext.items.length > 0;

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    }

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, amount: 1})
    }

    const cartItems = (<ul>
        {cartContext.items.map(
            (item) => (<CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onAdd={addCartItemHandler.bind(null, item)}
                onRemove={removeCartItemHandler.bind(null, item.id)}
            ></CartItem>)
        )}
    </ul>)
    return (
        <div>

        </div>
    );
};

export default Basket;