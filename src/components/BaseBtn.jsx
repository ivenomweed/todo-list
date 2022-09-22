function BaseBtn({ text, className, handleClick }) {
	return (
		<button
			className={`w-24 rounded border-2 p-2 ${className}`}
			onClick={handleClick}
		>
			{text}
		</button>
	);
}

export default BaseBtn;
