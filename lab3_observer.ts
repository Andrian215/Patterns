interface Sensor {
  notify(): void;
}

class SmokeSensor implements Sensor {
  notify() {
    console.log("Smoke detected. Turning off all sensors.");
    // Вимикання всіх інших датчиків
  }
}

class LightSensor implements Sensor {
  constructor(private noiseSensor: NoiseSensor, private curtainSensor: CurtainSensor) {}

  notify() {
    console.log("Light detected. Turning off noise sensor and opening curtains.");
    this.noiseSensor.turnOff();
    this.curtainSensor.open();
  }
}

class WaterSensor implements Sensor {
  notify() {
    console.log("Water leakage detected.");
    // Виклик служби підтримки
  }
}

class NoiseSensor implements Sensor {
  turnOff() {
    console.log("Noise sensor turned off.");
  }
  notify(): void {
  }
}

class CurtainSensor implements Sensor {
  open() {
    console.log("Curtains opened.");
  }
  notify(): void {
  }
}

class SmartHomeSystem {
  private sensors: Sensor[] = [];

  addSensor(sensor: Sensor) {
    this.sensors.push(sensor);
  }

  notifySensors(sensor: Sensor) {
    for (const s of this.sensors) {
      if (s !== sensor) {
        s.notify();
      }
    }
  }
}


const smartHomeSystem = new SmartHomeSystem();

const smokeSensor = new SmokeSensor();
smartHomeSystem.addSensor(smokeSensor);

const noiseSensor = new NoiseSensor();
smartHomeSystem.addSensor(noiseSensor);

const curtainSensor = new CurtainSensor();
smartHomeSystem.addSensor(curtainSensor);

const lightSensor = new LightSensor(noiseSensor, curtainSensor);
smartHomeSystem.addSensor(lightSensor);

const waterSensor = new WaterSensor();
smartHomeSystem.addSensor(waterSensor);

smartHomeSystem.notifySensors(smokeSensor);

smartHomeSystem.notifySensors(lightSensor);
