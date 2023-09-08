import { useState } from 'react';
import { Child } from './Child';
import { Child3 } from './Child3';

function App() {
	// const [isShown, setIsShown] = useState(true);

	// const childComponent = isShown ? <Child /> : null;
	// function handleClick() {
	// 	setIsShown((prev) => {
	// 		return !prev;
	// 	});
	// }

	return (
		<Child3 />
		// 	<div>
		// 		<button
		// 			style={{ display: 'block', marginBottm: '1rem' }}
		// 			onClick={handleClick}
		// 		>
		// 			Show/Hide
		// 		</button>
		// 		<br />
		// 		{childComponent}
		// 	</div>
		// );
	);
}

export default App;
