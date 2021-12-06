import { Kafka } from "kafkajs";
import type { Consumer } from "kafkajs";
import { HOSTNAME, KAFKA_BROKERS } from "_/__config";
import { StartListeningParams } from "./kafka.service.types";

/**
 * Provides connectivity with the kafka cluster
 */
class KafkaService {
  private kafka: Kafka;
  private consumer: Consumer;

  constructor(clientId: string, brokers: string[]) {
    this.kafka = new Kafka({ clientId, brokers });
    this.consumer = this.kafka.consumer({ groupId: "websocket-gateway" });
  }

  /**
   * Connect to kafka cluster and subscribe to required topics
   */
  async connectAndSubscribe() {
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: "ethereum-block-content" });
  }

  /**
   * Start listening to subscribed topics
   */
  async startListening({ ethereumBlockContent }: StartListeningParams) {
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        switch (topic) {
          case "ethereum-block-content":
            ethereumBlockContent(message.value?.toString());
        }
        console.log({ topic, partition, message: message.value?.toString() });
      },
    });
  }
}

export default new KafkaService(HOSTNAME, KAFKA_BROKERS);
