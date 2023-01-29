
setInterval(() =>{
    //pegar so valores atraves do id
let horas = document.getElementById("horas");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");
let ampm = document.getElementById("ampm");
let hh = document.getElementById("hh");
let mm = document.getElementById("mm");
let ss = document.getElementById("ss");

//pegar valores atraves das classes
let hr_dots = document.querySelector('.hr_dots');
let min_dots = document.querySelector('.min_dots');
let sec_dots = document.querySelector('.sec_dots');
    //criar um objeto do tipo data para pegar as horas/minutos e segundos
 let h = new Date().getHours();
 let m = new Date().getMinutes();
 let s = new Date().getSeconds();
 //operador unario para verificar as horas
 let am = h >= 12 ? "PM":"AM";
//cindicao para conversao de horas
 if (h > 12) {
    h = h -12;
}
//oparador unario para colocar 0 para valores abaixo de 10
h = (h < 10) ? "0" + h :h;
m = (m < 10) ? "0" + m :m;
s = (s < 10) ? "0" + s :s;
//atribuir os valores do objeto date para as dives
horas.innerHTML = h + '<br><span>horas</span>';
minutos.innerHTML = m + '<br><span>Minutos</span>';
segundos.innerHTML= s + '<br><span>Segundos</span>';
ampm.innerHTML= am;

hh.style.strokeDashoffset = 440 - (440 * h)/12;
//fazer a barra acompanhar as horas
mm.style.strokeDashoffset = 440 - (440 * m)/60;
//fazer a barra acompanhar os minutos
ss.style.strokeDashoffset = 440 - (440 * s)/60;
//fazer a barra acompanhar os segundos

hr_dots.style.transform = `rotate(${h * 30}deg)`;
//360/12=30
min_dots.style.transform = `rotate(${m * 6}deg)`;
//360/60=6
sec_dots.style.transform = `rotate(${s * 6}deg)`;
//360/60=6


})


