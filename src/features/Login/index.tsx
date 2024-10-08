import { Button } from '@/components/tools/Button';
import { useLoginHook } from './hooks/login.hook';

export const Login = () => {
	const {
		loading,
		username,
		password,
		handleUpdateUsername,
		handleUpdatePassword,
		handleAuth,
	} = useLoginHook();

	return (
		<div className="flex h-screen w-screen bg-gray-900">
			<div className="flex flex-col w-2/5 h-full  justify-end px-8 pb-20 ">
				<h1 className="text-white text-4xl mb-4">Bem vindo!</h1>
				<h2 className="text-white text-xl mb-2">Acesse o banky!</h2>
				<div className="flex flex-col mb-2 w-full">
					<label htmlFor="username-input" className="text-gray-400">
						Usuário
					</label>
					<input
						name="username-input"
						id="username-input"
						placeholder="Insira seu usuário"
						type="text"
						className="px-4 py-2 rounded my-2 "
						value={username}
						onChange={handleUpdateUsername}
					/>
				</div>
				<div className="flex flex-col mb-2 w-full">
					<label htmlFor="password-input" className="text-gray-400">
						Senha
					</label>
					<input
						name="password-input"
						id="password-input"
						placeholder="Insira sua senha"
						type="password"
						className="px-4 py-2 rounded my-2 "
						value={password}
						onChange={handleUpdatePassword}
					/>
				</div>
				<Button content="Acessar" onClick={handleAuth} loading={loading} />
			</div>
			<div className="w-full h-full p-2">
				<img
					className="w-full h-full rounded-lg "
					src="https://images.unsplash.com/photo-1707075891545-c36963b873e6?q=80&w=2013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				/>
			</div>
		</div>
	);
};
