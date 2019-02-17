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

function main() {
    var STAGE = {
        ACTIVATED: 1,
        DEACTIVATED: 2
    };
    // testHashes();
    generateHashes();

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
        var types = Array("SVK", "CRN", "WDD");
        for (var i = 0; i < types.length; i++) {
            for (var j = 0; j < 10; j++) {
                tokens[counter] = counter.toString(16)+ "["+ types[i]+"]" +  Math.random(1000,5000).toString(16);
                console.log(tokens[counter]);
                counter++;
            }
        }
        return tokens;

    }
    //Call Hashcode on String { str.hashCode() }
    // String.prototype.hashCode = function() {
    //     var hash = 0;
    //     //Hash for nothing == 0
    //     if (this.length == 0) return hash;
    //     for (i = 0; i < this.length; i++) {
    //         char = this.charCodeAt(i);
    //         hash = ((hash<<5)-hash)+char;
    //         hash = hash & hash; // Convert to 32bit integer
    //     }
    //     return hash;
    // }

};
main();
//Tester function that popullates the array


