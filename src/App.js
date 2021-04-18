

import chainData from './data/data'
import { Nav } from './components/Nav'
import { Table } from './components/Table'
import { TableRow } from './components/TableRow'
import { Panel } from './components/Panel'
import { BalanceFlow } from './components/BalanceFlow'

function App() {
  // console.log('%O', chainData)
  const projects = Object.keys(chainData)
    .filter(proj => proj !== 'ethereum')
    .sort((a, b) => chainData[b].tvl - chainData[a].tvl)
  const ethUsdPrice = chainData.ethereum.usd
  return (
    <div className="App">
      <Nav ethUsdPrice={ethUsdPrice}/>
      <Panel><BalanceFlow projects={projects} data={chainData} /></Panel>
      <Table>
        {projects.map(proj => <TableRow key={proj} ethUsdPrice={ethUsdPrice} name={proj} data={chainData} />)}
      </Table>
    </div>
  );
}

export default App;
