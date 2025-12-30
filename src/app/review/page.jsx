'use client'

import React, { useState } from 'react'
import axios from 'axios'
import DB_URL from '@/URL_DATABASE/db_url'
import useReview from '@/useEfect-reuse/reviewUseEffect'

function ReviewPage() {
  const { review: reviewData, loading, error } = useReview()
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerSlide = 4
  

  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    message: '',
  })

  const [submittedReview, setSubmittedReview] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setReviewForm({ ...reviewForm, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post(`${DB_URL}/review/createReview`, reviewForm,
        {withCredentials:true}
      )
      setSubmittedReview(reviewForm)
      setReviewForm({ name: '', rating: 5, message: '' })
    } catch (err) {
      console.error("Failed to submit review:", err)
    }
  }

  const next = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerSlide >= reviewData.length ? 0 : prev + itemsPerSlide
    )
  }

  const prev = () => {
    setCurrentIndex((prev) =>
      prev - itemsPerSlide < 0
        ? Math.max(reviewData.length - itemsPerSlide, 0)
        : prev - itemsPerSlide
    )
  }

  const visibleReviews = reviewData.slice(
    currentIndex,
    currentIndex + itemsPerSlide
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black p-6 text-white">

      <h1 className="text-3xl font-bold mb-10 text-center">User Reviews</h1>

      {loading && <p className="text-center">Loading reviews...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {!loading && !error && (
        <>
          {/* ===== CAROUSEL ===== */}
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {visibleReviews.map((data) => (
                <div
                  key={data._id || data.id}
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl"
                >
                  <h2 className="font-semibold mb-2">{data.name}</h2>
                  <p className="text-gray-300 mb-3 text-sm">{data.message || data.reviewMessage}</p>

                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < data.rating ? 'text-yellow-400' : 'text-gray-600'}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-6 mt-8">
              <button onClick={prev} className="px-6 py-2 bg-white/10 rounded-lg">◀ Prev</button>
              <button onClick={next} className="px-6 py-2 bg-white/10 rounded-lg">Next ▶</button>
            </div>
          </div>
        </>
      )}

      {/* ===== REVIEW FORM ===== */}
      <div className="mt-14 max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold mb-4">Submit Your Review</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={reviewForm.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
            required
          />
          <input
            name="rating"
            type="number"
            min="1"
            max="5"
            value={reviewForm.rating}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
          />
          <textarea
            name="message"
            value={reviewForm.message}
            onChange={handleChange}
            placeholder="Your Review"
            rows={4}
            className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
            required
          />
          <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
            Submit Review
          </button>
        </form>

        {submittedReview && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-4">Your Submitted Review</h2>
            <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
              <h3 className="font-semibold">{submittedReview.name}</h3>
              <p className="text-gray-300 my-2">{submittedReview.message}</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < submittedReview.rating ? 'text-yellow-400' : 'text-gray-600'}>
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ReviewPage
