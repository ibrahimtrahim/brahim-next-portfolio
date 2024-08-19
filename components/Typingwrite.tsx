"use client";
import Typewriter from 'typewriter-effect';

const Typingwrite = () => {
  return (
    <Typewriter
      options={{
      loop: true,
      autoStart: true,
      strings: ["Frontend Developer", "Freelancer", "Coder"],
      }}
    />
  )
}

export default Typingwrite