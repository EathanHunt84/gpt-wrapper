import type { Message } from "ai"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <div className={cn("flex gap-3 max-w-[80%]", isUser ? "flex-row-reverse" : "flex-row")}>
        <Avatar className="h-8 w-8">
          {isUser ? (
            <>
              <AvatarFallback>U</AvatarFallback>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
            </>
          ) : (
            <>
              <AvatarFallback>AI</AvatarFallback>
              <AvatarImage src="/placeholder.svg?height=32&width=32" />
            </>
          )}
        </Avatar>

        <Card className={cn(isUser ? "bg-primary text-primary-foreground" : "bg-muted")}>
          <CardContent className="p-3">
            <div className="whitespace-pre-wrap">
              {message.parts.map((part, i) => {
                if (part.type === "text") {
                  return <div key={i}>{part.text}</div>
                }
                return null
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
