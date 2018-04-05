/*
    Creates a two-dimensional matric graph object
    with connections horizontally, vertically, and diagonally.
    Use case: Boggle game solver

    TO DO:
        -make it more flexible by setting certain connections optional
        -be able to set new connections and remove default ones
        -set min and max length of connection sequences
        -connection sequences are currently assumed to not repeat nodes
        -letters are used for columns but goes into other ASCII values above z
*/
function TwoDimentionMatrixGraph(rows, columns){
	this.graph = {};
    this.nameNodes(rows, columns);
    this.buildConnections();
}

TwoDimentionMatrixGraph.prototype.constructor = TwoDimentionMatrixGraph;

TwoDimentionMatrixGraph.prototype.nameNodes = function(rows, columns){
	//build matrix nodes: letters for columns, numbers for rows
    //in visualizing, the upper-left node is a1, below is a2, etc.
	for (let r=0; r<rows; r++){
		for (let c=0; c<columns; c++){
			//generate letter (eg. a, b, c) from specified ascii value sequence
			let letter = String.fromCharCode(97 + r),
				number = c + 1;//prevents starting from 0 eg: 1, 2, 3, 4
			this.graph[letter + number] = {value: null, connections: []};
			//concatenate letter and number
			//assigns new properties wtihin graph object
			//creates a unique name for each node and an array of connections to
			//all other nodes (this combo of letter and number creates our graph)
		}
	}
}

TwoDimentionMatrixGraph.prototype.buildConnections = function(){
	//build graph connections
  	//list connections between nodes
	for (let key in this.graph){
		let keyCol = key[0],//first character letter of the key
			keyRow = Number(key.slice(1)),
			leftCol = String.fromCharCode(keyCol.charCodeAt(0) -1),//charCodeAt returns an ascii integer based on index, and fromCharCode generates the string based on the ascii value
			rightCol = String.fromCharCode(keyCol.charCodeAt(0) +1),
			aboveRow = keyRow -1,
			belowRow = keyRow +1,
			adjacents = [
				leftCol + aboveRow,
				keyCol + aboveRow,
				rightCol + aboveRow,
				leftCol + keyRow,
				rightCol + keyRow,
				leftCol + belowRow,
				keyCol + belowRow,
				rightCol + belowRow
			];
		for (let i=0; i<adjacents.length; i++){
			if (this.graph.hasOwnProperty(adjacents[i])){
				this.graph[key].connections.push(adjacents[i]);
			}
		}
	}
}

TwoDimentionMatrixGraph.prototype.setValue = function(node, value){
	if (this.graph.hasOwnProperty(node)){
		this.graph[node].value = value;
	}
}
