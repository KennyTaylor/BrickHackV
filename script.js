const randomNumber = 4; // pseudorandom dice roll 1-6
const e = 3; // euler's constant


var db = openDatabase("database time", "1.0","Database time",100);
var createBOIS = function() {
    db.transaction(function (tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS bois (token string primary key, user text)");
    });
};

var insert = function(token,user){
    db.transaction(function(tx){
        tx.executeSql("INSERT INTO bois (token,user) VALUES (?,?)", [token,user]);

    });
};

var delyeet = function(){
    db.transaction(function(tx){
        tx.executeSql("DROP TABLE bois") // obligatory epic games reference
    });
};
//delyeet(); // Good ol' johnny tables;--
//use for debug n stuff dont forget to comment out

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
    "Gekyume Onfroy",
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
//delyeet()
createBOIS();

var bois = [];
// getting the bois ready
for(i = 0; i < boyenames.length;i++) {
    bois[i] = new User([], boyenames[i]);
}

bois[0].products = ["SVK4f301","SVK4348c2","WDD031c7","WDD255a8"]; // replacing a database access assuming we get the api set up
bois[1].products = ["WDD08c231","SVK93b13","SVKcd234","SVKc29611"];
bois[2].products = ["SVK23085","WDD4c8d2","SVK93b13","SVKcd234"];
bois[3].products = ["SVK23086"];
bois[4].products = ["SVKa3a7","SVK23a58"];
bois[5].products = ["SVK31c29","WDD9d238c3"];
bois[6].products = ["SVK93b19"];
bois[7].products = ["SVK034a10"];
bois[8].products = ["SVKd09c8"];
bois[9].products = ["SVKdc239"];
bois[10].products = ["SVK240810"];
bois[11].products = ["SVKc3548"];
bois[12].products = ["SVKd0239"];
bois[13].products = ["SVKc83410"];



// this is a for statement. this for statement does sql magic.
// if the program works, dont touch this. if it doesnt work, this is the problem
for(let j = 0; j<bois.length;j++){ // 0 to 13
    for(let i = 0;i<bois[j].products.length;i++){ //
        insert(bois[j].products[i],bois[j].name);
    }
}
////sql magic


function tokensToHumanReadableAlsoDocumentObjectShit(userNum) {
    for (let i = 0; i < bois[userNum].products.length; i++) {
        addElement(addElement(addElement(bois[userNum].name,"p"),"div",addElement(bois[userNum].products[i],"p"),"users-data"),"div");
        //addElement(addElement(users[userNum].products[i],"p"),"div");

    }
}

function scoringBois(userNum) {
    let marijuanaSkore = 0;
    let alcoholScore = "";
    let marijuanaScore = "";
    for(let i = 0;i < bois[userNum].products.length;i++){
        if(bois[userNum].products[i].substring(0,1) === "W"){
            marijuanaSkore++;
        }
    }
    for(let i = 0;i<marijuanaSkore;i++){
        marijuanaScore=marijuanaScore+"🍁";

    }
    for(let i = 0;i<bois[userNum].products.length;i++){
        alcoholScore=alcoholScore+"🍺";
    }
    addElement(addElement(addElement(bois[userNum].name,"p"),"div",addElement("Liquor: "+alcoholScore+"  Marijuana: "+marijuanaScore,"p")),"div");

}

//stolen (ish) code from mozilla developer thing
function addElement (content,tag,content2) {// had a parameter clasName here, removed it bc it was unused but i feel like we were using it for something
    // create a new div element
    let newDiv = document.createElement(tag);
    // and give it some content
    if("string" === typeof content) {
            let newContent = document.createTextNode(content);
        // add the text node to the newly created div
        newDiv.appendChild(newContent);
    } else {
        newDiv.appendChild(content);
        if(content2){
            newDiv.appendChild(content2);
        }
    }
    if(tag === "div") {
            newDiv.className = "users";
            let currentDiv = document.getElementsByClassName("elements");
            currentDiv[0].appendChild(newDiv);
    }
    // add the newly created element and its content into the DOM

    return newDiv;
}



//parseTokens(boi.products);
