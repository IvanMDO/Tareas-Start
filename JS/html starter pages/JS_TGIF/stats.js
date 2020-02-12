// ---------------------------Senate/House at a glance-----------------------------------

const members = data.results[0].members.filter(j => j.total_votes !=0)

const dri = document.getElementById("dri")

let stats={
	democrats:0,
	republicans:0,
	independents:0,
	votesPartyD:0,
	votesPartyR:0,
	votesPartyI:0,
	total : data.results[0].num_results,
	totalPct:0,
}

members.forEach(c => {

		if (c.party == "D") {
			stats.democrats++
			stats.votesPartyD += c.votes_with_party_pct
		}
		if (c.party == "R") {
			stats.republicans++
			stats.votesPartyR += c.votes_with_party_pct
		}
		if (c.party == "I") {
			stats.independents++
			stats.votesPartyI += c.votes_with_party_pct
		}

})

stats.votesPartyD = stats.democrats !=0 ? + (parseFloat(stats.votesPartyD/stats.democrats).toFixed(2)) : "-"

stats.votesPartyR = stats.republicans !=0 ? + (parseFloat(stats.votesPartyR/stats.republicans).toFixed(2)) : "-"

stats.votesPartyI = stats.independents !=0 ? + (parseFloat(stats.votesPartyI/stats.independents).toFixed(2)) : "-"

stats.totalPct = stats.independents && stats.republicans && stats.democrats !=0 ? parseFloat((stats.votesPartyD + stats.votesPartyR + stats.votesPartyI) / 3).toFixed(2) : parseFloat((stats.votesPartyD + stats.votesPartyR) / 2).toFixed(2) 

	dri.innerHTML = `<tr> <td> Democrats </td><td> ${stats.democrats} </td><td> ${stats.votesPartyD} </td></tr> 
	<tr><td> Republicans </td><td> ${stats.republicans} </td><td> ${stats.votesPartyR} </td></tr> 
	<tr><td> Independents </td><td> ${stats.independents} </td><td> ${stats.votesPartyI} </td></tr>
	<tr><td> Total </td><td> ${stats.total} </td><td> ${stats.totalPct} </td></tr>` 

// ---------------------------Tablas 10%------------------------------------

function porcentaje (array,prop,isAscendet,idTable) {

	const table = document.getElementById(idTable)

	let sortedArray

	let pct10 = Math.round(array.length * 0.1)

	if (table) {
		if (isAscendet){
			sortedArray = array.slice().sort( function(a,b){return a[prop] - b[prop]}).slice(0,pct10)
		}
		else {

			sortedArray = array.slice().sort( function(a,b){return b[prop] - a[prop]}).slice(0,pct10)

		}

		stats[idTable] = sortedArray

		if (prop == "missed_votes_pct") {

			sortedArray.forEach(e => {

			let row = table.insertRow(-1);

			let nombre

			let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

			if(e.url == ""){
				nombre = fullname
			}

			else{
				nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
			}

			row.innerHTML = "<td>" + nombre + "</td><td>" + e.missed_votes + "</td><td>" + e[prop] + "</td>"

			})
		}

		else if (prop == "votes_with_party_pct") {

			sortedArray.forEach(e => {

			let row = table.insertRow(-1);

			let nombre

			let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

			if(e.url == ""){
				nombre = fullname
			}

			else{
				nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
			}

			let least_no_party_votes = parseFloat((e.votes_with_party_pct * e.total_votes) * 0.01).toFixed(0)

			row.innerHTML = "<td>" + nombre + "</td><td>" + least_no_party_votes + "</td><td>" + e[prop] + "</td>"

			})

		}
	}

}

porcentaje (members,"missed_votes_pct",false,"least_engaged")
porcentaje (members,"missed_votes_pct",true,"most_engaged")
porcentaje (members,"votes_with_party_pct",true,"least_loyal")
porcentaje (members,"votes_with_party_pct",false,"most_loyal")



// // ---------------------------Least Engaged Table------------------------------------

// const least_engaged = document.getElementById("least_engaged")

// if (least_engaged) {

// 	let least_engaged_10pct = (members.length * 0.1).toFixed(0)

// 	let least_engaged_array = members.slice().sort( function(a,b){return b.missed_votes_pct - a.missed_votes_pct}).slice(0,least_engaged_10pct)

// 	least_engaged_array.forEach(e => {

// 		let row = least_engaged.insertRow(-1);

// 		let nombre

// 		let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

// 		if(e.url == ""){
// 			nombre = fullname
// 		}

// 		else{
// 			nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
// 		}

// 		row.innerHTML = "<td>" + nombre + "</td><td>" + e.missed_votes + "</td><td>" + e.missed_votes_pct + "</td>"

// })

// }

// // ---------------------------Most Engaged Table-------------------------------------

// const most_engaged = document.getElementById("most_engaged")

// if (most_engaged) {

// 	let most_engaged_10pct = (members.length * 0.1).toFixed(0)

// 	let most_engaged_array = members.slice().sort(function(a,b){return a.missed_votes_pct - b.missed_votes_pct}).slice(0,most_engaged_10pct)

// 	most_engaged_array.forEach(e =>  {

// 		let row = most_engaged.insertRow(-1);

// 		let nombre

// 		let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

// 		if(e.url == ""){
// 			nombre = fullname
// 		}

// 		else{
// 			nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
// 		}

// 		row.innerHTML = "<td>" + nombre + "</td><td>" + e.missed_votes + "</td><td>" + e.missed_votes_pct + "</td>"

// })

// }

// // ---------------------------Least Loyal Table--------------------------------------------

// const least_loyal = document.getElementById("least_loyal")

// if (least_loyal) {

// 	let least_loyal_10pct = (members.length * 0.1).toFixed(0)

// 	let least_loyal_array = members.slice().sort(function(a,b){return b.votes_with_party_pct - a.votes_with_party_pct}).slice(0,least_loyal_10pct)

// 	least_loyal_array.forEach(e => {

// 		let row = least_loyal.insertRow(-1);

// 		let nombre

// 		let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

// 		if(e.url == ""){
// 			nombre = fullname
// 		}

// 		else{
// 			nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
// 		}

// 		let least_no_party_votes = parseFloat((e.votes_with_party_pct * e.total_votes) * 0.01).toFixed(0)

// 		row.innerHTML = "<td>" + nombre + "</td><td>" + least_no_party_votes + "</td><td>" + e.votes_with_party_pct + "</td>"

// })

// }

// // ---------------------------Most Loyal Table-------------------------------------------

// const most_loyal = document.getElementById("most_loyal")

// if (most_loyal) {

// 	let most_loyal_10pct = (members.length * 0.1).toFixed(0)

// 	let most_loyal_array = members.slice().sort(function(a,b){return a.votes_with_party_pct - b.votes_with_party_pct}).slice(0,most_loyal_10pct)

// 	most_loyal_array.forEach(e => {

// 		let row = most_loyal.insertRow(-1);

// 		let nombre

// 		let fullname = e.last_name + " " + e.first_name + " " + (e.middle_name || " ")

// 		if(e.url == ""){
// 			nombre = fullname
// 		}

// 		else{
// 			nombre = `<a class="text-white" target:"_blank" href="${e.url}">` + fullname + `</a>`
// 		}

// 		let most_no_party_votes = parseFloat((e.votes_with_party_pct * e.total_votes) / 100).toFixed(0)

// 		row.innerHTML = "<td>" + nombre + "</td><td>" + most_no_party_votes + "</td><td>" + e.votes_with_party_pct + "</td>"

// })

// }