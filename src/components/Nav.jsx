import React from 'react'

export default function Nav() {
  return (
<>
<nav className="nav" id="nav">
  <a className="logo co" href="#top">memories<span>_</span>craftedforyou</a>
  <ul>
    <li><a className="l" href="#message">Our story</a></li>
    <li><a className="l" href="#work">Decor &amp; Photo</a></li>
    <li><a className="l" href="#information">Information</a></li>
    <li><a className="l" href="#crafted">About us</a></li>
    <li><a className="l cta" href="#reply">Book Us</a></li>
  </ul>
</nav>
</>
  )
}
