"use client"

import type React from "react"

import type { FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon } from "lucide-react"

interface ChatInputProps {
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  isLoading: boolean
}

export default function ChatInput({ input, handleInputChange, handleSubmit, isLoading }: ChatInputProps) {
  // Handle Ctrl+Enter or Cmd+Enter to submit
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
      if (input.trim()) {
        const form = e.currentTarget.form
        if (form) {
          e.preventDefault()
          form.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }))
        }
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-end gap-2">
      <Textarea
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Ask me anything..."
        className="min-h-[60px] resize-none"
        disabled={isLoading}
      />
      <Button type="submit" size="icon" disabled={isLoading || !input.trim()}>
        <SendIcon className="h-5 w-5" />
        <span className="sr-only">Send message</span>
      </Button>
    </form>
  )
}
