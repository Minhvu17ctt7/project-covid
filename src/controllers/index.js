module.exports = {
    siteController: require('./site.controller'),
    accountController: require('./account.controller'),
    productController: require('./product.controller'),
    patientController: require('./patient.controller'),
    categoryController: require('./category.controller'),
    hospitalController: require('./hospital.controller'),
    userController: require('./user.controller'),
    ...require('./api'),
};
