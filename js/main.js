<!DOCTYPE html>
<html>
    <head>
        <title id="title">Minesweeper!</title>
        <link rel="stylesheet" href="css/main.css">
    </head>

    <body>

    <h2 id="heading">Minesweeper!</h2>

    <p id="desc">Welcome to Minesweeper! Your objective is to indentify
        all mines on the play board. Left-clicking a square will reveal a
        number, indicating how many mines lie in the squares surrounding that
        square. Right-click a square to indicate you believe there is a mine there.
        Flag all mines to win!
    </p>

    <p id="nFlags">Number of flags: 100</p>
	<div class="buttonHolder">
		<button type="button" id="button" onclick="changeDifficulty(0)">Beginner</button>
        <button type="button" id="button" onclick="changeDifficulty(1)">Medium</button>
        <button type="button" id="button" onclick="changeDifficulty(2)">Hard</button>
        <button type="button" id="button" onclick="game.gameBoard.createBoard()">Test array</button>
        <button type="button" onclick="populateGameBoard()">Create Board</button>
	</div>
	
    <p id="testArray">Output is: </p>
    
    <div id="gameBoard"></div>

    </body>

    <script src="js/main.js"></script>

</html> 
