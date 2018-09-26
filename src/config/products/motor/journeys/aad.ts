export const AAD = {
  id: 'aad',
  path: 'aad',
  title: 'Add a driver',
  pages: [
    'eligibility',
    'your-details'
    // 'add-driver',
    // 'review-and-confirm',
    // 'important-information'
  ],
  questions: {
    eligibility: ['renewalDate', 'otherChanges', 'automaticRenewal', 'paymentType'],
    'your-details': [
      'title',
      'firstName',
      'lastName',
      'postcode',
      'dob'
      // 'isPolicyHolder',
      // 'applicantRelationship',
      // 'applicantFullName',
      // 'email',
      // 'phone',
      // 'policyNumber'
    ],
    'add-driver': ['title', 'firstName', 'lastName'],
    'review-and-confirm': ['agree'],
    'important-information': ['renewalAccepted', 'policyAccurate', 'useCurrentPaymentMethod']
  }
};
