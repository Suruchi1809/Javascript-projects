const btnE1 = document.getElementById("btn");
const bmiInputE1 =document.getElementById("bmi-result");

function ComputeBMI(){
    const heightValue = document.getElementById("height").value/100

    const weightValue = document.getElementById("weight").value

    //formula to calculate bmi is weight(kg)/height in(meter) square i.e height^2
    const bmiValue = weightValue/(heightValue*heightValue);
    bmiInputE1.value = bmiValue;
    
}



btnE1.addEventListener("click" , ComputeBMI);