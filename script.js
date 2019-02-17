

const randomNumber = 4; // pseudorandom dice roll 1-6
const e = 3; // euler's constant

var db = openDatabase("my.db", "1.0","Database time",100);
db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS bois (token string primary key, user text)");
    });

var insert = function(token,user){
    db.transaction(function(tx){
        tx.executeSql("INSERT INTO bois (token,user) VALUES (?)", [user]);
    });
}

var delyeet = function(){
    db.transaction(function(tx){
        tx.executeSql("DROP TABLE bois");
    });
}
//delyeet(); // Good ol' johnny tables;--

class User{
    constructor(products, name) {
        this.products = products;
        this.name = name;
    }
}
// boye, n. non gender-specific
var boyenames = [
    "Gil Gigliotti",
    "Ben Shapiro",
    "Sherrie Swayne",
    "Thomas Cotton",
    "Alexander Jones",
    "Tameka Tom",
    "Youre Mom",
    "Shanti Schwalb",
    "Thelma Teitelbaum",
    "Georgene Grady",
    "H.P. Lovecraft",
    "Prince Humperdinck",
    "Elongated Muskrat",
    "Temika Tatom",
    "Gayla Gammage",
    "Wilfred Westberry",
    "James Jost",
    "Mobius Richard",
    "Geri Gerry",
    "Abigail Averitt"
];



var bois = [];
// getting the bois ready
for(var i = 0; i < boyenames.length;i++){
    bois[i] = new User(new Array(), boyenames[i]);
    insert("string",bois[i].name); // mySQL magic happens here

}
bois[0].products = ["SVK1","SVK2"]; // replacing a database access assuming we get the api set up
bois[1].products = ["SVK3","SVK4","SVK5"];



function tokensToHumanReadableAlsoDocumentObjectShit(userNum) {


    for (var i = 0; i < bois[userNum].products.length; i++) {
        addElement(addElement(addElement(bois[userNum].name,"p"),"div",addElement(bois[userNum].products[i],"p")),"div");
        //addElement(addElement(users[userNum].products[i],"p"),"div");
    }
}

function scoringBois(userNum) {
    addElement(addElement(addElement(bois[userNum].name,"p"),"div",addElement("Alcoholism Score: "+(bois[userNum].products.length.toString()),"p")),"div");

}

//stolen (ish) code from mozilla developer thing
function addElement (content,tag,content2) {
    // create a new div element
    var newDiv = document.createElement(tag);
    // and give it some content
    if("string" === typeof content) {
            var newContent = document.createTextNode(content);
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    } else {
        newDiv.appendChild(content);
        if(content2){
            newDiv.appendChild(content2);
        }
    }
    if("div"===tag) {
        newDiv.className = "users";
        var currentDiv = document.getElementsByClassName("elements");
        currentDiv[0].appendChild(newDiv);
    }
    // add the newly created element and its content into the DOM

    return newDiv;
}

for(var i=0;i<boyenames.length;i++) {
    //scoringBois(i);
    tokensToHumanReadableAlsoDocumentObjectShit(i);
}
//tokensToHumanReadableAlsoDocumentObjectShit(1);
//parseTokens(boi.products);
