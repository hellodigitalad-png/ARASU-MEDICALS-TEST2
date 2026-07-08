import React, { useState } from "react";
import {
  PhoneIcon,
  MailIcon,
  PinIcon,
  ClockIcon,
  CheckIcon,
} from "../../icons.jsx";

import "./Contact.css";

// Background
import ContactBg from "../asset/MainImg/bg.png";

export default function Contact({ full = false }) {
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "919566877148";

    const textMessage = `*New Message from Arasu Medical Website*

👤 Name : ${form.name}

📞 Phone : ${form.phone}

✉️ Email : ${form.email}

📝 Message :

${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      textMessage
    )}`;

    window.open(url, "_blank");

    setSubmitted(true);
  };

  return (
    <section
      className="section contact"
      id="contact"
      style={{
        backgroundImage: `url(${ContactBg})`,
      }}
    >
      <div className="container">

        {!full && (
          <div className="section-head">

            <div
              className="eyebrow"
              style={{ margin: "0 auto 16px" }}
            >
              <span className="dot"></span>
              Get In Touch
            </div>

            <h2 className="section-title">
              Questions about an order?
              <span> Talk to us.</span>
            </h2>

          </div>
        )}

        <div className="contact-grid">

          {/* LEFT */}

          <div className="contact-info">

            <div className="contact-info-item">

              <div className="contact-icon">
                <PhoneIcon size={18} />
              </div>

              <div>

                <h4>Call Us</h4>

                <a href="tel:+919566877148">
                  +91 95668 77148
                </a>

                <a href="tel:+919842250812">
                  +91 98422 50812
                </a>

                <a href="tel:+917904772383">
                  +91 79047 72383
                </a>

              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-icon">
                <MailIcon size={18} />
              </div>

              <div>

                <h4>Email</h4>

                <a href="mailto:arasumedicaltirupur@gmail.com">
                  arasumedicaltirupur@gmail.com
                </a>

              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-icon">
                <PinIcon size={18} />
              </div>

              <div>

                <h4>Main Office</h4>

                <p>
                  Arasu Medical,
                  Tiruppur,
                  Tamil Nadu
                </p>

              </div>

            </div>

            <div className="contact-info-item">

              <div className="contact-icon">
                <ClockIcon size={18} />
              </div>

              <div>

                <h4>Working Hours</h4>

                <p>
                  Monday - Sunday
                  <br />
                  8:00 AM - 10:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            {submitted ? (

              <div className="contact-success">

                <div className="contact-success-icon">
                  <CheckIcon size={28} />
                </div>

                <h3>
                  Redirected to WhatsApp
                </h3>

                <p>
                  Your details are ready.
                  Click Send inside WhatsApp to contact us.
                </p>

                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={() => {
                    setSubmitted(false);

                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  }}
                >
                  Send Another Message
                </button>

              </div>

            ) : (

              <>

                <div className="form-row">

                  <div className="form-group">

                    <label>Full Name</label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />

                  </div>

                  <div className="form-group">

                    <label>Phone</label>

                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      required
                    />

                  </div>

                </div>

                <div className="form-group">

                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                  />

                </div>

                <div className="form-group">

                  <label>Message</label>

                  <textarea
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                >
                  Send Message via WhatsApp
                </button>

              </>

            )}

          </form>

        </div>

      </div>
    </section>
  );
}