import { useState, useRef, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
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
  const router = useRouter();

  useEffect(() => {
    if (cy === null) {
      const cyInstance = Cytoscape(cyConfig(ref.current));
      setCy(cyInstance);
    }
  }, [ref.current]);

  useMemo(() => {
    // event listner for when a node is clicked
    if (cy) {
      cy.on("tap", "node", function (e) {
        e.preventDefault();
        var nodeId = e.target.id();
        router.push(`/create/${nodeId}`);
      });

      // add hover state pointer cursor on node
      cy.on("mouseover", "node", (event) => {
        const container = event?.cy?.container();
        if (container) {
          container.style.cursor = "pointer";
        }
      });

      cy.on("mouseout", "node", (event) => {
        const container = event?.cy?.container();
        if (container) {
          container.style.cursor = "default";
        }
      });
    }
  }, [cy]);

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
