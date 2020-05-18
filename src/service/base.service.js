const mapper = require("automapper-js");

class BaseService {
    constructor(EntityRepository, entityToMap) {
      this._entityRepository = EntityRepository;
      this.entityToMap = entityToMap;
    }
  
    async getAll() {
      const entities = await this._entityRepository.getAll();
      return entities;
      //return entities.map(entity => mapper(this.entityToMap,entity.toJSON()));
    }
    
    async create(entity) {
      //entity = this.entityToMap, entity;
      const createdEntity = await this._entityRepository.create(entity);
      return createdEntity;
    }
}
  
module.exports = BaseService;