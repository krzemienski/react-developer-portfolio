// Footer.jsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const websiteUrl = 'https://awesome.video';

  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <div className="text-center text-xs mb-2">
        &copy; {currentYear} Nick Krzemienski | Engineering Lead in Video Innovations
      </div>
      <div className="text-center text-xs">
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="text-xs hover:text-white">
          {websiteUrl}
        </a> | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
