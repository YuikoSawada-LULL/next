import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "./";

describe("カウンターのテスト", () => {
    test("初期表示の確認", async () => {
        render(<Counter />);

        const text = screen.getByText("0");
        expect(text).toBeInTheDocument();
        // screen.debug();
    });
    test("「+」ボタンを押すとカウントが+1されるか", async () => {
        //test関数の第2引数の関数にはasyncつけておく（awaitを使いたい時が多いため）
        //①準備（コンポーネントなどの単位のテスト）
        const user = userEvent.setup();

        render(<Counter />);

        //②操作（アクションのテスト）
        //ユーザーイベントは必ずawait
        const btnPlus = screen.getByRole("button", { name: "+" });

        await user.click(btnPlus);

        //③操作した結果を検証
        const text = screen.getByText("1");
        expect(text).toBeInTheDocument();
        // screen.debug();
    });

    test("「-」ボタンを押すとカウントが-1されるか", async () => {
        //test関数の第2引数の関数にはasyncつけておく（awaitを使いたい時が多いため）
        //①準備（コンポーネントなどの単位のテスト）
        const user = userEvent.setup();

        render(<Counter />);

        //②操作（アクションのテスト）
        //ユーザーイベントは必ずawait
        const btnPlus = screen.getByRole("button", { name: "-" });

        await user.click(btnPlus);

        //③操作した結果を検証
        const text = screen.getByText("-1");
        expect(text).toBeInTheDocument();
        // screen.debug();
    });
});