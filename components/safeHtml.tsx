import DOMPurify from "isomorphic-dompurify";
import type { ElementType } from "react";

type SafeHtmlProps = {
  html: string;
  as?: ElementType;
  className?: string;
};

export default function SafeHtml({
  html,
  as: Tag = "div",
  className = "",
}: SafeHtmlProps) {
  const clean = DOMPurify.sanitize(html);

  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}