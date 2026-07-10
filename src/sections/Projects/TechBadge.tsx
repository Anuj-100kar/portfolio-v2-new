type Props = {
  text: string;
};

export default function TechBadge({ text }: Props) {
  return (
    <span
      className="
      px-4
      py-2
      rounded-full
      bg-blue-500/10
      border
      border-blue-500/20
      text-blue-400
      text-sm
      "
    >
      {text}
    </span>
  );
}