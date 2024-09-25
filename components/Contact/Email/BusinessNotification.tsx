import { BusinessNotificationProps } from '@/lib/types';
import { Body, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components';

export default function BusinessNotification({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
  timeSent,
}: BusinessNotificationProps) {
  return (
    <Html>
      <Head />
      <Preview>You Received a New Business Inquiry</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Business Inquiry</Heading>
          <Text style={{ ...text, marginBottom: '14px' }}>
            You have a new business inquiry from{' '}
            <strong>
              {firstName} {lastName}.
            </strong>
          </Text>
          <Text style={{ ...text, marginBottom: '14px' }}>Time Received: {timeSent}</Text>
          <Text style={{ ...text, marginBottom: '14px' }}>Here is a copy of their message:</Text>
          <Container
            style={{ ...container, backgroundColor: '#f4f4f4', borderRadius: '5px', border: '1px solid #eee' }}
          >
            <Text style={{ ...textAlt, marginBottom: '0px' }}>
              First Name: <strong>{firstName}</strong>
            </Text>
            <Text style={{ ...textAlt, marginBottom: '0px' }}>
              Last Name: <strong>{lastName}</strong>
            </Text>
            <Text style={{ ...textAlt, marginBottom: '0px' }}>
              Email: <strong>{email}</strong>
            </Text>
            <Text style={{ ...textAlt, marginBottom: '0px' }}>
              Phone: <strong>{phone}</strong>
            </Text>
            <Text style={{ ...textAlt, marginBottom: '0px' }}>
              Service: <strong>{service}</strong>
            </Text>
            <Text style={{ ...text, marginBottom: '14px' }}>Message: </Text>
            <Text style={{ ...text, fontWeight: 'bold' }}>{message}</Text>
          </Container>
          <Text style={footer}>
            <Link href="https://360autoconcepts.com/" target="_blank" style={{ ...link, color: '#898989' }}>
              360 Auto Concepts
            </Link>
          </Text>
          <Text style={footer}>Elevate Your Lifestyle</Text>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: '#ffffff',
};

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
};

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
};

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
};

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
};
const textAlt = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
};

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
};
