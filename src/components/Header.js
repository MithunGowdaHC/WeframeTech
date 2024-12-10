
'use client'
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Search, ShoppingCart, Heart, Lightbulb, User } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex flex-wrap items-center justify-between px-4 md:px-6 py-3 bg-white shadow-sm relative">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden absolute left-4 top-1/2 transform -translate-y-1/2">
        <button 
          onClick={toggleMobileMenu} 
          className="text-gray-600 focus:outline-none"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Logo */}
      <div className="flex w-[100px] md:w-[133px] h-[50px] md:h-[65px] items-center space-x-2 order-2 md:order-1">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={133}
          height={65}
          className="object-contain"
        />
      </div>

      {/* Search Bar */}
      <div className="w-full md:w-auto flex justify-center mx-2 md:mx-6 mt-3 md:mt-0 order-4 md:order-2">
        <div className="relative w-full md:w-[768px]">
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="w-full h-[40px] md:h-[50px] px-4 py-2 pl-12 text-sm bg-[#F9FAFB]"
          />
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
          >
            <g opacity="0.3">
              <path
                d="M21 21L17.5001 17.5M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z"
                stroke="#003349"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>

      {/* Right-side Buttons */}
      <div className="flex flex-wrap items-center justify-end gap-4 mt-4 md:mt-0 w-full md:w-auto order-3">
        {/* Inspirations */}
        <div className="flex items-center text-sm gap-2 w-auto h-[21px] text-gray-600 cursor-pointer">
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.25 11.375V13.25C9.25 13.9489 9.25 14.2984 9.13582 14.574C8.98358 14.9416 8.69157 15.2336 8.32403 15.3858C8.04837 15.5 7.69891 15.5 7 15.5C6.30109 15.5 5.95163 15.5 5.67597 15.3858C5.30843 15.2336 5.01642 14.9416 4.86418 14.574C4.75 14.2984 4.75 13.9489 4.75 13.25V11.375M9.25 11.375C11.2366 10.507 12.625 8.43161 12.625 6.125C12.625 3.0184 10.1066 0.5 7 0.5C3.8934 0.5 1.375 3.0184 1.375 6.125C1.375 8.43161 2.76336 10.507 4.75 11.375M9.25 11.375H4.75"
              stroke="#282F35"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span className="text-[#3B4347]">Inspirations</span>
        </div>

        {/* Favorites */}
        <div className="relative flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
          <svg
            width="18"
            height="16"
            viewBox="0 0 18 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.99428 2.27985C7.32816 0.332 4.54978 -0.191965 2.46224 1.59168C0.374693 3.37532 0.0807963 6.35748 1.72015 8.467C3.08317 10.2209 7.20813 13.9201 8.56007 15.1174C8.71133 15.2513 8.78695 15.3183 8.87517 15.3446C8.95216 15.3676 9.03641 15.3676 9.1134 15.3446C9.20161 15.3183 9.27724 15.2513 9.42849 15.1174C10.7804 13.9201 14.9054 10.2209 16.2684 8.467C17.9078 6.35748 17.6498 3.35656 15.5263 1.59168C13.4029 -0.173202 10.6604 0.332 8.99428 2.27985Z"
              stroke="#8F9BA0"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="flex gap-2">
            <span className="text-[#3B4347]">Mes favoris</span>
            <span className="bg-[#EAEDEE] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
              24
            </span>
          </div>
        </div>

        {/* Cart */}
        <div className="flex items-center gap-2 px-3 py-2 w-auto h-[48px] text-sm rounded-md bg-[#0093D0] text-white">
          <svg
            width="19"
            height="20"
            viewBox="0 0 19 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66666 1.66663H2.75513C2.96014 1.66663 3.06265 1.66663 3.14514 1.70433C3.21784 1.73755 3.27944 1.79098 3.32261 1.85825C3.3716 1.93458 3.3861 2.03606 3.41509 2.23901L3.80951 4.99996M3.80951 4.99996L4.68609 11.4428C4.79733 12.2604 4.85295 12.6692 5.04841 12.9769C5.22064 13.2481 5.46756 13.4637 5.75945 13.5978C6.09071 13.75 6.50328 13.75 7.32841 13.75H14.46C15.2454 13.75 15.6382 13.75 15.9591 13.6086C16.2421 13.484 16.4849 13.2832 16.6602 13.0285C16.8591 12.7396 16.9326 12.3538 17.0796 11.5823L18.1826 5.79137C18.2343 5.5198 18.2602 5.38401 18.2227 5.27788C18.1898 5.18477 18.1249 5.10636 18.0396 5.05664C17.9424 4.99996 17.8041 4.99996 17.5277 4.99996H3.80951ZM8.33332 17.5C8.33332 17.9602 7.96023 18.3333 7.49999 18.3333C7.03975 18.3333 6.66666 17.9602 6.66666 17.5C6.66666 17.0397 7.03975 16.6666 7.49999 16.6666C7.96023 16.6666 8.33332 17.0397 8.33332 17.5ZM15 17.5C15 17.9602 14.6269 18.3333 14.1667 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 17.0397 13.7064 16.6666 14.1667 16.6666C14.6269 16.6666 15 17.0397 15 17.5Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-white">Panier</span>
        </div>

        {/* Avatar */}
        <div className="w-[40px] h-[40px] md:w-[44px] md:h-[44px] bg-[#EAEDEE] rounded-full"></div>

        {/* Language Selector */}
        <div>
          <select
            className="text-sm text-[#1F2A37] bg-transparent px-2 py-1"
            defaultValue="FR"
          >
            <option value="FR">FR</option>
            <option value="EN">EN</option>
          </select>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 overflow-y-auto pt-16">
          <div className="flex flex-col items-center space-y-4 p-4">
            {/* Search Bar for Mobile */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Rechercher un produit"
                className="w-full h-[40px] px-4 py-2 pl-12 text-sm bg-[#F9FAFB] border"
              />
              <Search className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Mobile Menu Items */}
            <div className="w-full space-y-4">
              <div className="flex items-center justify-between w-full p-4 border-b">
                <div className="flex items-center gap-2">
                  <Lightbulb size={20} className="text-gray-600" />
                  <span className="text-[#3B4347]">Inspirations</span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full p-4 border-b">
                <div className="flex items-center gap-2">
                  <Heart size={20} className="text-gray-600" />
                  <span className="text-[#3B4347]">Mes favoris</span>
                  <span className="bg-[#EAEDEE] text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    24
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full p-4 border-b">
                <div className="flex items-center gap-2">
                  <ShoppingCart size={20} className="text-white bg-[#0093D0] rounded p-1" />
                  <span className="text-[#3B4347]">Panier</span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full p-4 border-b">
                <div className="flex items-center gap-2">
                  <User size={20} className="text-gray-600" />
                  <span className="text-[#3B4347]">Mon compte</span>
                </div>
              </div>

              <div className="flex items-center justify-between w-full p-4 border-b">
                <div className="flex items-center gap-2">
                  <span className="text-[#3B4347]">Langue</span>
                  <select
                    className="text-sm text-[#1F2A37] bg-transparent"
                    defaultValue="FR"
                  >
                    <option value="FR">FR</option>
                    <option value="EN">EN</option>
                  </select>
                </div>
              </div>
              <h1  onClick={toggleMobileMenu} className="text-black cursor-pointer ">X</h1>

            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

