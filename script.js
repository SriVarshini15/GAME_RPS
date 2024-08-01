let user_score=0;
let compiler_score=0;
const choices=document.querySelectorAll(".choice");
const res=document.querySelector("#status");
const us=document.querySelector("#userscore");
const cs=document.querySelector("#comscore");

const showwinner=(win,uchoice,cchoice)=>{
    if(win){
        res.innerText=(`You win! Your ${uchoice} beats ${cchoice}`);
        res.style.backgroundColor="green";
        user_score++;
        us.innerText=user_score;
    }else{
        res.innerText=(`You lose. ${cchoice} beats your ${uchoice}`);
        res.style.backgroundColor="red";
        compiler_score++;
        cs.innerText=compiler_score;
    }

}
const compchoice=()=>{
    const ch=["rock","paper","scissor"];
    const comchoice=Math.floor(Math.random()*3);
    return ch[comchoice];
}
const drawgame=()=>{
    res.innerText=("It's a draw. Play Again.");
    res.style.backgroundColor="#4492d6";
}
const Game=(cid)=>{
    const cchoice=compchoice();
    if(cid==cchoice){
        drawgame();
    }
    else{
        let win=true;
        if(cid==="rock"){
            win=cchoice==="paper"?false:true;
        }else if(cid==="paper"){
            win=cchoice==="scissor"?false:true;
        }
        else{
            win=cchoice==="rock"?false:true;
        }
        showwinner(win,cid,cchoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        cid=choice.getAttribute("id");
        Game(cid);
    })
})