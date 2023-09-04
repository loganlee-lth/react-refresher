import { useState } from 'react';

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
		setArray((prev) => {
			return prev.filter((el) => el !== letter);
		});
	}

	function addLetterToStart(letter) {
		setArray((prev) => {
			return [letter, ...prev];
		});
	}

	function addLetterToEnd(letter) {
		setArray((prev) => {
			return [...prev, letter];
		});
	}

	function clear() {
		setArray([]);
	}

	function reset() {
		setArray(INITIAL_VALUE);
	}

	function updateAToH() {
		setArray((prev) => {
			return prev.map((el) => {
				if (el === 'A') return 'H';
				return el;
			});
		});
	}

	function addLetterAtIndex(letter, index) {
		setArray((prev) => {
			return [...prev.slice(0, index), letter, ...prev.slice(index)];
		});
	}

	return (
		<div>
			{array.join(', ')}
			<br />
			<button onClick={removeFirstElement}>Remove First Element</button>
			<br />
			<button onClick={() => removeSpecificLetter('B')}>Remove All Bs</button>
			<br />
			<button onClick={() => addLetterToStart('B')}>Add to Start</button>
			<br />
			<button onClick={() => addLetterToEnd('Z')}>Add to End</button>
			<br />
			<button onClick={clear}>Clear</button>
			<br />
			<button onClick={reset}>Reset</button>
			<br />
			<button onClick={updateAToH}>updateAToH</button>
			<br />
			<button onClick={() => addLetterAtIndex('C', 2)}>Add C At 2</button>
			<br />
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			<br />
			<button type="button" onClick={() => addLetterToStart(value)}>
				Add Value To Array
			</button>
		</div>
	);
}

export default App;
