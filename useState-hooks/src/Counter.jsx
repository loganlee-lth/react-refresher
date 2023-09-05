import { useState } from 'react';
export function Counter() {
	const [counter, setCounter] = useState(0);
	function handleClick() {
		setCounter((previous) => {
			return previous + 1;
		});
	}

	// return <div onClick={handleClick}>{counter}</div>;
	return <div onClick={() => setCounter((prev) => prev + 1)}>{counter}</div>;
}
