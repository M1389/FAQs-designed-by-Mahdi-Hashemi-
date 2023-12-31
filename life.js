
let btn1 = document.querySelector('#con1')
let btn2 = document.querySelector('#con2')
let btn3 = document.querySelector('#con3')
let btn4 = document.querySelector('#con4')
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`

function scroll() {
    
    btn1.addEventListener('click' , () => {
        function toggleSVG() {
            var svg1 = document.getElementById('svg1');
            var svg2 = document.getElementById('svg2');
          
            let con = document.getElementById('content-1')
        
            if (svg1.style.display === 'none') {
              svg1.style.display = 'block';
              svg2.style.display = 'none';
              con.style.display = 'none';
              con.style.opacity = '0';
              
            } else {
              svg1.style.display = 'none';
              svg2.style.display = 'block';
              con.style.display = 'block';
              setTimeout(function() {
                con.style.opacity = 1;
                
              }, 500);
              
              
              
            }
        }
        toggleSVG()
    })
    
    
    btn2.addEventListener('click' , () => {
        function toggleSVG() {
            var svg1 = document.getElementById('svg1-2');
            var svg2 = document.getElementById('svg2-2');
          
            let con = document.getElementById('content-2')
        
            if (svg1.style.display === 'none') {
              svg1.style.display = 'block';
              svg2.style.display = 'none';
              con.style.display = 'none';
              con.style.opacity = '0';
              
            } else {
              svg1.style.display = 'none';
              svg2.style.display = 'block';
              con.style.display = 'block';
              setTimeout(function() {
                con.style.opacity = 1;
              }, 500);
              
              
              
            }
        }
        toggleSVG()
    })
    btn3.addEventListener('click' , () => {
        function toggleSVG() {
            var svg1 = document.getElementById('svg1-3');
            var svg2 = document.getElementById('svg2-3');
        
            let con = document.getElementById('content-3')
        
            if (svg1.style.display === 'none') {
              svg1.style.display = 'block';
              svg2.style.display = 'none';
              con.style.display = 'none';
              con.style.opacity = '0';
            } else {
              svg1.style.display = 'none';
              svg2.style.display = 'block';
              con.style.display = 'block';
              setTimeout(function() {
                con.style.opacity = 1;
              }, 500);
            }
        }
        toggleSVG()
    })
    btn4.addEventListener('click' , () => {
        function toggleSVG() {
            var svg1 = document.getElementById('svg1-4');
            var svg2 = document.getElementById('svg2-4');
        
            let con = document.getElementById('content-4')
        
            if (svg1.style.display === 'none') {
              svg1.style.display = 'block';
              svg2.style.display = 'none';
              con.style.display = 'none';
              con.style.opacity = '0';
            } else {
              svg1.style.display = 'none';
              svg2.style.display = 'block';
              con.style.display = 'block';
              setTimeout(function() {
                con.style.opacity = 1;
              }, 500);
            }
        }
        toggleSVG()
    })
    

        
    
    
}

scroll()

/*
function toggleSVG() {
    var svg1 = document.getElementById('svg1');
    var svg2 = document.getElementById('svg2');

    

    if (svg1.style.display === 'none') {
      svg1.style.display = 'block';
      svg2.style.display = 'none';
    } else {
      svg1.style.display = 'none';
      svg2.style.display = 'block';
    }
}
toggleSVG()
*/