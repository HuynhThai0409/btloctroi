import * as z from "zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import Loader from "@/components/shared/Loader";
import { Button } from '@/components/ui/button';
import { SigninValidation } from "@/lib/validation";
import { useToast } from "@/components/ui/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserContext } from "@/context/AuthContext";
import { useSignInAccount } from "@/lib/react-query/queries";
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";

const SigninForm = () => {
  const { toast } = useToast()
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  // Queries
  const { mutateAsync: signInAccount } = useSignInAccount();

  // 1. Define your form.
  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });
 


  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SigninValidation>) {

    const session = await signInAccount({
      email: values.email,
      password: values.password,
    })

    if(!session) {
      return toast({ title: 'Đăng nhập không thành công. Xin vui lòng thử lại.'})
    }

    const isLoggedIn = await checkAuthUser();

    if (isLoggedIn) {
      form.reset();

      navigate("/");
    } else {
      return toast({ title: "Đăng nhập không thành công. Xin vui lòng thử lại.", });
    }
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        {/* <img src="/assets/images/logo.svg" alt="logo" /> */}

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Đăng nhập
        </h2>
        <p className="text-light-3 small-medium md:base-regular mt-2">
          Chào mừng đến với Tổ Bảo Trì
        </p>
      
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full mt-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Mật khẩu</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="shad-button_primary">
              {isUserLoading ? (
                <div className="flex-center gap-2">
                    <Loader/>Loading...
                </div>
              ):"Đăng nhập"}
          </Button>

          <p className="text-small-regular text-light-2 text-center mt-2">
            Chưa có tài khoản?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1">
              Đăng ký
            </Link>
          </p>
        </form>
      </div>
    </Form>
  )
}

export default SigninForm