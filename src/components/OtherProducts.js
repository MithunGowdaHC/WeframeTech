import React from 'react';
import Card from '../components/Card';

const OtherProducts = () => {
  const products = Array(3).fill({
    title: 'Title',
    price: '0€',
    subtitle: 'Art de la Table',
    details: '0,35€/Pièce - REF : VABGN5',
    quantity: '20 pièces',
    image: '/images/iconimage.bmp', 
  });

  return (
    <div className="mt-16 mx-auto bg-white">
      {/* Header Section */}
      <div className="flex justify-between items-center px-7 h-[43px] py-2">
        <h2 className="text-[35px] text-[#393939]">Ces produits pourraient vous intéresser</h2>
        <a href="#" className="text-[#393939] text-[16px] underline">
          Voir toute la collection
        </a>
      </div>

      {/* Products Grid */}
      <div className="flex lg:ml-20  justify-between items-center gap-8 mt-8">
        {products.map((product, index) => (
          <div key={index} className="w-full md:w-[506px] md:h-[438px]">
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
  );
};

export default OtherProducts;