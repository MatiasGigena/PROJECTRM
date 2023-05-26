const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character';

const getCharById = async (req, res) => {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);
    let characters = {
      id: id,
      name: data.name,
      image: data.image,
      gender: data.gender,
      species: data.species,
      status: data.gender,
      origin: data.origin,
    };
    res.status(200).json(characters);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// const { id } = req.params;
// axios
//   .get(`${URL}/${id}`)
//   .then((response) => {
//     const data = response.data;
//     let characters = {
//       id: data.id,
//       name: data.name,
//       image: data.image,
//       gender: data.gender,
//       species: data.species,
//       status: data.gender,
//       origin: data.origin,
//     };
//     res.status(200).json(characters);
//   })
// .catch((err) => {
//   res.status(500).send(err.message);
// });

module.exports = getCharById;
