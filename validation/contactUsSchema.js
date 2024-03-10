import * as Yup from 'yup';

export const contactUsSchema=Yup.object().shape({
    name: Yup.string().required('Fullname is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    subject: Yup.string()
      .required('Password is required')
      .min(2)
      .max(200),
    comment: Yup.string()
      .required('Confirm Password is required')
      .min(2)
      .max(500),
  });