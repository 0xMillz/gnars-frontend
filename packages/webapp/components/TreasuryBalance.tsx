import { Box, Spinner } from "@chakra-ui/react"
import { nFormatter } from "utils"
import { TREASURY_ADDRESS } from "utils/contracts"
import { useBalance } from "wagmi"

export const TreasuryBalance = () => {
  const { data: balanceData } = useBalance({
    address: TREASURY_ADDRESS,
  })

  if (!balanceData) {
    return <Spinner />
  }

  return (
    <Box whiteSpace={"nowrap"}>
      Ξ {nFormatter(Number(balanceData?.formatted), 3)}
    </Box>
  )
}
