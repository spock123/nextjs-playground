interface Props {
  title: string;
  children: React.ReactNode;
}

const Frame = ({ children, title }: Props) => {
  return (
    <>
      <div className="container grid gap-y-6 my-6 mx-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        {children}
      </div>
    </>
  );
};

export default Frame;
