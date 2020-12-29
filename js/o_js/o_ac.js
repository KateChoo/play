const width = 7
const home = document.querySelector('.home')
const grid = document.querySelector('.grid')
//grid div seats
let squares = []
//let seatingPlan =[]

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
    //console.log(e.target)
    //console.log(this.children)
    for(let i = 1; i<32;i++)
        //e.target.textContent == i && 
    if (e.target.textContent == i && e.target.id == ''){
        e.target.setAttribute('id','#modal')
        e.target.classList.add('createdPanel')
        e.target.innerHTML = `
        <div class="createdPanel"
            <span>${i}</span>
        
            <select name="" class="pricing">
                <option value="$100">$100</option>
                <option value="$250">$250</option>
                <option value="$500">$500</option>
            </select>
    
            <a class="btn" href="#" target="_blank">
            Buy
            </a>
        </div>
        `
        //console.log(grid.querySelector('a'))
        //console.log(e.target.querySelector('div'))
        //console.log(e.target)
        //console.log(e.target.children)
        //e.target.children.setAttribute('id','modal')
        //e.target.style.backgroundImage = days[i];
        e.target.style.backgroundColor = '#ccc';
        e.target.style.color = "#fff";
    
        //e.target.preventDefault();
        e.target.setAttribute('id','') // 加了這個跳出來的葉面變小
    }else if(e.target.classList.contains('.createdPanel')){
        e.target.style.backgroundColor = '';
        e.target.style.color = "";
        e.target.innerHTML =``
        console.log('hi')
    }
    //e.target.setAttribute('id','')
    //e.target.querySelector('.delete').addEventListener('click', closeCalendar)
    //}
}
function closeCalendar(e){
    // e.target.style.backgroundColor = '';
    // e.target.style.color = "";
    // e.target.innerHTML =``
}

//document.querySelector('.delete').addEventListener('click', closeCalendar)
grid.addEventListener('click', openCalendar)
//grid.querySelector('a').addEventListener('click', closeCalendar)
// grid.querySelector('a').addEventListener('click', function(){
//     location.reload()
// })
