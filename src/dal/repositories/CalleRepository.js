const BaseRepository = require("./base.repository");

class CalleRepository extends BaseRepository {
  constructor({ db }) {
    super(db, "Calles");
  }
}

module.exports = CalleRepository;