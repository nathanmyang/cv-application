export default function Job({ experience, onClick }) {
	return (
		<ul>
			<p>Company: {experience.companyName}</p>
			<p>Position: {experience.position}</p>
			<p>Responsibilities: {experience.responsibilities}</p>
			<p>Date Worked: {experience.dateWorked}</p>
			<button onClick={() => onClick(experience)}>Delete</button>
		</ul>
	);
}
