"use client";
import React from "react";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
const SelectForm = ({ control, id, label, placeHolder, list }) => {
  return (
    <div className="flex flex-col gap-4">
      <Label htmlFor={id} className="font-semibold text-md">
        {label}
      </Label>
      <FormField
        control={control}
        name={id}
        render={({ field }) => (
          <FormItem>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder={placeHolder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {list?.map((item, index) => (
                  <SelectItem key={index} value={`${item}`}>
                    {item}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        )}
      />
    </div>
  );
};

export default SelectForm;
