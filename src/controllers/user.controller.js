const {
    patientService,
    AccountHistoryService,
    accountService,
    categoryService,
    productService,
} = require('../services');
const bcrypt = require('bcrypt');

const {} = require('../services');
const index = async (req, res, next) => {};
const getList = async (req, res, next) => {
    const categories = await categoryService.findAll();
    res.render('categories/list', {
        title: 'Danh sách gói',
        role: 'USER',
        categories,
    });
};

const detail = async (req, res, next) => {
    const id = req.params.id;
    const category = await categoryService.findCategoryIncludeProduct(id);
    res.render('categories/view', {
        title: 'Chi tiết gói',
        role: 'USER',
        category,
    });
};

const getChangePassword = (req, res) => {
    res.render('users/change-password', {
        title: 'Thay đổi mật khẩu',
    });
};

const postChangePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    if (!bcrypt.compareSync(oldPassword, req.user.password)) {
        req.flash('error_msg', 'Mật khẩu cũ không chính xác!');
    } else {
        try {
            await accountService.changePassword(req.user.id, newPassword);
            req.flash('success_msg', 'Thay đổi mật khẩu thành công!');
        } catch (error) {
            console.error('user.controller change password', error);
            req.flash('error_msg', 'Thay đổi mật khẩu thất bại!');
        }
    }
    res.redirect('/users/change-password');
};
const getProfile = async (req, res, next) => {
    const include = {
        include: ['hospital'],
    };
    console.log(req.user.id);
    const patient = await patientService.findByIdWithInclude(
        req.user.patient_id,
        include,
    );
    console.log(patient);
    res.render('users/user-profile', { patient });
};
const getUserHistories = async (req, res, next) => {
    const include = {
        include: ['status_histories', 'hospital_histories'],
    };
    const condition = {
        where: { account_id: req.user.id },
    };
    const patient = await patientService.findByIdWithInclude(
        req.user.patient_id,
        include,
    );
    const accountHistory = await AccountHistoryService.findAll(condition);
    // console.log(patient)
    res.render('users/user-history', {
        patient,
        account_histories: accountHistory,
    });
};
const getTransactionHistory = async (req, res, next) => {
    const include = {
        include: ['transaction_histories'],
    };
    console.log(req.user.id);
    const patient = await patientService.findByIdWithInclude(
        req.user.patient_id,
        include,
    );
    console.log(patient);
    res.render('users/user-transaction-history', { patient });
};
const getBuyHistory = async (req, res, next) => {
    const include = {
        include: ['orders'],
    };
    console.log(req.user.id);
    const patient = await patientService.findByIdWithInclude(
        req.user.patient_id,
        include,
    );
    console.log(patient);
    res.render('users/user-buy-history', { patient });
};
module.exports = {
    getProfile,
    getTransactionHistory,
    getUserHistories,
    getBuyHistory,
    getList,
    detail,
    getChangePassword,
    postChangePassword,
};
