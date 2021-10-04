import React from 'react'
import CookieList from './CookiesList'

export default function Home() {
    return (
    <div className="container">
    <h1>Cookies and Beyond</h1>
    <h4>Where cookie maniacs gather</h4>
            <div className="list-container">
            <CookieList />
            </div>
          
    </div>
    )
}
