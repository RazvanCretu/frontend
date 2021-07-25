import MarkdownRender from "../components/Markdown";

const Content = () => {
  const content = `Given a **formula** below
  $$
  s = ut + \\frac{1}{2} at ^{2}
  $$
  
  $$
  \\frac{1}{\\sqrt{x}}

  \\left[
    \\begin{matrix}
    1 & 0\\\\
    0 & 1
    \\end{matrix}
    \\right]
  $$

  A table:

  | a | b | c |
  | - | - | - |
  | a | b | c |
  
  Calculate the \`value\` of $s$ when $u = 10\\frac{m}{s}$ and $a = 2\\frac{m}{s^{2}}$ at $t = 1s$

  > This is a blockquote ~with a strikethrough~. 
  >
  > Second line of the blockquote.

  ## Cuprins

  ## Alpha

  ## Beta

  `;

  return (
    <div>
      <MarkdownRender children={content} />
    </div>
  );
};

export default Content;
