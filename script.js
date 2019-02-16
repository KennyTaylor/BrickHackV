main();
tokensToHumanReadableAlsoDocumentObjectShit();

class User{
    constructor(products, name) {
        this.products = products;
        this.name = name;
    }
}


var boi = new User(tokens,"Ben Shapiro");

var users = new Array();
users[0] = boi;
//users[1] = User2;




function tokensToHumanReadableAlsoDocumentObjectShit() {
    var leaderboardTable = document.getElementsByTagName("td");
    for (var i = 1; i < tokens.length; i++) {
        addElement("name.........","td");
        addElement(tokens[i],"td");
        addElement("","tr");
    }
}

//stolen (ish) code from mozilla developer thing
function addElement (toke,tpye) {
    // create a new div element
    var newDiv = document.createElement(tpye);
    // and give it some content
    var newContent = document.createTextNode(toke);
    // add the text node to the newly created div
    newDiv.appendChild(newContent);
    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}
