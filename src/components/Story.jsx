import React, { useEffect, useRef, useState } from 'react'

export default function Story() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } }, { threshold: 0.4 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  let n = 0
  const words = 'Moments made to last'.split(' ').map((w, wi) => (
    <span key={wi} style={{ whiteSpace: 'nowrap' }}>
      {[...w].map((c) => <span key={n} style={{ '--i': n++ }}>{c}</span>)}{wi < 3 ? ' ' : ''}
    </span>
  ))
  return (
<>
<section className="message" id="message">
  <div className="note-wrap">
    <p className="eyebrow rv" style={{textAlign:"center"}}>Our Story · memories_craftedforyou</p>
    <h2 className="note-title rv"><span className={"split"+(inView?" in":"")} ref={ref} aria-label="Moments made to last">{words}</span></h2>
    <p className="note-lead rv" style={{"--d":".1s"}}>We design the room and capture the day,<br />so your celebration is <em>beautiful to live and beautiful to remember.</em></p>
    <div className="note-line rv"><i></i><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 21s-8-5.2-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.8-8 11-8 11Z"/></svg><i></i></div>
    <div className="note-grid">
      <article className="note-col rv">
        <span className="no">i.</span>
        <h3>Our craft</h3>
        <p>From florals and table settings to backdrops and lighting, we style every detail around your story, your colours and your guests, so the space feels like you.</p>
      </article>
      <article className="note-col rv" style={{"--d":".15s"}}>
        <span className="no">ii.</span>
        <h3>Our lens</h3>
        <p>Our photographers capture the day as it unfolds — candid laughter, quiet details and the moments in between — and deliver them as a gallery you will treasure.</p>
      </article>
      <article className="note-col rv" style={{"--d":".3s"}}>
        <span className="no">iii.</span>
        <h3>Our promise</h3>
        <p>One team, one vision. We care for the decor and the photography together, so what we build is exactly what you will remember.</p>
      </article>
    </div>
    <p className="note-end rv">Crafted for you</p>
  </div>
</section>
</>
  )
}
