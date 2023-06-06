import vehicle from "@/app/models/vehicle";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const sold = searchParams.get("sold");

  const isSold = sold == "true";

  const vehicles = await vehicle.get(isSold);
  return NextResponse.json({ vehicles });
};

export const POST = async (request) => {
  const body = await request.json();

  const response = vehicle.create({
    name: body.name,
    policeNumber: body.policeNumber,
    engineNumber: body.engineNumber,
    firstPrice: parseInt(body.firstPrice),
    servicePrice: parseInt(body.servicePrice),
    additionalPrice: parseInt(body.additionalPrice),
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return NextResponse.json({ response });
};
