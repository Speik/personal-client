import { ICertificate } from './certificates.model';

const CERTIFICATES_MOCKS_COUNT = 16;

const mockCertificate: ICertificate = {
  name: 'SQL for Data Science',
  issuerName: 'Great Learning',
  year: 2023,
  imageUrl: '/assets/images/certificate.jpg',
  credentialUrl: 'https://verify.mygreatlearning.com/ICIOSEJZ',
};

const certificates = [...new Array(CERTIFICATES_MOCKS_COUNT)].map((_) => ({
  ...mockCertificate,
}));

export { certificates };
