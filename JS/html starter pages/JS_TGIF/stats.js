const members = data.results[0].members.filter(j => j.total_votes !=0)

const dri = document.getElementById("dri")

let democrats = 0

let republicans = 0

let independents = 0

let votesPartyD = 0

let	votesPartyR = 0

let	votesPartyI = 0

let	votesPartyT = 0

let total = data.results[0].num_results

members.forEach(c => {

		if (c.party == "D") {
			democrats++
			votesPartyD += c.votes_with_party_pct
		}
		if (c.party == "R") {
			republicans++
			votesPartyR += c.votes_with_party_pct
		}
		if (c.party == "I") {
			independents++
			votesPartyI += c.votes_with_party_pct
		}

		let votesPctD = parseFloat(votesPartyD/democrats).toFixed(2)

		let votesPctR = parseFloat(votesPartyR/republicans).toFixed(2)

		let votesPctI = parseFloat(votesPartyI/independents).toFixed(2)

		let votesPctT = parseFloat((votesPartyD + votesPartyR + votesPartyI) / total).toFixed(2)

		if (votesPartyD == 0) {
			votesPctD = 0
		}

		if (votesPartyR == 0) {
			votesPctR = 0
		}

		if (votesPartyI == 0) {
			votesPctI = 0
		}
	
	dri.innerHTML = `<tr> <td> Democrats </td><td> ${democrats} </td><td> ${votesPctD} </td></tr> 
	<tr><td> Republicans </td><td> ${republicans} </td><td> ${votesPctR} </td></tr> 
	<tr><td> Independents </td><td> ${independents} </td><td> ${votesPctI} </td></tr>
	<tr><td> Total </td><td> ${total} </td><td> ${votesPctT} </td></tr>` 

})

const least_engaged = document.getElementById("least_engaged")

let least_engaged_10pct = (members.length * 0.1).toFixed(0)

let least_engaged_array = members.slice().sort( function(a,b){return b.missed_votes_pct - a.missed_votes_pct}).slice(0,least_engaged_10pct)

least_engaged_array.forEach(e => {

	let row = least_engaged.insertRow(-1);

	let nombre

	let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

	if(e.url == ""){
		nombre = fullname
	}

	else{
		nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
	}

	row.innerHTML = "<td>" + nombre + "</td><td>" + e.missed_votes + "</td><td>" + e.missed_votes_pct + "</td>"

})




const most_engaged = document.getElementById("most_engaged")

let most_engaged_10pct = (members.length * 0.1).toFixed(0)

let most_engaged_array = members.slice().sort(function(a,b){return a.missed_votes_pct - b.missed_votes_pct}).slice(0,most_engaged_10pct)

most_engaged_array.forEach(e =>  {

	if (e.total_votes == 0) {
		e.missed_votes = "-"
		e.missed_votes_pct = "-"
	}

	let row = most_engaged.insertRow(-1);

	let nombre

	let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

	if(e.url == ""){
		nombre = fullname
	}

	else{
		nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
	}

	row.innerHTML = "<td>" + nombre + "</td><td>" + e.missed_votes + "</td><td>" + e.missed_votes_pct + "</td>"

})








 