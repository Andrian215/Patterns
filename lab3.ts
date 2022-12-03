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

interface House {
    turnOnTheSmokeDetector: (firstScript: Detectors) => void;
    turnOnTheLightDetector: (secondScript: Detectors) => void;
}


class SmartHouse implements House {
    private static instance: SmartHouse;
    newname: string;

    private constructor(newname: string) {
        this.newname = newname;
    }

    public static getInstance(newname: string = "SmartHome"): SmartHouse {
        if (!SmartHouse.instance) {
            this.instance = new SmartHouse(newname);
        }

        return SmartHouse.instance;
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

const test = SmartHouse.getInstance();
const setDetectors = test.getDetectors({
    lighting: getRandomValueFromWorkState(WorkState),
    curtains: getRandomValueFromWorkState(WorkState),
    smoke: getRandomValueFromWorkState(WorkState),
    waterflow: getRandomValueFromWorkState(WorkState),
    noise: getRandomValueFromWorkState(WorkState),
});

test.turnOnTheSmokeDetector(setDetectors);
test.turnOnTheLightDetector(setDetectors);
