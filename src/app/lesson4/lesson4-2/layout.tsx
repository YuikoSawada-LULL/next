import { Lesson4Navigation } from "@/features/lesson4/common/lesson4-navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div><Lesson4Navigation/></div>
      <div>{children}</div>
    </>
  );
}