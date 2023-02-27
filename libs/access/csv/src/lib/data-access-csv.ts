import { unparse, UnparseConfig } from 'papaparse';

export function dataAccessCsv(): string {
  return 'data-access-csv';
}

export type ExportableRecord = Record<
  string,
  string | string[] | number | number[] | boolean | boolean[]
>;

export const allToCsv =
  (options: UnparseConfig) => (data: ExportableRecord[]) =>
    unparse(data, options);

export const allToCsv_ = (data: ExportableRecord[], options: UnparseConfig) =>
  unparse(data, options);
