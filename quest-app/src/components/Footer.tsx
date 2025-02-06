import { useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [skypeIcon, setSkypeIcon] = useState('/icons/skype-default.svg');
  const [vkIcon, setVkIcon] = useState('/icons/vk-default.svg');

  return (
    <footer className="w-full py-4 bg-bgcolor flex items-center justify-start px-6">
      <Link to="https://skype.com">
        <img
          src={skypeIcon}
          alt="Skype"
          className="h-10 w-10 mr-4 transition-all duration-300 scale-100"
          onMouseEnter={() => setSkypeIcon('/icons/skype-hover.svg')}
          onMouseLeave={() => setSkypeIcon('/icons/skype-default.svg')}
        />
      </Link>
      <Link to="https://vk.com">
        <img
          src={vkIcon}
          alt="VK"
          className="h-10 w-10 transition-all duration-300"
          onMouseEnter={() => setVkIcon('/icons/vk-hover.svg')}
          onMouseLeave={() => setVkIcon('/icons/vk-default.svg')}
        />
      </Link>
    </footer>
  );
};

export default Footer;
