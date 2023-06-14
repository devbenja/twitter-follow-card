import React from 'react';
import './App.css'

export const App = () => {
  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img 
          className='tw-followCard-avatar'
          src="https://unavatar.io/github/devbenja" 
          alt="logo-github"/>
        <div className='tw-followCard-info'>
          <strong>Benjamin Carias</strong>
          <span className='tw-followCard-infoUserName'>@devbenja</span>
        </div>
      </header>
      <aside>
        <button className='tw-followCard-button'>Seguir</button>
      </aside>
    </article>
  )
}
