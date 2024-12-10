// Inline ESLint disable
{/* eslint-disable-next-line react/no-unescaped-entities */}
import React from 'react';

const NavLinks = () => {
  return (
    <div className=" flex items-center bg-white border-b mt-5 border-gray-300">
      <nav className="flex  justify-between w-full px-6">
        <ul className="flex gap-2 space-x-6 text-sm text-[#6B7280] font-medium">
          <li className="text-[#0093D0] border-b-2 border-[#0093D0] pb-1">
            ART DE LA TABLE
          </li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">MOBILIER</li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">NAPPAGE</li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">
            MATÉRIEL DE SALLE
          </li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">CUISINE</li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">BARBECUE</li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">TENUE</li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">CHAUFFAGE</li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">
            PODIUM - PISTE DE DANSE
          </li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">
            SON ET LUMIÈRE
          </li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">PACKS</li>
          <li className="hover:text-[#0093D0] transition-colors cursor-pointer">
            CONSOMMABLES
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavLinks;
