
// Inline ESLint disable
{/* eslint-disable-next-line react/no-unescaped-entities */}
import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-20 bg-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row border-[0.5px] border-[#39393930] justify-between items-start p-4">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Logo and company name */}
          <div className="flex items-center mb-8 md:mb-0">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={133}
              height={65}
              className="object-contain"
              layout="responsive"
            />
          </div>

          <div className="w-full md:w-[626px] flex flex-col md:flex-row gap-14">
            {/* Infos pratiques section */}
            <div className="footer-section">
              <h3 className="text-sm md:text-[18px] font-bold text-[#393939] mb-4">
                INFOS PRATIQUES
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#393939]">
                <li>À propos</li>
                <li>Livraisons & Reprises</li>
                <li>Mode d'emploi</li>
                <li>F.A.Q</li>
              </ul>
            </div>

            {/* Legal section */}
            <div className="footer-section">
              <h3 className="text-xs md:text-sm font-bold text-[#393939] mb-4">LÉGAL</h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#393939]">
                <li>Mentions légales</li>
                <li>CGU</li>
                <li>CGV</li>
                <li>Politique de confidentialité</li>
              </ul>
            </div>

            {/* Mon compte section */}
            <div className="footer-section">
              <h3 className="text-xs md:text-sm font-bold text-[#393939] mb-4">MON COMPTE</h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#393939]">
                <li>Accéder à mon compte</li>
                <li>Ma liste d'envie</li>
                <li>Créer un compte</li>
                <li>Mot de passe oublié</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social media icons */}
        <div className="flex flex-col gap-3 p-5">
          <p className="text-sm md:text-[18px] text-[#393939]">NOUS SUIVRE</p>
          <div className="flex justify-center md:justify-end space-x-6 mt-8 md:mt-0">
            <li href="#" className="text-[#393939] hover:text-pink-500">
              <FaTwitter size={20} />
            </li>
            <li href="#" className="text-[#393939] hover:text-pink-500">
              <FaInstagram size={20} />
            </li>
            <li href="#" className="text-[#393939] hover:text-pink-500">
              <FaLinkedinIn size={20} />
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;