const { categoryService, productService } = require('../services');

const getList = async (req, res, next) => {
    const categories = await categoryService.findAll();
    res.render('categories/list', { title: 'Danh sách gói', categories });
};

const detail = async (req, res, next) => {
    const id = req.params.id;
    const category = await categoryService.findCategoryIncludeProduct(id);
    res.render('categories/view', { title: 'Chi tiết gói', category });
};

const getCreate = async (req, res, next) => {
    const products = await productService.findAll();
    res.render('categories/form', { title: 'Tạo gói', products });
};

const postCreate = async (req, res, next) => {
    const products = req.body.product_id;
    const limitProducts = req.body.limit_product;
    const product_categories = [];

    for (let i = 0; i < products.length; i++) {
        const product_id = products[i];
        const limit_product = limitProducts[i];
        if (product_id && limit_product) {
            product_categories.push({
                product_id,
                limit_product,
            });
        }
    }

    const category = {
        name: req.body.name,
        limit_person: req.body.limit_person,
        limit_time: req.body.limit_time,
        product_categories,
    };
    if (req.body.id) {
        category.id = req.body.id;
    }
    try {
        const categorySaved = await categoryService.createCategory(category);
        req.flash('success_msg', 'Thêm sản phẩm thành công');
    } catch (err) {
        req.flash('error_msg', 'Thêm sản phẩm thất bại');
    }
    res.redirect('/categories');
};

const getUpdate = async (req, res, next) => {
    const id = req.params.id;
    const category = await categoryService.findById(id);
    const products = await productService.findAll();
    res.render('categories/form', {
        title: 'Cập nhật gói',
        category,
        products,
    });
};

const destroy = async (req, res, next) => {
    const id = req.params.id;
    try {
        const category = await categoryService.destroy(id);
        if (category) {
            req.flash('success_msg', 'Xoá gói sản phẩm thành công');
        } else {
            req.flash('error_msg', 'Không tìm thấy gói sản phẩm');
        }
    } catch (error) {
        console.log(error);
        req.flash('error_msg', 'Không thể xóa gói sản phẩm này');
    }
    res.redirect('/categories');
};

module.exports = {
    getList,
    getCreate,
    postCreate,
    destroy,
    getUpdate,
    detail,
};
