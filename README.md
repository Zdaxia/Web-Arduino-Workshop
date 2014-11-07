Web+arduino Workshop
=====================
**Introduction**

Do you want to know how does web works? Do you want to control your physical micro-controller through a web page or create a different web using experience with your Arduino. Let’s start from here. Firstly, we are going to learn some basic concept about frontend and backend JS. Then we are going to connect our Arduino to a web browser using node.js tool, html and javascript.


**Things you need:**
- Computer (Mac preferred)
- Download and install Sublime Text (a text editor)
- Arduino Uno
- USB cable for Arduino UNO
- Some jumper wire
- 1 LED
- 1 Button
- 1 Potentiometer
- 1 breadboard

**Before we start:**<br />
1.  Download and Install Node.js (http://nodejs.org/)<br />
2.  Open terminal: type <br />

    $ node -v

If you get something like “v0.10.20”, it was successful<br />
3. Still in your terminal: type<br />

    $ npm -v

If you get something like “1.3.11”, it was successful.<br />
4. Get your circuit ready (-pic.circuit) and link your arduino to computer.<br />
![alt tag](http://devices4inquiry.aisencc.com/wp-content/uploads/sites/6/2014/11/web-ard.png)<br />
5. Download this repo.

**Play with finished project:**
  1. Download this repo.
  2. Connect your Arduino with your computer.
  3. Open “serialport.ino” in node-arduion-final>arduino>serialport.
  4. Upload this code to your arduino.
  5. Open your terminal. 
  6. Find the usb port arduino is using, type”/dev/tty.usbmodemfd131” in terminal. Save the port you are using. And save it to somewhere.   
  
        /dev/tty.usbmodemfd131

  7. Change directory to  "node-arduino-final”. (You can type “cd” in terminal and drag "node-arduino-final” to your terminal )
  
        cd node-arduino-final

  8. Install modules

        npm install

  9. Open app.js change the “sPort" to your port which you find in step 6.
  
  10. Start the server by runing: 
  
        node app.js

  11. Open your browser type:
  
        localhost:8888



