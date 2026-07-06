import type { ReactNode } from "react"

interface WelcomeProps{
    children: ReactNode
    message: string
}

const Welcome = ({children, message}: WelcomeProps) => {
  return (
    <>
    <div className="welcome">
      {"Good morning, " + children + "!"} 
    </div>
    <div className="message">{message}</div>
    </>
  )
}

export default Welcome
