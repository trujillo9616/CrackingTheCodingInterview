import { oneAway, oneAway2 } from '../5-oneAway';

describe('one away', () => {
  test('solution 1', () => {
    expect(oneAway('pale', 'ple')).toBe(true);
    expect(oneAway('pales', 'pale')).toBe(true);
    expect(oneAway('pale', 'bale')).toBe(true);
    expect(oneAway('pale', 'bake')).toBe(false);
  });

  test('solution2', () => {
    expect(oneAway2('pale', 'ple')).toBe(true);
    expect(oneAway2('pales', 'pale')).toBe(true);
    expect(oneAway2('pale', 'bale')).toBe(true);
    expect(oneAway2('pale', 'bake')).toBe(false);
  });
});
