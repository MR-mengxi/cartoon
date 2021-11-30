const Mod  = require("./Mod");
const Message  = require("./Message");

Mod.hasMany(Message);
Message.belongsTo(Mod);