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

    generateHashes();

    function generateHashes() {

        var counter = 0;
        var types = Array("SVK", "CRN", "WDD");
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                tokens[counter] = j + types[i] + Math.random(1000, 5000);
                console.log(tokens[counter]);
            }
        }

    }

    //Call Hashcode on String { str.hashCode() }
    String.prototype.hashCode = function () {
        var hash = 5381, i = this.length;
        while (i)
            hash = (hash * 33) ^ this.charCodeAt(--i)
        return hash >>> 0;
    }

    /**
     * Params a key to be returned as a hash
     *
     * @param the_key
     * @returns {string}
     */
    function hashCode(the_key) {
        return the_key.charAt(0);
    }
};

main();
//Tester function that popullates the array


