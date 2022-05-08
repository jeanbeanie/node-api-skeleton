module.exports = (sequelize, Sequelize) => {
  // Create table 'example' and define default values
  //
  const Example = sequelize.define("example", {
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });
  return Example;
};
