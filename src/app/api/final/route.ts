// app/api/salons/route.ts
import { NextResponse, NextRequest } from 'next/server';

// メモリ内にデータを保持（本番環境ではデータベースを使うべき）
let salons: any[] = [];

// GET: 美容室データを取得
export async function GET() {
  return NextResponse.json(salons, { status: 200 });
}

// POST: 新しい美容室データを追加
export async function POST(request: NextRequest) {
  const newSalon = await request.json();
  
  // IDを自動付与
  const salonWithId = {
    ...newSalon,
    id: Date.now().toString()
  };
  
  // 配列に追加
  salons.push(salonWithId);
  
  return NextResponse.json(salonWithId, { status: 201 });
}

// サーバーが動的にレスポンスを生成するように設定
export const dynamic = 'force-dynamic';