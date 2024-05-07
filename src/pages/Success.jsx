import React,{useState} from 'react';
import Navbar from "../components/Navbar.jsx";


const Success = () => {
	const [count, setCount] = useState(5);
	setTimeout(() => {
		setCount(count - 1);
	}, 1000);

	if(count === 0) {
		window.location.href = '/';
	}

	return (
		<>
			<Navbar />

			<div className="flex items-center justify-center flex-col mx-auto w-[718px] mt-16">
				<div className="mb-10">
					<svg width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M34.0014 67.3219C15.5919 67.3219 0.668091 52.3979 0.668091 33.9886C0.668091 15.5791 15.5919 0.655273 34.0014 0.655273C52.4107 0.655273 67.3347 15.5791 67.3347 33.9886C67.3347 52.3979 52.4107 67.3219 34.0014 67.3219ZM30.6768 47.3219L54.2471 23.7517L49.5331 19.0377L30.6768 37.8939L21.2488 28.4656L16.5347 33.1799L30.6768 47.3219Z"
							fill="#28B246"/>
					</svg>
				</div>
				<h1 className="font-cbyf text-green text-4xl my-4">Success Submitted</h1>
				<h1 className="text-6xl font-semibold">Congratulations</h1>
				<p className="text-[1.70rem] font-medium text-gray text-center my-5">Your request has been successfully
					submitted to us. We will validate your information and reach out to your shortly with updates</p>
				<p className='text-xl text-gray bottom-0 m-4'>Redirecting you to Homepage in <span className='text-black font-bold'>{count} Seconds</span></p>
			</div>


		</>
	);
};

export default Success;