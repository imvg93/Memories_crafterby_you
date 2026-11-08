import React, { useState } from 'react'

export default function Book() {
  const [fname, setFname] = useState('Choose a file')
  const [toast, setToast] = useState(false)
  const onSubmit = (e) => {
    e.preventDefault()
    // TODO: send to your backend / form service (e.g. fetch POST) before launch
    setToast(true)
    setTimeout(() => setToast(false), 4500)
    e.target.reset()
    setFname('Choose a file')
  }
  return (
<>
<section className="reply" id="reply">
  <div className="wrap">
    <p className="eyebrow rv">Book Your Date</p>
    <h2 className="display rv">Let’s Craft<em>Together</em></h2>
    <p className="lead rv">Tell us about your event.<small>Share a few details and memories_craftedforyou will get back to you with ideas and availability.</small></p>

    <form id="rsvp" onSubmit={onSubmit}>
      <div className="step">01 · Your event</div>
      <div className="field">
        <label className="q"><small>Required</small>Event type</label>
        <div className="opts">
          <label><input type="radio" name="event" value="Wedding" required /><span>Wedding</span></label>
          <label><input type="radio" name="event" value="Reception" /><span>Reception</span></label>
          <label><input type="radio" name="event" value="Birthday" /><span>Birthday</span></label>
          <label><input type="radio" name="event" value="Corporate" /><span>Corporate</span></label>
          <label><input type="radio" name="event" value="Other" /><span>Other</span></label>
        </div>
      </div>
      <div className="field">
        <label className="q"><small>Required</small>Services needed</label>
        <div className="opts">
          <label><input type="checkbox" name="service" value="Event Decoration" /><span>Event Decoration</span></label>
          <label><input type="checkbox" name="service" value="Photography" /><span>Photography</span></label>
          <label><input type="checkbox" name="service" value="Both" /><span>Both</span></label>
        </div>
      </div>
      <div className="field">
        <label className="q" htmlFor="date"><small>Required</small>Event date</label>
        <input id="date" type="date" name="date" required />
      </div>
      <div className="field">
        <label className="q" htmlFor="venue"><small className="opt">Optional</small>Venue / city</label>
        <input id="venue" type="text" name="venue" placeholder="Where will it take place?" />
      </div>
      <div className="field">
        <label className="q" htmlFor="guests"><small className="opt">Optional</small>Guests</label>
        <input id="guests" type="text" name="guests" placeholder="Approximate number" inputMode="numeric" />
      </div>

      <div className="step">02 · Your vision</div>
      <div className="field">
        <label className="q" htmlFor="msg"><small className="opt">Optional</small>Tell us more</label>
        <div><textarea id="msg" name="message" placeholder="Theme, colours, mood, must-have moments…"></textarea></div>
      </div>
      <div className="field">
        <label className="q"><small className="opt">Optional</small>Inspiration photo</label>
        <div><label className="file"><input type="file" name="photo" accept="image/*" onChange={(e)=>setFname(e.target.files[0]?.name||"Choose a file")} /><span id="fname">{fname}</span></label></div>
      </div>

      <div className="step">03 · Contact</div>
      <div className="field">
        <label className="q"><small>Required</small>Name</label>
        <div className="pair"><input type="text" name="first" placeholder="First name" required aria-label="First name" /><input type="text" name="last" placeholder="Last name" required aria-label="Last name" /></div>
      </div>
      <div className="field">
        <label className="q" htmlFor="mail"><small>Required</small>Email</label>
        <input id="mail" type="email" name="email" placeholder="you@example.com" required />
      </div>
      <div className="field">
        <label className="q" htmlFor="tel"><small className="opt">Optional</small>Phone</label>
        <input id="tel" type="text" name="tel" placeholder="Phone number" inputMode="tel" />
      </div>

      <div className="submit">
        <button type="submit"><span>Send enquiry</span><svg width="16" height="13" viewBox="0 0 16 13" fill="none" stroke="currentColor" strokeWidth="1.3"><path d="M0 6.5h15M9.5 1l5.5 5.5L9.5 12"/></svg></button>
        <p className="hint" style={{marginTop:"14px"}}>※ We usually reply within a couple of days.</p>
      </div>
    </form>
  </div>
</section>
<div className={"toast"+(toast?" show":"")} id="toast" role="status">Thank you — memories_craftedforyou will be in touch soon.</div>
</>
  )
}
