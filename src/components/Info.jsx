import { useState } from 'react';

export default function Info({ onChange, personalInfo }) {
	const [submitted, setSubmitted] = useState(false);

	function submitInfo() {
		console.log('submitInfo called');
		setSubmitted(true);
	}

	function editInfo() {
		setSubmitted(false);
	}

	return (
		<>
			{submitted ? (
				<>
					<h1>Personal Info Submitted</h1>
					<p>First name: {personalInfo.firstName}</p>
					<p>Last name: {personalInfo.lastName}</p>
					<p>Email: {personalInfo.email}</p>
					<p>Phone Number: {personalInfo.phoneNumber}</p>
					<button type='button' onClick={editInfo}>
						Edit
					</button>
				</>
			) : (
				<>
					<h1>Info</h1>
					<form>
						<label>
							First Name:
							<input id='firstName' onChange={onChange}></input>
						</label>
						<label>
							Last Name:
							<input id='lastName' onChange={onChange}></input>
						</label>
						<label>
							Email:
							<input id='email' onChange={onChange}></input>
						</label>
						<label>
							Phone Number:
							<input id='phoneNumber' onChange={onChange}></input>
						</label>
						<button type='button' onClick={submitInfo}>
							Enter Personal Information
						</button>
					</form>
				</>
			)}
		</>
	);
}
