import { useState } from 'react';
import wavingHand from '../assets/wavingHand.png';
import profileIcon from '../assets/profile.svg';
import PlusBtn from '../assets/plus.svg';
import moreBtn from '../assets/more.png';
import highImportance from '../assets/highImportance.png';
import midImportance from '../assets/midImportance.png';
import lowImportance from '../assets/lowImportance.png';
import todoTaskIcon from '../assets/todoTaskIcon.png';
import doneTaskIcon from '../assets/doneTaskIcon.png';

function WelcomeHeader() {
	const [userName, setUserName] = useState('Veresek');
	return (
		<div className='rounded-2xl bg-linear-to-br from-start-gradient to-end-gradient flex p-6 gap-2 items-center justify-between'>
			<div className='flex items-center'>
				<img
					src={wavingHand}
					alt='waving hand'
					className='h-8 w-8 mx-[9px] my-4.5'
				/>
				<h1 className='text-white text-[32px] font-bold'>Witaj, {userName}</h1>
			</div>
			<img
				src={profileIcon}
				alt='profile Icon'
				className='bg-profile-icon-background p-[15px] rounded-xl'
			/>
		</div>
	);
}
function DashboardText() {
	return (
		<div className='flex items-center justify-between my-10'>
			<div>
				<h2 className='text-white text-2xl font-semibold'>Twoje zadania</h2>
				<p className='text-secondary-text'>
					Poniżej znajdziesz wszystkie swoje zadania, którymi możesz zarządzać
				</p>
			</div>
			<button className='flex bg-profile-icon-background px-6 py-4 rounded-xl text-white items-center'>
				<img src={PlusBtn} alt='Plus' className='mr-2.5 w-[15px] h-[15px]' />
				Dodaj zadanie
			</button>
		</div>
	);
}
function Task({
	taskName,
	taskDesc,
	taskCategory,
	taskStatus,
	taskImportance,
}: {
	taskName: string;
	taskDesc: string;
	taskCategory: string;
	taskStatus: number;
	taskImportance: string;
}) {
	return (
		<div className='flex text-white w-full justify-between bg-task-background px-6 py-4.5 rounded-2xl mb-3 border-task-border border'>
			<div>
				<h3 className='font-bold'>{taskName}</h3>
				<p className='text-sm'>{taskDesc}</p>
			</div>
			<div className='flex items-center'>
				<p className='px-4 pt-2.5 pb-3 rounded-xl mr-3 border-task-category-border border'>
					{taskCategory}
				</p>
				<select className='mr-3 rounded-xl border-task-category-border border pl-4 pt-2.5 pb-3'>
					<option value='high'>
						<img src={highImportance} alt='high importance task icon' />
						Wysoki
					</option>
					<option value='mid'>
						<img src={midImportance} alt='mid importance task icon' />
						Średni
					</option>
					<option value='low'>
						<img src={lowImportance} alt='low importance task icon' />
						Niski
					</option>
				</select>
				<select className='mr-3 rounded-xl border-task-category-border border pl-4 pt-2.5 pb-3'>
					<option value='completed'>
						<img src={doneTaskIcon} alt='green circle' />
						Wykonane
					</option>
					<option value='todo'>
						<img src={todoTaskIcon} alt='yellow circle' />
						Do zrobienia
					</option>
				</select>
				<img
					src={moreBtn}
					alt='more info'
					className='border-task-category-border border rounded-xl py-3 px-[17px]'
				/>
			</div>
		</div>
	);
}
function TaskList() {
	let tasks = [
		{
			name: 'Zadanie 1',
			desc: 'Opis zadania pierwszego',
			category: 'Szkoła',
			status: 0,
			importance: 'high',
		},
		{
			name: 'Zadanie 2',
			desc: 'Opis zadania drugiego',
			category: 'Praca',
			status: 1,
			importance: 'Low',
		},
	];
	return (
		<div className='w-full'>
			{tasks.map(task => {
				return (
					<Task
						taskName={task.name}
						taskDesc={task.desc}
						taskCategory={task.category}
						taskStatus={task.status}
						taskImportance={task.importance}
					/>
				);
			})}
		</div>
	);
}

export default function Dashboard() {
	return (
		<main className='bg-main-section p-8'>
			<WelcomeHeader />
			<DashboardText />
			<TaskList />
		</main>
	);
}
