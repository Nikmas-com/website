import classNames from 'classnames';
import { forwardRef, ReactElement, ReactNode } from 'react';
import BasicTextNode from './BasicTextNode';

interface TextNodeProps {
  children?: ReactNode;
  className?: string;
}

const TextNode = forwardRef<HTMLParagraphElement, TextNodeProps>(
  function TextNode({ className, children }: TextNodeProps, ref): ReactElement {
    const classes = classNames(`text-[1.3rem]  !leading-[1.8rem]`, className);

    return (
      <BasicTextNode ref={ref} className={classes}>
        {children}
      </BasicTextNode>
    );
  },
);

export default TextNode;
