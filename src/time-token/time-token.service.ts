import { Injectable } from '@nestjs/common';
import {MintTimeTokenRequest} from "./model/request/mint-time-token.request";

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


    async list(dto: { wallet: string }) {
        const { wallet } = dto;
        // TODO: 查询数据库或链上 NFT 列表
        return [{ tokenId: 1, wallet, hours: 1, skill: 'Golang', status: 'available' }];
    }
}
