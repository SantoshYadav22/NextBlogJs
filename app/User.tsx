export default function User() {
	const getsomeFruit = async (item:any) => {
		alert('hello '+item)
	};
	return (
		<div >
			<main >
				<button onClick={()=>getsomeFruit(" Santosh")}>Make API Call</button>
			</main>
		</div>
	);
}