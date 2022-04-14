import React  from 'react';
import { useEffect } from 'react';
import { Quagga } from 'quagga';
import { Container, Video } from './styles';



function Main() {
  useEffect(() => {
    if (navigator.mediaDevices && typeof navigator.mediaDevices.getUserMedia === 'function') {
      Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#yourElement')    // Or '#yourElement' (optional)
        },
        decoder : {
          readers : ["code_128_reader"]
        }
      }, function (err) {
          if (err) {
              console.log(err);
              return 
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
      });
      
    }



  });


  return (
    <div>
      <Video />
      <Container/>
    </div>

  );
}

export default Main;
