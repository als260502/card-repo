import { useRouter } from "next/router";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
type FormData = {
  id: string;
  userName: string;
  linkedinUrl: string;
  githubUrl: string;
};

const schema = yup.object({
  userName: yup.string().required("please inset your name"),
  linkedinUrl: yup
    .string()
    .matches(
      /^[https://linkedin.com]+\/in\/[a-zA-z0-9-]+$/,
      "please provide a linkedin profile address"
    )
    .url("must be a valid url"),
  githubUrl: yup
    .string()
    .matches(
      /^[https://github.com]+\/[a-zA-z0-9-]+$/,
      "please provide a github profile address"
    )
    .url("must be a valid url"),
});

export default function Generate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const handleOnSubmit = async (data: FormData) => {
    const bodyRequest = {
      name: data.userName,
      githubUrl: data.githubUrl,
      linkedinUrl: data.linkedinUrl,
    };
    const response = await fetch("http://localhost:3333/api/card/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyRequest),
    });
    const responseData = await response.json();

    router.push(`qrcode?id=${responseData.id}&name=${responseData.name}`);
  };

  return (
    <div className="w-full h-screen px-2 bg-gray-200 flex items-center justify-center">
      <div className="mt-6 lg:my-16 px-2 py-8 bg-gray-100 rounded-lg shadow-lg">
        <h1 className="my-8 px-2 md:text-3xl text-xl  font-semibold">
          QR Code Image Generator
        </h1>

        <form
          onSubmit={handleSubmit(handleOnSubmit)}
          className="flex flex-col gap-5"
        >
          <Input
            {...register("userName")}
            error={errors.userName?.message}
            labelText="Name"
            placeholder="Input your name"
            name="userName"
          />

          <Input
            {...register("linkedinUrl")}
            error={errors.linkedinUrl?.message}
            labelText="Linkedin URL"
            placeholder="https://linkdein.com/in/andre-souza-dev"
            name="linkedinUrl"
          />

          <Input
            {...register("githubUrl")}
            error={errors.githubUrl?.message}
            labelText="Github URL"
            placeholder="https://github.com/als260502"
            name="githubUrl"
          />

          <Button buttonText="Generate Image" />
        </form>
      </div>
    </div>
  );
}
