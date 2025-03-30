type PageProps = {
    params: {
        category: string;
    };
};

export default function Page({ params }: PageProps) {
    // console.log(params);
    return <div>{params.category}ページ</div>;
}