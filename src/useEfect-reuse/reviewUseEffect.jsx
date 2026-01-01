
import { useEffect, useState } from "react"
import axios from "axios"
import DB_URL from "@/URL_DATABASE/db_url"

function useReview() {
  const [review, setReview] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const res = await axios.get(
          `${DB_URL}/review/getReviews`,
          { withCredentials: true }
        )

        setReview(res.data.review) 
      } catch (err) {
        setError("Failed to fetch review")
      } finally {
        setLoading(false)
      }
    }

    fetchReview()
  }, [])

  return { review, loading, error }
}

export default useReview
