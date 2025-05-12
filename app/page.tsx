import Chat from "@/components/chat"
import { ModeToggle } from "@/components/mode-toggle"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 w-full max-w-3xl flex flex-col items-center justify-between">
        <div className="w-full flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Personal AI Assistant</h1>
          <ModeToggle />
        </div>
        <Chat />
      </div>
    </main>
  )
}
