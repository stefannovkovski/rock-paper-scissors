
  let count=0;
  let you=0;
  let pc=0
  const div= document.querySelector('#second');
  const div2= document.querySelector('#third');
  const div3= document.querySelector('#fourth');
  const div4= document.querySelector('#fifth');
  const div5= document.querySelector('#sixth');
  const div6= document.querySelector('#second2');

  div2.textContent=0;
  div3.textContent=0;

  const btn1= document.querySelector('#btn1');
  btn1.addEventListener('click', playRound);
  const btn2= document.querySelector('#btn2');
  btn2.addEventListener('click', playRound);
  const btn3= document.querySelector('#btn3');
  btn3.addEventListener('click', playRound);

  function check(){
  if(you==5 || pc==5)
  {
    if(you==5)
        div6.textContent='The game is over! You are the winner.';
    else
        div6.textContent='The game is over! The computer is the winner.';

    pc=0;
    you=0;

  }
}

  function getComputerChoice(max){
    let choice= Math.floor(Math.random()*max);
    if(choice==0)
        return "Rock";
    else if(choice==1)
        return "Paper";
    else
        return "Scissors";
}

function playRound() {
    const computerSelection = getComputerChoice(3);
    const playerSelection=this.value;
    div6.textContent=" "
    div4.textContent=computerSelection;
    div5.textContent=playerSelection;

    if(playerSelection.toLowerCase() == computerSelection.toLowerCase())
    {
        div.textContent='You are equal! '+ playerSelection +' is equal to '+computerSelection+'.';
    }
    else if(playerSelection.toLowerCase() =="rock" && computerSelection=="Paper" || playerSelection.toLowerCase() =="paper" && computerSelection=="Scissors" || playerSelection.toLowerCase() =="scissors" && computerSelection=="Rock" )
    {
        div.textContent='You are defeated! ' +computerSelection + ' beats '+playerSelection+'.';
        pc++;
    }
    else if(playerSelection.toLowerCase() =="paper" && computerSelection=="Rock" || playerSelection.toLowerCase() =="scissors" && computerSelection=="Paper" || playerSelection.toLowerCase() =="rock" && computerSelection=="Scissors" )
    {
        div.textContent='You have won! '+playerSelection+  ' beats '+computerSelection+'.';
        you++;
    }
    div2.textContent=pc;
    div3.textContent=you;
    check();
}