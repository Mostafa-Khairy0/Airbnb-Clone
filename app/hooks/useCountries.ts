import countries from 'world-countries';

const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

const useCountries = () => {
  const getAll = () => formattedCountries;

  const getByValue = (value: string) => {
    console.log(value)
    return formattedCountries.find((item) => {
      console.log(item.label);item.label === value});
  }

  return {
    getAll,
    getByValue
  }
};

export default useCountries;
