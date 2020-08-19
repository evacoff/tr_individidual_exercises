
// Create jobs object
const jobs = [
    {
        name: "Job A",
        characteristics: ["remote", "flexible working hours"],
    },
    {
        name: "Job B",
        characteristics: ["office based two days per week", "react developer"],
    }
    ];

// Create individuals (candidates) object
const candidates = [
    {
        name: "Candidate A",
        characteristics: ["wants to work remote", "react experience", "looking for frontend"],
    },
    {
        name: "Candiate B",
        skills: ["backend developer", "cloud experience", "AWS certified"],
    }
    ];


function listJobs() {
	for(var i = 0; i < jobs.length; i++) {
		console.log(jobs[i]);
	}
}

listJobs();

function listCandidates() {
	for(var i = 0; i < candidates.length; i++) {
		console.log(candidates[i]);
	}
}

listCandidates();

/* Find Match function that accepts 
a list of job characteristics and a list of individual skills/characteristics
and provides a match score between 0 and 100 */
function findMatch() { 


    let jobCharacteristics = jobs.characteristics[0];
    let candidateSkills = candidates.skills[0];

    // use substring method to compare strings
    let result = jobCharacteristics.localeCompare(candidateSkills);

    document.getElementById("result").innerHTML = result;
 }