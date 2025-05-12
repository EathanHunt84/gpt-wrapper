"use client"

import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"

interface ClearChatButtonProps {
  onClear: () => void
  disabled: boolean
}

export default function ClearChatButton({ onClear, disabled }: ClearChatButtonProps) {
  return (
    <Button variant="ghost" size="sm" onClick={onClear} disabled={disabled} className="text-muted-foreground">
      <Trash2 className="h-4 w-4 mr-2" />
      Clear Chat
    </Button>
  )
}
