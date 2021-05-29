//Alejandra Hernandez
//MAy 28 2021

const btnSubmit = document.getElementById("btnSubmit");
let arrFood = [];

//Constructor
function Food (name,carbs,fat,protein) {
    this.name = name,
    this.carbs=carbs,
    this.fat=fat,
    this.protein=protein
}
//Insert object into array
Food.prototype.pushObj = function (obj) {
    arrFood.push(obj)
}

//Find max values
Food.prototype.maxValues = function () {
    let maxCarbs=0;
    let nameCarbs=0;
    let maxFat=0;
    let nameFat=0;
    let maxProtein=0;
    let nameProtein=0;
    for(let i=0;i<arrFood.length;i++){
        if (maxCarbs < parseFloat(arrFood[i].carbs))
            {
                maxCarbs = arrFood[i].carbs
                nameCarbs = arrFood[i].name
            }
    }
    for(let i=0;i<arrFood.length;i++){
        if (maxFat < parseFloat(arrFood[i].fat))
            {
                maxFat = arrFood[i].fat
                nameFat = arrFood[i].name
            }
    }
    for(let i=0;i<arrFood.length;i++){
        if (maxProtein < parseFloat(arrFood[i].protein))
            {
                maxProtein = arrFood[i].protein
                nameProtein = arrFood[i].name
            }
    }
    let printArr="";
    for(let i=0; i<arrFood.length; i++){
    printArr += arrFood[i].name + ", ";   
}

printArr = printArr.substr(0,printArr.length-2)

amongArr.innerHTML = `Among ${printArr} </br> ${nameCarbs} has highest carbs </br> ${nameFat} has highest fat </br> ${nameProtein} has highest protein` 
}

const cleanErrors = () => {
    lblNameError.innerHTML = ""
    lblCarbsError.innerHTML = ""
    lblFatError.innerHTML = ""
    lblProteinError.innerHTML = ""
}

//Clean inputs after insert values to object
const cleanInputs = () => {
    txtFoodName.value = ""
    txtCarbs.value = ""
    txtFat.value = ""
    txtProtein.value = ""
}
//Validate required values
const validation = (name,carbs,fat,protein)=>{
    cleanErrors()
    if(name=="")
    {
        lblNameError.innerHTML = "required."
        txtFoodName.focus()
        return true
    }       
    if (carbs=="")
    {
        lblCarbsError.innerHTML = "required"
        txtCarbs.focus()
        return true
    }
    if (fat=="")
    {
        lblFatError.innerHTML =  "required"
        txtFat.focus()
        return  true
    }
    if (protein=="")
    {
        lblProteinError.innerHTML = "required"
        txtProtein.focus()
        return true
    }
}

btnSubmit.addEventListener('click', () => {
    let name = txtFoodName.value
    let carbs= txtCarbs.value
    let fat = txtFat.value
    let protein = txtProtein.value

    if(validation(name,carbs,fat,protein))
        return            

    let foodObj = new Food(name, carbs, fat, protein)
  
    foodObj.pushObj(foodObj)
    foodObj.maxValues()

    cleanInputs()
});