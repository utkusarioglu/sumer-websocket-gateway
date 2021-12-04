import kafkaService from "_services/kafka/kafka.service";

console.log("kafka is starting");
kafkaService
  .connectAndSubscribe()
  .then(() => kafkaService.startListening())
  .then(() => console.log("kafka is listening..."));
