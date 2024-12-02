import React from 'react';

export default function Footer() {
  return (
    <footer style={{ 
      backgroundColor: '#282c34', 
      color: 'white', 
      textAlign: 'center', 
      padding: '10px 0', 
      bottom: 0, 
      width: '100%' 
    }}>
      <div>
        <p>&copy; 2024 Primitive Root Calculator. All Rights Reserved.</p>
        <div>
          <a 
            href="https://www.linkedin.com/in/udageeth-dias-3313142ab/" 
            style={{ color: '#61dafb', textDecoration: 'none', margin: '0 10px' }}
          >
            About the Developer
          </a>
        </div>
      </div>
    </footer>
  );
}
