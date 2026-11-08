import React from 'react'

export default function Footer() {
  return (
<>
<footer>
  <div className="ft">
    <div className="ft-top rv">
      <p className="eyebrow" style={{color:"#c9b18c"}}>Let’s create something beautiful</p>
      <a className="ft-cta" href="#reply">Book your date <svg width="40" height="40" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1"><path d="M3 11 11 3M5 3h6v6"/></svg></a>
    </div>
    <div className="ft-grid">
      <div className="rv">
        <h2 className="bigbrand">memories<span className="us">_</span>craftedforyou</h2>
        <p className="fine">Event Decoration &amp; Photography</p>
      </div>
      <nav className="rv" style={{"--d":".1s"}} aria-label="Footer">
        <h4>Explore</h4>
        <a href="#message">Our story</a>
        <a href="#work">Decor &amp; Photography</a>
        <a href="#information">How we work</a>
        <a href="#crafted">About us</a>
        <a href="#reply">Book us</a>
      </nav>
      <div className="rv" style={{"--d":".2s"}}>
        <h4>Services</h4>
        <span>Event Decoration</span>
        <span>Photography</span>
        <span>Weddings &amp; Receptions</span>
        <span>Birthdays &amp; Corporate</span>
      </div>
      <div className="rv" style={{"--d":".3s"}}>
        <h4>Contact</h4>
        
        <a href="#">Instagram — @memories_craftedforyou</a>
        <a href="#">Email — add address</a>
        <a href="#">Phone — add number</a>
      </div>
    </div>
    <div className="ft-bot">
      <span>© 2026 memories_craftedforyou. All rights reserved.</span>
      <a href="#top">Back to top ↑</a>
    </div>
  </div>
</footer>
</>
  )
}
