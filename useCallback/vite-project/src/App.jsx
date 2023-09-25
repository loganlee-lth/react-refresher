import { useState, useCallback, useEffect } from 'react';

function App() {
	const [name, setName] = useState('Logging');

	const [count, setCount] = useState(0);

	const logName = useCallback(() => {
		console.log(name);
	}, []);

	const addCount = useCallback(() => {
		console.log(count);
		setCount((prev) => prev + 1);
	}, []);

	useEffect(() => {
		// console.log(name);
		logName();
	}, [logName]);

	return (
		<div>
			<h1>Input</h1>
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<button onClick={logName}>Console Log</button>
			<h2>Count: {count}</h2>
			<button onClick={() => setCount((prev) => prev + 1)}>+</button>
			<button onClick={addCount}>New button</button>
		</div>
	);
}

export default App;
