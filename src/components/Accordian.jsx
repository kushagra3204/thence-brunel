import {useState} from "react";


const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="w-full mt-10">
			{items.map((item, index) => (
				<AccordionItem
					key={index}
					question={item.question}
					answer={item.answer}
					isActive={index === activeIndex}
					onToggle={() => handleToggle(index)}
				/>
			))}
		</div>
	);
};

const AccordionItem = ({ question, answer, isActive, onToggle }) => {
	return (
		<div className="border-b border-[#D7D7D7] border-gray-300">
			<button
				className="flex justify-between items-center w-full py-4 px-6 text-left"
				onClick={onToggle}
			>
				<span className="font-semibold text-[#1C1C1C] text-xl w-3/5 my-6">{question}</span>
				<span className="text-2xl">{isActive ? '-' : '+'}</span>
			</button>
			{isActive && (
				<div className="pb-4 px-6">
					<p className="text-gray-700">{answer}</p>
				</div>
			)}
		</div>
	);
};

export default Accordion;