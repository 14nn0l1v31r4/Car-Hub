import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: string;
    btnType?: "button" | "submit";
    textStyles?: string;
    containerStyles: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    rightIcon?: string;
    isDisable?: boolean;
}
export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  export interface FilterProps{
    manufacturer: string | string[];
    year: string | number | string[];
    fuel: string | string[];
    limit: string | number | string[];
    model: string | string[];
  }

  export interface OptionProps{
    title: string;
    value: string;
  }

  export interface CustomFilterProps{
    title: string;
    options: OptionProps[];
  }

  export interface ShowMoreProps{
    pageNumber : number;
    isNext: boolean;
  }