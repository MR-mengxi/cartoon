const Admin = require("../models/Admin");

exports.login = async function (loginId, loginPwd) {
    const result = await Admin.findOne({
        where: {
            loginId,
            loginPwd
        }
    })
    if (result) {
        return result.toJSON();
    }
    return null;
}

exports.getAdminById = async function (id) {
    const result = await Admin.findByPk(id);
    if (result) {
        return result.toJSON();
    }
    return null;
}

exports.addAdmin = async function (adminObj) {
    const ins = await Admin.create(adminObj);
    return ins.toJSON();
}

exports.updateAdmin = async function (obj, id) {
    return await Admin.update(obj, {
        where: {
            id
        }
    })
}