import React, { useEffect, useState } from "react";
import axios from "axios";
import quoteRight from '../quote1.svg'
import quoteLeft from '../quote2.svg'
export default function Home() {

	const [quotes, setquotes] = useState([]);
	useEffect(() => {
		axios.get('http://localhost:8000/rand')
			.then(response => {
				setquotes(response.data.quote);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);
	const HandleClick = () => {
		axios.get('http://localhost:8000/rand')
			.then(response => {
				setquotes(response.data.quote);
			})
			.catch(error => {
				console.log(error);
			});

	}
	const quote = quotes.quoteText
	const quoteAuthor = quotes.quoteAuthor

	return <div>
		<div className="quoteLogo">Quote</div>
		<div className="content">

			<div className="quote">
				<span className="quoteSymboll">
					<img src={quoteRight} alt="" /> {quote} <img src={quoteLeft} alt="" />
				</span>
			</div>
			<div className="quoteSymboll"></div>
			<div className="quoteAuthor"> - {quoteAuthor}</div>
			<button type="button" className="quoteButton" onClick={() => HandleClick()}>GET QUOTE</button>
		</div>
	</div>;
}
