
const getFoodMenu = (key,value) =>{

    const api = `https://www.themealdb.com/api/json/v1/1/search.php?${key}=${value}`;

    fetch(api)
    .then(res=>res.json())
    .then( data => {
         try{
          getName(data);
       }catch(error){
          alert("food not available");
       }
    }
    ); 
    
    
}

function getName(data){
   const meals =data.meals;
    displayFoods(meals);

}

const displayFoods = data => {
   
    const foodMenu = document.getElementById('food-menu');
    

    data.forEach(element => {
        const foodMenuDiv = document.createElement('div');
          foodMenuDiv.className = 'detail';
       
          const foodInfo = `
              <img src="${element.strMealThumb}">
             
              <h3 class="meal-name">${element.strMeal}</h3>
          `;
          foodMenuDiv.innerHTML = foodInfo;

          getFoodIngredients(foodMenuDiv,element);
          foodMenu.appendChild(foodMenuDiv);
    });
}

function getFoodIngredients(foodMenuDiv,element){
    
       foodMenuDiv.addEventListener('click',()=>{
       document.getElementById("parent").style.display="none";
       document.getElementById("food-ingredient").appendChild(foodMenuDiv);
       document.getElementById("food-ingredient").style.display = "block";
       
       
        const ingredients = [];
    
        setIngredient(element,ingredients);
        const ul = document.getElementById('ul');
                              
        let index = 0;
          document.getElementById("title").style.display= "block";
            while(ingredients[index] != ""){
              const li = document.createElement('li');  
                        
                 li.innerText = ingredients[index];
                 console.log(li);
                 ul.appendChild(li);
                 index++;
            }
         
    });
}



    const search_btn = document.getElementById("searchBtn");
    search_btn.addEventListener('click',()=>{
    const food=document.getElementById("food").value;
    const len = food.length;
    if(len == 1) getFoodMenu('f',food[0]);
    else if(len > 1) getFoodMenu('s',food);
    
    });
    

function setIngredient(element,ingredients){
    ingredients.push(element.strIngredient1);
    ingredients.push(element.strIngredient2);
    ingredients.push(element.strIngredient3);
    ingredients.push(element.strIngredient4);
    ingredients.push(element.strIngredient5);
    ingredients.push(element.strIngredient6);
    ingredients.push(element.strIngredient7);
    ingredients.push(element.strIngredient8);
    ingredients.push(element.strIngredient9);
    ingredients.push(element.strIngredient10);
    ingredients.push(element.strIngredient11);
    ingredients.push(element.strIngredient12);
    ingredients.push(element.strIngredient13);
    ingredients.push(element.strIngredient14);
    ingredients.push(element.strIngredient15);
    ingredients.push(element.strIngredient16);
    ingredients.push(element.strIngredient17);
    ingredients.push(element.strIngredient18);
    ingredients.push(element.strIngredient19);
    ingredients.push(element.strIngredient20);
}
