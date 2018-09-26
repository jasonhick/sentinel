import validators from '../validators/validators';
// import Question from './models/question.interface';

// This object is Immutable. It should not be changed in the code.
export const Questions: Map<String, Object> = new Map<String, Object>([
  [
    'renewalDate',
    {
      type: 'radio',
      id: 'renewalDate',
      name: 'renewalDate',
      label: 'Renewal date'
    }
  ],
  [
    'otherChanges',
    {
      type: 'radio',
      id: 'otherChanges',
      name: 'otherChanges',
      label: 'Other changes'
    }
  ],
  [
    'automaticRenewal',
    {
      type: 'radio',
      id: 'automaticRenewal',
      name: 'automaticRenewal',
      label: 'Automatic renewal'
    }
  ],
  [
    'paymentType',
    {
      type: 'radio',
      id: 'paymentType',
      name: 'paymentType',
      label: 'Payment type'
    }
  ],
  [
    'title',
    {
      type: 'radio',
      id: 'title',
      name: 'title',
      group: 'title',
      label: 'Title',
      hint: '',
      placeholder: '',
      hasModal: false,
      modalId: '',
      modalLinkText: '',
      modalTitle: '',
      modalImage: '',
      options: ['Mr', 'Mrs', 'Miss', 'Ms', 'Dr'],
      validators: [validators.required],
      labelClass: '',
      inputClass: ''
    }
  ],
  [
    'firstName',
    {
      type: 'text',
      id: 'firstName',
      name: 'firstName',
      label: 'First name',
      validators: [validators.required, validators.minLength, validators.maxLength],
      minLengthValue: 2,
      maxLengthValue: 20
    }
  ],
  [
    'lastName',
    {
      type: 'text',
      id: 'lastName',
      name: 'lastName',
      label: 'Last name',
      validators: [validators.required, validators.minLength, validators.maxLength],
      minLengthValue: 2,
      maxLengthValue: 20
    }
  ],
  ['dateOfBirth', {}],
  ['address', {}],
  ['email', {}],
  ['mobile', {}],
  ['phone', {}],
  [
    'postcode',
    {
      type: 'text',
      id: 'postcode',
      name: 'postcode',
      label: 'Postcode',
      validators: [validators.required]
    }
  ]
]);
