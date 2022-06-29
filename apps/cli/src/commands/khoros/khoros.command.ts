
const run = async (toolbox) => {
  const {print, meta} = toolbox;
  print.info(meta)
}

export const KhorosCommand = {
  name: 'khoros',
  alias: 'k',
  description: 'Interacts with Khoros APIs',
  run
}