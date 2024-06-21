import React, { useState, useEffect, useCallback } from 'react';

const Menu = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Écoute des événements de pression sur les touches de direction
  const handleKeyDown = useCallback(
    (event: any) => {
      if (event.key === 'ArrowUp') {
        setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
      } else if (event.key === 'ArrowDown') {
        setSelectedIndex((prevIndex) => (prevIndex < menuItems.length - 1 ? prevIndex + 1 : menuItems.length - 1));
      }
    },
    []
  );

  // Effet pour ajouter et retirer l'écouteur d'événements
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Exemple de contenu du menu
  const menuItems = ['Play', 'Options', 'Exit'];

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {menuItems.map((item, index) => (
        <MenuItem
          key={item}
          isSelected={index === selectedIndex}
          onItemClick={() => setSelectedIndex(index)} // Sélectionne l'élément lors du clic
          showArrow={index === selectedIndex} // Affiche la flèche uniquement pour l'élément sélectionné
        >
          {item}
        </MenuItem>
      ))}
    </div>
  );
};

// Composant MenuItem pour afficher chaque élément du menu
const MenuItem = ({ isSelected, onItemClick, showArrow, children }: { isSelected: boolean; onItemClick: () => void; showArrow: boolean; children: React.ReactNode; }) => {
  return (
    <div className="relative">
      <div
        className={`p-4 text-2xl cursor-pointer ${isSelected ? 'font-bold text-blue-500' : 'text-gray-500'}`}
        onClick={onItemClick} // Gère le clic pour sélectionner l'élément
      >
        {children}
      </div>
      {showArrow && (
        <div className=" text-black absolute top-1/2 transform -translate-y-1/2 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default Menu;
