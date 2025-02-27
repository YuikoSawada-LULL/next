import type { Meta, StoryObj } from "@storybook/react";
import { List, ListItem } from "./";

const meta = {
    title: "components/lesson3/list", // Storybookのサイドパネルツリーを設定
    component: List, // コンポーネントを登録
    tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    // propsに設定する値
    args: {
        list: ["リスト", "リスト", "リスト"],
    },
};
export const OrderList: Story = {
    // propsに設定する値
    args: {
        list: ["リスト", "リスト", "リスト"],
        listType: "ol",
    },
};
export const UseChildren: Story = {
    // propsに設定する値
    args: {
        children: [
            <ListItem key="項目1">項目1</ListItem>,
            <ListItem key="項目2">項目2</ListItem>,
            <ListItem key="項目3">項目3</ListItem>,
        ],
    },
};
