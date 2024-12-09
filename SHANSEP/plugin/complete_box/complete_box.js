var captionLength = 0;
var caption = '';
const audio_src= new Audio("https://cdn.pixabay.com/download/audio/2022/03/10/audio_7eef141153.mp3?filename=chalk-on-chalkboard-32542.mp3")
const boxes = document.getElementsByClassName("atb");

const boxpressed = e => {
    audio_src.play()
    audio_src.volume=.25
    caption=e.target.textContent; 
    widthEl=getComputedStyle(e.target).width;
    heightEl=getComputedStyle(e.target).height;
    e.target.textContent="";//clean box      
    e.target.style.width=widthEl;
    e.target.style.height=heightEl ;   
    e.target.style.color = "#001d51";  // changes color of font     
    typeSentence(caption,e,160); 
    

  };

for (let box of boxes) {
box.addEventListener("click", boxpressed);
};

function type(e) {
    e.target.textContent=caption.substr(0, captionLength++);
    if(captionLength < caption.length+1) {
        setTimeout(type(e), 1000);
    } else {
        captionLength = 0;
        caption = '';
    }
};

async function typeSentence(sentence, eleRef, delay = 10) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length+1) {
      await waitForMs(delay);
      eleRef.target.textContent=sentence.substr(0, i);
      i++
    }
    audio_src.pause();
    audio_src.currentTime = 0;
    return;
  }
  
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }



