import { NextResponse } from "next/server";

export async function POST(req) {
  const { fullname, email, message } = await req.json();

  console.log("Fullname: ", fullname);
  console.log("email: ", email);
  console.log("message: ", message);

  return NextResponse.json({ msg: ["hi from contact route"] });
}
