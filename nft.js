/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name, _element, _type, _rarity) {
    const NFT = {
        "name": _name,
        "element": _element,
        "type": _type,
        "rarity": _rarity,
    }

    NFTs.push(NFT);
    console.log("New NFT! A " + _rarity + " " + _name + " has been minted.");
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("\nID: Name (Rarity, Element, Type)");
    for(let i = 0; i < NFTs.length; i++) {
        console.log((i+1) + ":\t" + NFTs[i].name + " (" + NFTs[i].rarity + " " + NFTs[i].element + " " + NFTs[i].type + ")");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nNFT Total Supply: " + NFTs.length);
}

// call your functions below this line
mintNFT("Dawnblade of Solaris","Fire","Longsword","Legendary");
mintNFT("Frostbite Aegis","Ice","Shield","Epic");
mintNFT("Tempest Spear","Lightning","Spear","Rare");
mintNFT("Gale\’s Requiem","Wind","Bow","Mythic");
mintNFT("Obsidian Fang","Earth","Dagger","Uncommon");

listNFTs();
getTotalSupply();
