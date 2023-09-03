export function NameFunc({ name, age = 30, isProgrammer }) {
	console.log(isProgrammer);
	return <div>{`${name}: ${age}`}</div>;
}
