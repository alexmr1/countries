export default function fetchCountries(region) {
  const mainAddress = "https://restcountries.eu/rest/v2/";
  const completeAddress = region
    ? `${mainAddress}region/${region}`
    : `${mainAddress}all`;
  return fetch(`${completeAddress}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}
