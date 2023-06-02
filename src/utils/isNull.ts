export function isNull(value: any): any {
  return value != "" && value != 0 ? value : "";
}
