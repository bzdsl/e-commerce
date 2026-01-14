import DeliveryOptions from "./DeliveryOptions";
import CartItemDetails from "./CartItemDetails";
import DeliveryDate from "./DeliveryDate";
import axios from "axios";

const OrderSummary = ({ deliveryOptions, cart, loadCart }) => {
  return (
    <>
      <div className="order-summary">
        {deliveryOptions.length > 0 &&
          cart.map((cartItem) => {
            const selectedDeliveryOption = deliveryOptions.find(
              (deliveryOption) => {
                return deliveryOption.id === cartItem.deliveryOptionId;
              }
            );
            const deleteCartItems = async () => {
              await axios.delete(`/api/cart-items/${cartItem.productId}`);
              await loadCart();
            };
            return (
              <div key={cartItem.productId} className="cart-item-container">
                <DeliveryDate selectedDeliveryOption={selectedDeliveryOption} />

                <div className="cart-item-details-grid">
                  <CartItemDetails
                    cartItem={cartItem}
                    deleteCartItems={deleteCartItems}
                  />

                  <DeliveryOptions
                    deliveryOptions={deliveryOptions}
                    cartItem={cartItem}
                    loadCart={loadCart}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default OrderSummary;
