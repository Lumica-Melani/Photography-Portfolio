import React, { useState } from "react";

export default function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "",
    date: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div class="form-box">
      <section class="booking-section">
        <h2 class="form-title">Share Your Vision</h2>
        <form
          class="booking-form"
          action="#"
          method="post"
          onSubmit={handleSubmit}
        >
          <div class="form-group">
            <input
              class="input-style"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div class="form-group">
            <input
              class="input-style"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div class="form-group">
            <input
              class="input-style"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div class="form-group">
            <select
              class="input-style"
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
            >
              <option value="">Select...</option>
              <option value="wedding">Wedding</option>
              <option value="portrait">Portrait</option>
              <option value="event">Event</option>
              <option value="fashion">Fashion</option>
              <option value="product">Product</option>
            </select>
          </div>

          <div class="form-group">
            <input
              class="input-style"
              type="date"
              name="date"
              value={formData.date.toString()}
              onChange={handleChange}
              required
            />
          </div>

          <div class="form-group">
            <textarea
              class="long-text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your vision..."
            ></textarea>
          </div>

          <button className="form-btn submit-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
