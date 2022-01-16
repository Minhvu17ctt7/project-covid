const menu = [
    {
        name: 'Dashboard',
        icon: 'gi gi-stopwatch',
        url: '/',
    },
    {
        name: 'Bệnh Nhân',
        icon: 'gi gi-user',
        url: '/patients',
        sub: [
            {
                name: 'Tạo mới',
                url: '/patients/create',
            },
            {
                name: 'Xem danh sách',
                url: '/patients',
            },
        ],
    },
    {
        name: 'Sản phẩm',
        icon: 'gi gi-cake',
        url: '/products',
        sub: [
            {
                name: 'Tạo mới',
                url: '/products/create',
            },
            {
                name: 'Xem danh sách',
                url: '/products',
            },
        ],
    },
    {
        name: 'Gói nhu yếu phẩm',
        icon: 'gi gi-shopping_cart',
        url: '/categories',
        sub: [
            {
                name: 'Tạo mới',
                url: '/categories/create',
            },
            {
                name: 'Xem danh sách',
                url: '/categories',
            },
        ],
    },
    {
        name: 'Khu điều trị, cách ly',
        icon: 'gi gi-bank',
        url: '/hospitals',
        sub: [
            {
                name: 'Tạo mới',
                url: '/hospitals/create',
            },
            {
                name: 'Xem danh sách',
                url: '/hospitals',
            },
        ],
    },
    {
        name: 'Quản lý người dùng',
        icon: 'gi gi-user_add',
        url: '/accounts',
        sub: [
            {
                name: 'Tạo mới',
                url: '/accounts/create',
            },
            {
                name: 'Xem danh sách',
                url: '/accounts',
            },
        ],
    },
    {
        name: 'Quản lý thanh toán',
        icon: 'gi gi-sampler',
        url: '/payments',
        sub: [
            {
                name: 'Thay đổi hạn mức',
                url: '/payments/change-limit',
            },
            {
                name: 'Duyệt danh sách',
                url: '/payments',
            },
        ],
    },
    {
        name: 'Thông tin cá nhân',
        icon: 'gi gi-old_man',
        url: '/users',
        sub: [
            {
                name: 'Các thông tin cơ bản',
                url: '/user/details',
            },
            {
                name: 'Lịch sử được quản lý',
                url: '/user/manager-history',
            },
            {
                name: 'Lịch sử tiêu thụ',
                url: '/user/category-history',
            },
            {
                name: 'Dư nợ & Lịch sử thanh toán',
                url: '/user/payment-history',
            },
        ],
    },
    {
        name: 'Nhu yếu phẩm',
        icon: 'gi gi-package',
        url: '/products',
    },
];

module.exports = menu;
