import {Command, Option, CommandRunner} from 'nest-commander';
import {whoami} from '@c--c/data-access-github'
@Command({
  name: 'gh',
  options: { isDefault: false }
})
export class GithubRunner implements CommandRunner {

  @Option({
    flags: '-w, --whoami',
    description: 'show login name used for access'
  })
  parseWhoami(val:string) { return val}

  async run(
    inputs: string[],
    options: Record<string, any>
  ): Promise<void> {
    const login = await whoami();
    console.log(`octokitty is go! ${login}`)
  }
}

