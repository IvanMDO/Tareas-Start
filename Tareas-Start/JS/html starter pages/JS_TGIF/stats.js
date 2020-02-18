var app = new Vue({
  el: '#app',
  data: {
    members: [],
	stats:{
		democrats:0,
		republicans:0,
		independents:0,
		votesPartyD:0,
		votesPartyR:0,
		votesPartyI:0,
		total:0,
		totalPct:0,
	},
    url: document.getElementById("table-data") != null ? url= "https://api.propublica.org/congress/v1/113/senate/members.json" : url = "https://api.propublica.org/congress/v1/113/house/members.json" ,
    init: {
		method: 'GET',
		headers:{
			"X-API-KEY":"ed3CDvs6IKKLrcuyirag5GudlY6OtegHXtbeKIL2"
			}
		}
	},

	async created(){
	  		await fetch(this.url, this.init)
				.then(function(res){
					if(res.ok){
						return res.json()
					} else{
						throw new Error(res.status)
					}
				})
				.then(function(json){
					let data = json
					app.members = data.results[0].members.filter(j => j.total_votes !=0)
					app.fetchFunction()

				})
				.catch(function(error){
					console.log(error)
				})	
		},

	methods:{

		fetchFunction (){

		this.members.forEach(c => {

				if (c.party == "D") {
					app.stats.democrats++
					app.stats.votesPartyD += c.votes_with_party_pct
				}
				if (c.party == "R") {
					app.stats.republicans++
					app.stats.votesPartyR += c.votes_with_party_pct
				}
				if (c.party == "I") {
					app.stats.independents++
					app.stats.votesPartyI += c.votes_with_party_pct
				}

		})

		app.stats.votesPartyD = app.stats.democrats !=0 ? + (parseFloat(app.stats.votesPartyD/app.stats.democrats).toFixed(2)) : "-"

		app.stats.votesPartyR = app.stats.republicans !=0 ? + (parseFloat(app.stats.votesPartyR/app.stats.republicans).toFixed(2)) : "-"

		app.stats.votesPartyI = app.stats.independents !=0 ? + (parseFloat(app.stats.votesPartyI/app.stats.independents).toFixed(2)) : "-"

		app.stats.totalPct = app.stats.independents && app.stats.republicans && app.stats.democrats !=0 ? parseFloat((app.stats.votesPartyD + app.stats.votesPartyR + app.stats.votesPartyI) / 3).toFixed(2) : parseFloat((app.stats.votesPartyD + app.stats.votesPartyR) / 2).toFixed(2) 

		app.stats.total = app.stats.democrats + app.stats.republicans + app.stats.independents 
		},

		porcentaje (array,prop,isAscendet) {

			let sortedArray

			let pct10 = Math.round(array.length * 0.1)
			
				if (isAscendet){
					sortedArray = array.slice().sort( function(a,b){return a[prop] - b[prop]}).slice(0,pct10)
				}
				else {

					sortedArray = array.slice().sort( function(a,b){return b[prop] - a[prop]}).slice(0,pct10)

				}

				return sortedArray
		},

		calcularVotos(member){

			return parseFloat((member.votes_with_party_pct * member.total_votes) * 0.01).toFixed(0)
		}
	}
});

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