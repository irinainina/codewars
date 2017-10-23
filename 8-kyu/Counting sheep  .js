function countSheeps(arrayOfSheep) {

    return (arrayOfSheep.toString("") + "true").match( /true/ig ).length - 1;

}