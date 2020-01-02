# HymnTron

HymnTron is a Deep Neural Networks based automatic music composer. 

Although the history of automatic music composition using Deep Recurrent Neural Networks does not stretch far, there have been other attempts, such as Google's Magenta and a master's dissertation, Bachbot. The basic framework behind these two works and this paper is similar in that it quantizes the musical data into time series form. The differences lie within the processing methods.

Music has a way of moving people's emotions. It sets the mood for one to be immersed in. However, With this great power comes such complexity for one to work with that the genre must be narrowed down. 

With this project, we aim to generate hymn music melody. The music data is in the form of Musical Instrument Digital Interface, hereafter called "MIDI". It contains important information about a music piece such as key signature, time signature, note pitches and BPM. The MIDI data is converted into a quantized sequence and trained based on a carefully structured model. 

A common problem with mixing artificial intelligence and art is that it can infringe on copyright. Since the model learns a specific style of music through the training set, one can wonder if it will create music that is too similar to the original songs. However, in this paper, a variety of scoring functions will be used to ensure that the compositions display a similar compositional distribution while being different from the original songs. 


Try out the survey !
https://jmpark0808.github.io/HymnTron/
