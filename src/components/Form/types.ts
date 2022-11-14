export interface Props {
  id?: string;
  defaultValue?: string;
  defaultOption?: string;
  buttonText?: string;
  onSubmit: ({task, option}: {task: string; option: string}) => void;
}
