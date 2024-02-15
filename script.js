function displayAnswer(clickedElement) { //clickedElement is the element that was clicked
    const answer = clickedElement.nextElementSibling; // I'm retrieving the next sibling of the element being clicked
    answer.classList.toggle("hidden"); //using the toggle() method to automatically add or remove the answer when clicked

    const image = clickedElement.previousElementSibling;//Retrieving the previous sibling of the element being clicked. My previous sibling here is the img
    if (image.src.includes("plus")) { //Checking if the src attribute of my image contains the "plus" string 
        image.src = "images/icon-minus.svg"; //If it does, I want to change the image to the src provided
    } else {
        image.src = "images/icon-plus.svg";//If it doesn't, leave the image
    }
}
