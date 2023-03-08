import RadioGroup from "../components/RadioGroup";

interface CheckboxProps {
  value: string;
  name: string;
  checked?: boolean;
  onClick: () => void;
}

export type RadioGroupOptions = {
  title: string;
  options: Array<CheckboxProps>
}