import { ComposeClient } from "@composedb/client";

import { definition } from "../__generated__/definition.js";

const compose = new ComposeClient({
  ceramic: "http://localhost:7007",
  definition,
});

export default compose;
