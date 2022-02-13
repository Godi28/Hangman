# Hangman
## Description
A game called hangman where the user gets to guess the name of a hidden colour by individually selecting letters in trying to match all the letters in the hidden colour name.

## Installation
Download and Install Node JS from https://nodejs.org/en/download/. After installation check if it was installed correctly by running 'node -v' and 'npx -v' in command prompt or powershell. 
If installed correctly you should be able to the installed versions. 

![node -v](https://user-images.githubusercontent.com/88197915/153683162-99d54856-48c1-476b-9653-deab7f9803e9.JPG)
![npx -v](https://user-images.githubusercontent.com/88197915/153683171-606b2bd7-26fe-4d04-8acf-207841e6844a.JPG)


Go to the directory where 'hang-man' is located on your local machine in command prompt or powershell and type 'npm i react-scripts'.

After it has loaded in the same directory in command prompt or powershell type 'npm start'. Once it has loaded open a web browser and go to 'localhost:3000' if it has not opened automatically. 
This is where you can play the game.

## Usage
Enter your name in the text box provided and you dont have to worry about submitting.
 
Guess the hidden colour by clicking on the buttons with letters that you think may be in the name of the hidden colour.

Once you have clicked a button once it will be disabled so you can't click it again. If that particular letter exists in the name you are guessing, all occurences of the letter will be shown on the screen.
        
The screen shows how many guesses you have left out of 10 from the beginning and as the game progresses.
     
If you click on a letter that does not exist in the hidden colour's name then a part of a picture of a stick man hanging from a noose will start to appear for every wrong click until finally the whole picture is presented signaling the end of the game and a loss.

The game will alert the user as to whether they have won or lost.
    
