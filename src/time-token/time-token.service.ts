import { Injectable } from '@nestjs/common';
import {MintTimeTokenRequest} from "./model/request/mint-time-token.request";
import {ListTimeTokenRequest} from "./model/request/list-time-token.request";

@Injectable()
export class TimeTokenService {
    async mint(request: MintTimeTokenRequest): Promise<any> {
        // TODO: 调用链端合约 Mint NFT
        const { walletAddress, hours, skill } = request;
        void walletAddress;
        void hours;
        void skill;
        return { txHash: '0x123', tokenId: 1 };
    }


    async list(request: ListTimeTokenRequest): Promise<any> {
        const { wallet } = request;
        void wallet;
        const tokens: any[] = [{ tokenId: 1, hours: 1, skill: 'Golang', status: 'available' }];
        return tokens;
    }
}
