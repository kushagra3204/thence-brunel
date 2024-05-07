import React from 'react';

const Carosel = () => {
	return (
		<div className='mx-20 flex flex-col justify-center items-center'>
			<p className='text-[2.5rem] w-[400px] font-semibold'>Enhance fortune 50 company’s insights teams research
				capabilities</p>

			<div className='flex gap-4 my-20'>
				<div className="w-3 h-3 bg-green rounded-full"></div>
				<div className="w-3 h-3 bg-[#E4E3E3] rounded-full"></div>
				<div className="w-3 h-3 bg-[#E4E3E3] rounded-full"></div>
			</div>

			<button className='px-10 py-8 justify-center bg-black text-white rounded-full flex gap-4 hover:bg-[#4E4E4E]'>Explore More
				<svg width="24" height="24"
				    viewBox="0 0 24 24"
					fill="none"
				    xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16.1716 10.9999L4 10.9999L4 12.9999L16.1716 12.9999L10.8076 18.3638L12.2218 19.778L20 11.9999L12.2218 4.22168L10.8076 5.63589L16.1716 10.9999Z"
						fill="white"/>
				</svg>
			</button>
		</div>
	);
};

export default Carosel;