export function createSlug(address: string, date: string) {
  const normalizedAddress = address.replaceAll('.', '-').replaceAll('/', '-');
  const normalizedDate = date.replaceAll('/', '-');

  return `${normalizedDate}-${normalizedAddress}`.toLowerCase();
}
