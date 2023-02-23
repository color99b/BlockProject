const Sequelize = require("sequelize");

module.exports = class Block extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        difficulty: {
          type: Sequelize.STRING(200),
        },
        extraData: {
          type: Sequelize.STRING(200),
        },
        gasLimit: {
          type: Sequelize.INTEGER,
        },
        gasUsed: {
          type: Sequelize.INTEGER,
        },
        hash: {
          type: Sequelize.STRING(200),
        },
        logsBloom: {
          type: Sequelize.STRING(1000),
        },
        miner: {
          type: Sequelize.STRING(200),
        },
        mixHash: {
          type: Sequelize.STRING(200),
        },
        nonce: {
          type: Sequelize.STRING(200),
        },
        number: {
          type: Sequelize.INTEGER,
        },

        parentHash: {
          type: Sequelize.STRING(200),
        },

        receiptsRoot: {
          type: Sequelize.STRING(200),
        },

        sha3Uncles: {
          type: Sequelize.STRING(200),
        },

        size: {
          type: Sequelize.INTEGER,
        },

        stateRoot: {
          type: Sequelize.STRING(200),
        },

        timestamp: {
          type: Sequelize.INTEGER,
        },

        totalDifficulty: {
          type: Sequelize.STRING(200),
        },

        transactions: {
          type: Sequelize.STRING(200),
        },

        transactionsRoot: {
          type: Sequelize.STRING(200),
        },

        txns: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "Block",
        tableName: "block",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }

  static associate(db) {
    db.Block.hasMany(db.Transaction, {
      foreignKey: "number",
      sourceKey: "id",
    });
  }
};
