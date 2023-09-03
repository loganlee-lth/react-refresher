import { TodoList } from './TodoList';
import { NameFunc } from './NameFunc';
import { CheckBox } from './CheckBox';

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
			<NameFunc name="Bob" />
			<CheckBox isChecked={true} labelText={'label Text'}>
				What is this
			</CheckBox>
		</div>
	);
}

export default App;
