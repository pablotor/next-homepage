export interface Tech {
  id: string;
  src: string;
  style?: string;
}

export interface PortfolioItem {
  id: string;
  type: string;
  codeAvailable: boolean;
  deployed: boolean;
  techs: Tech[];
}
