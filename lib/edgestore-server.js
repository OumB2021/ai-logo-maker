import { initEdgeStoreClient } from "@edgestore/server/core";

export const handler = createEdgeStoreNextHandler({
  router: edgeStoreRouter,
});

export const backendClient = initEdgeStoreClient({
  router: edgeStoreRouter,
});
