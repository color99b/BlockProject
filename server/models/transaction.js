const Sequelize = require("sequelize");

module.exports = class Transaction extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        blockNumber: {
          type: Sequelize.STRING(200),
        },
        from: {
          type: Sequelize.STRING(200),
        },
        to: {
          type: Sequelize.STRING(200),
        },
        value: {
          type: Sequelize.INTEGER,
        },
        gas: {
          type: Sequelize.INTEGER,
        },
        gasPrice: {
          type: Sequelize.STRING(200),
        },
        transactionIndex: {
          type: Sequelize.INTEGER,
        },
        type: {
          type: Sequelize.INTEGER,
        },
        nonce: {
          type: Sequelize.INTEGER,
        },
        input: {
          type: Sequelize.STRING(200),
        },
      },
      {
        sequelize,
        modelName: "Transaction",
        tableName: "transaction",
        paranoid: true,
        underscored: true,
        timestamps: true,
      }
    );
  }
};
