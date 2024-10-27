// Define pins
const int soilSensorPin = A0;  // Analog pin for soil sensor
const int relayPin = 7;        // Digital pin for relay

// Define thresholds
int moistureThreshold = 500;   // Moisture threshold (calibrate based on your sensor)

// Variables
int moistureLevel = 0;

void setup() {
  Serial.begin(9600);
  pinMode(soilSensorPin, INPUT);
  pinMode(relayPin, OUTPUT);
  digitalWrite(relayPin, HIGH); // Turn relay off initially
}

void loop() {
  // Read soil moisture sensor
  moistureLevel = analogRead(soilSensorPin);
  Serial.print("Soil Moisture Level: ");
  Serial.println(moistureLevel);

  // Check moisture level
  if (moistureLevel < moistureThreshold) {
    // Soil is dry; turn on the pump
    digitalWrite(relayPin, LOW);  // Activate relay
    Serial.println("Soil is dry. Pump ON.");
  } else {
    // Soil is wet; turn off the pump
    digitalWrite(relayPin, HIGH); // Deactivate relay
    Serial.println("Soil is wet. Pump OFF.");
  }

  // Wait for some time before next reading
  delay(5000); // Check every 5 seconds (adjustable)
}
