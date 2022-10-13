import { Octokit } from "octokit";

export interface GithubRequirements {
  auth: string
}

export const whoami = async (requirements:GithubRequirements) => {
  const octokit = new Octokit(requirements);
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  return login;
}

export const runMain = async () => {
  console.log("runMain")
  return "ran main"
}