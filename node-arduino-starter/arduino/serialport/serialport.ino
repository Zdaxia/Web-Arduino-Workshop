//EX. with button and Pot input

const int ledPin = 13; // Led pin

//potentiometer variables
int potentiometerPin = 0;
int sensorVal = A0;
int prevVal = 0;
String inputString = "";

//button variables
int buttonPin=A2;
int buttonState=0; //var for reading the button statis, this changes
int prevButton=0;


void setup(){
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}

void loop(){
  
  //Turn on/off led from webpage
  
  //Use button control web page
  
  //Use potentiometer control web page


  delay(500);

}

