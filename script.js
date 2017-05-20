function fizzit() {
    var numbers=document.getElementById("number").value;
    var string="";
    for (var i = 0; i < numbers; i++) {
        if(i%3==0 && i%5==0){
            string +="FizzBuzz<br>"
        }else if (i%3==0) {
            string +="Fizz<br>"
        }else if (i%5==0) {
            string +="Buzz<br>"
        }else{
            string += i + "<br>"
        }
    }
    document.getElementById("resultBox").innerHTML=string
}