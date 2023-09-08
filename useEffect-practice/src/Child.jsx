import { useState } from 'react';

export function Child() {
	const [name, setName] = useState('');
	console.log(name);

	return (
		<div className="className">
			<input value={name} onChange={(e) => setName(e.target.value)} />
			<br />
			My name is {name}.
		</div>
	);
}
