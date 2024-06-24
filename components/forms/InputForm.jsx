"use client";
import React from "react";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
const InputForm = ({ control, id, label, placeHolder, type }) => {
  return (
    <div>
      <Label htmlFor={id} className="font-semibold text-md">
        {label}
      </Label>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem className="my-4">
            <FormControl>
              <Input
                placeholder={placeHolder}
                className="bg-slate-100"
                {...field}
                type={type}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default InputForm;
