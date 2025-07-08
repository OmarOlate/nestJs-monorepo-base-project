export type SendOneEmailInputDto = Readonly<{
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  html: string;
  text?: string;
  priority?: string;
}>;
