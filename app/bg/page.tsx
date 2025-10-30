'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function NavigationButtons() {
  const router = useRouter();

  const buttons = [
    { label: 'white full screen', path: 'bg/wfs' },
    { label: 'white full screen name', path: 'bg/nwfs' },
    { label: 'black full screen', path: 'bg/bfs' },
    { label: 'black full screen name', path: 'bg/nbfs' },
  ];

  // Hide footer and set background to white
  useEffect(() => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.style.display = 'none';
    }
    
    // Hide header
    const header = document.querySelector('header');
    if (header) {
      header.style.display = 'none';
    }
    
    // Set body background to white
    document.body.style.background = '#ffffff';
    document.body.style.backgroundColor = '#ffffff';
    
    // Also set html element background
    document.documentElement.style.background = '#ffffff';
    document.documentElement.style.backgroundColor = '#ffffff';
    
    // Cleanup: restore original styles when component unmounts (optional)
    return () => {
      const footer = document.querySelector('footer');
      if (footer) {
        footer.style.display = '';
      }
      const header = document.querySelector('header');
      if (header) {
        header.style.display = '';
      }
      document.body.style.background = '';
      document.body.style.backgroundColor = '';
      document.documentElement.style.background = '';
      document.documentElement.style.backgroundColor = '';
    };
  }, []);

  const handleNavigation = (path: string) => {
    // Open in new tab
    window.open(`/${path}`, '_blank');
  };

  return (
    <div style={{ display: 'flex', gap: '10px', padding: '20px', backgroundColor: '#ffffff' }}>
      {buttons.map((button) => (
        <button
          key={button.path}
          onClick={() => handleNavigation(button.path)}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            cursor: 'pointer',            
            borderRadius: '4px',
            backgroundColor: '#000000',
            color: '#ffffff',
            border: 'none',
            transition: 'background-color 0.2s',
          }}         
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}