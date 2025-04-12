import { useState } from 'react';

function MyButton() {
	const [count, setCount] = useState(10);
	const essa = 3;
	function handleClick() {
		setCount(count + essa);
	}
	return (
		<>
			<button onClick={handleClick}>Clicked {count}</button>
		</>
	);
}

export default function App() {
	return (
		<>
			<MyButton />
			<br />
			<MyButton />
		</>
	);
}
