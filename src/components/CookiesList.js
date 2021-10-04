import React from 'react'
import Cookie from "./Cookie"
import CookiesData from '../CookiesData.js'

export default function CookiesList() {
  
  const CookieList = CookiesData.map((cookie) => <Cookie details={cookie} />);
  return CookieList
}