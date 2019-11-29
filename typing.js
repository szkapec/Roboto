const box = document.querySelector('.typing')
const text = [
    
    `Cześć nazywam się Mateusz Kaproń i jestem Front-End Developerem!
    Posiadam wyższe wykształcenie informatyczne i 2-letnie doświadczenie w pracy jako programista JavaScript.
    `,
     `Moim celem jest stałe poszerzanie wiedzy dotyczącej najbardziej efektywnych technologii 
    i metod tworzenia aplikacji internetowych. Aktualnie skupiam się na nauce React Hooks. 
    .`,
     "Dziękuje za odwiedzenie mojej strony :) "]

                let oldTime = 0;
                let speed = 60;

                let index = 0;      //calosc
                let textIndex = 0; //od 1-3
                let kopia = box; 

const typing = (newTime) => {
    
    if(newTime - oldTime > speed) {
        const letter = text[textIndex].substr(index,1);
        if(index===text[textIndex].length -1 ) {
            if(textIndex === text.length-1) {
                return;
            }
            return setTimeout(() =>{ //return konczymy dzialanie funkcji
                box.textContent = "";
                index=0;
                textIndex++;
                requestAnimationFrame(typing)
            },3000)
        } else if (index === 0 || letter === "^"){
                const p = document.createElement('p');
                box.appendChild(p);
                kopia = p;
        }
        if(letter !== "^") {
            kopia.textContent += letter;
        }
    oldTime = newTime
    
    
    index++;
    }    
    requestAnimationFrame(typing);
}
typing();

const bars = () => {
              
             
    const tl = new TimelineMax( {onComplete: bars});

    const scale = () => {
        return 0.1 + Math.random()*3
    }
    const color = () =>{
        const colors = ['green', 'red', 'yellow'];
        return colors[Math.floor(Math.random()*3)]
    }

    const barsElement = document.querySelectorAll("#voice-bars > *")
    tl.set(barsElement, {y: -30, transformOrigin: '50% 50%'}) //zaczyna sie animacja w polowie obrazka
    tl.staggerTo(barsElement, 0.6 , { scaleY: scale, repeat: 1, yoyo: true, fill: color, ease: Bounce.easeIn }, .10) //dla kazdego elementu i iteracji
    return tl;
}
const blink = () => { //mruganie
    const tl = new TimelineMax({ repeat: -1, repeatDelay: 3, delay: 2});
    const eyes = document.querySelectorAll('#eye-right, #eye-left')
    tl
    .set(eyes, {transformOrigin: '50% 50%'})
    .to(eyes, .1, {scaleY: 0, fill: "#231f20"})
    .to(eyes, .1, {scaleY: 1, fill: "#48b3e6"})
    .to(eyes, .15, {scaleY: 0, fill: "#231f20"}, '+=0.5')
    .to(eyes, .1, {scaleY: 1, fill: "#48b3e6"})
    .to(eyes, .18, {scaleY: 0, fill: "#231f20"}, '+=1.5')
    .to(eyes, .18, {scaleY: 1, fill: "#48b3e6"})
    return tl;
}

const move = (legs) => { //nogi
    const tl = new TimelineMax();
    tl.staggerTo(legs, .5, {y:-60, repeat: -1, yoyo: true, ease: Power0.easeNone}, 0.5)
    return tl;
}

  //master
const master = new TimelineMax();
master.add("start")
master.add(bars(), 'start')
master.add(blink(), 'start')
master.add(move(document.querySelectorAll('#leg-right, #leg-left')), 'start')