import React, { useState } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { randomSeed, useAuth } from "../utils/auth";

const Auth = () => {
  const router = useRouter();
  const [state, authenticate] = useAuth();

  const [seed, setSeed] = useState("");

  const isLoading = state.status === "loading";

  return state.status === "done" ? (
    <Typography>Authenticated with ID {state.id}</Typography>
  ) : (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ my: 10 }}>
        You need to authenticate to load your existing notes and create new
        ones.
      </Typography>
      <TextField
        autoFocus
        disabled={isLoading}
        fullWidth
        id="seed"
        label="Seed"
        onChange={(event) => setSeed(event.target.value)}
        placeholder="base16-encoded string of 32 bytes length"
        type="text"
        value={seed}
        variant="standard"
      />
      <Box sx={{ mt: 5 }}>
        <Button
          disabled={seed === "" || isLoading}
          onClick={() => {
            authenticate(seed).then(() => router.push("/search"));
          }}
          variant="contained"
        >
          Authenticate
        </Button>
        <Button disabled={isLoading} onClick={() => setSeed(randomSeed())}>
          Generate random seed
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;
