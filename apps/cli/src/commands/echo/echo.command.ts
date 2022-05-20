import {Command, CommandRunner} from 'nest-commander';

@Command({
  name: 'echo',
  options: { isDefault: false }
})
export class EchoRunner implements CommandRunner {
  async run(
    inputs: string[],
    options: Record<string, any>
  ): Promise<void> {
    console.log("echo, echo, echo!")
  }
}

export const echoCommand = {
  name: 'echo',
  alias: 'e',
}