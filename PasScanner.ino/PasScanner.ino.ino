#include <Servo.h>



#include <PN532_HSU.h>




#include <PN532.h>



PN532_HSU pn532hsu(Serial);  // Serial is RX and TX on NodeMCU board

PN532 nfc(pn532hsu);



const int ledPin = LED_BUILTIN;  // the number of the LED pin


Servo myservo;


void setup(void) {

  myservo.attach(7);



  pinMode(ledPin, OUTPUT);

  digitalWrite(ledPin, LOW);

  Serial.begin(115200);



  nfc.begin();



  uint32_t versiondata = nfc.getFirmwareVersion();

  if (!versiondata) {

    //Serial.print("Didn't find PN53x board");

    digitalWrite(ledPin, HIGH);

    while (1)
      ;  // halt
  }

  // configure board to read RFID tags

  nfc.SAMConfig();

  //Serial.println("Waiting for an NFC card...");
}



void loop(void) {

  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming byte:
    String incomingByte = Serial.readString();

    // say what you got:
    if (incomingByte == "a") {
      Serial.println("received ");  //Serial.println(incomingByte);
       myservo.write(180);
    }
    else
    {
      myservo.write(0);
    }
    // myservo.write(100);
    // }
  }else
    {
      myservo.write(0);
    }


  digitalWrite(ledPin, LOW);




  uint8_t success;

  uint8_t uid[] = { 0, 0, 0, 0, 0, 0, 0 };

  uint8_t uidLength;



  success = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A, uid, &uidLength);



  if (success) {

    String s = "ID";

    for (uint8_t i = 0; i < uidLength; i++) {

      //Serial.print(uid[i], HEX);

      s = s + uid[i];
    }

    s.trim();

    if (s.length() > 0) {

      Serial.println(s);
    }

    delay(1000);
  }






  delay(15);
}
