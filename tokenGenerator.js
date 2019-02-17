/**
 * File handles the creation of
 * unique tokens to be handed at production
 *
 *
 * @type {any[]}
 */

//Acts as "outside" DB
var tokens = new Array();
var dictionary = new Map();



//Main method

    var STAGE = {
        ACTIVATED: 1,
        DEACTIVATED: 2
    };
    //testHashes();

    function testHashes(){
        var string1 = new String("Hey");
        var string2 = new String("123");
        var string3 = new String("hey");
        var string4 = new String("hey");

        console.log("Hash function test set\n");
        console.log(string1.hashCode != string2.hashCode);
        console.log(string3.hashCode == string4 + " Strings equate" + string3.hashCode + " " + string4.hashCode);
        console.log(string2.hashCode + " Numerical hashcode");
    }
    function generateHashes() {

        var counter = 0;
        var types = Array("SVK");//, "CRN", "WDD");
        for (var i = 0; i < types.length; i++) {
            for (var j = 0; j < 1; j++) {
                tokens[counter] = counter.toString(16)+ "["+ types[i]+"]" +  (Math.floor(Math.random()*4000)+1000).toString(16);
                console.log(tokens[counter]);
                counter++;
                console.log("random");
            }
        }
        return tokens;

    }


    //Parse the Tokens
    class Product{
        constructor(brand,price, type){
            this.brand = brand;
            this.type = type;
            this.price = price;
        }
    }
    function parseTokens(the_tokens){
        var tokes = the_tokens; //Returns an array

        for (var i = 0; i < tokes.length; i++){
            var numberOfProduct = tokes[i];
            var TypeOfProduct = tokes.slice(tokes.indexOf('['), tokes.indexOf(']'));
            console.log(numberOfProduct, TypeOfProduct);
            //new Product()
        }
    }



