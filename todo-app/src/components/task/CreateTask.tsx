import { useState } from 'react';
import highImportance from '@assets/highImportance.png';
import midImportance from '@assets/midImportance.png';
import lowImportance from '@assets/lowImportance.png';
import tickIcon from '@assets/tickIcon.png';
import closeIcon from '@assets/closeIcon.png';

function ImportanceTab({
	imgSrc,
	label,
	id,
	activeTab,
	setActiveTab,
}: {
	imgSrc: string;
	label: string;
	id: string;
	activeTab: string;
	setActiveTab: (isActive: string) => void;
}) {
	return (
		<button
			className={
				'flex items-center px-3 py-3 rounded-xl cursor-pointer ' +
				(activeTab === id ? 'bg-main-section' : '')
			}
			onClick={() => setActiveTab(id)}
			id={id}>
			<img src={imgSrc} className='mr-2' />
			<p>{label}</p>
		</button>
	);
}

export default function CreateTask({
	setIsClicked,
}: {
	setIsClicked: Function;
}) {
	const [activeTab, setActiveTab] = useState('low');
	return (
		<div className='absolute top-0 left-0 w-[100vw] h-[100vh] bg-black/50 backdrop-blur-sm'>
			<div className='absolute top-[50%] left-[50%] bg-creating-task-background -translate-1/2 text-white py-8 px-6 rounded-2xl border-task-border border min-w-[450px]'>
				<h2 className='text-2xl mb-10 font-semibold'>Dodaj nowe zadanie</h2>
				<img
					src={closeIcon}
					alt='close button'
					className='cursor-pointer absolute top-8
					right-6'
					onClick={() => {
						setIsClicked(false);
					}}
				/>
				<div className='mb-6'>
					<p className='mb-2 px-2'>Nazwa</p>
					<input
						type='text'
						placeholder='Podaj nazwę zadania'
						className='w-full py-4 px-6 rounded-xl bg-task-background'
					/>
				</div>
				<div className='mb-6'>
					<p className='mb-2 px-2'>Opis</p>
					<textarea
						placeholder='Podaj opis zadania'
						className='px-6 py-4 w-full bg-task-background rounded-xl h-[104px] break-all resize-none'
					/>
				</div>
				<div className='inline-block mb-10'>
					<p className='mb-2 px-2'>Priorytet</p>
					<div className='flex bg-task-background py-1 px-1 rounded-2xl'>
						<ImportanceTab
							imgSrc={lowImportance}
							label='Niski'
							id='low'
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<ImportanceTab
							imgSrc={midImportance}
							label='Średni'
							id='mid'
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
						<ImportanceTab
							imgSrc={highImportance}
							label='Wysoki'
							id='high'
							activeTab={activeTab}
							setActiveTab={setActiveTab}
						/>
					</div>
				</div>
				<div className='flex content-end w-full justify-end'>
					<button
						className='bg-task-background py-4 px-6 rounded-xl mr-[12px] cursor-pointer'
						onClick={() => {
							setIsClicked(false);
						}}>
						Anuluj
					</button>
					<button className='py-4 px-6 bg-profile-icon-background flex items-center  rounded-xl cursor-pointer'>
						<img src={tickIcon} className='w-[18px] h-[13px mr-2.5' />
						Dodaj zadanie
					</button>
				</div>
			</div>
		</div>
	);
}
