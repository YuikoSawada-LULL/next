import { z } from "zod";
// (※1)
// z.objectという関数の中で定義する必要がある
export const loginFormSchema = z.object({
    // min(1)：必須項目
    // min(6)：必ず６文字以上入れる
    id: z.string().min(1, { message: "IDは必須です" }),
    password: z
        .string()
        .min(1, { message: "パスワードは必須です" })
        .min(6, { message: "6文字以上入れてください" }),
});

// 定義したスキーマを使用して型を定義する
export type LoginFormInputs = z.infer<typeof loginFormSchema>;
// ⇒他のページでLoginFormInputsと書いた部分は、zod側であるこのページで型定義しているものを呼び出している