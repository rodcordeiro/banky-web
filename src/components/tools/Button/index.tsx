import React from 'react';
export type ButtonProps = {
	loading?: boolean;
	content: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
	loading,
	disabled,
	content,
	...rest
}: ButtonProps) => {
	return (
		<button
			type="button"
			className="py-2 px-4 rounded outline-none border-none bg-violet-400 w-full disabled:bg-gray-500"
			disabled={loading || disabled}
			{...rest}
		>
			{content}
		</button>
	);
};
