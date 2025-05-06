import highImportance from '@assets/highImportance.png';
import midImportance from '@assets/midImportance.png';
import lowImportance from '@assets/lowImportance.png';
import todoTaskIcon from '@assets/todoTaskIcon.png';
import doneTaskIcon from '@assets/doneTaskIcon.png';
import moreBtn from '@assets/more.png';
import chevDown from '@assets/chevDown.png';
function DropdownOption({ imgSrc, label }: { imgSrc: string; label: string }) {
	return (
		<div className='flex items-center'>
			<img src={imgSrc} alt='' className='mr-2' />
			<p>{label}</p>
		</div>
	);
}
export default function Task({
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
				<div className='rounded-xl border border-task-category-border px-4 pt-2.5 pb-3 mr-3'>
					<DropdownOption imgSrc={lowImportance} label='Niski' />
					<div className='hidden'>
						<DropdownOption imgSrc={highImportance} label='Wysoki' />
						<DropdownOption imgSrc={midImportance} label='Średni' />
						<DropdownOption imgSrc={lowImportance} label='Niski' />
					</div>
				</div>
				<div className='rounded-xl border border-task-category-border px-4 pt-2.5 pb-3 mr-3'>
					<DropdownOption imgSrc={todoTaskIcon} label='Do zrobienia' />
					<div className='hidden'>
						<DropdownOption imgSrc={doneTaskIcon} label='Wykonane' />
						<DropdownOption imgSrc={todoTaskIcon} label='Do zrobienia' />
					</div>
				</div>
				<img
					src={moreBtn}
					alt='more info'
					className='border-task-category-border border rounded-xl py-3 px-[17px]'
				/>
			</div>
		</div>
	);
}
