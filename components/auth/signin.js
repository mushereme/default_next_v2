import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import useAuth from "../../hooks/useAuth";
import { 
  Alert, 
  Button,
  Form,
  Input,
} from "antd";

const SignIn = () => {
  
  const { t } = useTranslation();
  const router = useRouter();
  const { state, signIn } = useAuth();

  const { form } = Form.useForm();

  const handleFinish = (values) => {
    console.log("$:/signin/values", values);
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        email: "info@super.mn",
        password: "1234"
      }}
      onFinish={handleFinish}
    >
      {state.error && (
        <Alert type="error" message={state.error} banner />
      )}
      <Form.Item
        label={t("form_auth_label_email")}
        name="email"
        rules={[{ required: true, message: t('form_auth_rules_email') }]}
      >
        <Input type="email" placeholder={t("form_auth_placeholder_email")} />
      </Form.Item>
      <Form.Item
        label={t('form_auth_label_password')}
        name="password"
        rules={[{ required: true, message: t('form_auth_rules_email') }]}
      >
        <Input type="password" placeholder={t("form_auth_placeholder_password")} />
      </Form.Item>
      <Form.Item>
        <Button htmlType="submit">
          {t('form_auth_button_submit')}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default SignIn;