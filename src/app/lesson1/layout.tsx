export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>共通エリア</div>
      <div>{children}</div>
    </>
  );
}