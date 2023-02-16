enum WorkState  {
    stateOn = 'on',
    stateOff = 'off',
}

type Detectors = {
    lighting: WorkState;
    curtains: WorkState;
    smoke: WorkState;
    waterflow: WorkState;
    noise: WorkState;
}

const getRandomValueFromWorkState = (num) => {
    const values = Object.keys(num);
    const enumkey = values[Math.floor(Math.random() * values.length)];
    return num[enumkey];
}

class State {
    detectors: Detectors;

    constructor(detectors: Detectors) {
        this.detectors = detectors;
    }

    getDetectorsState(): Detectors {
        return this.detectors;
    }
}


class Originator {
    private state: State;

    constructor(state: State) {
        this.state = state;
        console.log(`${state.getDetectorsState()}`);
    }

}


interface House {
    turnOnTheSmokeDetector: (firstScript: Detectors) => void;
    turnOnTheLightDetector: (secondScript: Detectors) => void;
}


class SmartHouse implements House {
    private static instance: SmartHouse;
    newname: string;

    public constructor(newname: string) {
        this.newname = newname;
    }

    public static getInstance(newname: string = "SmartHome"): SmartHouse {
        if (!SmartHouse.instance) {
            this.instance = new SmartHouse(newname);
        }

        return SmartHouse.instance;
    }

    public turnOnTheSmokeDetector(firstScript): WorkState {
        return firstScript.smoke = WorkState.stateOff;
    }

    public turnOnTheLightDetector(secondScript): WorkState {
        return secondScript.lighting = WorkState.stateOff;
    }
}


class Caretaker {

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    getDetectors(getDetectors: Detectors) {
        return getDetectors;
    }

    turnOnTheSmokeDetector(firstScript: Detectors) {
        for (let i = 0; i < 5; i++) {
            if (firstScript.smoke == WorkState.stateOn) {
                firstScript.lighting = WorkState.stateOff;
                firstScript.curtains = WorkState.stateOff;
                firstScript.waterflow = WorkState.stateOff;
                firstScript.noise = WorkState.stateOff;
            }
        }

        return firstScript;
    }

    turnOnTheLightDetector(secondScript: Detectors) {
        if (secondScript.lighting == WorkState.stateOn) {
            secondScript.noise = WorkState.stateOff;
            secondScript.curtains = WorkState.stateOn;
        }

        return secondScript;
    }

}

let detectors: Detectors = {
    lighting: WorkState.stateOff,
    curtains: WorkState.stateOn,
    smoke: WorkState.stateOn,
    waterflow: WorkState.stateOff,
    noise: WorkState.stateOn,

}

const state = new State(detectors);

const originator = new Originator(state);
const caretaker = new Caretaker(originator);

const setDetectors = caretaker.getDetectors({
    lighting: getRandomValueFromWorkState(WorkState),
    curtains: getRandomValueFromWorkState(WorkState),
    smoke: getRandomValueFromWorkState(WorkState),
    waterflow: getRandomValueFromWorkState(WorkState),
    noise: getRandomValueFromWorkState(WorkState),
});

console.log(caretaker.turnOnTheLightDetector(setDetectors));
console.log(caretaker.turnOnTheSmokeDetector(setDetectors));
