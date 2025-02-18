"use client"

import React, { useEffect, useState } from "react"

export default function BrowserFeature() {
  const [title, setTitle] = useState("")

  useEffect(() => {
    // This code only runs in the browser, so we can safely use `document`
    setTitle(document.title)
  }, [])

  return (
    <div className="p-4 bg-gray-50 rounded-md">
      <p className="text-sm text-gray-600">
        The current document title is: <strong>{title}</strong>
      </p>
    </div>
  )
}
