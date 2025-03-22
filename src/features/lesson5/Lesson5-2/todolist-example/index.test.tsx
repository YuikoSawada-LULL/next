import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TodoListExample } from "./";

describe("TodoListテスト", () => {
    test("初期表示の確認", async () => {
        const { container } = render(<TodoListExample />);

        const listItem = container.querySelector("li");
        expect(listItem).not.toBeInTheDocument();
        // screen.debug();
    });

    test("リストが追加・削除されていることを確認", async () => {
        const user = userEvent.setup();
        const { container } = render(<TodoListExample />);

        const input = container.querySelector("input");
        const btnAdd = screen.getByRole("button", { name: "追加" });

        await user.type(input!, "テストリスト");
        await user.click(btnAdd);

        const listItem = container.querySelector("li");

        expect(listItem).toHaveTextContent("テストリスト");

        const btnDel = listItem?.querySelector("button");
        await user.click(btnDel!);

        expect(listItem).not.toBeInTheDocument();

        screen.debug();
    });
});