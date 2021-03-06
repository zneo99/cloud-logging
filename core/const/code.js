module.exports.ERROR = {

    // Authentication const
    HAVE_NOT_PERMISSION: {
        code: 1,
        message: 'Have not permission'
    },

    BAD_CREDENTICALS : {
        code: 2,
        message: 'BadCredenticals'
    },

    WRONG_DATE_FORMAT: {
        code: 3,
        message: 'WrongDateFormat'
    },

    WRONG_USER_DATA: {
        code: 4,
        message: 'WrongUserData'
    },

    USER_EXISTED: {
        code: 5,
        message: 'UserExixted'
    },

    USER_ISNOT_EXISTED: {
        code: 6,
        message: 'UserIsNotExixted'
    }
};

module.exports.SUCCESS = {
    // Authentication const
    NORMAL: {
        code: 0,
        message: 'Success'
    }
};