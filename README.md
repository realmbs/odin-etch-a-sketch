# odin-etch-a-sketch
1. Create a webpage with a 16x16 grid of square divs.
2. Create the divs using JavaScript. Don’t try making them by hand with copy and pasting in your HTML file!
3. It’s best to put your grid squares inside another “container” div (which can go directly in your HTML).
4. Use flexbox to make the divs appear as a grid (versus just one on each line). Despite the name, do not be tempted to research/use CSS Grid for this as Grid will be taught later after the foundations course. This is an opportunity specifically to get more practice in for flexbox!
5. Be careful with borders and margins, as they can adjust the size of the squares!
6. “OMG, why isn’t my grid being created???”
* Did you link your CSS stylesheet?
7. Open your browser’s developer tools.
* Check if there are any errors in the JavaScript console.
* Check your “elements” pane to see if the elements have actually shown up but are somehow hidden.
* Go willy-nilly and add console.log statements in your JavaScript to see if it’s actually being loaded.
8. Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
* Hint: “Hovering” is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
9. There are multiple ways to change the color of the divs, including:
* Adding a new class to the div.
* Changing the div’s background color using JavaScript.
* Add a button to the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. Once entered, the existing grid should be removed and a new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
10. Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
11. Also check out prompts.
12. You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
13. Push your project to GitHub!
# Extra credit
1. Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.
2. Rather than a color change from black to white, each interaction should randomize the square’s RGB value entirely.
3. Additionally, implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.
4. You can choose to do either one or both of these challenges, it’s up to you.