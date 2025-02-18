"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle"|"loading"|"success"|"error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        // e.g., 400 or 500
        const errorData = await res.json()
        throw new Error(errorData.error || "Failed to submit")
      }

      // success
      setStatus("success")
      // Reset form
      setFormData({ name: "", email: "", message: "" })
    } catch (err: unknown) {
      setStatus("error")
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong")
    }
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-blue-800 text-center mb-12">
          Contact Us
        </h1>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Send us a message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full"
                  rows={4}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
            </form>

            {status === "success" && (
              <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600">
                {errorMessage || "Error submitting form"}
              </p>
            )}
          </div>

          {/* Right: Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-blue-700 mb-6">
              Contact Information
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="text-blue-600 mr-3" />
                <span>123 Business Street, City, Country</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-600 mr-3" />
                <span>+1 (123) 456-7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-600 mr-3" />
                <span>contact@example.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
