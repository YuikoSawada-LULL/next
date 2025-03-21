import { NextResponse } from 'next/server';
const fullName: string = "澤田結子";
const hometown: string = "神奈川県";
const age: number | null = 26;
const hobbiesSkills: { hobbies: string; skills: string } = {
    hobbies: "ゲーム、バスケ観戦",
    skills: "ボールを指で回す",
};
const favoriteFoods: string[] = ["寿司", "カレー", "焼肉"];
const favoriteManga: string[] = ["スラムダンク", "ワンピース", "コナン"];

const data = {
    fullName,
    hometown,
    age,
    hobbiesSkills,
    favoriteFoods,
    favoriteManga
};

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