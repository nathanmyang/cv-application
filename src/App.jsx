import { useState } from 'react';
import Education from './components/Education';
import Info from './components/Info';
import Experience from './components/Experience';
import './App.css';

function App() {
	const [personalInfo, setPersonalInfo] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: null,
	});
	const [educationInfo, setEducationInfo] = useState({
		schoolName: '',
		major: '',
		graduation: '',
	});
	const [experienceInfo, setExperienceInfo] = useState([]);

	function handlePersonalInfo(e) {
		setPersonalInfo({
			...personalInfo,
			[e.target.id]: e.target.value,
		});
	}
	function handleEducationalInfo(e) {
		setEducationInfo({
			...educationInfo,
			[e.target.id]: e.target.value,
		});
	}
	function handleExperienceInfo(experience) {
		setExperienceInfo([...experienceInfo, experience]);
	}
	function handleDeleteExperience(job) {
		const newJobList = experienceInfo.filter((item) => {
			return item !== job;
		});
		setExperienceInfo([...newJobList]);
	}
	return (
		<>
			<Info personalInfo={personalInfo} onChange={handlePersonalInfo} />
			<Education
				educationInfo={educationInfo}
				onChange={handleEducationalInfo}
			/>
			<Experience
				experienceInfo={experienceInfo}
				onClick={handleExperienceInfo}
				handleDeleteExperience={handleDeleteExperience}
			/>
		</>
	);
}

export default App;
