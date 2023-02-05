
function getAPIData(info) {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/${info}`)
  .then((res) => res.json())
}

export default getAPIData 