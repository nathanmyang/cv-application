import { useState } from 'react';

export default function Education({ educationInfo, onChange }) {
	const [submitted, setSubmitted] = useState(false);

	function submitInfo() {
		setSubmitted(true);
	}

	function editInfo() {
		setSubmitted(false);
	}
	return (
		<>
			{submitted ? (
				<>
					<h1>Education Info Submitted</h1>
					<p>First name: {educationInfo.schoolName}</p>
					<p>Last name: {educationInfo.major}</p>
					<p>Email: {educationInfo.graduation}</p>
					<button type='button' onClick={editInfo}>
						Edit
					</button>
				</>
			) : (
				<>
					<h1>Education</h1>
					<form>
						<input
							id='schoolName'
							placeholder='School Name'
							onChange={onChange}
							value={educationInfo.schoolName}
						></input>
						<input
							id='major'
							placeholder='Major'
							onChange={onChange}
							value={educationInfo.major}
						></input>
						<input
							id='graduation'
							placeholder='Graduation'
							onChange={onChange}
							value={educationInfo.graduation}
						></input>
						<button type='button' onClick={submitInfo}>
							Submit Education Info
						</button>
					</form>
				</>
			)}
		</>
	);
}
