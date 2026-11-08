import React from 'react'

export default function Info() {
  return (
<>
<section className="info" id="information">
  <div className="wrap">
    <p className="eyebrow rv">Information</p>
    <h2 className="i-title rv">How we work</h2>
    <div className="row rv"><div className="lab">Step 01</div><div className="val big">Consult<small>we listen to your story, venue &amp; budget</small></div></div>
    <div className="row rv"><div className="lab">Step 02</div><div className="val big">Design<small>decor concept, palette &amp; shot list</small></div></div>
    <div className="row rv"><div className="lab">Step 03</div><div className="val big">Create<small>styling &amp; photography on the day</small></div></div>
    <div className="row rv"><div className="lab">Step 04</div><div className="val big">Deliver<small>edited gallery &amp; albums</small></div></div>

    <div className="place rv">
      <h2 className="i-title">Services</h2>
      <span className="venue">memories_craftedforyou</span>
    </div>
    <div className="row rv"><div className="lab">Event Decoration</div>
      <div className="val"><ul>
        <li>Floral styling &amp; arrangements</li>
        <li>Table settings, linens &amp; lighting</li>
        <li>Backdrops &amp; full venue transformation</li>
      </ul></div>
    </div>
    <div className="row rv"><div className="lab">Photography</div>
      <div className="val"><ul>
        <li>Ceremony &amp; celebration coverage</li>
        <li>Portraits, candids &amp; detail shots</li>
        <li>Curated online gallery &amp; printed albums</li>
      </ul></div>
    </div>
    <div className="row rv"><div className="lab">Events</div><div className="val">Weddings · Receptions · Birthdays · Corporate gatherings</div></div>
    
    <div className="row rv"><div className="lab">Contact</div><div className="val"><a className="link" href="#">Add Instagram / email / phone</a></div></div>
    <p style={{marginTop:"40px"}} className="rv">
      <a className="map-btn" href="#reply">Enquire now
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 11 11 3M5 3h6v6"/></svg>
      </a>
    </p>
  </div>
</section>
</>
  )
}
