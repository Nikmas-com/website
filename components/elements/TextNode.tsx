import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';
import BasicTextNode from './BasicTextNode';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
}

const TextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function TextNode({ className, children }: TextNodeProps, ref): ReactElement {
    const classes = classNames(`text-xl  mb-5`, className);

    return (
      <BasicTextNode ref={ref} className={classes}>
        {children}
      </BasicTextNode>
    );
  },
);

export default TextNode;
