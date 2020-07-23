/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import React from "react";

function usePrevious(value: any) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

type TableBoxProps = {
  table: string[][];
};

const TableBox = ({ table = [[]] }: TableBoxProps) => {
  const rows = table.length;
  const columns = table.reduce((prev, row) => Math.max(prev, row.length), 0);

  const previousTable: string[][] | null = usePrevious(table);

  const isUpdated = React.useCallback(
    (row, column) => {
      if (previousTable !== null) {
        return (
          previousTable[row] === undefined ||
          table[row][column] !== previousTable[row][column]
        );
      }
      return false;
    },
    [table, previousTable]
  );

  const updatedStyle = css`
    background-color: pink;
    transition: background-color 400ms;
  `;

  const panels = new Array(rows)
    .fill(1)
    .map((_, i) =>
      new Array(columns).fill(1).map((__, j) => {
        return table[i][j] !== undefined ? table[i][j] : null;
      })
    )
    .map((row, rowId) =>
      row.map((value, columnId) => (
        <div
          key={`${String(rowId)}-${String(columnId)}`}
          css={[
            css`
              border: solid black;
              border-width: 1px;
              display: flex;
              justify-content: center;
              align-items: center;
              span {
                height: 16px;
                font-size: 16px;
              }
            `,
            isUpdated(rowId, columnId) ? updatedStyle : null,
          ]}
        >
          <span>{value}</span>
        </div>
      ))
    );

  return (
    <section
      css={css`
        display: grid;
        grid-template-rows: ${new Array(rows).fill("30px").join(" ")};
        grid-template-columns: ${new Array(columns).fill("30px").join(" ")};
        grid-gap: 3px;
      `}
    >
      {panels}
    </section>
  );
};

export default TableBox;
