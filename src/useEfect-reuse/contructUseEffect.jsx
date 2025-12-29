'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import DB_URL from "@/URL_DATABASE/db_url"

function useContructs() {
  const [contructs, setContructs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchContructs = async () => {
      try {
        const res = await axios.get(
          `${DB_URL}/contruct/getAllContructs`,
          { withCredentials: true }
        )

        setContructs(res.data.contructs) // 👈 important
      } catch (err) {
        setError("Failed to fetch contructs")
      } finally {
        setLoading(false)
      }
    }

    fetchContructs()
  }, [])

  return { contructs, loading, error }
}

export default useContructs
