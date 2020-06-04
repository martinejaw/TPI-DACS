const BaseRepository = require("../repositories/base.repository");

class BaseUnitOfWork {
	constructor(Repository, entity) {
		this._BR = Repository;
		this.entity = entity;
	}
	create(this.entity) {
		return this._BR.create(this.entity);	
	}


}

module.exports = BaseUnitOfWork;
