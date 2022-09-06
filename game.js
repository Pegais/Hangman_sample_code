



const categories = [
        "javascript",
    "java",
    "python",
    "ruby",
    "c",
    "c#",
        "golang"
    ]
    
var answer = "";
  
let answerArr;
let strarr=[]
function setAnswer() {
    const givenQuestion = Math.floor(Math.random() * categories.length);
  
    const chosenWord = categories[givenQuestion];
    // console.log(chosenWord);
    answer = chosenWord
    answerArr = answer.split('');
    console.log(answerArr);
}

setAnswer()

takeinput(answerArr)
function takeinput(answerArr) { 
    let success = false;

    for (let i = 0; i < answerArr.length; i++) { 
        let input = prompt("guess the word one by one   HINT!!! coding language")
        if (input.toLowerCase() == answerArr[i].toLowerCase()) { 
            success = true;
        }
        else {
            success = false;
            break;
        }
    }

    if (success) { 
        alert("good goings!");
    } else {
        alert("you lose")
    }
}
