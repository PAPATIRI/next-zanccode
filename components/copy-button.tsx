"use client";

import { CheckIcon, Clipboard } from "lucide-react";
import { useState } from "react";

export const CopyButton = ({ text }: any) => {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <button
      disabled={isCopied}
      onClick={copy}
      className="flex items-center gap-2 text-slate-200 group-hover:text-slate-900"
    >
      {isCopied ? "copied!" : "copy"}
      {isCopied ? (
        <CheckIcon size={16} className="text-green-700" />
      ) : (
        <Clipboard size={16} />
      )}
    </button>
  );
};
