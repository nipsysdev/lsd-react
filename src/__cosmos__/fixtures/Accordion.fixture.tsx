import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CodeExample } from '../code-example';

export default function AccordionFixture() {
  return (
    <div className="lsd:p-8 lsd:w-full">
      <h2 className="lsd:text-2xl lsd:font-bold lsd:mb-6">
        Accordion Component
      </h2>

      <div className="lsd:max-w-md lsd:space-y-4">
        <h3 className="lsd:text-lg lsd:font-semibold lsd:mb-2">
          Ethereum Basics
        </h3>
        <CodeExample
          title="Single Collapsible Accordion"
          code={`<Accordion type="single" collapsible className="lsd:w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What is Ethereum?</AccordionTrigger>
    <AccordionContent>
      Ethereum is a decentralized, open-source blockchain with smart
      contract functionality. It is the second-largest cryptocurrency by
      market capitalization, after Bitcoin. Ethereum enables developers
      to build and deploy decentralized applications (dApps) and create
      new cryptocurrencies.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What are Smart Contracts?</AccordionTrigger>
    <AccordionContent>
      Smart contracts are self-executing contracts with the terms of the
      agreement directly written into code. They run on the Ethereum
      Virtual Machine (EVM) and automatically execute when predetermined
      conditions are met, without intermediaries.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>What is Ether (ETH)?</AccordionTrigger>
    <AccordionContent>
      Ether (ETH) is the native cryptocurrency of the Ethereum platform.
      It is used to pay for transaction fees and computational services
      on the Ethereum network. ETH can also be traded as a digital
      currency on various exchanges.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="lsd:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Ethereum?</AccordionTrigger>
              <AccordionContent>
                Ethereum is a decentralized, open-source blockchain with smart
                contract functionality. It is the second-largest cryptocurrency
                by market capitalization, after Bitcoin. Ethereum enables
                developers to build and deploy decentralized applications
                (dApps) and create new cryptocurrencies.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What are Smart Contracts?</AccordionTrigger>
              <AccordionContent>
                Smart contracts are self-executing contracts with the terms of
                the agreement directly written into code. They run on the
                Ethereum Virtual Machine (EVM) and automatically execute when
                predetermined conditions are met, without intermediaries.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What is Ether (ETH)?</AccordionTrigger>
              <AccordionContent>
                Ether (ETH) is the native cryptocurrency of the Ethereum
                platform. It is used to pay for transaction fees and
                computational services on the Ethereum network. ETH can also be
                traded as a digital currency on various exchanges.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodeExample>
      </div>

      <div className="lsd:max-w-md lsd:mt-8 lsd:space-y-4">
        <h3 className="lsd:text-lg lsd:font-semibold lsd:mb-2">
          Ethereum Technology
        </h3>
        <CodeExample
          title="Multiple Open Accordion"
          code={`<Accordion type="multiple" className="lsd:w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>
      What is the Ethereum Virtual Machine (EVM)?
    </AccordionTrigger>
    <AccordionContent>
      The EVM is a runtime environment for smart contracts in Ethereum.
      It is a Turing-complete virtual machine that allows anyone to
      execute arbitrary EVM bytecode. Every Ethereum node runs on the
      EVM to maintain consensus across the blockchain.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What is Ethereum 2.0?</AccordionTrigger>
    <AccordionContent>
      Ethereum 2.0 is an upgrade to the Ethereum network that improves
      its scalability, security, and sustainability. The key change is
      the transition from Proof of Work (PoW) to Proof of Stake (PoS)
      consensus mechanism, which significantly reduces energy
      consumption.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3">
    <AccordionTrigger>What are Layer 2 Solutions?</AccordionTrigger>
    <AccordionContent>
      Layer 2 solutions are scaling solutions built on top of the
      Ethereum mainnet (Layer 1) to increase transaction throughput and
      reduce fees. Examples include Optimistic Rollups, zk-Rollups, and
      side chains, which process transactions off-chain and then settle
      them on the main Ethereum blockchain.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="multiple" className="lsd:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is the Ethereum Virtual Machine (EVM)?
              </AccordionTrigger>
              <AccordionContent>
                The EVM is a runtime environment for smart contracts in
                Ethereum. It is a Turing-complete virtual machine that allows
                anyone to execute arbitrary EVM bytecode. Every Ethereum node
                runs on the EVM to maintain consensus across the blockchain.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is Ethereum 2.0?</AccordionTrigger>
              <AccordionContent>
                Ethereum 2.0 is an upgrade to the Ethereum network that improves
                its scalability, security, and sustainability. The key change is
                the transition from Proof of Work (PoW) to Proof of Stake (PoS)
                consensus mechanism, which significantly reduces energy
                consumption.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are Layer 2 Solutions?</AccordionTrigger>
              <AccordionContent>
                Layer 2 solutions are scaling solutions built on top of the
                Ethereum mainnet (Layer 1) to increase transaction throughput
                and reduce fees. Examples include Optimistic Rollups,
                zk-Rollups, and side chains, which process transactions
                off-chain and then settle them on the main Ethereum blockchain.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodeExample>
      </div>

      <div className="lsd:max-w-md lsd:mt-8 lsd:space-y-4">
        <h3 className="lsd:text-lg lsd:font-semibold lsd:mb-2">
          Ethereum Ecosystem
        </h3>
        <CodeExample
          title="Accordion with Disabled Item"
          code={`<Accordion type="single" collapsible className="lsd:w-full">
  <AccordionItem value="item-1">
    <AccordionTrigger>What are dApps?</AccordionTrigger>
    <AccordionContent>
      Decentralized applications (dApps) are digital applications that
      run on a blockchain network, typically Ethereum. Unlike
      traditional applications, dApps are not controlled by a single
      entity and operate autonomously through smart contracts.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>What is DeFi?</AccordionTrigger>
    <AccordionContent>
      Decentralized Finance (DeFi) refers to financial applications
      built on blockchain technology that operate without traditional
      financial intermediaries. DeFi platforms on Ethereum offer
      services like lending, borrowing, trading, and earning interest
      through smart contracts.
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-3" disabled>
    <AccordionTrigger>What are NFTs?</AccordionTrigger>
    <AccordionContent>
      Non-Fungible Tokens (NFTs) are unique digital assets that
      represent ownership of specific items or content. Unlike
      cryptocurrencies, each NFT has distinct properties and cannot be
      exchanged on a one-to-one basis. They are commonly used for
      digital art, collectibles, and gaming assets.
    </AccordionContent>
  </AccordionItem>
</Accordion>`}
        >
          <Accordion type="single" collapsible className="lsd:w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What are dApps?</AccordionTrigger>
              <AccordionContent>
                Decentralized applications (dApps) are digital applications that
                run on a blockchain network, typically Ethereum. Unlike
                traditional applications, dApps are not controlled by a single
                entity and operate autonomously through smart contracts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>What is DeFi?</AccordionTrigger>
              <AccordionContent>
                Decentralized Finance (DeFi) refers to financial applications
                built on blockchain technology that operate without traditional
                financial intermediaries. DeFi platforms on Ethereum offer
                services like lending, borrowing, trading, and earning interest
                through smart contracts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" disabled>
              <AccordionTrigger>What are NFTs?</AccordionTrigger>
              <AccordionContent>
                Non-Fungible Tokens (NFTs) are unique digital assets that
                represent ownership of specific items or content. Unlike
                cryptocurrencies, each NFT has distinct properties and cannot be
                exchanged on a one-to-one basis. They are commonly used for
                digital art, collectibles, and gaming assets.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CodeExample>
      </div>
    </div>
  );
}
