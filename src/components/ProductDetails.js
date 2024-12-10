'use client'
// Inline ESLint disable
{/* eslint-disable-next-line react/no-unescaped-entities */}
import { useState } from "react";

const ProductDetails = () => {
  const [imageActive, setImageActive] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const imagesArr = [
    "/images/printer.png",
    "/images/iconimage.bmp",
    "/images/iconimage.bmp",
    "/images/iconimage.bmp",
  ];

  return (
    <div className="p-7 bg-white">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <a href="/" className="text-[#393939] hover:text-gray-700">
          Home
        </a>
        <span className="mx-2 text-gray-400">&gt;</span>
        <span className="text-[#9C9C9C]">Art de la table</span>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Left: Image Section */}
        <div className="bg-[#F8F6F4] p-3 md:w-1/2">
          {/* Thumbnails */}
          <div className="flex flex-col md:flex-row pl-3 pt-2 gap-2">
            {imagesArr.map((img, index) => (
              <img
                key={index}
            loading='lazy'

                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-10 h-10 object-cover border border-white rounded cursor-pointer"
                onMouseEnter={() => setImageActive(index)}
              />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <img
            loading='lazy'

              src={imagesArr[imageActive]}
              alt="Main Product"
              className="w-full md:w-3/4 h-auto object-cover"
            />
          </div>
        </div>

        {/* Right: Product Details Section */}
        <div className="bg-white p-2 md:w-1/2">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl text-[#111928] font-semibold">
              Cheese – appareil à raclette 1/2 roue
            </h1>
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
          </div>

          <p className="text-xl text-gray-800 font-bold mb-4">
            39,50€{" "}
            <span className="text-sm text-[#9c9c9c]">
              /pièce
            </span>
          </p>

          <div className="w-full h-px bg-[#9C9C9C] my-3"></div>

          {/* Dimensions */}
          <div className="flex items-center justify-between gap-8 mb-6">
            <div className="flex gap-5">
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.8616 5.11819L18.8818 0.138422C18.7931 0.0498281 18.673 0 18.5476 0C18.4223 0 18.3022 0.0498281 18.2135 0.138422L14.9272 3.42473L14.9272 3.42478L14.9271 3.42483L11.6409 6.71105L11.6408 6.71114L11.6407 6.71123L1.78153 16.5704L1.78148 16.5705L0.138375 18.2135C0.0498281 18.3022 0 18.4223 0 18.5476C0 18.6729 0.0498281 18.7932 0.138422 18.8818L5.11823 23.8616C5.21053 23.9539 5.33147 24 5.45236 24C5.5733 24 5.69419 23.9539 5.78648 23.8616L23.8616 5.78648C23.9502 5.69789 24 5.57766 24 5.45236C24 5.32702 23.9502 5.20683 23.8616 5.11819ZM5.45236 22.8591L1.14089 18.5476L2.11561 17.5729L2.94347 18.4008C3.03577 18.4931 3.1567 18.5392 3.27759 18.5392C3.39853 18.5392 3.51942 18.4931 3.61172 18.4008C3.79627 18.2162 3.79627 17.917 3.61172 17.7324L2.78391 16.9046L3.75891 15.9296L5.26889 17.4396C5.36119 17.5319 5.48212 17.578 5.60302 17.578C5.72395 17.578 5.84484 17.5318 5.93714 17.4396C6.12169 17.255 6.12169 16.9558 5.93714 16.7713L4.42716 15.2613L5.40211 14.2863L6.22997 15.1142C6.32227 15.2065 6.4432 15.2526 6.56409 15.2526C6.68498 15.2526 6.80592 15.2065 6.89822 15.1142C7.08277 14.9296 7.08277 14.6304 6.89822 14.4458L6.07036 13.618L7.04513 12.6432L8.5553 14.1534C8.64759 14.2457 8.76853 14.2919 8.88942 14.2919C9.01036 14.2919 9.1313 14.2457 9.22355 14.1534C9.40809 13.9689 9.40809 13.6697 9.22355 13.4851L7.71333 11.9749L8.68814 11.0001L9.516 11.8276C9.60825 11.9199 9.72919 11.966 9.85003 11.966C9.97102 11.966 10.092 11.9198 10.1842 11.8275C10.3687 11.6429 10.3687 11.3437 10.1841 11.1592L9.35634 10.3318L10.3315 9.35667L11.8417 10.8669C11.934 10.9592 12.0549 11.0053 12.1758 11.0053C12.2967 11.0053 12.4177 10.9592 12.51 10.8669C12.6945 10.6823 12.6945 10.3831 12.51 10.1985L10.9997 8.68833L11.9745 7.71361L12.8023 8.54147C12.8946 8.63377 13.0155 8.67989 13.1364 8.67989C13.2573 8.67989 13.3783 8.63372 13.4706 8.54147C13.6551 8.35692 13.6551 8.05772 13.4706 7.87317L12.643 7.04531L13.6178 6.07055L15.128 7.58077C15.2203 7.67306 15.3412 7.71919 15.4621 7.71919C15.583 7.71919 15.7039 7.67302 15.7962 7.58077C15.9808 7.39622 15.9808 7.09702 15.7962 6.91247L14.286 5.4022L15.261 4.42725L16.0886 5.25487C16.1809 5.34717 16.3018 5.3933 16.4227 5.3933C16.5436 5.3933 16.6645 5.34717 16.7568 5.25487C16.9414 5.07033 16.9414 4.77112 16.7568 4.58653L15.9293 3.75891L16.9043 2.78391L18.4145 4.29413C18.5068 4.38642 18.6278 4.43255 18.7486 4.43255C18.8695 4.43255 18.9905 4.38637 19.0828 4.29413C19.2673 4.10958 19.2673 3.81037 19.0828 3.62583L17.5729 2.11561L18.5476 1.14089L22.8591 5.45236L5.45236 22.8591Z"
                    fill="#9C9C9C"
                  />
                </svg>
                20cm
              </span>
              <span className="flex items-center gap-2 text-sm text-gray-600">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2481_1412)">
                    <path
                      d="M12.5295 0.954895C18.9217 0.954895 24.1035 6.13678 24.1035 12.529C24.1035 18.9212 18.9217 24.103 12.5295 24.103C6.13728 24.103 0.955395 18.9212 0.955395 12.529C0.955395 6.13678 6.13728 0.954895 12.5295 0.954895ZM12.5295 1.88082C6.64866 1.88082 1.88132 6.64816 1.88132 12.529C1.88132 18.4098 6.64866 23.1771 12.5295 23.1771C18.4103 23.1771 23.1776 18.4098 23.1776 12.529C23.1776 6.64816 18.4103 1.88082 12.5295 1.88082Z"
                      fill="#9C9C9C"
                    />
                    <path
                      d="M24.0046 0.395325L24.6595 1.04994L1.05458 24.6632L0.399731 24.0086L24.0046 0.395325Z"
                      fill="#9C9C9C"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2481_1412">
                      <rect width="25" height="25" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                50cm
              </span>
            </div>
            <div className="text-sm text-gray-600">RÉF : VABGN5</div>
          </div>
          <div className="w-full h-px bg-[#9C9C9C] my-3"></div>

          {/* Product Info */}
          <ul className="text-gray-600 space-y-2 mb-6">
            <li>
              Location appareil à raclette - Raclette traditionnelle 1/2 roue
            </li>
            <li>Réglable en hauteur</li>
            <li>Appareil à raclette professionnel</li>
            <li>Boîtier de chauffe horizontal réglable en hauteur</li>
            <li>220V</li>
            <li>900W</li>
          </ul>

          {/* Actions */}
          <div className="flex flex-col mt-36 gap-2">
            <div className="w-full h-px bg-[#9C9C9C]"></div>

            <div className="flex flex-col md:flex-row gap-4">
              {/* Quantity */}
              <div className="flex items-center border border-gray-300 rounded-md">
                <button className="px-4 py-2 text-gray-600">-</button>
                <span className="px-4 py-2 text-black border-l border-r border-gray-300">
                  1
                </span>
                <button className="px-4 py-2 text-gray-600">+</button>
              </div>
              {/* Add to Cart */}
              <button className="bg-[#5CD2DD] text-white px-6 py-2 rounded w-full md:w-auto md:py-3 md:px-6">
                AJOUTER AU PANIER
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Description and Additional Sections */}
      <div className="flex flex-col md:flex-row mt-12">
        {/* Description Section */}
        <div className="md:w-1/2">
          <h2 className="text-lg font-semibold text-[#111928] mb-4">
            Description produit
          </h2>
          <p className="text-[#9C9C9C] text-sm">
            Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
            pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour
            votre mariage, une fête d'anniversaire ou du personnel, ce produit a
            fait l'objet d'une sélection rigoureuse par notre équipe. Il est en
            location chez nous sous la référence "VAJGC". Nous sommes à votre
            disposition pour que les événements de nos clients, même en
            last-minute, soient toujours une réussite. Vous pourrez trouver tout
            une série d'autre produit à louer de ce type dans la catégorie "Art de
            la Table".
          </p>
        </div>

        {/* Additional Sections */}
        <div className="md:w-1/2 p-5 bg-[#FDFBFB]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[#393939] text-sm">LIVRAISONS</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="#393939" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex items-center justify-between">
            <h2 className="text-[#393939] text-sm">QUESTIONS</h2>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="#393939" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;