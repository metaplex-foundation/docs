import React from "react";
import { calculate } from "@metaplex/arweave-cost";
import { useState } from "react";

function ArweaveCostEstimator() {
  const [cost, setCost] = useState(0);

  const handleChange = async (e) => {
    const val = e.target.value;
    const kb = parseInt(val);
    if (!kb) return;

    const bytes = kb * 1024;
    const result = await calculate([bytes]);
    console.log(result);

    const sol =
      Math.round((result.solana + Number.EPSILON) * 100000000) / 100000000;
    setCost(sol);
  };

  return (
    <form
      style={{ border: "1px solid #444", padding: "8px", borderRadius: "8px" }}
      action="#"
    >
      <div style={{ padding: "10px" }}>
        <div>
          <label for="fileSize">
            Total storage size of asset and metadata.json (in kilobytes):
          </label>
          <input
            id="fileSize"
            autoComplete="off"
            type="number"
            onChange={handleChange}
          />
        </div>
        <div>
          <span style={{ display: "inline-block" }}>
            Estimated Arweave storage cost:
          </span>
          <span>{cost}</span>&nbsp;SOL
        </div>
        <p style={{ color: "#888", fontSize: "0.8em", margin: "10px 0 0" }}>
          <em>
            Fees are dynamic. Pricing is determined by the Arweave network
          </em>
        </p>
      </div>
    </form>
  );
}

export default ArweaveCostEstimator;
