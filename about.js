console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully!")
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);



const mouseOver = (event) => {
	alert("These rubberducks love you!")

}

rubberDuck.addEventListener("mouseover", mouseOver)