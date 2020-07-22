/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { CSSTransition, TransitionGroup } from "react-transition-group";

type Element = {
  id: any;
  value: string;
};

type QueueBoxProps = {
  elements: Element[];
};

function QueueBox({ elements }: QueueBoxProps) {
  return (
    <div
      css={css`
        label: QueueBox;
        background-color: #079494;
        display: flex;
        align-items: center;
        padding: 0 4px;
        color: #fff;
      `}
    >
      <span>Front</span>
      <TransitionGroup
        css={css`
          flex: 1;
          height: 32px;
          display: inline-flex;
          overflow-y: hidden;
          overflow-x: auto;
          border: 1px solid #bbb;
        `}
      >
        {elements.map((el) => (
          <CSSTransition
            key={el.id}
            timeout={400}
            classNames="slide"
            css={css`
              label: QueueBox__item;
              flex: 1;
              max-width: 32px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              border-right: 1px solid #bbb;
              &.slide-enter {
                min-width: 0px;
                flex-grow: 0;
              }
              &.slide-enter-active {
                flex-grow: 1;
                transition: flex-grow 400ms;
              }
              &.slide-exit {
                flex-grow: 1;
              }
              &.slide-exit-active {
                min-width: 0px;
                flex-grow: 0;
                transition: flex-grow 400ms;
              }
            `}
          >
            <span>{el.value}</span>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <span>Rear</span>
    </div>
  );
}

export default QueueBox;
