export default interface Question {
  [hash: string]: {
    type: string;
    id: string;
    name: string;
    label: string;
    options?: string[];
    validators?: any[];
    minLengthValue?: string;
    maxLengthValue?: string;
  };
}
