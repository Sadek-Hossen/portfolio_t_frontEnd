'use client'
import { useEffect, useState } from "react"
import axios from "axios"

function useReview() {
  const DB_URL = process.env.NEXT_PUBLIC_DB_URL

  const [review, setReview] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await axios.get(
          `${DB_URL}/review/getReviews`
        )

        console.log("FULL RESPONSE:", res.data)

        // ✅ FIX
        setReview(res.data.review)

      } catch (err) {
        setError("Failed to fetch review")
      } finally {
        setLoading(false)
      }
    }

    fetchReview()
  }, [DB_URL])

  return { review, loading, error }
}

export default useReview
