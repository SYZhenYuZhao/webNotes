
let nowDate = new Date();

let a = handleTime(nowDate);
console.log(a)
//1、将获取的时间向下取整
function handleTime (nowDate) {
    let nowHour = nowDate.getHours(),
        nowMin = minInit(nowDate.getMinutes()),  
        futureTime=[],
        pastTime=[];
    //循环分钟
    for(i=1;i<9;i++){
        let Min = nowMin;
        if(i!=8){
            futureTime.push(nowMin + 15 * i);
        }
        pastTime.push(nowMin - 15 * i)
    }
    pastTime.reverse();
    futureTime = formateTime(futureTime, nowHour, nowDate);
    pastTime= formateTime(pastTime,nowHour,nowDate);
    let newHour = nowHour < 10 ? "0" + nowHour : nowHour;
    let currentTime = newHour+':'+nowMin;
    return [...pastTime,currentTime,...futureTime]
}   
//分钟初始化
function minInit(nowMin){
    let remainder = nowMin%15;
    if(remainder===0){
        return nowMin;
    }
    return nowMin- remainder;
}
//分钟处理器
function formateTime (minArr, nowHour, nowMin) {
    let newArr = [];
    minArr.map(item =>{
        let hours = Math.floor(item / 60);
        if(item>0){
            if (hours == 0) {
                let newItem = item==0?'00':item;
                newHour = nowHour<10?"0"+nowHour:nowHour;
                newArr.push(newHour+':'+ item);
            } else {
                let min = item%60
                let newItem = min == 0 ? '00' : min;
                let newHour = nowHour + hours;
                if(newHour>=24){
                    newHour=newHour-24;
                }
                newHour = newHour<10?"0"+newHour:newHour;
                newArr.push(newHour+':'+ newItem);
            }
        }else{
            if (hours == 0) {
                let newHour;
                if(item!=0){
                    newHour = nowHour-1;
                }else{
                    newHour = nowHour;
                }
                let newItem = item==0?'00':60+item;
                if(newHour<0){
                    newHour= 24+ newHour;
                }
                newHour = newHour<10?"0"+newHour:newHour;
                newArr.push(newHour+':'+ newItem);
            } else {
                let min = item % 60;
                let newItem = min==0?'00':60+min;
                let newHour = nowHour + hours;
                if (newHour < 0) {
                    newHour = newHour + 24;
                }
                newHour = newHour<10?"0"+newHour:newHour;
                newArr.push(newHour +':'+ newItem);
            }
        }
    })
    return newArr;
}
