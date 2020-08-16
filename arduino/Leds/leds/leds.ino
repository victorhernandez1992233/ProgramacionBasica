int verde = 13;
int azul = 7;
int milisegundos = 300;

void setup (){
  //pin indica la salida y el numero de pin en el arduino
  pinMode(verde, OUTPUT);
  pinMode(azul, OUTPUT);
  
}

void loop(){
  digitalWrite(verde, HIGH);
  digitalWrite(azul, LOW);
  //delay espera sin hacer nada le puedes pasar por medio de
  // una variable cuanto tiempo quieres que espere
  delay(milisegundos);
  digitalWrite(verde, LOW);
  digitalWrite(azul, HIGH);
  delay(milisegundos*2);
}
