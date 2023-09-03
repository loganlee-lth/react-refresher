import { NameFunc } from './NameFunc';
import user from './user.json';
import img from './025.png';
import './styles.css';

function App() {
	return (
		<>
			<NameFunc name="Hello" age={25} isProgrammer />
			<NameFunc name="World" />
			<NameFunc name={user.name} age={user.age} />
			<h1>{JSON.stringify(user)}</h1>
			<img src={img} />
		</>
	);
}

export default App;
