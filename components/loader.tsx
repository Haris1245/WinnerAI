import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="w-7 h-7 relative animate-spin">
        <Image alt="logo" src="/icon.png" fill />
      </div>
      <p className="text-sm text-muted-foreground">The Winner is generaing</p>
    </div>
  );
};
