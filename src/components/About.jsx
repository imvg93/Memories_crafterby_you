import React from 'react'

export default function About() {
  return (
<>
<section className="company" id="crafted">
  <div className="wrap">
    <p className="eyebrow rv">About us · Our work</p>
    <div className="head">
      <h2 className="handle rv">memories<span>_</span>craftedforyou</h2>
      <p className="rv" style={{"--d":".15s"}}>This invitation is one of our creations — designed and built by memories_craftedforyou. We shape celebrations from the first sketch to the last photograph — decorating the room and capturing the day so that every moment is crafted for you.</p>
    </div>
    <div className="services">
      <article className="svc rv">
        <span className="n">01</span>
        <svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 40V22M24 22c-7 0-12-5-12-12 7 0 12 5 12 12ZM24 22c7 0 12-5 12-12-7 0-12 5-12 12ZM16 40h16"/></svg>
        <h3>Event Decoration</h3>
        <p>Floral styling, table settings, backdrops and venue transformations — themed to your story, colours and guest list.</p>
        <ul><li>Weddings</li><li>Receptions</li><li>Birthdays</li><li>Corporate</li></ul>
      </article>
      <article className="svc rv" style={{"--d":".15s"}}>
        <span className="n">02</span>
        <svg viewBox="0 0 48 48" aria-hidden="true"><rect x="6" y="14" width="36" height="24" rx="3"/><circle cx="24" cy="26" r="7"/><path d="M17 14l2-5h10l2 5"/></svg>
        <h3>Photography</h3>
        <p>Candid, editorial coverage of ceremonies and celebrations — from getting ready to the final toast, delivered as a gallery you will keep forever.</p>
        <ul><li>Ceremony</li><li>Portraits</li><li>Candid</li><li>Albums</li></ul>
      </article>
    </div>
    <div className="cta-row rv">
      <p>Planning an event? Let’s craft your memories.</p>
      
      <a className="btn" href="#" aria-label="Contact memories_craftedforyou">Get in touch
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 11 11 3M5 3h6v6"/></svg></a>
    </div>
  </div>
</section>
</>
  )
}
