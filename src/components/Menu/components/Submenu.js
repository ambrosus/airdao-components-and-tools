import React, { useState } from 'react';
import { ArrowUp } from '../assets/ArrowUp';
import { ArrowDown } from '../assets/ArrowDown';
import { PrismicText } from '@prismicio/react';

const Submenu = ({ submenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='side-menu__listmenu'>
      <button
        className='side-menu__listmenu-wrapper '
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className='side-menu__listmenu-text'>
          <PrismicText field={submenu?.primary.heading} />
        </div>
        <div className='side-menu__listmenu-btn'>
          {isOpen ? <ArrowUp /> : <ArrowDown />}
        </div>
      </button>

      <ul
        className='side-menu__list side-menu__list_small'
        style={{ display: isOpen ? '' : 'none' }}
      >
        {submenu?.items.map(({ icon, name, link }) => (
          <li key={name}>
            <a
              href={link.url}
              target={link.target}
              rel={(name === 'Home' || name === 'Team' || name === 'Governance') ? '' : 'nofollow'}
            >
              <img src={icon.url} alt={icon.alt} />
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Submenu;
