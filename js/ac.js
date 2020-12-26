const width = 7
const home = document.querySelector('.home')
const grid = document.querySelector('.grid')
//grid div seats
let squares = []
let seatingPlan =[]

//layout weekdays 7 * 6  = 42
const layout = [
  
 1, 2, 3, 4, 5, 6, 7, 
 8, 8, 0, 0, 0, 0, 0,  
 0, 0, 0, 0, 0, 0, 0,  
 0, 0, 0, 0, 0, 0, 0,  
 0, 0, 0, 0, 0, 0, 0,  
 0, 0, 0, 0, 0, 8, 8   
 
]
function createBoard() {
    for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        square.setAttribute('id','')
        square.style.fontFamily = '"PT Serif", serif'
        grid.appendChild(square)
        squares.push(square)
        
        if (layout[i] === 1) {
            squares[i].textContent = 'Mon.';
        } else if (layout[i] === 2){
            squares[i].textContent = "Tue.";
        } else if (layout[i] === 3){
            squares[i].textContent = 'Wed.';
        } else if (layout[i] === 4){
            squares[i].textContent = 'Thu.';
        } else if (layout[i] === 5){
            squares[i].textContent = "Fri.";
        } else if (layout[i] === 6){
            squares[i].textContent = "Sat.";
        } else if (layout[i] === 7){
            squares[i].textContent = "Sun.";
        }   
    }
    for(let j = 9; j< squares.length - 2; j++){
        squares[j].innerHTML = `${j-8}`;
        squares[j].style.cursor = 'pointer';
    } 
}
createBoard()

function openCalendar(e){
    console.log(e.target)
    for(let i = 1; i<32;i++)
    if (e.target.textContent == i && e.target.id == ''){
        e.target.setAttribute('id','modal')
        //e.target.style.backgroundImage = days[i];
        e.target.style.backgroundColor = '#ccc';
        e.target.style.color = "#fff";
    
        //<span class="delete">X<span></span>
        e.target.innerHTML = `
        <span>${i}</span>
        <div class="custom-select">
            <select name="" class="pricing">
                <option value="$100">$100</option>
                <option value="$250">$250</option>
                <option value="$500">$500</option>
            </select>
        </div>
        <a class="btn" href="#" target="_blank">
        Buy
        </a>
        `
        //console.log(e.target.querySelectorAll('span')[1]) 
        //e.target.children.querySelector('.delete').addEventListener('click', alert('hi'))
    }else{
        if ( e.target.id == 'i'){
            e.target.setAttribute('id','')
        }
    }
    //e.target.querySelector('.delete').addEventListener('click', closeCalendar)
}
// function closeCalendar(e){
//     //console.log(e.target.nextElementSibling.children)
//     //let closeBtn = e.target.nextElementSibling.children
//     //if (closeBtn.id == 'modal'){
//         console.log('hi')
//     //}
// }

//document.querySelector('.delete').addEventListener('click', closeCalendar)
grid.addEventListener('click', openCalendar)
home.addEventListener('click', function(){
    location.reload()
})
