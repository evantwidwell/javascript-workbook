Towers of Hanoi Script

We will need to write a script to do each of the following:

-take in a set of moves from the console
in my code this is the function getPrompt()

-check to see if those moves are legal
in my code this is the function checkForWin()

-if they are legal, move the blocks as described
if the moves are legal, the function next calls movePieces()

-if they are not, notify the user and request a new move
if not it tells the user and calls getPrompt()

-once the blocks are moved, check to see if they have completed a winning move
movePieces calls checkForWin() after moving pieces

-if so inform the user and stop the program
I checked the length of the arrays to check for win. If either stack 'b' or stack 'c' were able to get a length of 4, this would indicate they were a winning move and will return a message indicating that you have won.

-if a winning solution has not been reached, inform the user and ask for the next move
If a win is not reached, the user is notified and getPrompt() is called to begin another turn