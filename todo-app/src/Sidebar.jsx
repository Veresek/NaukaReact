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
		<div className='px-3 pt-8 pb-5'>
			<div className='relative '>
				<input
					type='text'
					placeholder='Szukaj'
					className='block bg-search-background placeholder-white/60 text-white px-2 py-4 pl-10 text-[16px] rounded-xl'
				/>
				<img
					src={SearchBtn}
					alt='search icon'
					className='absolute bottom-4.5 left-[12px]'
				/>
			</div>
			<p className='text-white text-xl'>Kategorie</p>
			<Categories catNames={catNames} />
		</div>
	);
}
