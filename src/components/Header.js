// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <div>
        <h2>Call a Friend</h2>
        <h3>Your Friendly Contact App</h3>
    </div>
  );
};

export default Header;
