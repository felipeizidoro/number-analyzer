let numbers = document.getElementById('getNumber')
let list = document.getElementById('numberList')
let answer = document.getElementById('answer')
let values = []

function isNumber(number){
    if(Number(number) >= 1 && Number(number) <= 100){
        return true
    } else {
        return false
    }
}

function isList(number, list){
    if(list.indexOf(Number(number)) != -1 ){
        return true
    } else {
        return false
    }
}

function add(){
    if(isNumber(numbers.value) && !isList(numbers.value , values)){
        values.push(Number(numbers.value))
        let item = document.createElement('option')
        item.text = `Value ${numbers.value} added.`
        list.appendChild(item)
        answer.innerHTML = ''
    } else{
        alert('Invalid value or value already added!')
    }
    numbers.value = ''
    numbers.focus()
}

function finish(){
    if(values.length === 0 ){
        alert('Add values ​​before finalizing!')
    } else{
        let total = values.length
        let lessThan = values[0]
        let greaterThan =values[0]
        let sum = 0
        let media = 0   
        for(let position in values){
            sum += values[position]
            if(values[position] > greaterThan)
                greaterThan = values[position]
            if(values[position]< lessThan)
                lessThan = values[position]
        }
        media = sum / total
        answer.innerHTML = ''
        answer.innerHTML += `<p> In total, We have <strong>${total}</strong> numbers registered. </p>`
        answer.innerHTML += `<p> The largest value found is <strong>${greaterThan}</strong>. </p>`
        answer.innerHTML += `<p> The smallest value found is <strong>${lessThan}</strong>. </p>`
        answer.innerHTML += `<p> The sum of all values is <strong>${sum}</strong>. </p>`
        answer.innerHTML += `<p> The average of the entered values ​​is <strong>${media}</strong>. </p>`
    }
}


