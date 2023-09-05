import { useState } from 'react';
import { Counter2 } from './Counter2';

const INITIAL_VALUE = ['A', 'B', 'C'];

function App() {
	const [array, setArray] = useState(INITIAL_VALUE);
	const [value, setValue] = useState('');

	function removeFirstElement() {
		setArray((currentArray) => {
			return currentArray.slice(1);
		});
	}

	function removeSpecificLetter(letter) {
		setArray((currentArray) => {
			return currentArray.filter((el) => el !== letter);
		});
	}

	function addLetterToStart(letter) {
		setArray((currentArray) => {
			return [letter, ...currentArray];
		});
	}

	function addLetterToEnd(letter) {
		setArray((currentArray) => {
			return [...currentArray, letter];
		});
	}

	function clear() {
		setArray([]);
	}

	function reset() {
		setArray(INITIAL_VALUE);
	}

	function updateAToH() {
		setArray((currentArray) => {
			return currentArray.map((el) => {
				if (el === 'A') return 'H';
				return el;
			});
		});
	}

	function addLetterAtIndex(letter, index) {
		setArray((currentArray) => {
			return [
				...currentArray.slice(0, index),
				letter,
				...currentArray.slice(index),
			];
		});
	}

	return (
		<Counter2 />
		// <div>
		// 	<button onClick={removeFirstElement}>Remove First Element</button>
		// 	<br />
		// 	<button onClick={() => removeSpecificLetter('B')}>Remove All Bs</button>
		// 	<br />
		// 	<button onClick={() => addLetterToStart('B')}>Add To Start</button>
		// 	<br />
		// 	<button onClick={() => addLetterToEnd('Z')}>Add To End</button>
		// 	<br />
		// 	<button onClick={clear}>Clear</button>
		// 	<br />
		// 	<button onClick={reset}>Reset</button>
		// 	<br />
		// 	<button onClick={updateAToH}>Update A To H</button>
		// 	<br />
		// 	<button onClick={() => addLetterAtIndex('C', 2)}>Add C At 2</button>
		// 	<br />
		// 	<input
		// 		type="text"
		// 		value={value}
		// 		onChange={(e) => setValue(e.target.value)}
		// 	/>
		// 	<br />
		// 	<button onClick={() => addLetterToStart(value)}>
		// 		Add Value To Array
		// 	</button>
		// 	<br />
		// 	{array.join(', ')}
		// </div>
	);
}

export default App;
