const members = data.results[0].members

const tbody = document.querySelector("tbody")

members.forEach(member => {
				
	let row = tbody.insertRow(-1);

	let names

	let fullname = member.last_name + " " + member.first_name + " " + (member.middle_name || " ")

	if (member.url == "") {

		names = fullname
	}

	else{

		names = `<a class="text-white" target="_blank" href=${member.url}>` + fullname + `</a>`
	}

	row.innerHTML = "<td>" + names + "</td><td>" + member.party + "</td><td>" + member.state + "</td><td>" + member.seniority + "</td><td>" + member.votes_with_party_pct + "</td>"
})