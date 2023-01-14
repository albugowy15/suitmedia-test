import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface Inputs {
  name: string;
  email: string;
  message: string;
}

const schema = yup
  .object({
    name: yup.string().required("This field is required"),
    email: yup.string().email("Invalid email address").required("This field is required"),
    message: yup.string().required("This field is required"),
  })
  .required();
export default function FormContact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <div className="px-5 lg:px-36 py-10 mx-auto">
      <h1 className="text-center font-bold text-xl">CONTACT US</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name">Name</label>
            <input {...register("name")} type="text" className="form-input rounded-md" />
            <p className="text-red-600">{errors.name?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Email</label>
            <input {...register("email")} type="email" className="form-input rounded-md" />
            <p className="text-red-600">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message">Message</label>
            <textarea {...register("message")} className="form-textarea rounded-md" />
            <p className="text-red-600">{errors.message?.message}</p>
          </div>
          <div className="flex flex-col gap-1">
            <button type="submit" className="bg-blue-500 py-2 text-white rounded-md">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
