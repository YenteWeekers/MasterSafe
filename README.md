# Project Physical Computing - MasterSafe 10^5000
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
*You and your colleague were hired by a space pirate to create the safest lock in the galaxy, where he will keep his bounty safe from everyone.
To open it, several locks must be deactivated, each with a different method. A LED panel or LCD indicates how many locks are active and when the button is pressed, the buzzer indicates if the combination is totally correct and opens the door."
You will create a safe with several locks that need to be opened in a certain order.*

#### Components needed:
* Distance sensor
* Potentiometer (x2)
* LED (x4)
* Button
* Piezzo
* Light Sensor (optional)
* Serial (optional)
* LCD (optional)

#### Requirements
* Read the inputs from the different components
* Turn the corresponding LED on only if the corresponding input is correct
* When the button is pressed, the buzzer produces one sound pattern if the combination is not correct, and another if it is.
* The correct solution is hardcoded in the sketch file
* Give your safe a nice presentation, for example get creative in the placement of the components, create a faceplate with paper

### User stories (M: Must have, S: Should have, C: Could have, W: Won't have)
* M: As a **space pirat**, I want the system to read inputs from various components so that it can process different types of user interactions.
* M: As a **space pirat**, I want the LED to light up when I enter the correct input so that I know I have made the right selection.
* M: As a **space pirat**, I want the buzzer to emit different sound patterns when I press the button, so that I can understand whether my combination is correct or not.
* M: As a **developer**, I want the correct solution to be hardcoded in the sketch file to ensure consistency in the system's response to user inputs.
* S: As a **product designer**, I want to give the safe a creative presentation, like a unique faceplate design, to make it visually appealing and engaging for the user.
* C: As a **space pirat**, I want the safe to have an additional lock mechanism that utilizes a light or temperature sensor, adding an extra layer of security and interaction.
* C: As a **space pirat**, I want the ability to use a serial number input as an extra lock, ensuring a higher level of security for the contents of the safe.
* C: As a **space pirat**, I want the safe to have an LCD display that reveals the treasure or information when the correc

### Technical design
Create a technical design in TinkerCad or WokWi and save a screenshot in the `sintlucas` folder.

### User Interface design
Create a user interface design (drawing) and save a screenshot in the `sintlucas` folder.

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
