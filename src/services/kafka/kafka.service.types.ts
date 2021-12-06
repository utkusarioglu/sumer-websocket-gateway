import type { CallbackWithOneParam } from "_types/callback.types";

export type StartListeningParams = {
  ethereumBlockContent: CallbackWithOneParam<unknown>;
};
