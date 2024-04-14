let foodCount = 0; // track the number of food cards created (also used in creating ID)

/**
 * Deletes the specified food card element from the DOM based on the provided foodId.
 *
 * @param {string} foodId - The ID of the food card element to be deleted.
 * @return {void} 
 */
function foodDeleted(foodId) {
  const elementToRemove = document.getElementById(foodId);
  elementToRemove.parentNode.removeChild(elementToRemove);
  foodCount--;
}

const validateRank = () => isNaN(document.getElementById("rank").value);

/**
 * Creates a new food card element based on user input and appends it to the food cards container.
 *
 * @param {Event} event - The event object triggering the function.
 */
const createFoodCard = (event) => {
 

  console.log("create food card function is running...");
  const newCard = document.createElement("div");
  newCard.className = "food-card";
  newCard.id = "food-" + foodCount;
  newCard.style.order = document.getElementById("rank").value;

  const newImage = document.createElement("img");
  newImage.src = document.getElementById("img_url").value;

  const newh1 = document.createElement("h1");
  newh1.textContent = document.getElementById("food_name").value;

  const newP = document.createElement("p");
  newP.textContent = document.getElementById("desc").value;

  const newButton = document.createElement("button");
  newButton.innerText = "Delete";
  console.log("event listener delete creating...");
  newButton.addEventListener("click", () => foodDeleted(newCard.id));

  newCard.appendChild(newImage);
  newCard.appendChild(newh1);
  newCard.appendChild(newP);
  newCard.appendChild(newButton);

  const container = document.getElementsByClassName("food-cards-container")[0];
  container.appendChild(newCard);
};

/**
 * Handles the addition of a new food item based on user input.
 *
 * @param {Event} event - The event triggering the function.
 * @return {void} 
 */
const addFood = (event) => {
  event.preventDefault();
  console.log("addFood function is running...");
  const rankIsNotNumber = validateRank();
  const isEmpty =
    document.getElementById("food_name").value === "" ||
    document.getElementById("desc").value === "" ||
    document.getElementById("img_url").value === "" ||
    document.getElementById("rank").value === "" ||
    rankIsNotNumber;
  console.log("PART: is it empty?");
  if (isEmpty) {
    alert(
      "ERROR: Please fill out the entire form and enter a valid number for the rank. The rank field should only contain numbers."
    );
  } else {
    console.log("it is not empty so lets create food card");
    createFoodCard();
    foodCount++;
  }
};

const submitButton = document.getElementById("submit-food");
submitButton.addEventListener("click", addFood);
