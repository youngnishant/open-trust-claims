// This is an auto-generated file, do not edit manually
export const definition = {
  models: {
    claim: "kjzl6hvfrbw6c5j7jziby2hbdq9phm0nvsxvngdvoqappp1unwmimvd4yqhauh2",
    profile: "kjzl6hvfrbw6cabri4vezzv5z26axqf9nwaa0h4z6727gkyhkw3bqqf0848a247",
  },
  objects: {
    claim: {
      object: { type: "string", required: true },
      reason: { type: "string", required: false },
      subject: { type: "string", required: true },
      relation: { type: "string", required: true },
      issuer: { type: "view", viewType: "documentAccount" },
      version: { type: "view", viewType: "documentVersion" },
    },
    profile: {
      name: { type: "string", required: false },
      about: { type: "string", required: false },
    },
  },
  accountData: {
    claimList: { type: "connection", name: "claim" },
    profile: { type: "node", name: "profile" },
  },
};
