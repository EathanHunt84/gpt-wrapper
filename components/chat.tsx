"use client"

import { useChat } from "@ai-sdk/react"
import { useEffect, useRef } from "react"
import ChatMessage from "./chat-message"
import ChatInput from "./chat-input"
import ClearChatButton from "./clear-chat-button"
import { Loader2 } from "lucide-react"

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, setMessages } = useChat()
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleClearChat = () => {
    setMessages([])
  }

  return (
    <div className="flex flex-col w-full h-[80vh] bg-card rounded-lg shadow-lg border">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>Ask me anything to get started!</p>
          </div>
        ) : (
          messages.map((message) => <ChatMessage key={message.id} message={message} />)
        )}
        {isLoading && (
          <div className="flex justify-center py-2">
            <Loader2 className="h-6 w-6 animate-spin text-primary" />
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <div className="flex justify-between items-center mb-2">
          <ClearChatButton onClear={handleClearChat} disabled={messages.length === 0} />
        </div>
        <ChatInput
          input={input}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          isLoading={isLoading}
        />
      </div>
    </div>
  )
}
