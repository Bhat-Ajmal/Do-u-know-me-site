var readlinesync=require('readline-sync');
var name=readlinesync.question('HEY!! what is your name? ');
var welcomeMessage='You are welcome '  + name + ' to play my game DO YOU KNOW ME ';
console.log(welcomeMessage);
score=0;

function game(question,answer) {
var rightAnswer=answer;
var answerByUser=readlinesync.question(question);
    console.log('you entered '+ answerByUser);
if(rightAnswer.toUpperCase()==answerByUser.toUpperCase()) {
    console.log('you are right!');
    score++;
    console.log('You scored 1 point');
}
else{
    console.log('you are wrong!');
    score--;
}
}
    arrayGame=[{
    question: 'where do I live? ',
    answer: 'kashmir'
    }, {
    question: 'what was the my main subject in my college? ',
    answer: 'it'
    }, {
    question: 'what is my aim in my life? ',
    answer: 'software engineer'
    }, {
    question: 'Am I married? ',
    answer: 'no'
    }, {
    question: 'My dream company to crack is? ',
        answer: 'google'
    }, {
        question: 'My favourite cricketer is? ',
        answer: 'Virat'
    },]

    for(i=0;i<arrayGame.length;i++) {
                                    
    game(arrayGame[i].question,arrayGame[i].answer);
 }

 console.log('your final score is: ' + score);


