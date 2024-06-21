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
        >
          {item}
        </MenuItem>
      ))}
    </div>
  );
};

// Composant MenuItem pour afficher chaque élément du menu
const MenuItem = ({ isSelected, onItemClick, children }: { isSelected: boolean; onItemClick: () => void; children: React.ReactNode; }) => {
  return (
    <div
      className={`p-4 text-2xl cursor-pointer ${isSelected ? 'font-bold text-blue-500' : 'text-gray-500'}`}
      onClick={onItemClick} // Gère le clic pour sélectionner l'élément
    >
      {children}
    </div>
  );
};

export default Menu;
