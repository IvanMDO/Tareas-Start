const members = data.results[0].members

const tbody = document.querySelector("tbody")

members.forEach(member => {

	// if (member.middle_name == null){
	// 	member.middle_name = " "
	// }

	if (true) {}
				
	let row = tbody.insertRow(-1);

	row.innerHTML = `<td>${(`<a target="_blank" href= "${member.url}">${member.last_name} ${member.first_name} ${(member.middle_name || " ")}</a>`) || " "}</td>
	<td>${member.party}</td>
	<td>${member.state}</td>
	<td>${member.seniority}</td>
	<td>${member.votes_with_party_pct}</td>`

})