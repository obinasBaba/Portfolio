import React from "react";
import styled from "styled-components";
import { TextField as MuiTextField, Typography } from "@material-ui/core";
import { spacing } from "../../../styles/mixins";

const TextField = styled(MuiTextField)`
  position: relative;
  //border: thin solid ;
  & .MuiFormLabel-root.Mui-focused {
    color: #eec5b9;
  }

  & .MuiInput-input {
    border-bottom: 2px solid #e2ac9e;
    color: #eec5b9;

    &:focus {
      border-bottom: 3px solid #02021e;
    }
  }

  & .MuiInput-underline:after,
  .MuiInput-underline:before {
    border-bottom: 3px solid #02021e;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease-in-out;
    z-index: 100;
  }

  & .MuiInput-underline:after {
    transition-delay: 0.17s;
  }

  .MuiInput-underline:before {
    border-bottom: 3px solid #fc5031;

    transition: transform 0.4s ease-in;
  }

  &:hover,
  &:focus {
    color: #e7a28f !important;

    .MuiInput-underline:after {
      transform: scaleX(1);
    }

    .MuiInput-underline:before {
      transform: scaleX(1);
      border-bottom-color: #fc5031;
    }

    .MuiInput-input {
      //border-bottom: 2px solid #02021e;
    }
  }

  &:hover fieldset {
    border-color: rgba(241, 215, 206, 0.68);
  }

  .MuiInputBase-multiline {
    padding: 0;
  }
`;

const TextFieldContainer = styled.div`
  position: relative;
  ${spacing("ph", 1)};

  svg {
    //fill: inherit;
  }

  &:hover {
    #Contact-open {
      fill: #e7a28f !important;
    }
  }

  .svg-cont {
    width: 10px;
    height: 10px;
    position: absolute;
    right: 0;
    top: 10px;
  }
`;

const TextFiled = ({ label, rows, multiline }) => {
  return (
    <TextFieldContainer>
      <div className="svg-cont">
        <svg
          width="11px"
          height="10px"
          viewBox="0 0 11 10"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Contact-open"
              transform="translate(-325.000000, -1119.000000)"
              fill="#878282"
            >
              <polygon
                id="*-copy"
                points="330.482428 1124.6229 328.444089 1129 326.265176 1127.51852 329.990415 1124.2862 325 1123.74747 325.808307 1121.32323 330.166134 1123.7138 329.146965 1119 331.817891 1119 330.798722 1123.7138 335.15655 1121.32323 336 1123.74747 330.974441 1124.2862 334.699681 1127.51852 332.555911 1129"
              />
            </g>
          </g>
        </svg>
      </div>

      <TextField fullWidth multiline={multiline} rows={rows} label={label} />
    </TextFieldContainer>
  );
};

export default TextFiled;
