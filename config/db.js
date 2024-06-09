const { PrismaClient } = require("@prisma/client");

let db;

if (process.env.NODE_ENV === "production") {
  db = new PrismaClient();
} else {
  if (!global.db) {
    global.db = new PrismaClient();
  }

  db = global.db;
}

module.exports = db;
