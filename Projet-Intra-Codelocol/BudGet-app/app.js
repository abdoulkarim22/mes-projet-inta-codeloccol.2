const numberForm = document.getElementById("Number-form");
const input = document.getElementById("input");
const Valuebalance = document.getElementById("balanceValue");
const Valuebudget = document.getElementById("budgetValue");

 const inputyourexpense = document.getElementById("inputyourexpense")
 const expensetitle = document.getElementById("Expensetitle")
 const  Value = document.getElementById("Expensevalue2")
 const icon = document.getElementById("icon1")
// const formyourexpense = document.getElementById("EXPENSEyourform")


const expensevalue = document.getElementById("Expensevalue")
const expenseForm = document.getElementById("Expenseform")
const inputexpense = document.getElementById("inputExpense")

function budgetForm(element) {
    if (element) {
        Valuebalance.innerText = element;
        Valuebudget.innerText = element;
        input.value = ""
    }

}
numberForm.addEventListener('submit', (e) => {
    e.preventDefault()
    budgetForm(input.value)
})

function  budgetFormexpensive(event) {
    if (event) {
        let concat = " F"
        expensevalue.innerText = event;
        Value.innerText =  event + concat;
        inputexpense.value = ""
        icon.innerHTML = `<i class="fa-sharp fa-solid fa-pen-to-square"></i>`
    }
}
expenseForm.addEventListener('submit', (n) =>{
    n.preventDefault();
    budgetFormexpensive(inputexpense.value)
})

//  function Budgetyourexpense(cible) {
//      if (cible) {
//          expensetitle.innerHTML = cible;
//          expenseValue.innerText = cible;
//          inputyourexpense.value = ""
//      }
//  }
//  expenseForm.addEventListener('submit', (b) => {
//      b.preventDefault()
//      Budgetyourexpense(inputyourexpense.value)
//  })


// ============================================= la chartjs ====================================================