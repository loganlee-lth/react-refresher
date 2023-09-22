import { useState } from 'react';

const URLS = {
	users: 1,
	posts: 2,
	comments: 3,
};

function App() {
	const [url, setUrl] = useState(URLS.users);

	return (
		<>
			<div>
				<label>
					<input
						type="radio"
						checked={url === URLS.users}
						onChange={() => setUrl(URLS.users)}
					/>
					Users
				</label>
				<label>
					<input
						type="radio"
						checked={url === URLS.posts}
						onChange={() => setUrl(URLS.posts)}
					/>
					Posts
				</label>
				<label>
					<input
						type="radio"
						checked={url === URLS.comments}
						onChange={() => setUrl(URLS.comments)}
					/>
					Comments
				</label>
			</div>
		</>
	);
}

export default App;
