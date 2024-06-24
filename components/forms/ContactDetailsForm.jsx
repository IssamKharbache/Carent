"use client";
import InputForm from "@/components/forms/InputForm";
import { Form } from "../ui/form";
import SelectForm from "./SelectForm";

const ContactDetailsForm = ({ form }) => {
  return (
    <div className="mx-auto max-w-[1400px]">
      <Form {...form}>
        <form className="w-full bg-slate-200 p-5 shadow-md border rounded-lg">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputForm
                control={form.control}
                id="firstname"
                type="text"
                placeHolder="Enter your first name"
                label="First name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputForm
                control={form.control}
                id="lastname"
                type="text"
                placeHolder="Enter your last name"
                label="Last name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputForm
                control={form.control}
                id="email"
                type="email"
                placeHolder="Enter your email"
                label="Email address"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputForm
                control={form.control}
                id="phone"
                type="number"
                placeHolder="Enter your phone number"
                label="Phone number"
              />
            </div>
            <div className="w-full  px-3 mb-6 md:mb-0">
              <InputForm
                control={form.control}
                id="comment"
                type="text"
                placeHolder="Enter a comment"
                label="Comment"
              />
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactDetailsForm;
