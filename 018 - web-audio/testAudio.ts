namespace test_audio {

  export function testAudio() {
    function htmlLog(...data) {
      console.log(`[testAudio]`, ...data);
    }

    let audioCtx: AudioContext;
    let analyser: AnalyserNode;
    let frequencyData: Uint8Array;

    if (navigator.mediaDevices.getUserMedia) {
      htmlLog('getUserMedia supported.');
      const constraints = { audio: true }
      navigator.mediaDevices.getUserMedia(constraints)
        .then(
          function (stream) {
            // 在`getUserMedia`返回前创建的`AudioContext`, `state`为`suspended`
            audioCtx = new ((window as any).AudioContext || (window as any).webkitAudioContext)();
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 32;
            analyser.smoothingTimeConstant = 0.2;

            const bufferLengthAlt = analyser.frequencyBinCount;
            console.log(bufferLengthAlt);
            frequencyData = new Uint8Array(bufferLengthAlt);

            const source = audioCtx.createMediaStreamSource(stream);
            source.connect(analyser);
            analyser.connect(audioCtx.destination);

            htmlLog("voice recorder create succeed!");

            const traceIntensity = function () {
              window.requestAnimationFrame(traceIntensity);

              analyser.getByteFrequencyData(frequencyData);
              htmlLog(frequencyData[0]);
            };

            traceIntensity();
          })
        .catch(function (err) { htmlLog('The following gUM error occured: ' + err); })
    } else {
      htmlLog('getUserMedia not supported on your browser!');
    }
  }

  // testAudio();
}