import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import styles from "./styles";

const Create = () => {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [object, setObject] = useState("");
  const [reason, setReason] = useState("");
  const [relation, setRelation] = useState("");

  const handleSubmit = () => {
    console.log(subject, object, reason, relation);
    router.push("/search");
  };

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      setObject(id);
    }
  }, [router.query]);

  return (
    <Container maxWidth="xl">
      <Box sx={styles.form}>
        <Typography variant="h4" sx={styles.heading}>
          Create Claim
        </Typography>
        <TextField
          label="Subject of Claim (e.g. Name)"
          variant="outlined"
          sx={styles.inputField}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <TextField
          label="Subject of claim to which it is connected"
          variant="outlined"
          sx={styles.inputField}
          value={object}
          onChange={(e) => setObject(e.target.value)}
          // disabled={!id}
        />
        <TextField
          label="Reason or proof related for this claim"
          variant="outlined"
          sx={styles.inputField}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />
        <TextField
          label="Relation to Object"
          variant="outlined"
          sx={styles.inputField}
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        />

        <Button
          variant="contained"
          sx={styles.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default Create;
