export const environment = {
  production: true,
  api: {
    base: 'http://swapi.co/api/',
    people: 'people/',
    planets: 'planets/',
    species: 'species/',
    vehicles: 'vehicles/',
    starships: 'starships/',
    films: 'films/',
  },
  localeStorage: {
    key: 'sw-api-data',
    timeout: 1000 * 60 * 60 * 24 * 3 // 3 days
  }
};
