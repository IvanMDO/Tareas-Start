const members = data.results[0].members

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
	
	dri.innerHTML = `<tr> <td> Democrats </td><td> ${democrats} </td><td> ${votesPctD} </td></tr> 
	<tr><td> Republicans </td><td> ${republicans} </td><td> ${votesPctR} </td></tr> 
	<tr><td> Independents </td><td> ${independents} </td><td> ${votesPctI} </td></tr>
	<tr><td> Total </td><td> ${total} </td><td> ${votesPctT} </td></tr>` 


})





 