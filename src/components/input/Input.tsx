import React, { FC, forwardRef, ForwardedRef } from "react";
import { StyledInput, Label } from "./Input.styled";

export interface Props {
  value: string;
  // Note: updating the value needs to happen in this onChange function.
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: ForwardedRef<HTMLInputElement | null>;
  label?: string;
  placeholder?: string;
  labelPlacement?: LabelPlacement;
  width?: string;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement> | undefined;
  id?: string;
}

export type LabelPlacement = "default | overlap";

const _TextInput: FC<Props> = ({
  value,
  onChange,
  label,
  labelPlacement = "default" as LabelPlacement,
  width,
  onKeyDown,
  id,
  placeholder,
  ref,
}) => {
  return (
    <StyledInput inputWidth={width}>
      <Label labelPlacement={labelPlacement}>{label}</Label>
      <div>
        <input
          ref={ref}
          id={id}
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </div>
    </StyledInput>
  );
};

const TextInput = forwardRef<HTMLInputElement | null, Props>((props, ref) => (
  <_TextInput {...props} ref={ref} />
));

export default TextInput;
