import { useState } from 'react';
import SearchBtn from './assets/search.svg';
import './App.css';

function CategoryBtn({ catName }) {
	return <button className='text-white block'>{catName}</button>;
}
function Categories({ catNames }) {
	return (
		<>
			{catNames.map((catName, index) => {
				return <CategoryBtn key={index} catName={catName} />;
			})}
		</>
	);
}
export default function Sidebar() {
	const [catNames, setCatNames] = useState(['Szkoła', 'Praca', 'Dom']);
	return (
		<>
			<input type='text' />
			<img src={SearchBtn} alt='' />
			<Categories catNames={catNames} />
		</>
	);
}
