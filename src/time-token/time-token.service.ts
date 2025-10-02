import { Injectable } from '@nestjs/common';

@Injectable()
export class TimeTokenService {
    async mint(dto: { walletAddress: string; hours: number; skill: string }) {
        // TODO: 调用链端合约 Mint NFT
        return { txHash: '0x123', tokenId: 1 };
    }

    async list(wallet: string) {
        // TODO: 查询数据库或链上 NFT 列表
        return [{ tokenId: 1, hours: 1, skill: 'Golang', status: 'available' }];
    }
}
