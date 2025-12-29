'use client'

import { useEffect, useState } from "react"
import axios from "axios"
import DB_URL from "@/URL_DATABASE/db_url"

function useEffectBackendReuse() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          `${DB_URL}/user/me`,
          { withCredentials: true }
        )
        setUser(res.data)
      } catch (err) {
        setError("Unauthorized")
      } finally {
        setLoading(false)
      }
    }

    fetchUser()
  }, [])

  return { user, loading, error }
}

export default useEffectBackendReuse
