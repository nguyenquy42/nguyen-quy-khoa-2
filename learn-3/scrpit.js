let url =  fetch("https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple")
let correct_answer = null; // global variable
let h = 0;
let global_data = null;
function start() {
    document.querySelector("#choitraloi").style.display = "flex";

    url.then(response => response.json())
        .then(data => {
            global_data = data;
            render(h, data)
        });
       

}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
}
function render(h, data)
{
    document.getElementById("question").innerHTML = "Câu " + parseInt(h) + ": " + data.results[h].question
    let Arr = data.results[h].incorrect_answers
    let dapandung = data.results[h].correct_answer
    correct_answer = dapandung;
    Arr.push(data.results[h].correct_answer)
    Arr = shuffle(Arr);
    console.log(Arr)
    for (let i = 0; i < 4; i++) {
        document.getElementById("ans").innerHTML += '<input type="radio" class="form-check-input"  id="radio'+i+' "name="dapan" value="'+ Arr[i] +'">' + ". " + Arr[i] + "</br>"
    }
}
function kiemtra() {
    let dapandung = document.querySelector('input[name = dapan]:checked').value;
    console.log(dapandung);
    console.log(correct_answer);

    if(dapandung == correct_answer)
    {
        alert('Correct');
        h = h +1;
        document.getElementById("question").innerHTML = '';
        document.getElementById("ans").innerHTML = '';
        render(h, global_data)
    } else {
        alert('Wrong');
    }
    
}