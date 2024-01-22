import Sequelize from 'sequelize';
import url from 'url';
import allConfig from '../../config/database.js';
import questionModel from './question.js';
import experienceModel from './experience.js';
import userModel from './user.js';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Question = questionModel(sequelize, Sequelize.DataTypes);
db.Experience = experienceModel(sequelize,Sequelize.DataTypes);
db.User = userModel(sequelize, Sequelize.DataTypes);

// db.User.hasMany(db.Image);
// db.Image.belongsTo(db.User);

db.User.hasMany(db.Experience);
db.Experience.belongsTo(db.User);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;