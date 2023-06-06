import { vehicle } from "../utility/data";

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

export default {
  get: (sold) => {
    const vehicles = prisma.vehicle.findMany({
      where: {
        statusSold: sold,
      },
    });
    return vehicles;
  },
  create: async (data) => {
    const vehicle = await prisma.vehicle.create({
      data: data,
    });
    return vehicle;
  },
  find: async (id) => {
    const vehicle = await prisma.vehicle.findUnique({
      where: {
        id: id,
      },
    });
    return vehicle;
  },
  update: async (id, data) => {
    return await prisma.vehicle.update({
      where: { id: id },
      data: data,
    });
  },
  delete: async (id) => {
    return await prisma.vehicle.delete({
      where: { id: id },
    });
  },

  getCount: async () => {
    return await prisma.vehicle.count({});
  },
  getCountSold: async () => {
    return await prisma.vehicle.count({
      where: {
        statusSold: true,
      },
    });
  },
  getCountUnsold: async () => {
    return await prisma.vehicle.count({
      where: {
        statusSold: false,
      },
    });
  },
  getSumAdditionalSold: async () => {
    const agg = await prisma.vehicle.groupBy({
      by: ["id"],
      _sum: {
        additionalPrice: true,
      },
      where: {
        statusSold: true,
      },
    });
    console.log(agg);
    return agg.reduce((acc, obj) => acc + obj._sum.additionalPrice, 0);
  },
};
