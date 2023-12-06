const clock = ()=>{
    let date = new Date()

    let month_num = date.getMonth()
    let day = date.getDate()
    let hours = date.getHours()
    let minute = date.getMinutes()
    let secund = date.getSeconds()

    if(day <=9)day ="0"+day
    if(hours <=9)hours ="0"+hours
    if(minute <=9)minute ="0"+minute    
    if(secund <=9)secund ="0"+secund

    let month = [" янв "," фев "," мар "," апр "," май "," июн "," июл "," авг "," сен "," окт "," ноя "," дек "]
    console.log(month[11])

    let date_time = hours + ": " + minute + ": " + secund

    let element = document.getElementById("time")
    element.innerHTML=date_time

    setTimeout(() => {
        clock()
    }, 1000);

}

clock()

