import DS from 'ember-data';

export default class ApplicationSerializer extends DS.JSONSerializer {
  normalizeFindRecordResponse(store, type, payload) {
    let _id = payload.url.replace(/https:\/\/swapi\.co\/api\/starships\/(\d+)\//,"$1");
    return {
      data: {
        id: _id,
        type: type.modelName,
        attributes: {
          name: payload.name,
          model: payload.model,
          maxAtmospheringSpeed: payload.max_atmosphering_speed,
          costInCredits: payload.cost_in_credits,
          crew: payload.crew,
          length: payload.length,
          starshipClass: payload.starship_class,
          cargoCapacity: payload.cargo_capacity,
          hyperdriveRating: payload.hyperdrive_rating,
          passengers: payload.passengers
        }
      }
    }
  }
}
