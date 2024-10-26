// Pin definitions
const int soilSensorPin = A0; // Analog pin connected to soil moisture sensor
const int relayPin = 7;       // Digital pin connected to relay module

// Thresholds
const int moistureThreshold = 400; // Adjust this value according to your soil sensor readings

void setup() {
  Serial.begin(9600);
  
  // Initialize relay pin as output
  pinMode(relayPin, OUTPUT);
  
  // Initially turn off the pump
  digitalWrite(relayPin, HIGH); // Relay is active low, so HIGH turns it off
}

void loop() {
  // Read soil moisture level
  int soilMoistureValue = analogRead(soilSensorPin);
  Serial.print("Soil Moisture Level: ");
  Serial.println(soilMoistureValue);

  // Check if soil moisture is below threshold
  if (soilMoistureValue < moistureThreshold) {
    // Soil is dry - turn on the pump
    digitalWrite(relayPin, LOW); // Relay active low (LOW turns it on)
    Serial.println("Soil is dry. Turning on the water pump.");
  } else {
    // Soil is sufficiently moist - turn off the pump
    digitalWrite(relayPin, HIGH); // HIGH turns the relay off
    Serial.println("Soil is moist. Turning off the water pump.");
  }

  // Delay for a bit to avoid rapid switching
  delay(1000);
}
