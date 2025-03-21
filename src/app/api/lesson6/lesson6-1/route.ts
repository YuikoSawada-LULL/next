import { NextResponse } from 'next/server';

const data = {
    title: "タイトル",
    description: "テキストテキストテキストテキストテキストテキスト",
}

// どういうデータを返すかというところで「.json」を指定する
export async function GET() {
return NextResponse.json(data, {status: 200}); // 第二引数でステータスコードを指定できる
}

// ここではわかりやすいように「request」という名前の引数にしている
export async function POST(request: NextRequest) {
    // console.log(request);
    
    const data = await request.json();
    return NextResponse.json({ message: `You sent: ${data.text}` });
}

export const dynamic = 'force-dynamic';