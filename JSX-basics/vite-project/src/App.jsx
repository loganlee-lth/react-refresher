import { TodoList } from './TodoList';

function App() {
	// const myCustomLabel = <label htmlFor="inputId">Blah</label>;
	return (
		// <div
		// 	className="large"
		// 	id="largeDiv"
		// 	style={{ color: 'red', fontSize: '5rem' }}
		// >
		// 	<label htmlFor="inputId">Label</label>
		// 	<input id="inputId" type="number" value={3}></input>
		// 	{myCustomLabel}
		// </div>
		<div>
			<h1>Todo List</h1>
			<TodoList />
		</div>
	);
}

export default App;
