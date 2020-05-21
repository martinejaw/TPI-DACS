class BaseRepository {
    constructor(db, entity) {
      this._db = db;
      this.entity = entity;
    }
  
    async getAll() {
      let todos;
      todos = await this._db.models[this.entity].findAll();
      return todos;
    }

    get(dni) {
      return this._db.models[this.entity].findOne({ where: { dni } });
    }
  
    create(entity) {
      return this._db.models[this.entity].create(entity);
    }
  
    update(dni, entity) {
      delete entity.createdAt;
      delete entity.updatedAt;
      return this._db.models[this.entity].update(entity, { where: { dni } });
    }
  
    delete(dni) {
      return this._db.models[this.entity].destroy({ where: { dni } });
    }

}
  
module.exports = BaseRepository;