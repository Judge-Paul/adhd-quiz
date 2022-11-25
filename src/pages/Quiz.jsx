import React, { useState } from 'react'
import './App.css'
import questions from '../questions.js'

function Quiz() {

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (howOften) => {
		if (howOften === 'Often' || howOften === 'Yes') {
			setScore(score + 1);
		} else if (howOften === 'Rarely') {
			setScore(score + 0.25);
		} else if (howOften === 'Sometimes') {
			setScore(score + 0.5)
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='text-center bg-blue-500 flex h-screen'>
			<div className='m-auto p-10 lg:p-14 lg:mx-48 bg-blue-400 rounded w-[70%]'>
				{showScore ? (
					<div>
						<p className='text-5xl text-white'>There is a {((score/questions.length) * 100).toFixed(2)}% chance you have ADHD</p>
					</div>
				) : (
					<>
						<div className='text-3xl text-blue-900'>
							<div className='text-5xl text-blue-200'>
								<span className=''>Question {currentQuestion + 1}</span>/{questions.length}
							</div>
							<div className=''>{questions[currentQuestion].questionText}</div>
						</div>
						<div className=''>
							{questions[currentQuestion].answerOptions.map((answerOption) => (
								<button onClick={() => handleAnswerOptionClick(answerOption.howOften)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-2 mt-10 rounded'>{answerOption.answerText}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default Quiz
