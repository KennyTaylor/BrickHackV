
class User{
    constructor(products, name) {
        this.products = products;
        this.name = name;
    }
}
var boisProducts = generateHashes();

var boi = new User(boisProducts,"Ben Shapiro");
var boi2 = new User(generateHashes(),"Bencil Sharpeniro");

var users = [];
users[0] = boi;
users[1] = boi2;



function tokensToHumanReadableAlsoDocumentObjectShit(userNum) {


    for (var i = 0; i < users[userNum].products.length; i++) {
        addElement(addElement(users[userNum].name,"p"),"div",addElement(users[userNum].products[i],"p"));
        //addElement(addElement(users[userNum].products[i],"p"),"div");

    }
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
    newDiv.className = "users";

    // add the newly created element and its content into the DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
    return newDiv;
}


tokensToHumanReadableAlsoDocumentObjectShit(1);
tokensToHumanReadableAlsoDocumentObjectShit(0);
parseTokens(boi.products);

