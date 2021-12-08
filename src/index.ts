import http from "http";
import express from "express";
import kafkaService from "_services/kafka/kafka.service";
import { PORT } from "_/__config";
import eventsService from "_services/events/events.service";
import { IoService } from "_services/io/io.service";

console.log("kafka is starting");
kafkaService
  .connectAndSubscribe()
  .then(() =>
    kafkaService.startListening({
      ethereumBlockContent: (data) =>
        eventsService.ethereumBlockContent.pub(data),
    })
  )
  .then(() => console.log("kafka is listening..."));

const app = express();
const server = http.createServer(app);
server.listen(PORT, () => console.log(`websocket-gateway started on ${PORT}`));
const io = new IoService(server);
io.listen();

app.get("/_status/healthz", (_req, res) => { res.send("OK")})
