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

    get(id) {
      return this._db.models[this.entity].findByPk( id );
    }
  
    create(entity) {
      return this._db.models[this.entity].create(entity);
    }
  
    update(id, entity) {
      delete entity.createdAt;
      delete entity.updatedAt;
      return this._db.models[this.entity].update(entity, { where: { id } });
    }
  
    delete(id) {
      return this._db.models[this.entity].destroy({ where: { id } });
    }

}
  
module.exports = BaseRepository;