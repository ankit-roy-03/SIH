import React from 'react';

function Footer() {
  return (
    <footer className="bg-maingreen text-beige py-8 px-8 text-center">
      <div className="mb-4">
        <h3 className="text-xl font-semibold mb-2 text-beige">Contact Us</h3>
        <p className="text-beige">Email: info@agrotechh.com</p>
        <p className="text-beige">Phone: +123 456 7890</p>
      </div>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-lightyellow hover:text-green">Facebook</a>
        <a href="#" className="text-lightyellow hover:text-green">Twitter</a>
        <a href="#" className="text-lightyellow hover:text-green">LinkedIn</a>
      </div>
      <p className="text-beige">&copy; {new Date().getFullYear()} Agrotechh. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
