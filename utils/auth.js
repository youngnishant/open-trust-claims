import { useCallback } from "react";
import { randomBytes } from "@stablelib/random";
import { DID } from "dids";
import { atom, useAtom } from "jotai";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { getResolver } from "key-did-resolver";
import { fromString, toString } from "uint8arrays";

import compose from "./apolloClient";

const authAtom = atom({ status: "pending" });

const resolver = getResolver();

export function randomSeed() {
  return toString(randomBytes(32), "base16");
}

export function useAuth() {
  const [state, setState] = useAtom(authAtom);

  const authenticate = useCallback(
    async (seed) => {
      if (state.status === "loading") {
        return;
      }
      setState({ status: "loading" });
      try {
        const did = new DID({
          provider: new Ed25519Provider(fromString(seed, "base16")),
          resolver,
        });
        await did.authenticate();
        compose.setDID(did);
        setState({ status: "done", id: did.id });
      } catch (err) {
        console.warn("Authentication error", err);
        setState({ status: "failed" });
      }
    },
    [state.status, setState]
  );

  const reset = useCallback(() => {
    compose.setDID(new DID({ resolver }));
    setState({ status: "pending" });
  }, [setState]);

  return [state, authenticate, reset];
}
