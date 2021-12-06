import { Server } from "socket.io";
import type { Server as HttpServer } from "http";
import { CORS_ORIGIN } from "_/__config";
import eventsService from "_services/events/events.service";

/**
 * Wrapper for socket.io for the purposes suitable for this app
 */
export class IoService {
  private io: Server;

  constructor(server: HttpServer) {
    this.io = new Server(server, {
      cors: {
        origin: CORS_ORIGIN,
      },
    });
  }

  /**
   * starts listening to connections and runs callbacks
   * for possible events
   */
  listen() {
    this.io.on("connection", (socket) => {
      console.log("Someone connected");
      eventsService.ethereumBlockContent.sub((data) => {
        socket.send(data);
      });
    });

    this.io.on("disconnect", () => {
      console.log("Someone disconnected");
    });
  }
}
