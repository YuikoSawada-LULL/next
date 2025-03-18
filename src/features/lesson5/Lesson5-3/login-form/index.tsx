"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    loginFormSchema,
    type LoginFormInputs,
} from "@/libs/lesson5/validation-schema";
import { loginFormAction } from "@/actions/lesson5/login-form";
export const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        mode: "onBlur",
        resolver: zodResolver(loginFormSchema),
    });
    const [serverError, setServerError] = useState(false);
    const onSubmit = async (data: LoginFormInputs) => { //resolverオプションでReact Hook Form内でZodを使用できるようにします。
        const result = await loginFormAction(data);
        
        if (!result) {
            console.log("不明なエラー");
            return;
        }
        if (result.error) {
            setServerError(true);
            console.log("不明なエラー");
            console.log(result.error);
            return;
        }
        // サブミット後の処理を記載
        setServerError(false);
        console.log(data);
    };
    return (
        <>
            {serverError && <div>不正な操作が行われました</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ID</label>
                <br />
                {/* ⇓zodを使わないバージョン */}
                {/* <input type="text" {...register('id', {
                    required: 'IDは必須です'
                })}/> */}
                {/* ⇓zodを使わうバージョン */}
                <input type="text" {...register("id")} />

                {/* 型を定義しないと下記エラーになるのでLoginFormInputsで定義 */}
                {errors.id && <div>{errors.id.message}</div>}
                <br />
                <label>パスワード</label>
                <br />
                {/* ⇓zodを使わないバージョン */}
                {/* <input type="password" {...register('password', {
                    required: 'パスワードは必須です'
                })}/> */}
                {/* ⇓zodを使うバージョン */}
                <input type="password" {...register('password')}/>
                {errors.password && <div>{errors.password.message}</div>}
                <br />
                <button>送信</button>
            </form>
        </>
    );
};
