export function CheckBox({ isChecked, children }) {
	return (
		<div>
			<input type="checkbox" defaultChecked={isChecked} />
			<label>{children}</label>
		</div>
	);
}
