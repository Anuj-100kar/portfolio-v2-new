import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <ChevronDown className="text-zinc-400"/>
    </div>
  );
}