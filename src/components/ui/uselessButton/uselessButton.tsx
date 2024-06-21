"use client"
import { FC } from 'react';
import "./uselessButton.css";
import * as React from "react"
interface UselessButtonProps {
  onClick: () => void;
}

const UselessButton: FC<UselessButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn button">
      Change Fact
    </button>
  );
};

export default UselessButton;