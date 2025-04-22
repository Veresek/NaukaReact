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
			<div className='relative'>
				<input
					type='text'
					placeholder='Szukaj'
					className='block bg-search-background placeholder-white/60 text-white px-6 py-4 text-[14.5px]'
				/>
				<img src={SearchBtn} alt='search icon' className='absolute bottom-4' />
			</div>
			<Categories catNames={catNames} />
		</>
	);
}
