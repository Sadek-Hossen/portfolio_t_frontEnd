'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import myImage from '../../../public/img/Me.jpg'
import DB_URL from '@/URL_DATABASE/db_url'

function ContructPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await axios.post(
        `${DB_URL}/contruct/createContruct`,
        formData
      )

      console.log("Server response:", res.data)
      alert("Message sent successfully ✅")

      // reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
      })

    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response?.data || error.message
      )
      alert("Failed to send message ❌")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">

       {/* ===== LEFT: CONTACT FORM ===== */}
<div className="relative rounded-3xl p-[2px] bg-gradient-to-r from-green-400/50 via-cyan-400/50 to-purple-400/50">

  {/* inner transparent glass */}
  <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 shadow-lg">

    <h2 className="text-2xl font-bold mb-6 text-gray-100">
      Contact Me
    </h2>

    <form onSubmit={handleSubmit} className="space-y-4">

      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-green-400"
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none focus:ring-2 focus:ring-green-400"
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        rows="4"
        className="w-full px-4 py-3 rounded-xl bg-gray-100 outline-none resize-none focus:ring-2 focus:ring-green-400"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-400 hover:bg-green-500 transition py-3 rounded-xl font-semibold text-white disabled:opacity-50"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

    </form>
  </div>
</div>

        {/* ===== RIGHT: IMAGE ===== */}
        <div className="flex items-center justify-center">
          <div className="relative w-100 h-100 rounded-3xl overflow-hidden shadow-lg">
            <Image
              src={myImage}
              alt="My Photo"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContructPage
