import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col items-center mt-20 p-16 md:py-16 md:px-10 lg:px-20 bg-gradient-to-b from-[#ee419714] to-[#fff]">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
        On s’occupe de <span className="text-blue-500">tout</span>
      </h2>
      <p className="text-gray-500 mt-2 text-center max-w-2xl">
        Office ipsum you must be muted. It meeting commitment busy pain.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {/* Feature 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12">
            <svg
              width="56"
              height="51"
              viewBox="0 0 56 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2481_1482)">
                <path
                  d="M29.7449 41.1885C29.1566 41.1885 28.5816 41.361 28.0924 41.6843C27.6033 42.0076 27.222 42.4671 26.9969 43.0047C26.7718 43.5423 26.7129 44.1339 26.8277 44.7046C26.9424 45.2754 27.2257 45.7996 27.6417 46.2111C28.0577 46.6225 28.5877 46.9028 29.1646 47.0163C29.7416 47.1298 30.3397 47.0715 30.8832 46.8489C31.4267 46.6262 31.8912 46.2491 32.218 45.7652C32.5449 45.2814 32.7193 44.7126 32.7193 44.1307C32.7185 43.3506 32.4049 42.6027 31.8472 42.0511C31.2896 41.4995 30.5335 41.1893 29.7449 41.1885ZM29.7449 45.1042C29.548 45.1042 29.3555 45.0464 29.1918 44.9382C29.0281 44.83 28.9005 44.6762 28.8252 44.4963C28.7498 44.3164 28.7301 44.1184 28.7685 43.9274C28.807 43.7364 28.9018 43.5609 29.041 43.4232C29.1802 43.2855 29.3576 43.1917 29.5507 43.1537C29.7438 43.1157 29.944 43.1352 30.1259 43.2097C30.3078 43.2843 30.4632 43.4105 30.5726 43.5724C30.682 43.7344 30.7404 43.9247 30.7404 44.1195C30.7396 44.3804 30.6345 44.6304 30.4479 44.8149C30.2614 44.9994 30.0087 45.1034 29.7449 45.1042Z"
                  fill="#7C5368"
                />
                <path
                  d="M29.7455 37.262C28.372 37.262 27.0294 37.6648 25.8875 38.4196C24.7455 39.1744 23.8554 40.2472 23.3298 41.5023C22.8042 42.7575 22.6667 44.1386 22.9346 45.4711C23.2026 46.8035 23.864 48.0275 24.8351 48.9881C25.8063 49.9488 27.0437 50.603 28.3907 50.868C29.7378 51.1331 31.1341 50.997 32.403 50.4771C33.6719 49.9572 34.7564 49.0768 35.5194 47.9472C36.2825 46.8176 36.6898 45.4895 36.6898 44.131C36.6872 42.31 35.9547 40.5643 34.653 39.2767C33.3512 37.989 31.5864 37.2645 29.7455 37.262ZM29.7455 49.0306C28.7657 49.0306 27.8079 48.7432 26.9932 48.2048C26.1785 47.6663 25.5435 46.901 25.1685 46.0055C24.7936 45.1101 24.6955 44.1248 24.8866 43.1742C25.0778 42.2236 25.5496 41.3505 26.2424 40.6651C26.9353 39.9798 27.818 39.5131 28.779 39.324C29.74 39.1349 30.7361 39.232 31.6413 39.6029C32.5466 39.9738 33.3203 40.6019 33.8646 41.4077C34.409 42.2136 34.6996 43.161 34.6996 44.1302C34.699 45.4297 34.1768 46.6758 33.2479 47.5947C32.3189 48.5136 31.0592 49.03 29.7455 49.0306Z"
                  fill="#7C5368"
                />
                <path
                  d="M24.7809 27.4512H22.8013V44.1202H24.7809V27.4512Z"
                  fill="#7C5368"
                />
                <path
                  d="M11.9089 3.55565C11.4846 2.77898 10.8563 2.12992 10.0903 1.67687C9.32433 1.22382 8.44896 0.983576 7.55648 0.981445H0V2.93966H7.55648C8.09262 2.94072 8.61852 3.08503 9.07859 3.35735C9.53866 3.62967 9.91581 4.01987 10.1702 4.48672L28.8705 38.7119L30.6205 37.7816L11.9089 3.55565Z"
                  fill="#7C5368"
                />
                <path
                  d="M55.037 33.4587L35.2168 44.2461L36.171 45.9615L55.9912 35.1741L55.037 33.4587Z"
                  fill="#7C5368"
                />
                <path
                  d="M43.4917 16.1901L34.5685 0.505759C34.4376 0.278233 34.2211 0.111151 33.9661 0.0409715C33.8412 0.00406462 33.7101 -0.00730801 33.5806 0.00754649C33.4512 0.022401 33.3261 0.0631716 33.2131 0.127374L17.3562 8.95387C17.1277 9.08067 16.9592 9.29174 16.8876 9.54099C16.8159 9.79024 16.8468 10.0574 16.9736 10.2842L25.8968 25.9797C26.0277 26.2072 26.2443 26.3743 26.4992 26.4445C26.5852 26.466 26.6734 26.477 26.762 26.4773C26.9313 26.4778 27.0976 26.4331 27.2432 26.3476L43.1001 17.5212C43.2149 17.4599 43.3163 17.3767 43.3983 17.2764C43.4802 17.1761 43.5412 17.0606 43.5777 16.9367C43.6141 16.8129 43.6253 16.6831 43.6105 16.5549C43.5958 16.4267 43.5554 16.3027 43.4917 16.1901ZM27.1431 24.16L19.1928 10.1762L33.3321 2.31202L41.2824 16.2989L27.1431 24.16Z"
                  fill="#7C5368"
                />
                <path
                  d="M31.429 7.83838L28.9441 3.58751C28.811 3.3636 28.5942 3.20057 28.3404 3.13378C28.0867 3.06699 27.8166 3.10183 27.5886 3.23073L23.2912 5.68874C23.0642 5.81977 22.8989 6.03431 22.8313 6.28552C22.7637 6.53673 22.7994 6.80419 22.9305 7.02947L25.4154 11.2803C25.5032 11.4297 25.6293 11.5534 25.781 11.6389C25.9327 11.7245 26.1045 11.7688 26.2792 11.7675C26.4518 11.7668 26.6214 11.7222 26.7716 11.6379L31.0585 9.17986C31.1713 9.1157 31.27 9.02996 31.3488 8.92765C31.4277 8.82534 31.4852 8.70851 31.5179 8.58398C31.5554 8.46029 31.5668 8.33031 31.5515 8.20207C31.5363 8.07383 31.4946 7.95005 31.429 7.83838ZM26.6391 9.43907L25.1519 6.88646L27.7325 5.41687L29.2197 7.96948L26.6391 9.43907Z"
                  fill="#7C5368"
                />
                <path
                  d="M52.4044 31.8756L43.4812 16.1905C43.3536 15.9639 43.1402 15.7968 42.888 15.7258C42.6358 15.6548 42.3654 15.6859 42.1363 15.8121L26.2794 24.6386C26.0509 24.7654 25.8825 24.9765 25.8108 25.2257C25.7391 25.475 25.7701 25.7422 25.8969 25.9689L34.82 41.6644C34.9509 41.8919 35.1675 42.059 35.4225 42.1292C35.5084 42.1508 35.5966 42.1618 35.6853 42.162C35.8545 42.1626 36.0208 42.1178 36.1664 42.0324L52.0339 33.2059C52.2639 33.0764 52.4328 32.8622 52.5038 32.61C52.5691 32.3618 52.5334 32.0981 52.4044 31.8756ZM36.064 39.8455L28.1047 25.8721L42.2447 18.0079L50.1981 31.9836L36.064 39.8455Z"
                  fill="#7C5368"
                />
                <path
                  d="M40.3421 23.5347L37.8571 19.2838C37.7241 19.0599 37.5072 18.8969 37.2535 18.8301C36.9998 18.7633 36.7297 18.7981 36.5017 18.927L32.2043 21.385C31.9773 21.5161 31.812 21.7306 31.7444 21.9818C31.6768 22.233 31.7125 22.5005 31.8436 22.7258L34.3285 26.9766C34.4163 27.1259 34.5424 27.2496 34.6941 27.3352C34.8458 27.4207 35.0176 27.4651 35.1922 27.4638C35.3646 27.463 35.534 27.4183 35.6839 27.3342L39.9814 24.8761C40.208 24.7446 40.3729 24.5299 40.4404 24.2787C40.508 24.0276 40.4726 23.7602 40.3421 23.5347ZM35.5522 25.1354L34.065 22.5828L36.6455 21.1117L38.1328 23.6643L35.5522 25.1354Z"
                  fill="#7C5368"
                />
              </g>
              <defs>
                <clipPath id="clip0_2481_1482">
                  <rect width="56" height="51" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">
            Livraison & Reprise
          </h3>
          <p className="text-gray-500 mt-2">Selon vos besoins</p>
        </div>
        {/* Feature 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12">
            <svg
              width="62"
              height="52"
              viewBox="0 0 62 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61.6667 29.7099V17.2402C61.6667 16.816 61.4987 16.4091 61.1996 16.1086C60.9005 15.8081 60.4947 15.6386 60.071 15.6372H48.5704C46.9207 10.5285 43.4994 6.17947 38.9253 3.37691C34.3513 0.574349 28.9265 -0.496732 23.6322 0.357403C18.3379 1.21154 13.5237 3.93449 10.0604 8.03373C6.59711 12.133 4.71336 17.3378 4.74988 22.7069C4.74966 24.2877 4.91396 25.8643 5.24012 27.4111H2.69941C2.47822 27.4111 2.25919 27.4547 2.05484 27.5395C1.85049 27.6242 1.6648 27.7484 1.5084 27.905C1.35199 28.0616 1.22792 28.2475 1.14328 28.4521C1.05863 28.6567 1.01506 28.876 1.01506 29.0975C1.01574 29.9506 1.08303 30.8023 1.2163 31.6449C0.936591 31.9563 0.781863 32.3604 0.781915 32.7792C0.781882 33.6862 0.856303 34.5916 1.00443 35.4864C0.785756 35.7793 0.667306 36.1351 0.66667 36.5009C0.655022 39.7556 1.61044 42.9403 3.41143 45.6499C5.21242 48.3596 7.77759 50.4717 10.7807 51.7177C10.9866 51.8035 11.2075 51.8476 11.4305 51.8473H24.3114C24.5344 51.8476 24.7553 51.8035 24.9612 51.7177C28.3598 50.3109 31.1849 47.7972 32.9796 44.5833C37.6532 43.3257 41.7979 40.594 44.7993 36.7929V44.4767C44.1564 44.6866 43.5789 45.0599 43.1232 45.5601C42.6674 46.0602 42.3491 46.6702 42.1992 47.3303H41.4607C41.0658 47.3308 40.6873 47.4881 40.4081 47.7676C40.1289 48.0472 39.9718 48.4262 39.9714 48.8215V50.5079C39.9718 50.9032 40.1289 51.2822 40.4081 51.5618C40.6873 51.8413 41.0658 51.9986 41.4607 51.9991H59.3786C59.7735 51.9986 60.152 51.8413 60.4312 51.5618C60.7104 51.2822 60.8675 50.9032 60.8679 50.5079V48.8215C60.8675 48.4262 60.7104 48.0472 60.4312 47.7676C60.152 47.4881 59.7735 47.3308 59.3786 47.3303H58.6437C58.4938 46.6702 58.1754 46.0602 57.7197 45.5601C57.264 45.0599 56.6865 44.6866 56.0436 44.4767V36.2089C57.6053 35.9849 59.0339 35.2043 60.0668 34.0104C61.0998 32.8165 61.6679 31.2895 61.6667 29.7099ZM32.9352 29.1969C32.9308 29.8255 32.8855 30.4532 32.7996 31.0759H2.93965C2.85382 30.4532 2.80851 29.8255 2.80402 29.1969H32.9352ZM24.2901 50.0552H11.4492C9.70334 49.3287 8.11538 48.2691 6.77376 46.9354H28.969C27.6277 48.2703 26.0397 49.3312 24.2936 50.0588L24.2901 50.0552ZM30.4956 45.146H5.241C3.43962 42.6526 2.4648 39.6563 2.45385 36.579H23.1837C23.4207 36.579 23.648 36.4847 23.8156 36.3169C23.9832 36.1491 24.0773 35.9216 24.0773 35.6843C24.0773 35.447 23.9832 35.2194 23.8156 35.0517C23.648 34.8839 23.4207 34.7896 23.1837 34.7896H2.70562C2.61703 34.1504 2.57054 33.5061 2.56644 32.8609H33.1737C33.1696 33.5061 33.1231 34.1504 33.0345 34.7896H27.9496C27.7126 34.7896 27.4853 34.8839 27.3177 35.0517C27.1501 35.2194 27.056 35.447 27.056 35.6843C27.056 35.9216 27.1501 36.1491 27.3177 36.3169C27.4853 36.4847 27.7126 36.579 27.9496 36.579H33.2898C33.2792 39.6577 32.3037 42.6554 30.5009 45.1495L30.4956 45.146ZM33.9919 42.3945C34.7067 40.5099 35.0723 38.5106 35.0708 36.4947C35.0708 36.1284 34.9527 35.7719 34.7339 35.4784C34.8821 34.5836 34.9565 33.6782 34.9565 32.7712C34.9565 32.3524 34.8018 31.9483 34.5221 31.6369C34.655 30.7949 34.7219 29.9438 34.7224 29.0913C34.7224 29.0718 34.7224 29.0522 34.7224 29.0327C36.2699 27.1745 37.0838 24.8131 37.0101 22.3948C36.9365 19.9765 35.9804 17.6691 34.3226 15.9088C34.159 15.7364 33.9336 15.6361 33.6961 15.63C33.4586 15.624 33.2285 15.7126 33.0562 15.8764C32.884 16.0403 32.7839 16.2659 32.7778 16.5037C32.7717 16.7415 32.8602 16.9719 33.0239 17.1443C34.3264 18.5263 35.1022 20.3228 35.2157 22.2195C35.3291 24.1162 34.7729 25.9925 33.6444 27.5203C33.4536 27.4462 33.2507 27.408 33.046 27.4075H20.7237C19.7491 26.0642 19.2135 24.4519 19.1904 22.7918C19.1672 21.1316 19.6576 19.5049 20.5943 18.1349C21.531 16.7649 22.8682 15.7185 24.4223 15.1395C25.9765 14.5604 27.6715 14.4769 29.2749 14.9005C29.389 14.933 29.5085 14.9425 29.6263 14.9283C29.7441 14.9141 29.8579 14.8766 29.961 14.8179C30.0642 14.7592 30.1546 14.6805 30.2271 14.5864C30.2996 14.4923 30.3526 14.3847 30.3831 14.2699C30.4136 14.1551 30.4209 14.0354 30.4047 13.9177C30.3885 13.8 30.349 13.6867 30.2886 13.5845C30.2282 13.4822 30.148 13.3931 30.0528 13.3221C29.9576 13.2512 29.8493 13.2 29.7341 13.1715C27.8784 12.6909 25.923 12.7634 24.1079 13.3801C22.2928 13.9968 20.6971 15.1309 19.5168 16.6429C18.3365 18.155 17.623 19.9793 17.4638 21.8918C17.3047 23.8042 17.7068 25.7216 18.6209 27.4084H7.07074C6.36912 24.3634 6.35984 21.1994 7.0436 18.1503C7.72735 15.1011 9.08666 12.2448 11.0211 9.79231C12.9555 7.33983 15.4156 5.35389 18.2196 3.98122C21.0235 2.60856 24.0997 1.88426 27.2209 1.86184C31.4851 1.87547 35.6414 3.20557 39.123 5.67077C42.6046 8.13596 45.2422 11.6163 46.676 15.6372H40.771C40.3473 15.6386 39.9414 15.8081 39.6423 16.1086C39.3432 16.4091 39.1753 16.816 39.1753 17.2402V29.709C39.1747 31.0218 39.567 32.3046 40.3016 33.392C41.0363 34.4794 42.0794 35.3214 43.2966 35.8094C40.8717 38.8314 37.6513 41.1143 33.999 42.4007L33.9919 42.3945ZM45.6875 46.1303C46.042 46.152 46.3826 46.276 46.6681 46.4874C46.9537 46.6988 47.172 46.9885 47.2965 47.3215H44.0785C44.2044 46.9889 44.4239 46.6999 44.7104 46.4896C44.9969 46.2793 45.3382 46.1567 45.6928 46.1365L45.6875 46.1303ZM46.5873 44.4741V36.2089C48.0546 36.0027 49.4074 35.3006 50.4214 34.2189C51.435 35.2998 52.7872 36.0013 54.2538 36.2071V44.4732C53.6109 44.683 53.0333 45.0563 52.5776 45.5564C52.1218 46.0566 51.8035 46.6666 51.6537 47.3268H49.1865C49.0366 46.6669 48.7184 46.0571 48.2628 45.5571C47.8073 45.0571 47.23 44.684 46.5873 44.4741ZM49.628 50.2106H41.7594V49.1171H49.6271L49.628 50.2106ZM59.0825 49.1171V50.2106H51.4143V49.1171H59.0825ZM56.7581 47.3277H53.5401C53.6465 46.9836 53.8601 46.6828 54.1496 46.469C54.4392 46.2553 54.7894 46.14 55.1491 46.14C55.5088 46.14 55.8591 46.2553 56.1486 46.469C56.4381 46.6828 56.6517 46.9836 56.7581 47.3277ZM55.1474 34.4852C54.4438 34.4843 53.7495 34.3256 53.1152 34.0207C52.481 33.7158 51.9231 33.2725 51.4826 32.7233C51.9629 31.7924 52.2131 30.7596 52.2122 29.7117V26.6699C52.2122 26.4327 52.118 26.2051 51.9504 26.0373C51.7828 25.8695 51.5556 25.7753 51.3186 25.7753C51.0816 25.7753 50.8543 25.8695 50.6867 26.0373C50.5191 26.2051 50.425 26.4327 50.425 26.6699V29.7099C50.425 30.9665 49.9264 32.1716 49.039 33.0602C48.1515 33.9487 46.9479 34.4479 45.6928 34.4479C44.4378 34.4479 43.2342 33.9487 42.3467 33.0602C41.4593 32.1716 40.9607 30.9665 40.9607 29.7099V17.4266H50.425V21.8983C50.425 22.1356 50.5191 22.3631 50.6867 22.5309C50.8543 22.6987 51.0816 22.793 51.3186 22.793C51.5556 22.793 51.7828 22.6987 51.9504 22.5309C52.118 22.3631 52.2122 22.1356 52.2122 21.8983V17.4266H59.8795V29.7099C59.8833 30.9711 59.3871 32.1823 58.4999 33.0775C57.6127 33.9728 56.407 34.4791 55.1474 34.4852Z"
                fill="#7C5368"
              />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">
            Nettoyage
          </h3>
          <p className="text-gray-500 mt-2">Selon vos besoins</p>
        </div>
        {/* Feature 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12">
            <svg
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2481_1533)">
                <path
                  d="M47.8104 0H3.84678C2.9153 0.00114618 2.0223 0.373422 1.36364 1.03517C0.704988 1.69693 0.334454 2.59413 0.333313 3.52998L0.333313 38.8593C0.334454 39.7951 0.704988 40.6923 1.36364 41.3541C2.0223 42.0158 2.9153 42.3881 3.84678 42.3893H47.8104C48.7418 42.3881 49.6348 42.0158 50.2935 41.3541C50.9522 40.6923 51.3227 39.7951 51.3238 38.8593V3.52998C51.3227 2.59413 50.9522 1.69693 50.2935 1.03517C49.6348 0.373422 48.7418 0.00114618 47.8104 0ZM49.5718 38.8697C49.5702 39.3385 49.3841 39.7878 49.0542 40.1193C48.7242 40.4509 48.277 40.6378 47.8104 40.6394H3.84678C3.3801 40.6378 2.93298 40.4509 2.60298 40.1193C2.27299 39.7878 2.08689 39.3385 2.0853 38.8697V3.52998C2.08667 3.06096 2.27266 2.61152 2.60268 2.27978C2.9327 1.94805 3.37995 1.76096 3.84678 1.75936H47.8104C48.277 1.76096 48.7242 1.94793 49.0542 2.27948C49.3841 2.61102 49.5702 3.06024 49.5718 3.52912V38.8723V38.8697Z"
                  fill="#7C5368"
                />
                <path
                  d="M32.8496 51.9755L31.0881 41.3752C31.0541 41.1701 30.9488 40.9838 30.7909 40.8493C30.6331 40.7148 30.4329 40.6409 30.2259 40.6406H21.4341C21.2271 40.6409 21.0269 40.7148 20.8691 40.8493C20.7112 40.9838 20.6059 41.1701 20.5719 41.3752L18.8044 51.9755C18.7833 52.1015 18.7899 52.2305 18.8235 52.3537C18.8571 52.4768 18.917 52.5912 18.9991 52.6887C19.0811 52.7862 19.1834 52.8646 19.2986 52.9184C19.4139 52.9723 19.5395 53.0002 19.6666 53.0003H31.9788C32.1062 53.0005 32.2322 52.9727 32.3479 52.919C32.4636 52.8653 32.5662 52.7869 32.6487 52.6893C32.7309 52.5916 32.7914 52.4774 32.826 52.3543C32.8606 52.2312 32.8687 52.102 32.8496 51.9755ZM20.7124 51.2306L22.1782 42.4008H29.4827L30.9485 51.2306H20.7124Z"
                  fill="#7C5368"
                />
                <path
                  d="M51.3336 33.5703H2.09503V35.3401H51.3336V33.5703Z"
                  fill="#7C5368"
                />
                <path
                  d="M37.0639 9.1606C36.9819 9.05906 36.8782 8.97748 36.7603 8.92197C36.6425 8.86646 36.5137 8.83847 36.3836 8.84008H15.8495L15.2623 6.00397C15.2223 5.80428 15.1144 5.62481 14.9571 5.49631C14.7997 5.36782 14.6028 5.29831 14.4001 5.2997H11.7592V7.06946H13.6862L17.0557 23.1558C17.0957 23.3555 17.2036 23.5349 17.3609 23.6634C17.5182 23.7919 17.7151 23.8614 17.9179 23.8601H33.7453C33.949 23.8592 34.1461 23.7875 34.3033 23.6573C34.4604 23.527 34.5679 23.3462 34.6075 23.1454L37.245 9.89171C37.268 9.76391 37.2637 9.63267 37.2325 9.50664C37.2013 9.38061 37.1438 9.26267 37.0639 9.1606ZM33.0254 22.079H18.6309L16.2168 10.5994H35.2981L33.0254 22.079Z"
                  fill="#7C5368"
                />
                <path
                  d="M10.0079 3.53027C9.48625 3.53027 8.97632 3.68569 8.54259 3.97686C8.10886 4.26803 7.77082 4.68188 7.57119 5.16608C7.37157 5.65029 7.31934 6.18309 7.42111 6.69711C7.52287 7.21113 7.77407 7.6833 8.14292 8.05389C8.51178 8.42448 8.98174 8.67685 9.49335 8.7791C10.005 8.88134 10.5353 8.82887 11.0172 8.62831C11.4991 8.42774 11.9111 8.0881 12.2009 7.65233C12.4907 7.21657 12.6454 6.70424 12.6454 6.18015C12.644 5.47778 12.3657 4.80457 11.8714 4.30792C11.377 3.81127 10.707 3.53165 10.0079 3.53027ZM10.0079 7.07065C9.83464 7.07065 9.66528 7.01904 9.52122 6.92233C9.37716 6.82562 9.26489 6.68817 9.19858 6.52735C9.13228 6.36653 9.11494 6.18956 9.14874 6.01884C9.18254 5.84811 9.26596 5.69129 9.38847 5.56821C9.51098 5.44512 9.66707 5.3613 9.837 5.32734C10.0069 5.29338 10.1831 5.31081 10.3431 5.37742C10.5032 5.44403 10.64 5.55684 10.7363 5.70158C10.8325 5.84631 10.8839 6.01647 10.8839 6.19054C10.884 6.30615 10.8614 6.42065 10.8174 6.52748C10.7735 6.63431 10.7089 6.73138 10.6276 6.81313C10.5462 6.89488 10.4496 6.9597 10.3433 7.00389C10.2369 7.04808 10.123 7.07077 10.0079 7.07065Z"
                  fill="#7C5368"
                />
                <path
                  d="M19.5181 26.4995L18.7766 22.7937L17.0522 23.1454L17.9282 27.5633C17.9678 27.7641 18.0753 27.9449 18.2324 28.0752C18.3896 28.2054 18.5867 28.2771 18.7904 28.278H32.8538V26.4978L19.5181 26.4995Z"
                  fill="#7C5368"
                />
                <path
                  d="M32.8599 26.5C32.3383 26.5 31.8284 26.6554 31.3946 26.9466C30.9609 27.2378 30.6229 27.6516 30.4232 28.1358C30.2236 28.62 30.1714 29.1528 30.2732 29.6668C30.3749 30.1809 30.6261 30.653 30.995 31.0236C31.3638 31.3942 31.8338 31.6466 32.3454 31.7488C32.857 31.8511 33.3873 31.7986 33.8693 31.598C34.3512 31.3975 34.7631 31.0578 35.0529 30.6221C35.3427 30.1863 35.4974 29.674 35.4974 29.1499C35.496 28.4475 35.2177 27.7743 34.7234 27.2776C34.2291 26.781 33.559 26.5014 32.8599 26.5ZM32.8599 30.03C32.6867 30.03 32.5173 29.9784 32.3733 29.8817C32.2292 29.785 32.1169 29.6475 32.0506 29.4867C31.9843 29.3259 31.967 29.1489 32.0008 28.9782C32.0346 28.8074 32.118 28.6506 32.2405 28.5275C32.363 28.4044 32.5191 28.3206 32.689 28.2867C32.859 28.2527 33.0351 28.2701 33.1952 28.3367C33.3553 28.4034 33.4921 28.5162 33.5883 28.6609C33.6846 28.8056 33.7359 28.9758 33.7359 29.1499C33.736 29.2655 33.7135 29.38 33.6695 29.4868C33.6255 29.5936 33.561 29.6907 33.4796 29.7725C33.3983 29.8542 33.3017 29.919 33.1953 29.9632C33.089 30.0074 32.975 30.0301 32.8599 30.03Z"
                  fill="#7C5368"
                />
                <path
                  d="M18.7965 26.5C18.2748 26.5 17.7649 26.6554 17.3312 26.9466C16.8974 27.2378 16.5594 27.6516 16.3598 28.1358C16.1601 28.62 16.1079 29.1528 16.2097 29.6668C16.3114 30.1809 16.5626 30.653 16.9315 31.0236C17.3004 31.3942 17.7703 31.6466 18.2819 31.7488C18.7935 31.8511 19.3239 31.7986 19.8058 31.598C20.2877 31.3975 20.6996 31.0578 20.9894 30.6221C21.2793 30.1863 21.4339 29.674 21.4339 29.1499C21.4326 28.4475 21.1543 27.7743 20.6599 27.2776C20.1656 26.781 19.4955 26.5014 18.7965 26.5ZM18.7965 30.03C18.6232 30.03 18.4539 29.9784 18.3098 29.8817C18.1657 29.785 18.0535 29.6475 17.9872 29.4867C17.9209 29.3259 17.9035 29.1489 17.9373 28.9782C17.9711 28.8074 18.0545 28.6506 18.177 28.5275C18.2996 28.4044 18.4556 28.3206 18.6256 28.2867C18.7955 28.2527 18.9716 28.2701 19.1317 28.3367C19.2918 28.4034 19.4286 28.5162 19.5248 28.6609C19.6211 28.8056 19.6725 28.9758 19.6725 29.1499C19.6726 29.2655 19.65 29.38 19.606 29.4868C19.562 29.5936 19.4975 29.6907 19.4161 29.7725C19.3348 29.8542 19.2382 29.919 19.1318 29.9632C19.0255 30.0074 18.9115 30.0301 18.7965 30.03Z"
                  fill="#7C5368"
                />
                <path
                  d="M26.7089 10.6003H24.9474V22.9704H26.7089V10.6003Z"
                  fill="#7C5368"
                />
                <path
                  d="M21.4351 9.65575L19.6776 9.77344L20.5566 23.0254L22.3142 22.9078L21.4351 9.65575Z"
                  fill="#7C5368"
                />
                <path
                  d="M30.2327 9.65428L29.355 22.9064L31.1126 23.0239L31.9903 9.77178L30.2327 9.65428Z"
                  fill="#7C5368"
                />
                <path
                  d="M39.0219 21.1999C38.9069 21.1997 38.7929 21.2224 38.6866 21.2666C38.5803 21.3108 38.4836 21.3756 38.4023 21.4574C38.3209 21.5391 38.2564 21.6362 38.2124 21.743C38.1684 21.8499 38.1458 21.9644 38.146 22.08V25.6074H39.8971V22.9575H42.5346V21.1895H39.0211L39.0219 21.1999Z"
                  fill="#7C5368"
                />
                <path
                  d="M39.6379 21.4488L38.3924 22.7002L41.9114 26.2357L43.1569 24.9843L39.6379 21.4488Z"
                  fill="#7C5368"
                />
                <path
                  d="M35.4981 13.2502H16.159V15.02H35.4981V13.2502Z"
                  fill="#7C5368"
                />
                <path
                  d="M34.6222 17.6698H17.035V19.4396H34.6222V17.6698Z"
                  fill="#7C5368"
                />
              </g>
              <defs>
                <clipPath id="clip0_2481_1533">
                  <rect
                    width="51"
                    height="53"
                    fill="white"
                    transform="translate(0.333313)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">
            Commande Illimitée
          </h3>
          <p className="text-gray-500 mt-2">Tout est possible</p>
        </div>
        {/* Feature 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-12 h-12">
            <svg
              width="62"
              height="54"
              viewBox="0 0 62 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2481_1583)">
                <path
                  d="M17.574 6.23145C14.9176 6.23214 12.3211 7.02431 10.1127 8.50779C7.90434 9.99127 6.18331 12.0994 5.16723 14.5658C4.15115 17.0321 3.88566 19.7457 4.40431 22.3636C4.92297 24.9816 6.20249 27.3862 8.08108 29.2734C9.95967 31.1606 12.353 32.4457 14.9584 32.9662C17.5638 33.4867 20.2642 33.2193 22.7183 32.1976C25.1725 31.1759 27.27 29.446 28.7457 27.2265C30.2215 25.007 31.0091 22.3977 31.0091 19.7284C31.0022 16.1503 29.5844 12.7208 27.0662 10.191C24.5481 7.66126 21.1348 6.23745 17.574 6.23145ZM17.574 31.1563C15.3247 31.1563 13.1259 30.4861 11.2557 29.2304C9.38544 27.9747 7.92777 26.1899 7.067 24.1017C6.20623 22.0135 5.98101 19.7157 6.41983 17.4989C6.85865 15.2821 7.94179 13.2458 9.53229 11.6476C11.1228 10.0494 13.1492 8.96097 15.3553 8.52002C17.5614 8.07907 19.848 8.30538 21.9261 9.17033C24.0042 10.0353 25.7804 11.5 27.03 13.3794C28.2797 15.2587 28.9467 17.4681 28.9467 19.7284C28.9441 22.7585 27.7451 25.6638 25.6129 27.8064C23.4806 29.949 20.5894 31.1538 17.574 31.1563Z"
                  fill="#7C5368"
                />
                <path
                  d="M17.574 0C16.7573 0.000691395 15.9591 0.244685 15.2804 0.701136C14.6016 1.15759 14.0728 1.806 13.7607 2.56442C13.4487 3.32283 13.3674 4.15719 13.5271 4.96202C13.6869 5.76686 14.0805 6.50603 14.6583 7.08609C15.236 7.66616 15.9719 8.06109 16.773 8.22094C17.5741 8.38079 18.4043 8.2984 19.1588 7.98418C19.9133 7.66996 20.5581 7.13801 21.0118 6.45559C21.4655 5.77316 21.7076 4.9709 21.7076 4.15022C21.7062 3.04933 21.2702 1.99398 20.4952 1.21587C19.7202 0.437753 18.6696 0.000462264 17.574 0ZM17.574 6.23144C17.1644 6.23144 16.7639 6.10938 16.4233 5.88069C16.0827 5.652 15.8172 5.32696 15.6605 4.94667C15.5037 4.56637 15.4627 4.14791 15.5426 3.74419C15.6225 3.34047 15.8198 2.96963 16.1095 2.67857C16.3991 2.3875 16.7682 2.18928 17.1699 2.10898C17.5717 2.02867 17.9881 2.06989 18.3666 2.22741C18.745 2.38494 19.0685 2.65169 19.2961 2.99395C19.5237 3.3362 19.6452 3.73859 19.6452 4.15022C19.6433 4.70162 19.4245 5.22992 19.0365 5.61983C18.6485 6.00974 18.1227 6.2296 17.574 6.23144Z"
                  fill="#7C5368"
                />
                <path
                  d="M18.6039 4.15027H16.5327V7.26555H18.6039V4.15027Z"
                  fill="#7C5368"
                />
                <path
                  d="M7.96356 7.57132L6.49902 9.04297L8.56327 11.1172L10.0278 9.6456L7.96356 7.57132Z"
                  fill="#7C5368"
                />
                <path
                  d="M8.57106 5.49087L4.43457 9.64746L5.8991 11.1191L10.0356 6.96252L8.57106 5.49087Z"
                  fill="#7C5368"
                />
                <path
                  d="M27.1668 7.57025L25.1025 9.64453L26.5671 11.1162L28.6313 9.0419L27.1668 7.57025Z"
                  fill="#7C5368"
                />
                <path
                  d="M26.5705 5.48929L25.106 6.96094L29.2424 11.1175L30.707 9.64588L26.5705 5.48929Z"
                  fill="#7C5368"
                />
                <path
                  d="M17.5741 21.8099C18.718 21.8099 19.6453 20.8781 19.6453 19.7287C19.6453 18.5793 18.718 17.6475 17.5741 17.6475C16.4302 17.6475 15.5029 18.5793 15.5029 19.7287C15.5029 20.8781 16.4302 21.8099 17.5741 21.8099Z"
                  fill="#7C5368"
                />
                <path
                  d="M21.8583 10.8806L16.6929 19.1895L18.4494 20.2921L23.6149 11.9833L21.8583 10.8806Z"
                  fill="#7C5368"
                />
                <path
                  d="M18.6039 10.3817H16.5327V12.4629H18.6039V10.3817Z"
                  fill="#7C5368"
                />
                <path
                  d="M18.6039 27.0059H16.5327V29.0871H18.6039V27.0059Z"
                  fill="#7C5368"
                />
                <path
                  d="M13.8201 11.1304L12.0269 12.1719L13.0632 13.9738L14.8565 12.9324L13.8201 11.1304Z"
                  fill="#7C5368"
                />
                <path
                  d="M22.0903 25.503L20.2974 26.5448L21.3342 28.3465L23.1271 27.3046L22.0903 25.503Z"
                  fill="#7C5368"
                />
                <path
                  d="M10.0343 14.16L8.99794 15.9619L10.7911 17.0033L11.8275 15.2014L10.0343 14.16Z"
                  fill="#7C5368"
                />
                <path
                  d="M24.3499 22.4609L23.3135 24.2628L25.1067 25.3042L26.1431 23.5023L24.3499 22.4609Z"
                  fill="#7C5368"
                />
                <path
                  d="M10.3436 18.6935H8.27246V20.7747H10.3436V18.6935Z"
                  fill="#7C5368"
                />
                <path
                  d="M26.8755 18.6935H24.8044V20.7747H26.8755V18.6935Z"
                  fill="#7C5368"
                />
                <path
                  d="M10.7894 22.4644L9.00684 23.5L10.0435 25.3018L11.826 24.2662L10.7894 22.4644Z"
                  fill="#7C5368"
                />
                <path
                  d="M25.096 14.1676L23.3135 15.2031L24.3501 17.0049L26.1326 15.9693L25.096 14.1676Z"
                  fill="#7C5368"
                />
                <path
                  d="M13.0494 25.5106L12.0199 27.3024L13.8135 28.343L14.843 26.5512L13.0494 25.5106Z"
                  fill="#7C5368"
                />
                <path
                  d="M13.4317 41.538C12.2052 41.538 11.0062 41.9035 9.98641 42.5882C8.96661 43.2729 8.17177 44.2461 7.70241 45.3847C7.23305 46.5234 7.11024 47.7763 7.34952 48.9851C7.5888 50.1939 8.17942 51.3042 9.04668 52.1757C9.91395 53.0472 11.0189 53.6407 12.2219 53.8811C13.4248 54.1216 14.6717 53.9982 15.8048 53.5265C16.9379 53.0549 17.9065 52.2562 18.5879 51.2314C19.2693 50.2067 19.633 49.0019 19.633 47.7694C19.6298 46.1177 18.9754 44.5346 17.8131 43.3667C16.6508 42.1988 15.0754 41.5412 13.4317 41.538ZM13.4317 51.9319C12.6148 51.9319 11.8163 51.6885 11.1371 51.2324C10.4579 50.7764 9.92851 50.1282 9.61591 49.3699C9.30331 48.6115 9.22152 47.7771 9.38088 46.972C9.54025 46.1669 9.9336 45.4274 10.5112 44.847C11.0888 44.2666 11.8247 43.8713 12.6259 43.7112C13.4271 43.551 14.2575 43.6332 15.0122 43.9474C15.7669 44.2615 16.4119 44.7934 16.8658 45.4759C17.3196 46.1584 17.5618 46.9608 17.5618 47.7816C17.5604 48.8819 17.1249 49.9367 16.3506 50.7148C15.5763 51.4928 14.5266 51.9305 13.4317 51.9319Z"
                  fill="#7C5368"
                />
                <path
                  d="M14.4738 46.7345H12.4026V48.8157H14.4738V46.7345Z"
                  fill="#7C5368"
                />
                <path
                  d="M48.5796 41.538C47.3531 41.538 46.1542 41.9035 45.1344 42.5882C44.1146 43.2729 43.3197 44.2461 42.8504 45.3847C42.381 46.5234 42.2582 47.7763 42.4975 48.9851C42.7368 50.1939 43.3274 51.3042 44.1946 52.1757C45.0619 53.0472 46.1669 53.6407 47.3698 53.8811C48.5728 54.1216 49.8196 53.9982 50.9528 53.5265C52.0859 53.0549 53.0544 52.2562 53.7358 51.2314C54.4172 50.2067 54.7809 49.0019 54.7809 47.7694C54.7777 46.1177 54.1233 44.5346 52.9611 43.3667C51.7988 42.1988 50.2233 41.5412 48.5796 41.538ZM48.5796 51.9319C47.7628 51.9319 46.9642 51.6885 46.285 51.2324C45.6058 50.7764 45.0765 50.1282 44.7639 49.3699C44.4513 48.6115 44.3695 47.7771 44.5288 46.972C44.6882 46.1669 45.0816 45.4274 45.6592 44.847C46.2368 44.2666 46.9727 43.8713 47.7739 43.7112C48.5751 43.551 49.4055 43.6332 50.1602 43.9474C50.9149 44.2615 51.5599 44.7934 52.0137 45.4759C52.4675 46.1584 52.7098 46.9608 52.7098 47.7816C52.7084 48.8819 52.2728 49.9367 51.4986 50.7148C50.7243 51.4928 49.6746 51.9305 48.5796 51.9319Z"
                  fill="#7C5368"
                />
                <path
                  d="M49.6096 46.7345H47.5384V48.8157H49.6096V46.7345Z"
                  fill="#7C5368"
                />
                <path
                  d="M43.4074 46.7345H18.603V48.8157H43.4074V46.7345Z"
                  fill="#7C5368"
                />
                <path
                  d="M61.5755 35.5012L54.6235 30.511L50.0332 16.6732C49.8291 16.0515 49.4345 15.5107 48.9059 15.1281C48.3773 14.7454 47.7418 14.5406 47.0904 14.543H29.9766V16.6242H47.0904C47.3087 16.6232 47.5216 16.6923 47.6981 16.8214C47.8746 16.9505 48.0054 17.1328 48.0716 17.3418L52.7585 31.5013C52.8291 31.7062 52.9602 31.8846 53.1343 32.0127L59.941 36.8928V46.7386H53.7397V48.8198H60.97C61.1053 48.82 61.2392 48.7933 61.3642 48.7413C61.4891 48.6893 61.6027 48.6131 61.6983 48.5169C61.7939 48.4208 61.8696 48.3066 61.9212 48.181C61.9729 48.0554 61.9993 47.9208 61.9991 47.7849V36.3535C62.0058 36.187 61.9705 36.0216 61.8964 35.8726C61.8223 35.7236 61.7119 35.5958 61.5755 35.5012Z"
                  fill="#7C5368"
                />
                <path
                  d="M2.07116 46.7349V17.0269C2.0707 16.9725 2.08102 16.9185 2.10154 16.8681C2.12205 16.8178 2.15234 16.772 2.19064 16.7335C2.22894 16.695 2.27448 16.6646 2.32461 16.644C2.37474 16.6234 2.42845 16.613 2.48261 16.6135H6.20131V14.5322H2.48261C1.82573 14.5373 1.19717 14.8017 0.732672 15.2685C0.268173 15.7352 0.00500626 16.3668 3.68311e-07 17.0269V47.7698C-0.000114037 47.9056 0.0264252 48.0401 0.0780996 48.1656C0.129774 48.2911 0.205569 48.4052 0.301149 48.5012C0.396728 48.5973 0.510216 48.6734 0.635119 48.7254C0.760021 48.7773 0.893887 48.804 1.02906 48.8038H8.26377V46.7349H2.07116Z"
                  fill="#7C5368"
                />
                <path
                  d="M60.97 42.584H56.8398V44.6652H60.97V42.584Z"
                  fill="#7C5368"
                />
                <path
                  d="M7.2306 42.584H1.0293V44.6652H7.2306V42.584Z"
                  fill="#7C5368"
                />
                <path
                  d="M44.4372 30.1218C44.3019 30.1219 44.1679 30.0952 44.0429 30.0432C43.9179 29.9913 43.8043 29.915 43.7086 29.8189C43.613 29.7228 43.5371 29.6086 43.4854 29.483C43.4337 29.3574 43.4071 29.2228 43.4072 29.0868V21.8213C43.4071 21.6854 43.4337 21.5509 43.4854 21.4253C43.5371 21.2997 43.613 21.1856 43.7087 21.0896C43.8043 20.9935 43.9179 20.9174 44.0429 20.8655C44.1679 20.8136 44.3019 20.787 44.4372 20.7873H49.6085V18.7061H44.4372C43.6154 18.7077 42.8278 19.0364 42.2467 19.6203C41.6657 20.2042 41.3385 20.9956 41.3369 21.8213V29.0868C41.3385 29.9126 41.6657 30.704 42.2467 31.2879C42.8278 31.8718 43.6154 32.2005 44.4372 32.2021H53.7387V30.1218H44.4372Z"
                  fill="#7C5368"
                />
                <path
                  d="M47.5384 34.2716H43.4083V36.3528H47.5384V34.2716Z"
                  fill="#7C5368"
                />
                <path
                  d="M40.3073 42.584H20.6743V44.6652H40.3073V42.584Z"
                  fill="#7C5368"
                />
                <path
                  d="M5.1592 30.1223H1.02905V32.2035H5.1592V30.1223Z"
                  fill="#7C5368"
                />
              </g>
              <defs>
                <clipPath id="clip0_2481_1583">
                  <rect width="62" height="54" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mt-4">
            Transport & Enlèvement
          </h3>
          <p className="text-gray-500 mt-2">On s&apos;occupe de tout.</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
