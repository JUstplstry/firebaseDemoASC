import { ref, push, set, database, onValue } from "./firebase.js";

//get elements from index.html
let itemInput = document.getElementById("itemInput")
let submitBtn = document.getElementById("submitBtn")
let itemContainer = document.getElementById("itemsContainer")
//refrence a part of our database
let itemsRef = ref(database,"items")
//add item to database
submitBtn.onclick = function(event){
	event.preventDefault()
	let itemInputVal = itemInput.value
	console.log(itemInputVal)
	itemInput.value = ""

	let newItemRef = push(itemsRef)// new place to add items in section items where can place our data

	set(newItemRef,itemInputVal)

}
//show items on firebase in our items container
onValue(itemsRef,(snapshot)=>{
	itemContainer.innerHTML = " "
	let data = snapshot.val()
	console.log(snapshot.value)

	for(const property in data){
		console.log(data[property])
		let newLi = document.createElement("li")
		newLi.innerHTML = data[property]
		itemContainer.append(newLi)
	}
})