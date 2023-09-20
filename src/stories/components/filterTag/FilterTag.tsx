import { FC, HTMLAttributes } from "react";

const id = `filter-tag-${0}`;
export interface Props {
  /**
   * The text to display in the filter tag.
   */
  label: string;
  /**
   * The type of filter tag.
   */
  type: 'checkbox' | 'radio';
}

export type FilterTagProps = Props & HTMLAttributes<HTMLInputElement>;

const FilterTag: FC<Props> = ({
  label,
  type = 'radio'
}) => {
  return (
    <div className="filter-tag">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={id} />
    </div>
  );
}

export default FilterTag;
