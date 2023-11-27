import {
  ConnectWallet,
  useDirectListings,
  useContract,
} from "@thirdweb-dev/react";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  const { contract } = useContract(
    "0xF94710B5b7D2c98C67Eb2883B0A625d9143AfAE5",
    "marketplace-v3"
  );
  const {
    data: directListings,
    isLoading,
    error,
  } = useDirectListings(contract, { start: 0, count: 100 });




  return (
    <main >
      <h1 >
        Welcome to{" "}
        <span>
          <Link
            href="https://thirdweb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            thirdweb.
          </Link>
        </span>
      </h1>
      <ConnectWallet />

      {isLoading && <div>Loading...</div>}
  <div className="nftGrid">

      {!isLoading &&
        directListings &&
        directListings.map((nft) => <div className="nftDrop" key={nft.id}>
          <a href={`/assets/${nft.id}`}>
            <img src={nft.asset.image}  width={280}  height={280} className="images"/>

          <p>#{nft.asset.name}</p>
           <p> Price {nft.currencyValuePerToken.displayValue} Matic</p>

          </a>

        </div>
      )}
</div>
    </main>
  );
};

export default Home;