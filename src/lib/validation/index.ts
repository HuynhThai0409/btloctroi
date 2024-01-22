import * as z from "zod";

// ============================================================
// USER
// ============================================================
export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Tên phải có ít nhất 2 ký tự." }),
  username: z.string().min(2, { message: "Tên đăng nhập phải có ít nhất 2 ký tự." }),
  email: z.string().email(),
  password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự." }),
});

export const SigninValidation = z.object({
  email: z.string().email({message: "Vui lòng nhập email đăng nhập"}),
  password: z.string().min(8, { message: "Mật khẩu phải có ít nhất 8 ký tự." }),
});

export const ProfileValidation = z.object({
  file: z.custom<File[]>(),
  name: z.string().min(2, { message: "Họ tên phải có ít nhất 2 ký tự." }),
  username: z.string().min(2, { message: "Tên đăng nhập phải có ít nhất 2 ký tự." }),
  email: z.string().email(),
  bio: z.string(),
});

// ============================================================
// POST
// ============================================================
export const PostValidation = z.object({
  caption: z.string().min(5, { message: "Minimum 5 characters." }).max(2200, { message: "Maximum 2,200 caracters" }),
  file: z.custom<File[]>(),
  location: z.string().min(1, { message: "This field is required" }).max(1000, { message: "Maximum 1000 characters." }),
  tags: z.string(),
});
