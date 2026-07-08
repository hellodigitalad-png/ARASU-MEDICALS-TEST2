import React, { useState } from "react";
import { PhoneIcon, MailIcon, PinIcon, ClockIcon, CheckIcon } from "../../icons.jsx";
import "./Contact.css";

export default function Contact({ full = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        {!full && (
          <div className="section-head">
            <div className="eyebrow" style={{ margin: "0 auto 16px" }}><span className="dot" /> Get In Touch</div>
            <h2 className="section-title">Questions about an order? <span>Talk to us.</span></h2>
          </div>
        )}

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-icon"><PhoneIcon size={18} /></div>
              <div><h4>Call Us</h4><p>+91 98765 43210</p></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><MailIcon size={18} /></div>
              <div><h4>Email Us</h4><p>arasumedical@gmail.com</p></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><PinIcon size={18} /></div>
              <div><h4>Head Office</h4><p>123, Health Street, Anna Nagar, Chennai - 600001</p></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon"><ClockIcon size={18} /></div>
              <div><h4>Working Hours</h4><p>Mon – Sun, 8:00 AM – 10:00 PM</p></div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon"><CheckIcon size={26} /></div>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out — our team will get back to you within one business day.</p>
                <button type="button" className="btn btn-outline btn-sm" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}>Send another message</button>
              </div>
            ) : (
              <>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" required />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="How can we help?" required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Send Message</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
