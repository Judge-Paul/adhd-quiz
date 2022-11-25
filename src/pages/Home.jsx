import React, { useState } from 'react'

function Home() {
	return (
		<div className='px-4 md:px-20 lg:px-64 text-center'>
			<h2 className='text-6xl text-blue-500'>What is ADHD</h2>
			<p className='text-xl text-justify'>ADHD which stands for Attention deficit hyperactivity disorder is a mental disorder that affects the way the human brain functions. According to the {" ("}
				<a href='https://www.cdc.gov/ncbddd/adhd/facts.html' className='text-blue-400 hover:text-blue-600'>
					{"Centers for Disease Control and Prevention. 2022"}
				</a>{") "}
				ADHD is one of the most common neurodevelopmental disorders of childhood. It is usually first diagnosed in childhood and often lasts into adulthood. Children with ADHD may have trouble paying attention, controlling impulsive behaviors (may act without thinking about what the result will be), or be overly active.
			</p>
			<h2 className='text-4xl text-blue-500'>Symptoms of ADHD</h2>
			<ul className='list-disc text-xl pl-12 pb-8 text-left'>
				<li>{"Inattentiveness (difficulty concentrating and focusing)"}</li>
				<li>Hyperactivity and impulsiveness</li>
			</ul>
			<p className='text-xl text-justify pb-10'>Showing these Symptoms don't always guarantee a person has ADHD only a trained specialist can properly diagnose it. This test can help you to determine if you need to seek help from a mental health specialist. By taking this quiz you agree to our <a href="/terms" className='text-blue-900 hover:underline'>terms and conditions</a></p>
			<a href='/quiz' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded text-lg'>
				Take Quiz
			</a>
		</div>
	)
}

export default Home