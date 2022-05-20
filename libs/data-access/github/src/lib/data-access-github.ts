import { Octokit, App as OctoApp } from "octokit";

export function dataAccessGithub(): string {
  return 'data-access-github';
}


const octokit = new Octokit({ auth: `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` });

export const whoami = async () => {
  const {
    data: { login },
  } = await octokit.rest.users.getAuthenticated();
  return login;
}