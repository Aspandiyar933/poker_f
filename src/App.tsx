import { io } from "socket.io-client"
import Hero from "./components/hero"

const socket = io('http://localhost:3001');
socket.on("hello", (arg) => {
  console.log(arg)
});
socket.emit('howdy', 'stranger');

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
    </main>
  )
}