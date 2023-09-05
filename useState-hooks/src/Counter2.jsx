import { useState } from 'react';

export function Counter2() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);

	function decreaseAge() {
		setAge((prev) => {
			return prev - 1;
		});
	}

	function increaseAge() {
		setAge((prev) => {
			return prev + 1;
		});
	}

	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<br />
			<button type="button" onClick={decreaseAge}>
				-
			</button>
			{age}
			<button type="button" onClick={increaseAge}>
				+
			</button>
			<br />
			<p>{`My name is ${name} and I am ${age} years old`}</p>
		</div>
	);
}
