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
    
    create(entity) {
      return this._db.models[this.entity].create(entity);
    }

}
  
module.exports = BaseRepository;