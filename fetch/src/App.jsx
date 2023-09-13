import { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();

	useEffect(() => {
		console.log('setLoading1');
		setLoading(true);
		console.log('setError1');
		setError(undefined);
		const controller = new AbortController();

		fetch('https://jsonplaceholder.typicode.com/users', {
			signal: controller.signal,
		})
			.then((res) => {
				if (res.status === 200) {
					return res.json();
				} else {
					return Promise.reject(res);
				}
			})
			.then((data) => {
				setUsers(data);
				console.log('setUsers');
			})
			.catch((e) => {
				if (e?.name === 'AbortError') return;
				setError(e);
			})
			.finally(() => {
				setLoading(false);
				console.log('setLoading');
			});

		return () => {
			controller.abort();
		};
	}, []);

	console.log(users); // 1

	let jsx;
	if (loading) {
		jsx = <h2>Loading...</h2>;
	} else if (error != null) {
		jsx = <h2>Error!</h2>;
	} else {
		jsx = JSON.stringify(users);
	}

	return (
		<div>
			<div>{jsx}</div>
		</div>
	);
}
export default App;
