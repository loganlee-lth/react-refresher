import { useState, useEffect } from 'react';

export function Child3() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	const [width, setWidth] = useState(window.innerWidth);
	const person = { name };

	useEffect(() => {
		console.log(name);
	}, [name]);

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<br />
			<button onClick={() => setAge((prev) => prev - 1)}>-</button>
			{age}
			<button onClick={() => setAge((prev) => prev + 1)}>+</button>
			<br />
			{`My name is ${name} and I am ${age} years old.`}
			<br />
			{width}
		</div>
	);
}
