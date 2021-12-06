import EventEmitter from "events";

const eventEmitter = new EventEmitter();

type CallbackWithOneParam<T> = (data: T) => void;

const eventsService = {
  blockContent: {
    pub: (data: unknown) => eventEmitter.emit("block-content", data),
    sub: (cb: CallbackWithOneParam<unknown>) =>
      eventEmitter.on("block-content", cb),
  },
};

export default eventsService;
