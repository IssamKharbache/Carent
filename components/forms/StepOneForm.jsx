"use client";
import { useMemo, useState } from "react";
import { Form } from "@/components/ui/form";
import DateTimeForm from "@/components/forms/DateTimeForm";
import { pickupTime } from "@/app/contants/data";
import SelectForm from "@/components/forms/SelectForm";
import CitySelect from "@/components/forms/CitySelect";
import { Country, State, City } from "country-state-city";

import dynamic from "next/dynamic";

const StepOneForm = ({ form }) => {
  const getCities = City?.getCitiesOfState("DE", "HE");
  const [getSource, setSource] = useState(null);
  const [getDestination, setDestination] = useState(null);
  const Map = useMemo(
    () => dynamic(() => import("@/components/transfers/Map")),
    [getSource, getDestination]
  );
  return (
    <div className="flex flex-col md:flex-row max-w-[1400px] gap-4 w-full  mx-auto ">
      <Form {...form}>
        <form className="w-full flex flex-col  gap-6 bg-white p-5 shadow-md border rounded-lg">
          <DateTimeForm
            id="pickupdate"
            label="Pickup Date"
            control={form.control}
          />
          <SelectForm
            id="pickuptime"
            label="Pickup Time"
            placeHolder="Set your pickup time"
            list={pickupTime}
            control={form.control}
          />
          <CitySelect
            id="source"
            label="Start"
            placeHolder="Select your starting place"
            list={getCities}
            setValue={setSource}
            control={form.control}
          />
          <CitySelect
            id="destination"
            label="Destination"
            placeHolder="Select your ending place"
            list={getCities}
            setValue={setDestination}
            control={form.control}
          />
          <SelectForm
            id="persons"
            label="Persons"
            placeHolder="Select number of persons"
            list={[1, 2, 3, 4, 5, 6, 7, 8]}
            control={form.control}
          />
          <SelectForm
            id="transfertype"
            label="Transfer type"
            placeHolder="Select your transfer type"
            list={["one way", "return"]}
            control={form.control}
          />
        </form>
      </Form>
      <div className="flex justify-start flex-col w-full">
        <Map getSource={getSource} getDestination={getDestination} />
      </div>
    </div>
  );
};

export default StepOneForm;
