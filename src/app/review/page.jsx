'use client'

import React, { useState } from 'react'

function ReviewPage() {
  // ===== Fake Review Data =====
  const initialReviews = [
    { id: 1, name: 'Akram Hossain', rating: 5, message: 'Amazing service! Highly recommended.' },
    { id: 2, name: 'Jamal Uddin', rating: 4, message: 'Good experience, but could improve response time.' },
    { id: 3, name: 'Karim Sheikh', rating: 3, message: 'Average service. Room for improvement.' },
    { id: 4, name: 'Salma Akter', rating: 5, message: 'Excellent support and very helpful staff!' },
    { id: 5, name: 'Rafiq Islam', rating: 4, message: 'Nice platform, satisfied with the overall experience.' },
    { id: 6, name: 'Himmel', rating: 5, message: 'Great work' },
    { id: 7, name: 'Tarek Monuar', rating: 5, message: 'Great job' },
    { id: 8, name: 'Salman Khan', rating: 4, message: 'Good, but can be faster' },
  ]

  const [reviews, setReviews] = useState(initialReviews) // reviews state
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerSlide = 4

  const [reviewForm, setReviewForm] = useState({
    name: '',
    rating: 5,
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setReviewForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // create new review object with unique id
    const newReview = {
      id: reviews.length + 1,
      ...reviewForm
    }

    // add it to the reviews state instantly
    setReviews(prev => [newReview, ...prev]) // new review appears at top
    setReviewForm({ name: '', rating: 5, message: '' })
    alert('Review submitted! ✅')
  }

  const next = () => {
    setCurrentIndex(prev =>
      prev + itemsPerSlide >= reviews.length ? 0 : prev + itemsPerSlide
    )
  }

  const prev = () => {
    setCurrentIndex(prev =>
      prev - itemsPerSlide < 0
        ? Math.max(reviews.length - itemsPerSlide, 0)
        : prev - itemsPerSlide
    )
  }

  const visibleReviews = reviews.slice(currentIndex, currentIndex + itemsPerSlide)

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black p-6 text-white">
      <h1 className="text-3xl font-bold mb-10 text-center">User Reviews</h1>

      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {visibleReviews.map((data) => (
            <div
              key={data.id}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl"
            >
              <h2 className="font-semibold mb-2">{data.name}</h2>
              <p className="text-gray-300 mb-3 text-sm">{data.message}</p>

              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={
                      index < data.rating ? 'text-yellow-400' : 'text-gray-600'
                    }
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-6 mt-8">
          <button onClick={prev} className="px-6 py-2 bg-white/10 rounded-lg">
            ◀ Prev
          </button>
          <button onClick={next} className="px-6 py-2 bg-white/10 rounded-lg">
            Next ▶
          </button>
        </div>
      </div>

      {/* ===== FORM ===== */}
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
      </div>
    </div>
  )
}

export default ReviewPage







// 'use client'

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import useReview from '@/useEfect-reuse/reviewUseEffect'

// function ReviewPage() {
//   const DB_URL = process.env.NEXT_PUBLIC_DB_URL

//   const { review: reviewData, loading, error } = useReview()
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const itemsPerSlide = 4

//   const [reviewForm, setReviewForm] = useState({
//     name: '',
//     rating: 5,
//     message: '',
//   })

//   const [submittedReview, setSubmittedReview] = useState(null)

//   // ✅ data আসলে console হবে
//   useEffect(() => {
//     if (reviewData.length > 0) {
//       console.log('All Reviews:', reviewData)
//     }
//   }, [reviewData])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setReviewForm({ ...reviewForm, [name]: value })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     try {
//       const res = await axios.post(
//         `${DB_URL}/review/createReview`,
//         reviewForm,
//         { withCredentials: true }
//       )

//       console.log('Submit response:', res.data)

//       setSubmittedReview(reviewForm)
//       setReviewForm({ name: '', rating: 5, message: '' })
//     } catch (err) {
//       console.error('Failed to submit review:', err)
//     }
//   }

//   const next = () => {
//     setCurrentIndex((prev) =>
//       prev + itemsPerSlide >= reviewData.length ? 0 : prev + itemsPerSlide
//     )
//   }

//   const prev = () => {
//     setCurrentIndex((prev) =>
//       prev - itemsPerSlide < 0
//         ? Math.max(reviewData.length - itemsPerSlide, 0)
//         : prev - itemsPerSlide
//     )
//   }

//   const visibleReviews = reviewData.slice(
//     currentIndex,
//     currentIndex + itemsPerSlide
//   )

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black p-6 text-white">

//       <h1 className="text-3xl font-bold mb-10 text-center">User Reviews</h1>

//       {loading && <p className="text-center">Loading reviews...</p>}
//       {error && <p className="text-center text-red-500">{error}</p>}

//       {!loading && !error && (
//         <>
//           {/* ===== REVIEW CAROUSEL ===== */}
//           <div className="max-w-6xl mx-auto">
//             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
//               {visibleReviews.map((data) => (
//                 <div
//                   key={data._id}
//                   className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 shadow-xl"
//                 >
//                   <h2 className="font-semibold mb-2">{data.name}</h2>
//                   <p className="text-gray-300 mb-3 text-sm">
//                     {data.message || data.reviewMessage}
//                   </p>

//                   <div className="flex gap-1">
//                     {[...Array(5)].map((_, i) => (
//                       <span
//                         key={i}
//                         className={i < data.rating ? 'text-yellow-400' : 'text-gray-600'}
//                       >
//                         ★
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {reviewData.length > itemsPerSlide && (
//               <div className="flex justify-center gap-6 mt-8">
//                 <button onClick={prev} className="px-6 py-2 bg-white/10 rounded-lg">
//                   ◀ Prev
//                 </button>
//                 <button onClick={next} className="px-6 py-2 bg-white/10 rounded-lg">
//                   Next ▶
//                 </button>
//               </div>
//             )}
//           </div>
//         </>
//       )}

//       {/* ===== REVIEW FORM ===== */}
//       <div className="mt-14 max-w-2xl mx-auto">
//         <h2 className="text-xl font-semibold mb-4">Submit Your Review</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             value={reviewForm.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
//             required
//           />

//           <input
//             name="rating"
//             type="number"
//             min="1"
//             max="5"
//             value={reviewForm.rating}
//             onChange={handleChange}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
//           />

//           <textarea
//             name="message"
//             value={reviewForm.message}
//             onChange={handleChange}
//             placeholder="Your Review"
//             rows={4}
//             className="w-full p-3 rounded-lg bg-white/10 border border-white/10"
//             required
//           />

//           <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
//             Submit Review
//           </button>
//         </form>

//         {submittedReview && (
//           <div className="mt-10">
//             <h2 className="text-xl font-semibold mb-4">Your Submitted Review</h2>

//             <div className="p-6 rounded-2xl bg-white/10 border border-white/10">
//               <h3 className="font-semibold">{submittedReview.name}</h3>
//               <p className="text-gray-300 my-2">{submittedReview.message}</p>

//               <div className="flex gap-1">
//                 {[...Array(5)].map((_, i) => (
//                   <span
//                     key={i}
//                     className={i < submittedReview.rating ? 'text-yellow-400' : 'text-gray-600'}
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ReviewPage

