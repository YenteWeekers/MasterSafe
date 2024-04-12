# Project Physical Computing - E-credentials app
You will work in teams of 2 students.
In this project you will work on a physical computing project.

## Collect proof of work in the 'sintlucas' folder
* Photo of the end result.
* Video's of tests.
* Technical design (Tinkercad, WokWi, ...).
* ...

## General planning
8 lessons of 3 hours each.

## Phases of the project
Make sure you loop through these phases during the project:

### Proposal 
*You and your colleague were hired by SintLucas to create an app.
This app can store and manage reserved materials by using the student pass.
To ensure data privacy, the app will not store user data.
Everything will be stored on the student pass only.*

#### Components needed:
* NFC reader
* LED

#### Requirements
* Read the ID from the student card with the NFC Reader.
* Turn the LED on if a card was read.
* Create a web page that shows the ID of the student card.

### User stories (M: Must have, S: Should have, C: Could have, W: Won't have)
- As an admin, I want to be able to add materials.
- As an admin, I want to be able to remove materials.
- As an admin, I want to be able to see what materials are borrowed.
- As an admin, I want to be able to see what materials are overdue.
- As an admin, I want to be able to see what materials are lost.
- As an admin, I want to be able to see what materials are available.
- As an admin, I want to be able to scan the student pass to see the user's information.
- As an admin, I want to be able to scan the student pass to see the user's borrowed materials.
- As an admin, I want to be able to scan the student pass to see the user's overdue materials.
- As an admin, I want to be able to scan the student pass to see the user's returned materials.
- As an admin, I want to be able to scan the student pass to see the user's lost materials.
- As an admin, I want to be able to scan the student pass and add material to the user's borrowed materials.
- ...

### Technical design
A USB connection is used to connect an Arduino that can read the student pass.
C++ code for the Arduino:

```cpp
// Doc for board: https://www.tinytronics.nl/shop/nl/development-boards/microcontroller-boards/met-wi-fi/esp8266-nodemcu-v2
// Install Drivers: https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers
// Follow guidelines beneath 'Installing with Boards Manager': https://github.com/esp8266/Arduino
// Elechouse rfid reader: install libraries: https://github.com/elechouse/PN532
// Rfid reader should be in hsu mode: check the switches
// Example code: https://how2electronics.com/interfacing-pn532-nfc-rfid-module-with-arduino/

#include <PN532_HSU.h>
#include <PN532.h>

PN532_HSU pn532hsu(Serial); // Serial is RX and TX on NodeMCU board
PN532 nfc(pn532hsu);

//....

````

An SQLite3 database is used to store information.

Here a diagram of the different components:
![alternative.png](assets%2Falternative.png)

### User Interface design
Very basic, just a web page that shows the ID of the student card.

## Prepare
* Write down the Issues (user stories) in `GitHub Issues` (which will act as your backlog).
* Prioritize the backlog items with the MoSCoW-method. 
* Refine each item into smaller, more technical items (this is called the sprint planning).
  
## Realise: development
* Start developing on the sprint backlog items (ToDo).

Don't forget:
* Pull the changes of your team members regularly.
* Commit and push your changes regularly to prevent merge conflicts.
* Make sure that your code is readable and has comments.

## Test
* Think beforehand how you will test your application/product.
* Make video's/photos of the tests.

## Feedback and feedforward
* During the lessons you will get feedback on your work.
* In the last lesson (4 March) you will present the results to the other teams.
* The teacher will evaluate your work: 
  * Your designs are in line with the requirements.
  * The final product is in line with the designs.
  * The issues have been refined into smaller, more technical items.
  * You can argue why you made certain choices.
  * The product runs smooth and is bug free.
  * The code is clean, readable and follows code conventions.
  * The product has been tested.
  * You can evaluate the process and are open to feedback.
