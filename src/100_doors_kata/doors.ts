const INITIAL_DOOR_STATE = "####################################################################################################";

export const getDoors = (currentPass: number, currentDoors: string = INITIAL_DOOR_STATE): string => {
    for (let i: number = 0; i < currentDoors.length; i++) {
        let doorIndex: number = i + 1;        
        if (doorIndex % currentPass === 0) {
            let char: "#" | "@" = currentDoors.at(i) === "#" ? "@" : "#";
            currentDoors = currentDoors.substring(0, i) + char + currentDoors.substring(i + 1);
        }
    }
    return currentDoors;
}

export const getDoorsAfterPasses = (passesCount: number): string => {
    let doors = INITIAL_DOOR_STATE;
    for (let i: number = 1; i <= passesCount; i++) {
        doors = getDoors(i, doors);
        console.log(`${i}th pass, doors: ${doors}`);
    }
    return doors;
}