class BaseRepository {
    constructor(db, entity) {
      this._db = db;
      this.entity = entity;
    }
  
    getAll() {
      return this._db.models[this.entity].findAll();
    }
    
    create(entity) {
      return this._db.models[this.entity].create(entity);
    }

}
  
module.exports = BaseRepository;