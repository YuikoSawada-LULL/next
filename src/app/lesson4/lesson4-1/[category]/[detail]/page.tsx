// notFoundは関数なので関数として実行する必要あり
import { notFound } from 'next/navigation';
import { Contents, PageTitle, Text } from '@/components/lesson3';
import { UrlMethods } from '@/features/lesson4/lesson4-1/category/detail/url-methods';

type PageProps = {
    params: {
        category: string;
        detail: string;
    };
};

const data = [
    {
        id: 'aaa',
        title: 'titleAAA',
        contents: 'contentsAAA',
    },
    {
        id: 'bbb',
        title: 'titleBBB',
        contents: 'contentsBBB',
    },
    {
        id: 'ccc',
        title: 'titleCCC',
        contents: 'contentsCCC',
    },
]

export default function Page({ params }: PageProps) {
    const detailData = data.find((item) => item.id === params.detail);

    if (detailData === undefined) {
        notFound();
    }
    return (
    <Contents>
        {/* 動的にコンテンツをだし分け */}
        <PageTitle>{detailData?.title}</PageTitle>
        <Text>{detailData?.contents}</Text>

        {/* url系メソッドを試す */}
        <UrlMethods />
    </Contents>
    );
};

// Dinamic Routeで動的に画面を変更したい場合は「generateMetadata」を使用してメタデータを動的に更新できる
export const generateMetadata = ({ params }: PageProps) => {
    const detailData = data.find((item) => item.id === params.detail);

    return {
        title: `タイトル: ${detailData?.title}`,
        description: `ディスクリプション: ${detailData?.contents}`,
    };
};