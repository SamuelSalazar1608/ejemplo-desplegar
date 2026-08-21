import {NextResponse} from "next/server";

export async function GET(request) {
  const datos = {
    mensaje: "Hola desde el backend",
    estado: "OK"
  };
  return NextResponse.json(datos);
}