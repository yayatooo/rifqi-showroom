export function getTotalPrice(vehicle) {
  return vehicle.firstPrice + vehicle.servicePrice + vehicle.additionalPrice;
}
export function rupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(number);
}
