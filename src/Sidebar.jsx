import React from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'show-sidebar' : ''}`}>
      <div className="sidebar-header">
        <h1 className='logo'>Menu</h1>
        <button className="close-btn" onClick={toggleSidebar}>
          btn
        </button>
      </div>
      <ul className="links">
        <li>
          <a href="index.html">home</a>
        </li>
        <li>
          <a href="about.html">about</a>
        </li>
        <li>
          <a href="projects.html">projects</a>
        </li>
        <li>
          <a href="contact.html">contact</a>
        </li>
      </ul>
      <ul className="social-icons">
        <li>
          <a href="https://www.twitter.com">
            
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">

          </a>
        </li>
        <li>
          <a href="https://www.twitter.com">
            
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
