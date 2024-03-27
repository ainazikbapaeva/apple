import { Box, Typography } from "@mui/material";
import React from "react";

const Trade = () => {
  return (
    <Box className="container">
      <Box className="trade">
        <Typography>
          1. Trade-in values will vary based on the condition, year, and
          configuration of your eligible trade-in device. Not all devices are
          eligible for credit. You must be at least 18 years old <br /> to be
          eligible to trade in for credit or for an Apple Gift Card. Trade-in
          value may be applied toward qualifying new device purchase, or added
          to an Apple Gift Card. Actual value <br /> awarded is based on receipt
          of a qualifying device matching the description provided when estimate
          was made. Sales tax may be assessed on full value of a new device{" "}
          <br />
          purchase. In-store trade-in requires presentation of a valid photo ID
          (local law may require saving this information). Offer may not be
          available in all stores, and may vary between <br /> in-store and
          online trade-in. Some stores may have additional requirements. Apple
          or its trade-in partners reserve the right to refuse or limit quantity
          of any trade-in transaction <br /> for any reason. More details are
          available from Apple’s trade-in partner for trade-in and recycling of
          eligible devices. Restrictions and limitations may apply.
        </Typography>
        <Typography>
          Available in the U.S. on apple.com, in the Apple Store app, and at
          Apple Stores.
        </Typography>
        <Typography>A subscription is required for Apple TV+.</Typography>
        <Typography>
          To access and use all Apple Card features and products available only
          to Apple Card users, you must add Apple Card to Wallet on an iPhone or
          iPad that supports and has the <br /> latest version of iOS or iPadOS.
          Apple Card is subject to credit approval, available only for
          qualifying applicants in the United States, and issued by Goldman
          Sachs Bank USA, <br /> Salt Lake City Branch.
        </Typography>
        <Typography>
          If you reside in the U.S. territories, please call Goldman Sachs at
          877-255-5923 with questions about Apple Card.
        </Typography>
        <Typography>
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218.
        </Typography>
      </Box>
    </Box>
  );
};

export default Trade;
