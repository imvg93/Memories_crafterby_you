import React from 'react'

export default function Palette() {
  return (
<>
<section>
  <div className="wrap">
    <div className="dress">
      <div className="swatches rv" aria-label="Decor palette: green, orange, beige">
        <i style={{"--i":"0",background:"#7c8f5a"}}></i><i style={{"--i":"1",background:"#d9822b"}}></i><i style={{"--i":"2",background:"#d8c3a0"}}></i>
      </div>
      <div className="rv" style={{"--d":".2s"}}>
        <p className="mot">Decor palette · Styled &amp; photographed</p>
        <h3>Colour is where decor and photography meet.</h3>
        <p>Every event starts with a palette. We choose florals, linens, lighting and backdrops around a few considered colours — here, soft green, warm orange and beige — so the room feels cohesive and every photograph looks timeless.</p>
        <div className="duo">
          <div><b>Decor</b><span>Palette-led florals, tablescapes, backdrops and lighting that carry one story through the room.</span></div>
          <div><b>Photography</b><span>Colour-aware framing and editing, so the styling you invested in shows beautifully in the final gallery.</span></div>
        </div>
        <p className="note">→ See our <a href="#work">decor &amp; photography work</a></p>
      </div>
    </div>
  </div>
</section>
</>
  )
}
