import React from 'react';
// import Time from './Component/Time';
const Calculator = () => {
    // Time()
    const Time = () => {
        let hr = document.querySelector('#hr');
        let mn = document.querySelector('#mn');
        let sc = document.querySelector('#sc');
        
        setInterval(() => {
    
            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * 6;
            let ss = day.getSeconds() * 6;
    
            hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
    
            // digital clock//
            let hours = document.getElementById('hours');
            let minutes = document.getElementById('minutes');
            let seconds = document.getElementById('seconds');
            let ampm = document.getElementById('ampm');
    
            let h = new Date().getHours();
            let m = new Date().getMinutes();
            let s = new Date().getSeconds();
    
            let am = h >= 12 ? "PM" : 'AM'
    
            // convert 24hr clock to 12hr clock
            if (h > 12) {
                h = h - 12;
    
            }
    
            // add zero before single digit number//
            h = (h < 10) ? "0" + h : h
            m = (m < 10) ? "0" + m : m
            s = (s < 10) ? "0" + s : s
    
            hours.innerHTML = h;
            minutes.innerHTML = m;
            seconds.innerHTML = s;
            ampm.innerHTML = am;
    
        })
    }
    Time() 
  return (
    <div className="container">
      <div className="clock">

        <div className="circle" id="sc" style={{"--clr": "#04fc43;"}}><i /></div>
        <div className="circle circle2" id="mn" style={{"--clr": "#fee800"}}><i /></div>
        <div className="circle circle3" id="hr" style={{"--clr": "#ff2972"}}><i /></div>
        {/* <!-- <div class="circle circle4"></div> --> */}

        <span style={{"--i": "1"}}><b>1</b></span>
        <span style={{"--i": "2"}}><b>2</b></span>
        <span style={{"--i": "3"}}><b>3</b></span>
        <span style={{"--i": "4"}}><b>4</b></span>
        <span style={{"--i": "5"}}><b>5</b></span>
        <span style={{"--i": "6"}}><b>6</b></span>
        <span style={{"--i": "7"}}><b>7</b></span>
        <span style={{"--i": "8"}}><b>8</b></span>
        <span style={{"--i": "9"}}><b>9</b></span>
        <span style={{"--i": "10"}}><b>10</b></span>
        <span style={{"--i": "11"}}><b>11</b></span>
        <span style={{"--i": "12"}}><b>12</b></span>
      </div>

      <div id="time">
        <div id="hours" style={{"--clr ": "#ff2972"}}>00</div>
        <div id="minutes" style={{"--clr": "#fee800"}}>00</div>
        <div id="seconds" style={{"--clr": "#04fc43"}}>00</div>
        <div id="ampm">AM</div>
      </div>
    </div>
  );
};

export default Calculator;
