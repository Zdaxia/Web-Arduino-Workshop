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


void setup()
{
  pinMode(ledPin, OUTPUT);
  Serial.begin(9600);
}
 
void loop()
{
 
 
 if(Serial.available()>0){
   int incomingByte=Serial.read();
   
   if(incomingByte==1){
     digitalWrite(ledPin,1);
   }else if(incomingByte==0){
      digitalWrite(ledPin,0);
   }
 
 }
 
 sensorVal=analogRead(potentiometerPin);
 
if(prevVal!=sensorVal){
  Serial.print('B');
   Serial.print(sensorVal);
    Serial.print('E');
    prevVal=sensorVal;
}

buttonState=digitalRead(buttonPin);
Serial.print('J');
Serial.print(buttonState);
Serial.print('K');

  
  delay(500);
  
}
