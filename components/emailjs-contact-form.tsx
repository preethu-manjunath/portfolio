"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

// You'll need to install EmailJS: npm install @emailjs/browser
// import emailjs from '@emailjs/browser'

export default function EmailJSContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const formRef = useRef<HTMLFormElement>(null)
  const { toast } = useToast()

  // EmailJS Configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Uncomment when you install EmailJS
      /*
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )

      if (result.text === 'OK') {
        setSubmitStatus('success')
        formRef.current.reset()
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
      } else {
        throw new Error('Failed to send message')
      }
      */

      // Temporary simulation - remove when implementing EmailJS
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSubmitStatus("success")
      formRef.current.reset()
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
    } catch (error) {
      setSubmitStatus("error")
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Name *
            </label>
            <input
              id="from_name"
              name="from_name"
              required
              disabled={isSubmitting}
              className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="Your name"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="from_email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Email *
            </label>
            <input
              id="from_email"
              name="from_email"
              type="email"
              required
              disabled={isSubmitting}
              className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Subject *
          </label>
          <input
            id="subject"
            name="subject"
            required
            disabled={isSubmitting}
            className="flex h-10 w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="What's this about?"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            required
            disabled={isSubmitting}
            rows={5}
            className="flex min-h-[120px] w-full rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-400 dark:placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Tell me about your project, question, or how I can help..."
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 disabled:opacity-50"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : submitStatus === "success" ? (
            <>
              <CheckCircle className="mr-2 h-4 w-4" />
              Message Sent!
            </>
          ) : submitStatus === "error" ? (
            <>
              <AlertCircle className="mr-2 h-4 w-4" />
              Try Again
            </>
          ) : (
            "Send Message"
          )}
        </Button>

        {submitStatus === "success" && (
          <div className="text-center text-sm text-green-600 dark:text-green-400">
            ✅ Thank you! I'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-center text-sm text-red-600 dark:text-red-400">
            ❌ Something went wrong. Please try emailing me directly at preethunath@gmail.com
          </div>
        )}
      </form>
    </div>
  )
}
