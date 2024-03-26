'use client'
import { useSession } from 'next-auth/react';
// AddToCartButton.js
import React from 'react';
import { addToCartAction, cartListAction } from '../../../../lib/serverActions/cartActions';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { cartCount } from '../../../../lib/rtk/feature/commonSlice';

const CardAddToCartBtn = ({ product }) => {
  const dispatch = useDispatch();
  const { data: session, status } = useSession();

  const addToCart = async () => {
    console.log(session);
    try {
      const response = await addToCartAction(product.id);
      const cartList =  await cartListAction();
      console.log(cartList.data.count);
      dispatch(cartCount(cartList.data.count));

      console.log(cartList);
      toast.success(response.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="absolute -bottom-20 group-hover:bottom-3 start-3 end-3 duration-500">
      <button
        href="shop-cart.html"
        className="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center bg-slate-900 text-white w-full rounded-md"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CardAddToCartBtn;
