"use server"; // サーバー側で作動しますという宣言

import {
    loginFormSchema,
    type LoginFormInputs,
} from "@/libs/lesson5/validation-schema";

// サーバーサイドで定義する関数は必ず「async（非同期関数）」を付ける
// data：フォームの送信ボタンが押されたときにサーバーアクションズに渡されるように記載している
export async function loginFormAction(data: LoginFormInputs) {
const result = loginFormSchema.safeParse(data); // 「React Hook FormとZodを使用したバリデーション 」で定義したバリデーションスキーマを再利用してサバー側でも同様のチェックを行う

    // (※2)
if(result.success) {
        /**successがtrueの時の処理を記載
         * 必要あれば何かしらサーバーサイド処理を入れる
         */
return { success:true, data: result.data }; // 結果をフロント側に返す
    }

    // (※3)
if(result.error) {
    // falseの場合の処理を記載
return { success:false, error: result.error.format() }; // error.format()でエラー文を返す
    }

    // (※4)
return { success:false }; // その他、例外のエラー
}
