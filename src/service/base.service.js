const mapper = require("automapper-js");

class BaseService {
    constructor(EntityRepository, entityToMap) {
      this._entityRepository = EntityRepository;
      this._entityToMap = entityToMap;
    }

    mapear(objetoSinMapear) {
      const objetoMapeado = mapper(this._entityToMap, objetoSinMapear);
      return objetoMapeado
    }
  
    async getAll() {
      const entities = await this._entityRepository.getAll();
      return entities;
      //return entities.map(entity => mapper(this.entityToMap,entity.toJSON()));
    }

    async get(id) {
      const entity = await this._entityRepository.get(id);
      return entity;
    }

    async create(entity) {
      //entity = this.entityToMap, entity;
      const createdEntity = await this._entityRepository.create(entity);
      return createdEntity;
    }
  
    async update(id, entity) {
      const updatedEntity = await this._entityRepository.update(id, entity);
      return updatedEntity;
    }
  
    async delete(id) {
      const deletedEntity = await this._entityRepository.delete(id);
      return deletedEntity;
    }
}
  
module.exports = BaseService;