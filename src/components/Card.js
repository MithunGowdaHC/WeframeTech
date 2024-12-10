'use client'
// Inline ESLint disable
{/* eslint-disable-next-line react/no-unescaped-entities */}
import React, { useState } from 'react';
import Image from 'next/image';

const Card = ({image,title,price,subtitle,details,quantity}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-[330px] h-[438px] relative group">
      {/* Card Content */}
      <div className="w-[330px] h-[362px] mt-4 p-3 bg-[#F9F7F5]">
        <div className="flex w-[310px] h-[25px] justify-between items-center">
        <div
  onClick={() => setIsLiked(!isLiked)}
  className="cursor-pointer"
>
  <svg
    width="28"
    height="25"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.99428 2.27985C7.32816 0.332 4.54978 -0.191965 2.46224 1.59168C0.374693 3.37532 0.0807963 6.35748 1.72015 8.467C3.08317 10.2209 7.20813 13.9201 8.56007 15.1174C8.71133 15.2513 8.78695 15.3183 8.87517 15.3446C8.95216 15.3676 9.03641 15.3676 9.1134 15.3446C9.20161 15.3183 9.27724 15.2513 9.42849 15.1174C10.7804 13.9201 14.9054 10.2209 16.2684 8.467C17.9078 6.35748 17.6498 3.35656 15.5263 1.59168C13.4029 -0.173202 10.6604 0.332 8.99428 2.27985Z"
      stroke={isLiked ? "red" : "#8F9BA0"}
      fill={isLiked ? "red" : "none"}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</div>

          <p className="w-[100px] h-[18px] text-[#111928] bg-white text-center align-middle text-[10px]">
            Art de la table
          </p>
        </div>
        <div className="mt-6">
          <Image
            src="/images/iconimage.bmp"
            alt="product"
            width={224}
            height={224}
            className="object-contain m-auto bg-[#F9F7F5]"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="w-[330px] h-[64px] p-2">
        <div className="flex justify-between">
          <p className="text-[#393939] text-[24px]">{title}</p>
          <p className="text-[#393939] text-[24px]">{price} </p>
        </div>
        <div className="flex justify-between">
          <p className="text-[#9C9C9C] text-[14px] font-bold">
           {subtitle}
          </p>
          <p className="bg-[#F1F4F6] rounded-[10%] text-[11px] text-[#546A7D]">
            {quantity}
          </p>
        </div>
      </div>

      {/* Hover Content */}
      <div className="absolute  w-[95%] h-[50px] bottom-[75] bg-white rounded-lg m-2  bg-opacity-90 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center bg-white p-2 justify-between w-full ">
          <div className=' p-2 flex justify-between w-[80%] text-black text-sm m-auto items-center'>
            <p>QTY&nbsp;&nbsp;-</p>
            <p>1</p>
            <p>+</p>
          </div>
          <button className="px-4 py-2 bg-[#ed5a7f] text-white rounded">
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
