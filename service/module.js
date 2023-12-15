function PlugIn(status) {
    if (status) {
      return [true, new Error("Rice Cooker est déjà branché")];
    }
    return [true, null];
  }
  
  function Unplug(isPluged, isCooking) {
    if (!isPluged) {
      return [true, new Error("Rice Cooker est déjà débranché")];
    } else if (isCooking) {
      return [true, new Error("Rice Cooker est déjà en cours d'utilisation")];
    }
    return [false, null];
  }
  
  function SwitchOn(isCooking, isEmpty, isPluged) {
    if (isCooking) {
      return [true, new Error("Rice Cooker est déjà allumé")];
    } else if (isEmpty) {
      return [false, new Error("Rice Cooker est déjà vide")];
    } else if (!isPluged) {
      return [false, new Error("Rice Cooker est déjà débranché")];
    }
    return [true, null];
  }
  
  function SwitchOff(isCooking) {
    if (!isCooking) {
      return [false, new Error("Rice Cooker est déjà éteint")];
    }
    return [false, null];
  }
  
  function PutSomething(isEmpty) {
    if (!isEmpty) {
      return [false, new Error("Rice cooker est déjà rempli")];
    }
    return [false, null];
  }
  
  function Empty(isEmpty, isCooking) {
    if (isEmpty) {
      return [true, new Error("Rice cooker est déjà vide")];
    } else if (isCooking) {
      return [false, new Error("Rice cooker st déjà en cours de cuisson")];
    }
    return [true, null];
  }
  
  module.exports = {
    PlugIn,
    Unplug,
    SwitchOn,
    SwitchOff,
    PutSomething,
    Empty,
  };