import axios from 'axios';

const CartManager = {
    // Function to add a product to the cart
    addToCart: async (productId, quantity) => {
        try {
            // Update the product quantity in the inventory
            await axios.put(`http://localhost:3001/api/products/update/${productId}`, { quantity });
            console.log("Product added to cart successfully");
        } catch (error) {
            console.error("Failed to add product to cart:", error);
            throw error; // Rethrow error to handle it in the component
        }
    }
};

export default CartManager;
