import { Link } from 'react-router-dom';
import { useState } from 'react';

const Footer = () => {
  const [skypeIcon, setSkypeIcon] = useState('/icons/skype-default.svg');
  const [vkIcon, setVkIcon] = useState('/icons/vk-default.svg');

  return (
    <footer className="w-full bg-transparent py-4 flex items-center justify-start px-6 bottom-0 left-0 right-0 z-10">
      <Link to="https://skype.com">
        <img
          src={skypeIcon}
          alt="Skype"
          className="h-12 w-12 mr-4 mt-1"
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
