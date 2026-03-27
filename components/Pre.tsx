"use client";
import { isValidElement, ReactNode } from "react";
import { CopyButton } from "./copy-button";

const extractText = (node: ReactNode): string => {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement<{ children?: ReactNode }>(node) && node.props.children) {
    return extractText(node.props.children);
  }
  return "";
};

export const Pre = ({ children, ...props }: any) => {
  const textToCopy = props.raw ?? extractText(children);

  return (
    <pre {...props} className="p-0 relative">
      <div className="group w-fit rounded p-1.5 m-1.5 absolute bg-transaparent right-0 transition-all duration-300 hover:bg-slate-300">
        <CopyButton text={textToCopy} />
      </div>
      {children}
    </pre>
  );
};
