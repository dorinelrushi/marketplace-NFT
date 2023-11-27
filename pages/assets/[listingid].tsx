
import { useContract, useListing,useDirectListings } from "@thirdweb-dev/react"; // Assuming @thirdweb-dev/react provides NFTData type
import { useRouter } from "next/router";

interface NFTProps {
  // Define any props if needed
}

const NFT: React.FC<NFTProps> = () => {


  const { contract } = useContract(
    "0xF94710B5b7D2c98C67Eb2883B0A625d9143AfAE5",
    "marketplace-v3"
  );

  const {
    data: directListings,
    isLoading,
    error,
  } = useDirectListings(contract, { start: 0, count: 100 });

  if (isLoading || !directListings) {
    return (
      <div>
        Loading ...
      </div>
    );
  }

  return (
    <div key={directListings.id}>{directListings.asset.name}</div>
  );
}

export default NFT;
