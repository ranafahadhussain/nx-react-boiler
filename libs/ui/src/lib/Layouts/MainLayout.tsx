
interface Props {
  children: React.ReactNode;
}

export default function BasicLayout({ children }: Props) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
