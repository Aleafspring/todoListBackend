const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient;


const createList = async (list) => {
    return prisma.$queryRaw`
        insert into todoList(list) values (${list})
    `
}






module.exports = {createList};
