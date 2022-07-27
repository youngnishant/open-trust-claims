export const claimSchema = `
type Note @model(accountRelation: LIST, description: "Claim") {
    issuer: DID! @documentAccount
    version: CommitID! @documentVersion 
    subject: String! @length(min: 10, max: 2000)
    object: String! @length(min: 10, max: 2000)
    relation: String! @length(min: 10, max: 100)
    reason: String @length(min: 10, max: 1000)
}
`;

export const profileSchema = `
type profile @model(accountRelation: SINGLE,description: "User profile") {
    name: String @length(max: 150)
    about: String @length(min: 10, max: 1000)
}
`;
