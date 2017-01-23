import React from 'react';
import {TopNavBar,TopNavSocial} from '../components/TopNavLists';

function TopNav(props) {
    return(
      <div>
        
          <div className="ui fixed inverted menu">
          <div className="ui container">
          
            
            <a href="#" className="header item">
            <h1 className="logo">Blogological</h1>
            </a>
                      
            <TopNavBar />
                        
            <TopNavSocial />
            
          </div>
        </div>
        </div>
      
    );
};

export default TopNav;