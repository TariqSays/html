var totalSalary = 0;
var totalExpense = 0;
var balance = 0;

function incomeAdd() {
    var description = document.getElementById('des');
    var expense = document.getElementById('amount');
    console.log(description.value);
    console.log(expense.value);

    var dp = document.createElement('p');
    var liText = document.createTextNode(description.value);
    dp.appendChild(liText);
    //console.log(dp)
    var ddiv = document.getElementById("detaildiv");
    //console.log(ddiv)
    ddiv.appendChild(dp);


    var dp = document.createElement('p');
    var att = dp.setAttribute('class', 'green');
    var liText = document.createTextNode("$" + expense.value);
    dp.appendChild(liText);
    //console.log(dp)
    var amountdiv = document.getElementById("damount");
    //console.log(ddiv)
    amountdiv.appendChild(dp);



    //console.log(typeof totalSalary);
    //console.log(typeof expense.value);
    totalSalary = totalSalary + Number(expense.value);
    var tsalary = document.getElementById('tincome');
    tsalary.innerText = "$" + totalSalary;

    balance = balance + Number(expense.value)
    //totalSalary=0;
    var coll = document.getElementById('bank');
    coll.innerText = "$"+balance;
    description.value = "";
    expense.value = "";
}


function expenseAdd() {
    var description = document.getElementById('des');
    var expense = document.getElementById('amount');
    //console.log(description.value);
    //console.log(expense.value);
    //var entry = description.value +" "+ expense.value



    var dp = document.createElement('p');
    var liText = document.createTextNode(description.value);
    dp.appendChild(liText);
    //console.log(dp)
    var ddiv = document.getElementById("detaildiv");
    //console.log(ddiv)
    ddiv.appendChild(dp);


    var dp = document.createElement('p');
    var att = dp.setAttribute('class', 'red');
    var liText = document.createTextNode("$" + expense.value);
    dp.appendChild(liText);
    //console.log(dp)
    var amountdiv = document.getElementById("damount");
    //console.log(ddiv)
    amountdiv.appendChild(dp);
    //amountdiv.style.borderRight = "1px solid red"
    //dp.style.borderRight = "1px solid red"


    //    console.log(typeof totalSalary);
    //  console.log(typeof expense.value);
    totalExpense = totalExpense + Number(expense.value);
    //expense.value = 0;
    var tsalary = document.getElementById('texpense');
    tsalary.innerText = "$" + totalExpense;

    balance = balance - Number(expense.value);
    console.log(balance);
    //totalExpense = 0;
    var coll = document.getElementById('bank');
    coll.innerText = "$"+balance;
    description.value = "";
    expense.value = "";
}

// function balance(){
//     rembalance = totalSalary-totalExpense;
//     var coll = document.getElementById('bank');
//     coll.innerText = balance;
// }