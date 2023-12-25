import { useState } from "react"
import React from 'react'
import '../../Components-Assets/Main.css'
import { BiSolidQuoteLeft,BiSolidQuoteRight } from "react-icons/bi";

export default function Center() {

    
  const [quote, setquote] = useState({
    text:"Be Yourself; everyone else is already taken",
    author:"Oscar Wilde"
  })
  return (
    <div className='container'>
    <div className="Sub-container">
      <div className='main-quote'><BiSolidQuoteLeft className="qu"/>{quote.text}<BiSolidQuoteRight className="qu"/></div>
      <div className='quote-author'>
      <div>
      <span>{quote.author}</span>
      </div>
      </div>
      
    </div>
      
      <div className="button1">
        <button><a href="/">Get Quote</a></button>
      </div>
    </div>
  )
}
