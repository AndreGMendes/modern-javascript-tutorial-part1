const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const rec = new SpeechRecognition();

rec.lang = 'en-US';
rec.continuous = true;

rec.onresult = function (e) {

  const acceptedColors = [
    'red',
    'blue',
    'green',
    'yellow',
    'pink',
    'brown',
    'purple',
    'orange',
    'black',
    'white',
    'aqua',
    'pink'
  ];

  for (let i = e.resultIndex; i < e.results.length; i++) {
    const script = e.results[i][0].transcript.toLowerCase().trim();
    console.log(script)

    if (acceptedColors.includes(script)) {
      document.body.style.backgroundColor = script;
      if (script === 'black') {
        document.querySelector('h1').style.color = 'white'
        document.querySelector('h1').innerText = `${script}`
      } else {
        document.querySelector('h1').style.color = 'black'
        document.querySelector('h1').innerText = `${script}`;
      }
    } 
    else {
      document.querySelector('h1').innerText = `${script} :: Colors only please`
      // alert('Please say a color');
    }
    
  }
};

rec.start();
