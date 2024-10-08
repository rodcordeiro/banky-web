import { useAccounts } from '@/hooks/Accounts';

const Account = (account: Account) => {
	return (
		<div
			key={`account_${account.id}`}
			className="bg-slate-400 w-fit min-w-40 rounded p-2 flex column items-center justify-between"
		>
			<h2 className="text-xl font-semibold">{account.name}</h2>
			<p>{account.ammount}</p>
		</div>
	);
};

export const Home = () => {
	const { accounts } = useAccounts();
	return (
		<div className="flex w-screen h-fit py-10 px-10 justify-center items-center ">
			<div className="bg-gray-300 rounded w-full max-w-6xl p-2 flex overflow-x-auto gap-2">
				{accounts.map(Account)}
			</div>
		</div>
	);
};
