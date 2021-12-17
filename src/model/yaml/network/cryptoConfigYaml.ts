import BdkYaml from '../bdkYaml'

interface PeerOrg {
  Name: string
  Domain: string
  EnableNodeOUs: boolean
  Template: {
    Count: number
    SANS?: string[]
  }
  Users: {
    Count: number
  }
}

interface OrdererOrg {
  Name: string
  Domain: string
  EnableNodeOUs: boolean
  Specs: {
    Hostname: string
    SANS?: string[]
  }[]
}

interface CryptoConfigYamlInterface {
  PeerOrgs?: PeerOrg[]
  OrdererOrgs?: OrdererOrg[]
}

class CryptoConfigYaml extends BdkYaml<CryptoConfigYamlInterface> {
  public addPeerOrg (peerOrg: PeerOrg): void  {
    if (!this.value.PeerOrgs) {
      this.value.PeerOrgs = []
    }
    this.value.PeerOrgs.push(peerOrg)
  }

  public addOrdererOrg (ordererOrg: OrdererOrg): void  {
    if (!this.value.OrdererOrgs) {
      this.value.OrdererOrgs = []
    }
    this.value.OrdererOrgs.push(ordererOrg)
  }

  public setPeerOrgs (peerOrgs: PeerOrg[]): void  {
    this.value.PeerOrgs = peerOrgs
  }

  public setOrdererOrgs (ordererOrgs: OrdererOrg[]): void  {
    this.value.OrdererOrgs = ordererOrgs
  }
}

export default CryptoConfigYaml
