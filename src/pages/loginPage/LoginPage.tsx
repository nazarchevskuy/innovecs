import React, { FC } from "react";
import PageTemplate from "../../templates/pageTemplate/PageTemplate";
import Input from "../../components/atom/input/Input";
import CustomButton from "../../components/moleculs/customButton/CustomButton";
import useLogin from "../../models/login/useLogin";
import FormContainer from "../../components/atom/formContainer/FormContainer";
import { Typography } from "@mui/material";
import ErrorMessage from "../../components/atom/errorMessage/ErrorMessage";

const LoginPage: FC = () => {
  const { formik, loginError, isMytationLoading } = useLogin();

  return (
    <PageTemplate>
      <FormContainer>
        <Typography
          variant={"h3"}
          mb={2}
          align={"center"}
          sx={{ fontWeight: 600 }}
        >
          Log in
        </Typography>
        <form>
          <Input
            name={"email"}
            value={formik.values.email}
            onChange={(val) => {
              formik.setFieldValue("email", val);
            }}
            isFullWidth
            mb={2}
            isError={formik.errors.email ? true : false}
          />
          {formik.errors.email ? (
            <ErrorMessage title={formik.errors.email} mb={1} />
          ) : (
            false
          )}
          <Input
            name={"password"}
            value={formik.values.password}
            onChange={(val) => {
              formik.setFieldValue("password", val);
            }}
            isFullWidth
            mb={2}
            isError={formik.errors.password ? true : false}
          />
          {formik.errors.password ? (
            <ErrorMessage title={formik.errors.password} mb={1} />
          ) : (
            false
          )}
          <CustomButton
            name={"Log in"}
            onClick={() => {
              formik.handleSubmit();
            }}
            isDisabled={isMytationLoading}
            isLoading={isMytationLoading}
          />
          {loginError && <ErrorMessage title={loginError} mt={1} />}
        </form>
      </FormContainer>
    </PageTemplate>
  );
};

export default LoginPage;
