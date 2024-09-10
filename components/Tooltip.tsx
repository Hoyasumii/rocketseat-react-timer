type Props = {
  text: string;
  children: React.ReactNode;
};

export function Tooltip({ children, text }: Props) {
  return (
    <div className="group relative flex flex-col items-center">
      <div className="hidden group-hover:flex group-hover:flex-col group-hover:items-center group-hover:z-10 absolute -top-8 px-2 py-1 rounded-md bg-gray-700 after:min-h-0 after:min-w-0 after:border-4 after:border-transparent after:border-t-gray-700 after:absolute after:z-20 after:-bottom-2 after:origin-center text-sm font-bold">
        {text}
      </div>
      {children}
    </div>
  );
}
