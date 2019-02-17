const randomNumber = 4; // pseudorandom dice roll 1-6
const e = 3; // euler's constant


/*
var db = openDatabase("my.db", "1.0","Database time",100);
db.transaction(function(tx) {
        tx.executeSql("CREATE TABLE IF NOT EXISTS bois (token string primary key, user text)");
    });

var insert = function(token,user){
    db.transaction(function(tx){
        tx.executeSql("INSERT INTO bois (token,user) VALUES (?,?)", [token,user]);

    });
}

var delyeet = function(){
    db.transaction(function(tx){
        tx.executeSql("DROP TABLE bois") // obligatory epic games reference
    });
}
//delyeet(); // Good ol' johnny tables;--
*/
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
    "Michelle Obama",
    "Youre Mom",
    "Shanti Schwalb",
    "Thelma Teitelbaum",
    "Georgene Grady",
    "H.P. Lovecraft",
    "Prince Humperdinck",
    "Elongated Muskrat",
    "Temika Tatom"];

/*
    "Gayla Gammage",
    "Mork Zuccburger",
    "James Jost",
    "Mobius Richard",
    "Geri Gerry",
    "Abigail Averitt"
];
*/


var bois = [];
// getting the bois ready
for(var i = 0; i < boyenames.length;i++) {
    bois[i] = new User(new Array(), boyenames[i]);
    //insert("string",bois[i].name); // mySQL magic happens here
}

bois[0].products = ["WDD1","SVK3","SVK4","SVK11"];// replacing a database access assuming we get the api set up (dont have the api key as of 8:10am sunday
bois[1].products = ["SVK1","SVK2","WDD10","WDD10"];
bois[2].products = ["SVK5","WDD2"];
bois[3].products = ["SVK6"];
bois[4].products = ["SVK7","SVK8"];
bois[5].products = ["SVK9","WDD3","WDD4"];
bois[6].products = ["SVK10","SVK11"];
bois[7].products = ["SVK12"];
bois[8].products = ["SVK13"];
bois[9].products = ["SVK14"];
bois[10].products = ["SVK15"];
bois[11].products = ["SVK16"];
bois[12].products = ["SVK17"];
bois[13].products = ["SVK18"];


function tokensToHumanReadableAlsoDocumentObjectShit(userNum) {
    for (var i = 0; i < bois[userNum].products.length; i++) {
        console.log(userNum);
        addElement(addElement(addElement(bois[userNum].name,"p"),"div",addElement(bois[userNum].products[i],"p"),"users-data"),"div");
        //addElement(addElement(users[userNum].products[i],"p"),"div");

    }
}

function scoringBois(userNum) {
    var marijuanaSkore = 0;
    var alcoholScore = "";
    var marijuanaScore = "";
    for(var i = 0;i < bois[userNum].products.length; i++){
        if(bois[userNum].products[i].substring(0,1) === "W"){
            marijuanaSkore++;
        }
    }
    for(var i = 0;i<marijuanaSkore;i++){
        marijuanaScore=marijuanaScore+"🍁";

    }
    for(var i=0;i<bois[userNum].products.length-marijuanaSkore;i++){
        alcoholScore=alcoholScore+"🍺";
    }
    addElement(addElement(addElement(bois[userNum].name,"p"),"div",addElement("Alcohol: "+alcoholScore+"  Weed: "+marijuanaScore,"p")),"div");

}

//stolen (ish) code from mozilla developer thing
function addElement (content,tag,content2,clasName) {
    // create a new div element
    addElement(addElement(addElement(bois[userNum].name,"p"),"div",addElement("Alcohol: "+alcoholScore+" Weed: "+marijuanaScore,"p")),"div");

}


function addElement (content,tag,content2) {
>>>>>>> Stashed changes
    var newDiv = document.createElement(tag);
    if("string" === typeof content) {
            var newContent = document.createTextNode(content);
        newDiv.appendChild(newContent);
    } else {
        newDiv.appendChild(content);
        if(content2){
            newDiv.appendChild(content2);
        }
    }
    if(tag === "div") {
            newDiv.className = "users";
            var currentDiv = document.getElementsByClassName("elements");
            currentDiv[0].appendChild(newDiv);
    }

    return newDiv;
}
var swap = function(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
};


    for (var i = 0; i < bois.length; i++) {
/* // failed click listener
var users = document.getElementsByClassName("users");
for(var i = 0;i<users.length;i++){
    users[i].addEventListener('click', function(){console.log("click")}
        //tokensToHumanReadableAlsoDocumentObjectShit(i)
    );
    scoringBois(i);
    //tokensToHumanReadableAlsoDocumentObjectShit(i);
}*/


/*
$(function() {
    var users = document.getElementsByClassName('div.users');
    $("div.users").each(users,function(index){
        this.on("click", function(){
            console.log("Click");
            tokensToHumanReadableAlsoDocumentObjectShit(index);
        });
    });
});*/
//parseTokens(boi.products);
