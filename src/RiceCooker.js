const prompt = require('prompt-sync')();
const myModule = require('./service/module');

class RiceCooker {
  constructor() {
    this.isPluged = false;
    this.isEmpty = true;
    this.isCooking = false;
  }
}

const riceCooker = new RiceCooker();

while (true) {
  console.log("\nRICE COOKER");
  console.log("------------------------");
  console.log("\nMenu:\n");
  console.log("1- Brancher");
  console.log("2- Mettre du riz");
  console.log("3- Allumer");
  console.log("4- Eteindre");
  console.log("5- Vider");
  console.log("6- Débrancher");
  console.log("7- Quitter\n");

  const choice = prompt("Que souhaitez-vous faire ?: ");

  if (choice === "1") {
    const [res, err] = myModule.PlugIn(riceCooker.isPluged);
    riceCooker.isPluged = res;
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("\nRice Cooker branché\n");
    }
  } else if (choice === "2") {
    const [res, err] = myModule.PutSomething(riceCooker.isEmpty);
    riceCooker.isEmpty = res;
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("\nRice Cooker prêt!\n");
    }
  } else if (choice === "3") {
    const [res, err] = myModule.SwitchOn(
      riceCooker.isCooking,
      riceCooker.isEmpty,
      riceCooker.isPluged
    );
    riceCooker.isCooking = res;
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("\nRice Cooker allumé!\n");
    }
  } else if (choice === "4") {
    const [res, err] = myModule.SwitchOff(riceCooker.isCooking);
    riceCooker.isCooking = res;
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("\nRice Cooker éteint!\n");
    }
  } else if (choice === "5") {
    const [res, err] = myModule.Empty(riceCooker.isEmpty, riceCooker.isCooking);
    riceCooker.isEmpty = res;
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("\n Votre rice cooker est vide, mettez quelque chose à cuire!\n");
    }
  } else if (choice === "6") {
    const [res, err] = myModule.Unplug(riceCooker.isPluged, riceCooker.isCooking);
    riceCooker.isPluged = res;
    if (err) {
      console.log("Error: ", err);
    } else {
      console.log("\nRice Cooker débranché!\n");
    }
  } else if (choice === "7") {
    console.log("Au revoir !!");
    break;
  } else {
    console.log("");
  }
}