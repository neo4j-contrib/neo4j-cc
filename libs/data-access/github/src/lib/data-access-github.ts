import { Octokit } from "octokit";

// export const octokit = new Octokit({ auth: `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` });

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