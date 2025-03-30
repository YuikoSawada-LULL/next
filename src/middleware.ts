
import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const basicAuth = req.headers.get("authorization");

    if (!basicAuth) {
        return new Response("Authentication required", {
            status: 401,
            headers: {
                "WWW-Authenticate": 'Basic realm="Secure Area"',
            },
        });
    }

    try {
        // console.log(basicAuth);
        const authValue = basicAuth.split(" ")[1]; //split():文字列を配列に変換する
        const [user, pwd] = atob(authValue).split(":");

        if (user === "test" && pwd === "12345") {
            //basic認証に必要なIDを設定（本来はサーバー環境で管理するのが一般的）
            return NextResponse.next();
        }
    } catch (e) {
        return new Response("Invalid Authentication", { status: 400 });
    }

    return new Response("Unauthorized", { status: 401 });
}