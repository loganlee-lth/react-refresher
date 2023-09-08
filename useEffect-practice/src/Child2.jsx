import { useEffect, useState } from 'react';

export function Child2() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);
	console.log('Rendered');

	useEffect(() => {
		console.log('Name or age was changed', name);
	}, [name]);

	return (
		<div>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<br />
			<br />
			<button onClick={() => setAge((currentAge) => currentAge - 1)}>-</button>
			{age}
			<button onClick={() => setAge((currentAge) => currentAge + 1)}>+</button>
			<br />
			<br />
			My name is {name} and I am {age} years old.
		</div>
	);
}
