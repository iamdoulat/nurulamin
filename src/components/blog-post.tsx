import { remark } from 'remark';
import html from 'remark-html';

async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, { sanitize: false }).process(markdown);
  return result.toString();
}

export async function BlogPost({ content }: { content: string }) {
  const htmlContent = await markdownToHtml(content);

  return (
    <div
      className="prose prose-lg dark:prose-invert max-w-none
        prose-headings:font-headline prose-headings:tracking-tight
        prose-a:text-primary hover:prose-a:text-primary/80
        prose-code:before:content-none prose-code:after:content-none prose-code:rounded prose-code:px-1.5 prose-code:py-1 prose-code:bg-muted prose-code:text-foreground prose-code:font-code
        prose-pre:bg-muted prose-pre:text-foreground
      "
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  );
}
