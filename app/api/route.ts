// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextResponse } from "next/server"

// GET /api
export const GET = () => {
  return NextResponse.json({ name: "Hello world" }, { status: 200 })
}
