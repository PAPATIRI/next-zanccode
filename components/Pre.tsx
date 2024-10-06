"use client";
import { CopyButton } from "./copy-button";

export const Pre = ({ children, ...props }: any) => {
  return (
    <pre {...props} className="p-0 relative">
      <div className="group w-fit rounded p-1.5 m-1.5 absolute bg-transaparent right-0 transition-all duration-300 hover:bg-slate-300">
        <CopyButton text={children[1].props.children.props.raw} />
      </div>
      {children}
    </pre>
  );
};
