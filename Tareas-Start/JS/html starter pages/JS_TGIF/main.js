var app = new Vue({
  el: '#app',
  data: {
    members: [],
    party: [],
    states: ["all"],
    thisState: "all" ,
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
				app.members = data.results[0].members
				app.party = app.getKeyValue(app.members,"party")
				app.states = app.getKeyValue(app.members, "state")

			})
			.catch(function(error){
				console.log(error)
			})	
	},
	methods:{
		getKeyValue(array,key){
   			let result = []
       		array.forEach(e => !result.includes(e[key]) ? result.push(e[key]) : null)
   	 		return result
    	},
   		filterParty(){
    	return this.members.filter(e => app.party.indexOf(e.party) != -1 && (e.state == app.thisState || app.thisState == "all"))
   		}
	}
});



// let tableData 

// document.getElementById("table-data") != null ? tableData = document.getElementById("table-data") : tableData = document.getElementById("table-data2")

// function tableFetch (){

// function checkbox(){
// 	tableData.innerHTML =""
// 	let state = document.getElementById("inputState").value
// 	let party = document.getElementsByClassName("form-check-input") 
// 	let select = []
// 	let dataFilter=[]
// 	for (let i = 0; i< party.length; i++) {
// 		if (party[i].checked) {
// 			dataFilter = members.filter(e => e.party == party[i].value)
			
// 			members.filter(e => e.party == party[i].value && (e.state == state || state == "all")). forEach(member => {

// 				let row = tableData.insertRow(-1);

// 				let nombre

// 				let fullname = member.last_name + " " + member.first_name + " " + (member.middle_name || " ")

// 				if(member.url == ""){
// 				nombre = fullname
// 				}

// 				else{
// 				nombre = `<a class="text-white" target:"_blank" href="${member.url}">` + fullname + `</a>`
// 				}

// 				row.innerHTML = "<td>" + nombre + "</td><td>" + member.party + "</td><td>" + member.state + "</td><td>" + member.seniority + "</td><td>" + member.votes_with_party_pct + "</td>"
// 			})
// 		}
// 		dataFilter.forEach(e => {
// 			if (select.indexOf(e.state)== (-1)) {
// 				select.push(e.state)

// 			}

// 		})
// 		document.getElementById("inputState").innerHTML = `<option value="all">all</option>`
// 		select.forEach(e => {document.getElementById("inputState").innerHTML += `<option value="${e}">${e}</option>`})
// 		document.getElementById("inputState").value = state
// 	}
// }
// document.getElementById("inlineCheckbox1").addEventListener("click", checkbox)
// document.getElementById("inlineCheckbox2").addEventListener("click", checkbox)
// document.getElementById("inlineCheckbox3").addEventListener("click", checkbox)
// checkbox()
// document.getElementById("inputState").addEventListener("change", checkbox)
// }