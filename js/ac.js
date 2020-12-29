const date = new Date();

const renderCalendar = () => {
  date.setDate(1);

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div class="addClass">${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();

document.querySelector('.days').addEventListener('click', (e)=>{
    // console.log(e.target)  //div
    //for (let i = 1; i <= lastDay; i++) {
      //e.target.classList.add('addClass')
        if(e.target.classList == 'addClass' ||
          e.target.classList == 'today'){
            e.target.classList.add('createdPanel')
            e.target.innerHTML = `
                <span>${e.target.textContent}</span>
                <div>
                  <select name="" class="pricing">
                      <option value="$100">$100</option>
                      <option value="$250">$250</option>
                      <option value="$500">$500</option>
                  </select>
          
                  <a class="btn">
                  Buy
                  </a>
                </div>
            `  
            e.target.querySelector('.btn').addEventListener('click',(e)=>{
              e.target.parentNode.classList.add('hide')
              console.log(e.target.parentNode.parentNode)
              e.target.parentNode.parentNode.classList.remove('createdPanel')
            })
        }
  })
