// const players = [
//     { name: 'Player1', team: 'TeamA', runs: 450 },
//     { name: 'Player2', team: 'TeamB', runs: 350 },
//     { name: 'Player3', team: 'TeamC', runs: 500 },
//     { name: 'Player4', team: 'TeamA', runs: 200 },
//     { name: 'Player5', team: 'TeamB', runs: 150 },
//     { name: 'Player6', team: 'TeamC', runs: 600 },
//     { name: 'Player7', team: 'TeamA', runs: 550 },
//     { name: 'Player8', team: 'TeamB', runs: 400 },
//     { name: 'Player9', team: 'TeamC', runs: 300 }
// ];
// let teamName=players[0].team;
// const playersFromSameTeam=[];
// function playersFromTeam(teamName){
//     for(let items of players){
//         if(teamName==items.team){
//             playersFromSameTeam.push(items.name)
//         }
//     }
//     return playersFromSameTeam
// }
// console.log(playersFromTeam(teamName));
// function multiply(params,...theArgs){
//     return  theArgs.map(x=>params*x)
// }
// console.log(multiply(2,1,2,3));
let num=123456;
let text=num.toString();
const arr2=[];
let arr=function(){
    for(let items of text){
        arr2.push(items);
    }
}
arr();
console.log(arr2);
const arr1=arr2.map(x=>{
   return parseInt(x) 
})
console.log(typeof(arr1))