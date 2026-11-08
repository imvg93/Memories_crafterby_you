import React from 'react'

export default function Hero() {
  return (
<>
<header className="hero" id="top">
  <div>
    <p className="presents line" style={{"--d":"0s"}}>Event Decoration <b>&amp;</b> Photography</p>
    <h1><span className="line" style={{"--d":".1s",display:"block"}}>Memories,</span><em className="line" style={{"--d":".35s"}}>crafted for you</em></h1>
    <p className="hero-sub line" style={{"--d":".65s"}}>We style the room and capture the day — florals, tablescapes, backdrops and candid photography for weddings, receptions, birthdays and corporate events.</p>
    <div className="meta">
      <a className="btn line" style={{"--d":".85s"}} href="#reply">Book your date
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 11 11 3M5 3h6v6"/></svg></a>
      <a className="venue line" style={{"--d":"1s"}} href="#work">See our work</a>
      <p className="names line" style={{"--d":"1.15s"}}>memories_craftedforyou</p>
    </div>
  </div>
  <div className="hero-art line" style={{"--d":".5s"}}>
    <div className="main img-rv in" style={{"--d":".3s"}}><img src="https://storage.googleapis.com/studio-design-asset-files/projects/d7WlLVYKWV/s-1000x1500_v-fms_f2216aec-0b45-48b5-a4f2-1fbce308bc29.webp" alt="Styled and photographed event" /></div>
    <div className="inset img-rv in" style={{"--d":".9s"}}><img src="https://storage.googleapis.com/studio-design-asset-files/projects/d7WlLVYKWV/s-520x780_v-fs_205877d7-c514-4404-b682-396b08a50a7c.webp" alt="" /></div>
  </div>
</header>
</>
  )
}
