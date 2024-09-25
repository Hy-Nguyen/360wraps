import { Body, Container, Head, Heading, Html, Link, Preview, Text } from '@react-email/components';
import { CustomerConfirmationProps } from '@/lib/types';
import * as React from 'react';

export default function CustomerConfirmation({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}: CustomerConfirmationProps) {
  return (
    <Html>
      <Head />
      <Preview>We received your message and are working to get back to you!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Message Received!</Heading>
          <Text style={{ ...text, marginBottom: '14px' }}>
            Thank you for contacting us! We will get back to you as soon as possible. Please allow 1-3 business days for
            a response.
          </Text>
          <Text style={{ ...text, marginBottom: '14px' }}>Here is a copy of the message you sent:</Text>
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
