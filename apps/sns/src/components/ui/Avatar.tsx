type Props = {
  image?: string | null;
  size?: "sm" | "md";
  border?: "gradient" | "none";
};
const Avatar = ({ image, size = "md", border = "gradient" }: Props) => {
  if (!image) return <></>;
  return (
    <div
      className={` flex items-center text-center p-[0.1rem] rounded-full  ${
        size === "md" ? "w-16 h-16" : "w-7 h-7"
      } ${
        border === "gradient"
          ? "bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300"
          : border
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="object-cover rounded-full p-[0.1rem] bg-white w-full h-full"
        alt="user profile"
        src={image ?? undefined}
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

export default Avatar;
