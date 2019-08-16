import DS from 'ember-data';

export default class ApplicationSerializer extends DS.JSONSerializer {
  normalizeFindRecordResponse(store, type, payload) {
    let _id = payload.url.replace(/https:\/\/swapi\.co\/api\/people\/(\d+)\//,"$1");
    return {
      data: {
        id: _id,
        type: type.modelName,
        attributes: {
          name: payload.name,
          height: payload.height,
          mass: payload.mass,
          hairColor: payload.hair_color,
          skinColor: payload.skin_color,
          eyeColor: payload.eye_color,
          birthYear: payload.birth_year,
          gender: payload.gender,
          starships: payload.starships
        }
      }
    }
  }
}
