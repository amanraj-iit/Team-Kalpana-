import React from "react";
import {
  AcademicCapIcon,
  PuzzlePieceIcon,
  RocketLaunchIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export interface EducationLevel {
  name: string;
  icon: React.ReactElement;
}

export const educationLevels: EducationLevel[] = [
  {
    name: "Elementary",
    icon: <StarIcon />,
  },
  {
    name: "Middle School",
    icon: <PuzzlePieceIcon />,
  },
  {
    name: "High School",
    icon: <RocketLaunchIcon />,
  },
  {
    name: "College",
    icon: <AcademicCapIcon />,
  },
];
