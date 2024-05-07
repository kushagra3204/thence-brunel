import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import HomeQuestionCard from "../components/HomeQuestionCard.jsx";
import HeroImg from "../components/HeroImg.jsx";
import Carosel from "../components/Carosel.jsx";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="flex items-center justify-center flex-col my-20">
				<h1 className="font-cbyf text-green text-4xl">Success stories</h1>
				<h1 className="text-6xl text-center">Every success journey <br/>we’ve encountered.</h1>
			</div>


			<div className='flex items-center '>
				<HeroImg />
				<Carosel />
			</div>
			<HomeQuestionCard />
			<Footer />
		</div>
	);
};

export default Home;