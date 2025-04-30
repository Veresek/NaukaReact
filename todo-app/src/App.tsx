import { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import wavingHand from './assets/wavingHand.png';
import profileIcon from './assets/profile.svg';
export default function App() {
	const [userName, setUserName] = useState('Veresek');
	return (
		<div className='flex'>
			<Sidebar />
			<main className='bg-main-section w-full h-screen p-8'>
				<div className='rounded-2xl bg-linear-to-br from-start-gradient to-end-gradient flex p-6 gap-2 items-center justify-between'>
					<div className='flex items-center'>
						<img
							src={wavingHand}
							alt='waving hand'
							className='h-8 w-8 mx-[9px] my-4.5'
						/>
						<h1 className='text-white text-[32px] font-bold'>
							Witaj, {userName}
						</h1>
					</div>
					<img
						src={profileIcon}
						alt='profile Icon'
						className='bg-profile-icon-background p-[15px] rounded-xl'
					/>
				</div>
			</main>
		</div>
	);
}
