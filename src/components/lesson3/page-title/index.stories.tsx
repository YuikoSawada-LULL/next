import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle } from "./";

const meta = {
    title: "components/lesson3/page-title",  // Storybookのサイドパネルツリーを設定
    component: PageTitle,  // コンポーネントを登録
    parameters: {
        layout: "centered",  // 要素の表示位置
    },
    tags: ["autodocs"],
} satisfies Meta<typeof PageTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        children: 'テキスト',
    },
};
