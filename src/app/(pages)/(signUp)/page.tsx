"use client";

import { useCallback, useReducer, useEffect, useState } from "react";

import Image from "next/image";

import { RightSide } from "./rightSections";
import { LeftSide } from "./leftSections";

import {
  getGradientByColor,
  getGradientByStep,
  handleGetColorObj,
} from "@/app/utils/functions";
import { COLORS, initialState } from "@/app/utils/supplies";

import logo from "@/assets/agidesk-logo.svg";

export default function SignUp() {
  const [color, setColor] = useState<string | null>("");
  const [url, setUrl] = useState("");

  const reducer = useCallback((state: any, action: any) => {
    if (action.type === "step") {
      return { ...state, step: state.step + action.payload };
    }
    return { ...state, [action.type]: action.payload };
  }, []);

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleNextStep = useCallback(() => {
    dispatch({ type: "step", payload: +1 });
  }, []);

  const handlePreviousStep = useCallback(() => {
    if (state.step === 0) return;
    dispatch({ type: "step", payload: -1 });
  }, [state.step]);

  const handleGetColor = useCallback((value: string) => {
    let color = value;

    const colorObj = COLORS.find((color) => color.name === value);

    if (colorObj) {
      color = colorObj.primary_hex;
    }

    setColor((prevState) => (prevState === value ? null : value));
    dispatch({ type: "color", payload: color });
  }, []);

  const handleGeUrl = useCallback((e: any) => {
    dispatch({ type: "url", payload: `https://${e.target.value}.agidesk.com` });
    setUrl(e.target.value);
  }, []);

  const custtomGradient =
    state.step === 4
      ? handleGetColorObj(color).gradient
      : getGradientByStep(state.step);

  return (
    <main className="flex min-h-screen  bg-white ">
      <aside className="px-[96px] pt-12 w-[60%] gap-1 flex-col flex">
        <header>
          <Image alt="logo" src={logo} width={169} />
        </header>

        <LeftSide
          handlePreviousStep={handlePreviousStep}
          handleGetColor={handleGetColor}
          handleNextStep={handleNextStep}
          handleGetUrlData={handleGeUrl}
          updateState={dispatch}
          step={state.step}
          state={state}
          color={color}
        />
      </aside>
      <aside className="flex-1">
        <RightSide
          gradient={custtomGradient}
          handlePreviousStep={handlePreviousStep}
          handleNextStep={handleNextStep}
          updateState={dispatch}
          step={state.step}
          color={color}
          text={url}
        />
      </aside>
    </main>
  );
}
