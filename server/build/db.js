'use strict';

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mysql = require('mysql');
var async = require('async');
var dotenv = require('dotenv');

var result = dotenv.config();
if (result.error) {
  throw result.error;
}

console.log("Connecting to Database : ");
console.log(result.parsed);

var PRODUCTION_DB = process.env.DB_NAME;
var TEST_DB = process.env.DB_NAME;

exports.MODE_TEST = 'mode_test';
exports.MODE_PRODUCTION = 'mode_production';

var state = {
  pool: null,
  mode: null
};

exports.connect = function (mode, done) {
  state.pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: mode === exports.MODE_PRODUCTION ? PRODUCTION_DB : TEST_DB
  });

  state.mode = mode;
  done();
};

exports.get = function () {
  return state.pool;
};

exports.fixtures = function (data) {
  var pool = state.pool;
  if (!pool) return done(new Error('Missing database connection.'));

  var names = (0, _keys2.default)(data.tables);
  async.each(names, function (name, cb) {
    async.each(data.tables[name], function (row, cb) {
      var keys = (0, _keys2.default)(row),
          values = keys.map(function (key) {
        return "'" + row[key] + "'";
      });

      pool.query('INSERT INTO ' + name + ' (' + keys.join(',') + ') VALUES (' + values.join(',') + ')', cb);
    }, cb);
  }, done);
};

exports.drop = function (tables, done) {
  var pool = state.pool;
  if (!pool) return done(new Error('Missing database connection.'));

  async.each(tables, function (name, cb) {
    pool.query('DELETE * FROM ' + name, cb);
  }, done);
};