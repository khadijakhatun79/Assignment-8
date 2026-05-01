"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image,
    });

    if (error) {
      alert(error.message);
    } else {
      router.push("/");
    }
  };

  return (
    <Card className="border mx-auto w-96 py-10 mt-10">
      <h1 className="text-center text-2xl font-bold">Sign Up</h1>

      <Form className="flex flex-col gap-4 px-6" onSubmit={onSubmit}>
        <TextField isRequired name="name">
          <Label>Name</Label>
          <Input placeholder="Your name" />
          <FieldError />
        </TextField>

        <TextField isRequired name="image">
          <Label>Image URL</Label>
          <Input placeholder="Image URL" />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired name="password" type="password">
          <Label>Password</Label>
          <Input placeholder="Enter password" />
          <FieldError />
        </TextField>

        <Button type="submit" className="bg-orange-500 text-white">
          Sign Up
        </Button>
      </Form>
    </Card>
  );
}