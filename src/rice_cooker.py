class RiceCooker:
    def __init__(self):
        self.is_plugged = False
        self.is_empty = True
        self.is_cooking = False

rice_cooker = RiceCooker()

def plug_in(status):
    if status:
        return [True, ValueError("Rice Cooker est déjà branché")]
    return [True, None]

def unplug(is_plugged, is_cooking):
    if not is_plugged:
        return [True, ValueError("Rice Cooker est déjà débranché")]
    elif is_cooking:
        return [True, ValueError("Rice Cooker est déjà en cours d'utilisation")]
    return [False, None]

def switch_on(is_cooking, is_empty, is_plugged):
    if is_cooking:
        return [True, ValueError("Rice Cooker est déjà allumé")]
    elif is_empty:
        return [False, ValueError("Rice Cooker est déjà vide")]
    elif not is_plugged:
        return [False, ValueError("Rice Cooker est déjà débranché")]
    return [True, None]

def switch_off(is_cooking):
    if not is_cooking:
        return [False, ValueError("Rice Cooker est déjà éteint")]
    return [False, None]

def put_something(is_empty):
    if not is_empty:
        return [False, ValueError("Rice cooker est déjà rempli")]
    return [False, None]

def empty(is_empty, is_cooking):
    if is_empty:
        return [True, ValueError("Rice cooker est déjà vide")]
    elif is_cooking:
        return [False, ValueError("Rice cooker st déjà en cours de cuisson")]
    return [True, None]


while True:
    print("\nRICE COOKER")
    print("------------------------")
    print("\nMenu:\n")
    print("1- Brancher")
    print("2- Mettre du riz")
    print("3- Allumer")
    print("4- Eteindre")
    print("5- Vider")
    print("6- Débrancher")
    print("7- Quitter\n")

    choice = input("Que souhaitez-vous faire ?: ")

    if choice == "1":
        res, err = plug_in(rice_cooker.is_plugged)
        rice_cooker.is_plugged = res
        if err:
            print("Error: ", err)
        else:
            print("\nRice Cooker branché\n")
    elif choice == "2":
        res, err = put_something(rice_cooker.is_empty)
        rice_cooker.is_empty = res
        if err:
            print("Error: ", err)
        else:
            print("\nRice Cooker prêt!\n")
    elif choice == "3":
        res, err = switch_on(rice_cooker.is_cooking, rice_cooker.is_empty, rice_cooker.is_plugged)
        rice_cooker.is_cooking = res
        if err:
            print("Error: ", err)
        else:
            print("\nRice Cooker allumé!\n")
    elif choice == "4":
        res, err = switch_off(rice_cooker.is_cooking)
        rice_cooker.is_cooking = res
        if err:
            print("Error: ", err)
        else:
            print("\nRice Cooker éteint!\n")
    elif choice == "5":
        res, err = empty(rice_cooker.is_empty, rice_cooker.is_cooking)
        rice_cooker.is_empty = res
        if err:
            print("Error: ", err)
        else:
            print("\n Votre rice cooker est vide, mettez quelque chose à cuire!\n")
    elif choice == "6":
        res, err = unplug(rice_cooker.is_plugged, rice_cooker.is_cooking)
        rice_cooker.is_plugged = res
        if err:
            print("Error: ", err)
        else:
            print("\nRice Cooker débranché!\n")
    elif choice == "7":
        print("Au revoir !!")
        break
    else:
        print("")