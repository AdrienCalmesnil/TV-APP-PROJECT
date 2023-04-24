import { tmdbApi } from './tmdb-api';

describe('tmdbApi', () => {
  it('should work', () => {
    expect(tmdbApi()).toEqual('tmdb-api');
  });
});
