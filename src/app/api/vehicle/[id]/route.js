import vehicle from "@/app/models/vehicle";
import { NextResponse } from "next/server";

export const GET = async (request, res) => {
  const id = Number(res.params.id);
  const data = await vehicle.find(id);

  return NextResponse.json({ vehicle: data });
};

export const PUT = async (request, res) => {
  const id = Number(res.params.id);
  const body = await request.json();

  const data = {
    name: body.name,
    policeNumber: body.policeNumber,
    engineNumber: body.engineNumber,
    firstPrice: parseInt(body.firstPrice),
    servicePrice: parseInt(body.servicePrice),
    additionalPrice: parseInt(body.additionalPrice),
    statusSold: body.statusSold,
    updatedAt: new Date(),
  };

  if (body.statusSold) {
    if (body.soldAt) {
      // const parseSoldDate = Date.parse(body.soldAt);
      const parseSoldDate = new Date(body.soldAt);
      console.log(body.soldAt);
      data.soldAt = parseSoldDate;
    } else {
      data.soldAt = new Date();
    }
  } else {
    data.soldAt = null;
  }

  const response = await vehicle.update(id, data);

  return NextResponse.json({ response });
};

export const DELETE = async (request, res) => {
  const id = Number(res.params.id);
  const response = await vehicle.delete(id);
  return NextResponse.json({ response });
};
