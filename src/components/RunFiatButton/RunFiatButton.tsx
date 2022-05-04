import React from "react";
import { Button } from "../ButtonNew";
import { Text } from "../Text";
import { CreditCardOutlineIcon } from "../Svg";
import { RFBProps } from "./types";

const RunFiatButton: React.FC<RFBProps> = ({ runFiat, mini, ...props }) => {
  return (
    <Button
      {...props}
      sx={{
        width: (mini && "32px") || "max-content",
        height: (mini && "32px") || "44px",
        marginRight: "15px",
        background: (mini && "white3") || "yellow",
        border: "none",
        borderRadius: (mini && "50%") || "10px",
        fontSize: "16px",
        "&:hover": {
          background: mini && "white4",
          filter: (!mini && "brightness(115%)") || "unset",
        },
      }}
      onClick={runFiat}
    >
      {!mini && (
        <Text color="primaryBright" bold>
          ADD FUNDS
        </Text>
      )}
      <CreditCardOutlineIcon fill={(mini && "#4D4040") || "#FAFAFA"} marginLeft={(!mini && "5px") || "0px"} />
    </Button>
  );
};

export default RunFiatButton;