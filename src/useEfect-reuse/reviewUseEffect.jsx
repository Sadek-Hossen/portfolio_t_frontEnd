
// import { useEffect, useState } from "react"
// import axios from "axios"
// import DB_URL from "@/URL_DATABASE/db_url"

// function useReview() {
//   const [review, setReview] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)

//   useEffect(() => {
//     const fetchReview = async () => {
//       try {
//         const res = await axios.get(
//           `${DB_URL}/review/getReviews`,
//           { withCredentials: true }
//         )

//         setReview(res.data.review) 
//       } catch (err) {
//         setError("Failed to fetch review")
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchReview()
//   }, [])

//   return { review, loading, error }
// }

// export default useReview


//   const getReviews = async () => {
//   try {
//     const res = await fetch("https://portfolio-t-backend.vercel.app/api/review/getReviews")
//     const data = await res.json()
//     console.log("this is data", data)
//   } catch (error) {
//     console.error(error)
//   }
// }

// getReviews()
// const useReview = getReviews()
// export default useReview


'use client'

import { useEffect, useState } from "react"

const useReview = () => {
  const [review, setReview] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getReviews = async () => {
      try {
        const res = await fetch("https://portfolio-t-backend.vercel.app/api/review/getReviews")
        const data = await res.json()
        setReview(data.review || data) // backend অনুযায়ী
      } catch (err) {
        setError("Failed to load reviews")
      } finally {
        setLoading(false)
      }
    }

    getReviews()
  }, [])

  return { review, loading, error }
}

export default useReview
