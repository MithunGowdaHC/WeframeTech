'use client';
import React from "react";
import Card from "../components/Card";

const SimilarProducts = () => {
  const products = Array(10).fill({
    title: "Title",
    price: "0€",
    subtitle: "Art de la Table",
    details: "0,35€/Pièce - REF : VABGN5",
    quantity: "20 pièces",
    image: "/images/iconimage.bmp", 
  });

  return (
    <div className="relative mt-10 md:mt-20 mx-auto bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:justify-between items-center px-4 md:px-7 py-2">
        <h2 className="text-2xl md:text-[35px] text-[#393939] font-bold">Articles similaires</h2>
        <a href="#" className="text-sm md:text-[16px] text-[#393939] underline mt-2 md:mt-0">
          Voir toute la collection
        </a>
      </div>

      {/* Horizontal Scrollable Section */}
      <div className="relative flex items-center w-full py-4">
        {/* Scrollable Container */}
        <div
          className="flex overflow-x-auto scroll-smooth space-x-4 scrollbar-hide w-full h-full px-4 no-scrollbar"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {products.map((product, index) => (
            <div
              key={index}
              className="flex-shrink-0 scroll-snap-align-center max-w-xs w-full"
              style={{
                scrollSnapAlign: "center",
              }}
            >
              <Card
                title={product.title}
                price={product.price}
                subtitle={product.subtitle}
                details={product.details}
                quantity={product.quantity}
                image={product.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts