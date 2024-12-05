import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";

import { authCredentials } from "@/providers";

export const LoginPage = () => {
  return (
    <AuthPage
      type="register"
      // registerLink={false}
      // forgotPasswordLink={false}
      loginLink={true}
      title={<ThemedTitleV2 collapsed={false} text="DashPulse" />}
      formProps={{
        initialValues: authCredentials,
      }}
    />
  );
};
