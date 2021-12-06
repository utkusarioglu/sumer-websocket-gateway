import EventEmitter from "events";
import type { CallbackWithOneParam } from "_types/callback.types";

const eventEmitter = new EventEmitter();

const eventsService = {
  ethereumBlockContent: {
    pub: (data: unknown) => eventEmitter.emit("block-content", data),
    sub: (cb: CallbackWithOneParam<unknown>) =>
      eventEmitter.on("block-content", cb),
  },
};

export default eventsService;
