import { useState, useRef, useEffect } from "react";
import Cytoscape from "cytoscape";

import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import cyConfig from "./cyConfig";
import styles from "./styles";

const Search = () => {
  const [cy, setCy] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (cy === null) {
      const cyInstance = Cytoscape(cyConfig(ref.current));
      setCy(cyInstance);
    }
  }, [ref.current]);

  return (
    <Container sx={styles.container} maxWidth={false}>
      <Box sx={styles.searchFieldContainer}>
        <TextField label="Search" variant="outlined" />
        <Button variant="contained" disableElevation>
          Search
        </Button>
      </Box>
      <Box ref={ref} sx={styles.cy} />
    </Container>
  );
};

export default Search;
