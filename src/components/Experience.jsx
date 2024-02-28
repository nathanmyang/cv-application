import { useState } from 'react';
import Job from './Job';

export default function Experience({
	experienceInfo,
	onClick,
	handleDeleteExperience,
}) {
	let experience = {
		companyName: '',
		position: '',
		responsibilities: '',
		dateWorked: '',
	};
	function handleExperienceInputs(e) {
		experience = {
			...experience,
			[e.target.id]: e.target.value,
		};
	}
	return (
		<>
			<h1>Experience</h1>
			<form>
				<input
					id='companyName'
					onChange={handleExperienceInputs}
				></input>
				<input id='position' onChange={handleExperienceInputs}></input>
				<input
					id='responsibilities'
					onChange={handleExperienceInputs}
				></input>
				<input
					id='dateWorked'
					onChange={handleExperienceInputs}
				></input>
				<button type='button' onClick={() => onClick(experience)}>
					Add Experience
				</button>
			</form>
			{experienceInfo.length ? (
				experienceInfo.map((experience) => {
					return (
						<Job
							experience={experience}
							key={experience.companyName}
							onClick={handleDeleteExperience}
						/>
					);
				})
			) : (
				<p>Jobs Listed Here</p>
			)}
		</>
	);
}
