import { useState } from "react";
import { useFormik, FormikProps } from "formik";
import { useNavigate } from "react-router-dom";
import ILoginFormData from "./interfaces/iLoginFormData";
import loginValidationSchema from "./validation/loginValidationSchema";
import useLoginMutation from "../../api/mutations/useLoginMutation";
import { toast } from "react-toastify";

interface IUseLoginRes {
  formik: FormikProps<ILoginFormData>;
  loginError: string;
  isMytationLoading: boolean;
}

const useLogin: () => IUseLoginRes = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState<string>("");
  const [isMytationLoading, setIsMytationLoading] = useState<boolean>(false);
  const { mutateAsync } = useLoginMutation();

  const formik = useFormik<ILoginFormData>({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validationSchema: loginValidationSchema,
    onSubmit: (val) => {
      setIsMytationLoading(true);
      mutateAsync(val)
        .then((res) => {
          formik.resetForm();
          if (res.status === 200) {
            navigate("/");
            localStorage.setItem("loginToken", res.loginToken);
            toast.success("Successful authorization");
          } else {
            setLoginError(res.message);
          }
        })
        .catch(() => {
          toast.error("Something went wrong...");
        })
        .finally(() => {
          setIsMytationLoading(false);
        });
    },
  });

  return { formik, loginError, isMytationLoading };
};

export default useLogin;
