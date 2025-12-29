'use client'
import React, { useState } from 'react'
import useContructs from '@/useEfect-reuse/contructUseEffect'

function MessagePage() {
  const { contructs, loading, error } = useContructs()
  const [selectedMessage, setSelectedMessage] = useState(null)

  if (loading) return <p className="text-white p-6">Loading...</p>
  if (error) return <p className="text-red-500 p-6">{error}</p>

  return (
    <div className="p-6 min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">
      
      {/* ===== PAGE TITLE ===== */}
      <h1 className="text-3xl font-bold mb-6">
        Contact Messages
      </h1>

      {/* ===== TABLE ===== */}
      <div className="overflow-x-auto rounded-2xl shadow-xl border border-white/10">
        <table className="min-w-full bg-black/40 backdrop-blur-lg">
          
          <thead className="bg-white/10 text-sm uppercase">
            <tr>
              <th className="px-4 py-4 text-left">First Name</th>
              <th className="px-4 py-4 text-left">Last Name</th>
              <th className="px-4 py-4 text-left">Email</th>
              <th className="px-4 py-4 text-left">Phone</th>
              <th className="px-4 py-4 text-left">Message</th>
            </tr>
          </thead>

          <tbody>
            {contructs.map((item) => (
              <tr
                key={item._id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-4 py-3">{item.firstName}</td>
                <td className="px-4 py-3">{item.lastName}</td>
                <td className="px-4 py-3 text-blue-400">
                  {item.email}
                </td>
                <td className="px-4 py-3">{item.phone}</td>

                {/* MESSAGE BUTTON */}
                <td className="px-4 py-3">
                  <button
                    onClick={() => setSelectedMessage(item.message)}
                    className="text-cyan-400 hover:underline"
                  >
                    View Message
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* ===== MODAL ===== */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-zinc-900 rounded-2xl p-6 max-w-xl w-full relative shadow-2xl">
            
            <button
              onClick={() => setSelectedMessage(null)}
              className="absolute top-3 right-4 text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold mb-4">
              Full Message
            </h2>

            <div className="max-h-[60vh] overflow-y-auto pr-2">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {selectedMessage}
              </p>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default MessagePage
