import * as React from 'react';

import { Html } from '@react-email/html';

interface EmailTemplateProps {
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  message
}) => (
  <Html>
    <h1>Thanks for contacting me!</h1>
    <p>Message sent:</p>
    <p>{message}</p>
  </Html>
);