import allClaims from "./allClaims";

// const getNodes = () => {
//   const nodes = [];

//   allClaims.forEach((claim) => {
//     const node = {
//       data: { id: claim.id, label: claim.subject },
//     };
//     nodes.push(node);
//   });

//   return nodes;
// };

// const getEdges = () => {
//   const edges = [];

//   allClaims.forEach((claimx) => {
//     allClaims.forEach((claimy) => {
//       if (
//         claimx.subject === claimy.object &&
//         claimx.subject !== claimy.subject
//       ) {
//         const edge = {
//           data: {
//             source: claimx.id,
//             target: claimy.id,
//           },
//         };
//         edges.push(edge);
//       }
//     });
//   });
//   return edges;
// };

const elements = () => {
  // const edges = getEdges();
  // const nodes = getNodes();
  // const elements = [...edges, ...nodes];
  // return elements;
  return allClaims;
};

export default elements;
