const members = data.results[0].members

const tbody = document.querySelector("tbody")

function checkbox(){
	document.getElementById("table-data").innerHTML =""
	let state = document.getElementById("inputState").value
	let party = document.getElementsByClassName("form-check-input") 
	let select = []
	let dataFilter=[]
	for (let i = 0; i< party.length; i++) {
		if (party[i].checked) {
			dataFilter = members.filter(e => e.party == party[i].value)
			
			

			members.filter(e => e.party == party[i].value && (e.state == state || state == "all")). forEach(member => {

				let row = tbody.insertRow(-1);

				let nombre

				let fullname = member.last_name + " " + member.first_name + " " + (member.middle_name || " ")

				if(member.url == ""){
				nombre = fullname
				}

				else{
				nombre = `<a class="text-white" target:"_blank" href="${member.url}">` + fullname + `</a>`
				}

				row.innerHTML = "<td>" + nombre + "</td><td>" + member.party + "</td><td>" + member.state + "</td><td>" + member.seniority + "</td><td>" + member.votes_with_party_pct + "</td>"
			})
		}
		dataFilter.forEach(e => {
			if (select.indexOf(e.state)== (-1)) {
				select.push(e.state)

			}

		})
		document.getElementById("inputState").innerHTML = `<option value="all">all</option>`
		select.forEach(e => {document.getElementById("inputState").innerHTML += `<option value="${e}">${e}</option>`})
		document.getElementById("inputState").value = state
	}
}
document.getElementById("inlineCheckbox1").addEventListener("click", checkbox)
document.getElementById("inlineCheckbox2").addEventListener("click", checkbox)
document.getElementById("inlineCheckbox3").addEventListener("click", checkbox)
checkbox()
document.getElementById("inputState").addEventListener("change", checkbox)

// function checkbox(){
// 	tbody.innerHTML =""
// 	let party = document.getElementsByClassName("form-check-input")

// 	let filter = members.filter(function(e){
// 		for(i = 0 ; i<party.length ; i++){
// 			if(party[i].checked == true && party[i].value == e.party){
// 				return e
// 			}

// 		}
// 	})
// filter.forEach(member => {
// 	// if((member.party == state[0].value && state[0].checked) || (member.party == state[1].value && state[1].checked) || (member.party == state[2].value && state[2].checked)){
	

// 	let row = tbody.insertRow(-1);

// 	let names

// 	let fullname = member.last_name + " " + member.first_name + " " + (member.middle_name || " ")

// 	if (member.url == "") {

// 		names = fullname
// 	}

// 	else{

// 		names = `<a class="text-white" target="_blank" href=${member.url}>` + fullname + `</a>`
// 	}

// 	row.innerHTML = "<td>" + names + "</td><td>" + member.party + "</td><td>" + member.state + "</td><td>" + member.seniority + "</td><td>" + member.votes_with_party_pct + "</td>"
// }
// )
// }

// checkbox()

// let party = document.getElementsByClassName("form-check-input")
// for(let i=0;i<party.length;i++)
// 	party[i].addEventListener("click",checkbox)

