import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import remarkMath, { RemarkMathPlugin } from "remark-math";
import gfm from "remark-gfm";
import toc from "remark-toc";
import "katex/dist/katex.min.css";

// function MarkdownRender(props) {
//   const newProps = {
//     ...props,
//     plugins: [RemarkMathPlugin],
//     components: {
//       ...props.components,
//       math: (value) => <BlockMath>{value}</BlockMath>,
//       inlineMath: (value) => <InlineMath>{value}</InlineMath>,
//     },
//   };
//   return (
//     <MathJax.Provider input="tex">
//       <ReactMarkdown {...newProps} />
//     </MathJax.Provider>
//   );
// }

// const _mapProps = (props) => ({
//   ...props,
//   plugins: [RemarkMathPlugin],
//   components: {
//     ...props.components,
//     math: ({ value }) => <BlockMath>{value}</BlockMath>,
//     inlineMath: ({ value }) => <InlineMath>{value}</InlineMath>,
//   },
// });

const MarkdownRender = (props) => (
  <ReactMarkdown
    remarkPlugins={[gfm, remarkMath, [toc, { heading: "cuprins" }]]}
    rehypePlugins={[rehypeKatex]}
    {...props}
  />
);

export default MarkdownRender;
